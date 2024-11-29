/// <reference types="Cypress" />

describe('SQL Server Connect', () => {
  it('Executando uma query', () => {
    let query_1 = 'select top(1) * from SUA_TABELA'
    
    cy.task('queryDB', query_1).should((results) => {
      expect(results.recordset).to.exist
      console.log(results.recordset[0])
    })
  })
})