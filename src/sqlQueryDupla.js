const mysql = require('mysql');
let resul1;
let resul2;
let sqlQUERY = function execSQLQuery(sqlQry,sqlQry2,valor,funcao){
    const connection = mysql.createConnection({
        host     : 'localhost',
        port     : 3306,
        user     : 'root',
        database : 'afinal' 
    });
    connection.query(sqlQry,function(error, results1, fields){
        if(error) 
            console.log(error)
        else
            console.log(results1)
        console.log("INSERT")
        resul1 = results1;
    });
    connection.query(sqlQry2,function(error, results2, fields){
        if(error) 
            console.log(error)
        else
            console.log(results2)
        console.log("SELECT")
        resul2 = results2;
        connection.end();
        funcao(valor,resul2)
    });
}
module.exports = sqlQUERY;