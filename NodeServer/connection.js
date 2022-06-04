import bluebird from 'bluebird';
import mysql from 'mysql2/promise'


const config = {
  host: "localhost",
  user: "user",
  password: "password",
  database: "database",
  Promise: bluebird
};

async function query(result){

  const connection = await mysql.createConnection(config);
  const [rows, fields] = await connection.execute(result);
  connection.end();
  return rows;
  
  }
  

export  {query}