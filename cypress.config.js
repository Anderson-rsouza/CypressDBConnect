const { defineConfig } = require("cypress");
const { execute } = require('./cypress/support/database/mssql')

module.exports = defineConfig({
  e2e: {  
    setupNodeEvents(on, config) {on('task', {
        // define uma task que irá executar nossas queries no banco configurado
        async queryDB(query) {
          // chama nossa função criada anteriormente e retorna seu resultado
          const result = await execute(query)
          return result
        }
      })
    }
  },
});
