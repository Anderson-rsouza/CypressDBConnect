// import da biblioteca mssql
const mssql = require('mssql')

// criação de um objeto com as informações da conexão que vamos fazer
const sqlConfig = {
  user: 'SEU_USUARIO',  
  password: 'SUA_SENHA',
  database: 'SEU_BANCO_',
  server: 'SEU_SERVIDOR',
  port: 1433,
  options: {
    trustServerCertificate: true
  }
}

// uma função  para realizar a conexão com o banco, que recebe por parâmetro a query a ser executada
async function execute(query) {
  // criação de um pool de conexão com as configurações do nosso banco
  let pool = new mssql.ConnectionPool(sqlConfig)

  try {
    // tentativa de conexão com o banco
    await pool.connect()

    // execução da query passada como parâmentro
    const result = await pool.request().query(query)
    // retorna os dados obtidos pela query
    return result
  } catch (error) {
    // print no console caso aconteça algum erro
    console.log(error)
  } finally {
    // sempre fecha a conexão após utilizá-la
    if (pool) {
      pool.close()
    }
  }
}

module.exports = { execute }


