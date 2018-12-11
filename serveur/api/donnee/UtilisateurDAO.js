var baseDeDonnees = require('./BaseDeDonnees').getInstance();

export const NOM_TABLE = "utilisateur";
export const NOM_CHAMP_PSEUDO = "pseudo";
export const NOM_CHAMP_MOT_DE_PASSE = "mot_de_passe";
export const NOM_CHAMP_MAIL = "mail";
export const NOM_CHAMP_TELEPHONE = "telephone";
export const NOM_CHAMP_COULEUR = "couleur";
export const NOM_CHAMP_NB_VICTOIRE = "nb_victoire";
export const NOM_CHAMP_DATE_NAISSANCE = "date_naissance";

exports.seConnecter = async function (pseudo, mot_de_passe) {
    const SELECT_UTILISATEUR = 'select * FROM '+NOM_TABLE+ ' WHERE '+NOM_CHAMP_PSEUDO+'= $1 AND '+NOM_CHAMP_MOT_DE_PASSE + '=$2';
    return baseDeDonnees.query(SELECT_UTILISATEUR, [pseudo, mot_de_passe]);
};

exports.insererUtilisateur = async function (pseudo, mot_de_passe, mail, telephone, couleur, nbVictoire, dateNaissance) {
    const INSERT_HUNIDITE = 'insert into '+NOM_TABLE+ '('+NOM_CHAMP_PSEUDO+', '+NOM_CHAMP_MOT_DE_PASSE+', '+NOM_CHAMP_MAIL+', '+NOM_CHAMP_TELEPHONE+', '+NOM_CHAMP_COULEUR+', '+ NOM_CHAMP_NB_VICTOIRE+', '+NOM_CHAMP_DATE_NAISSANCE+') values($1, $2, $3, $4, $5, $6, $7);';
    console.log(INSERT_HUNIDITE);
    return baseDeDonnees.query(INSERT_HUNIDITE, [pseudo, mot_de_passe, mail, telephone, couleur, nbVictoire, dateNaissance]);
};

exports.meilleurUtilisateurs = async function () {
    const SELECT_UTILISATEURS = 'select * from '+NOM_TABLE+ ' order by '+NOM_CHAMP_NB_VICTOIRE + ' desc';
    return baseDeDonnees.query(SELECT_UTILISATEURS, []);
};

exports.incrementerVictoire = async function (pseudoJoueur) {
    const SQL = 'UPDATE '+NOM_TABLE+ ' SET '+NOM_CHAMP_NB_VICTOIRE+'=' +
        NOM_CHAMP_NB_VICTOIRE+'+1' +
        ' WHERE '+NOM_CHAMP_PSEUDO+'=$1';
    return baseDeDonnees.query(SQL, [pseudoJoueur]);
}

exports.modifierCouleur = async function (pseudo, couleur) {
    const UPDATE_COULEUR = "update "+NOM_TABLE+" SET "+NOM_CHAMP_COULEUR+ " =$1 where "+NOM_CHAMP_PSEUDO+"=$2";
    console.log(UPDATE_COULEUR);
    return baseDeDonnees.query(UPDATE_COULEUR, [couleur, pseudo ]);
};