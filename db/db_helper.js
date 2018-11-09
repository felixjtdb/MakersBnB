function DB() {

}
DB.clearUserTable = function () {
  const { Pool, Client } = require('pg')
  const connectionString = 'postgresql://localhost:5432/makers_bnb_test'
  const client = new Client({
    connectionString: connectionString,
  })
  client.connect()
  client.query("TRUNCATE users CASCADE", (err, res) => {
    console.log(err);
    client.end()
  })
}

module.exports = DB
