import bluebird from 'bluebird';
import mysql from 'mysql2/promise'


const config = {
  host: "154.16.116.12",
  user: "quimmedes",
  password: "anMG3355!!",
  database: "Chat",
  Promise: bluebird
};

async function query(result){

  const connection = await mysql.createConnection(config);
  const [rows, fields] = await connection.execute(result);
  connection.end();
  return rows;
  
  }
  

export  {query}