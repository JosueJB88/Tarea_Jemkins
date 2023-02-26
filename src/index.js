const { Client } = require('pg')

const connectionData = {
    user: 'USER',
    host: '127.0.0.1',
    database: 'USER',
    password: 'USER',
    port: 5432,
  }
  const client = new Client(connectionData)

  client.connect()
client.query('SELECT * FROM ESTUDIANTE')
    .then(response => {
        console.log(response.rows)
        client.end()
    })
    .catch(err => {
        client.end()
    })

    
    /*CREATE TABLE ESTUDIANTE(
	NOMBRE varchar(30),
  MATRICULA varchar(10)
	);
	
	INSERT INTO ESTUDIANTE (NOMBRE,MATRICULA) VALUES
	('JOSUE BRITO',1190334);
	
	SELECT * FROM ESTUDIANTE */