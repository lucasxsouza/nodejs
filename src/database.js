const mysql = require('mysql2/promise');
let db = null;
async function connect()
{
    db = await mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '0000',
        database : 'iotcows'
      });
      console.log('Conectou no banco de dados');
};
const query = async function(text)
{
  var [rows] = await db.execute(text);
  return rows;
}
module.exports = {connect,query};