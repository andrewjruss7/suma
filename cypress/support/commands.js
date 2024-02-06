const mysql = require("mysql2");

Cypress.Commands.add("executeMySqlQuery", (query) => {
  const connection = mysql.createConnection({
    host: "44.228.207.4",
    user: "andrewtest",
    password: "andrew12345",
    database: "suma",
  });

  return new Cypress.Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }

      connection.end();
    });
  });
});
