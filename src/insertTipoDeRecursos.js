let sqlQUERY = require("./sqlQueryExec");
let funcao = require("./imprimirResults")
//adicionando tipo de recursos ao banco
let inserirTP = function select(objVazio, res){
    let obj = [[0]];
    let query = `INSERT INTO afinal.tipoderecursos (nome, idProfessor) VALUES ('${objVazio.nomeTipo}', (select idProfessor from afinal.professor where email = '${objVazio.emailProfessor}'));`;
    sqlQUERY(query,obj,funcao,res);
}
//criando modulo
module.exports = inserirTP;