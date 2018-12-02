let listeChat=[];
let nombreMessage=0;

/***
 * Renvoie le chat avec tous les messages
 * @param requete
 * @param reponse
 * @returns {Promise<*|void>}
 */
exports.retournerChat = async function (requete, reponse) {
    try {
        console.log("retournerChat()");
        return reponse.status(200).send({ listeMessage : listeChat});
    } catch(error) {
        console.log(error);
        return reponse.status(400).send(error);
    }
}

/***
 * Insere un nouveau message dans le chat
 * @param requete
 * @param reponse
 * @returns {Promise<*|void>}
 */
exports.insererMessage = async function (requete, reponse) {

    try {
        console.log("insererMessage()");

        let message = requete.body.message;
        message.id= nombreMessage;
        nombreMessage+=1;
        if(message)
        listeChat.push(message);
        return reponse.status(200).send({ listeMessage : listeChat});
    } catch(error) {
        console.log(error);
        return reponse.status(400).send(error);
    }
}

/***
 * Reintialise le chat pour une nouvelle partie
 * @param requete
 * @param reponse
 * @returns {Promise<*|void>}
 */
exports.reintialiserChat = async function (requete, reponse) {

    try {
        listeChat=[];
        nombreMessage=0;
        console.log("reintialiserChat()");
        return reponse.status(200).send({ listeMessage : listeChat});
    } catch(error) {
        console.log(error);
        return reponse.status(400).send(error);
    }
}