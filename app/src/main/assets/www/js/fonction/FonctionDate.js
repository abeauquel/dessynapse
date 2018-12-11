var formatDateDisplay = function (date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

var calculteDiffDate = function (date) {
    var oneDay = 24*60*60*1000;
    var today = new Date();
    var dateFormat = new Date(date);

    return Math.ceil(Math.abs((today.getTime() - dateFormat.getTime())/(oneDay)));
}