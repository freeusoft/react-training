describe('MovieDB E2E test suite', function() {
  it('Assert that <title> is correct', function() {
    cy.visit('http://localhost:8081')
    cy.title().should('include', 'MovieDB')
  })

  it('Assert that search placeholder is correct', function() {
    cy.visit('http://localhost:8081')
    cy.contains('DIRECTOR').click()
    cy.get('input').should('have.attr', 'placeholder', 'Quentin Tarantino')

    cy.contains('TITLE').click()
    cy.get('input').should('have.attr', 'placeholder', 'Stranger things')
  })

  it('Search results page check', function() {
    cy.visit('http://localhost:8081')
    cy.get('button').contains('SEARCH').click()
    cy.url().should('include', '/search')
    cy.get('.search-result-item-link').its('length').should('be.gt', 0)
  })

  it('Search results item click', function() {
    cy.visit('http://localhost:8081')
    cy.get('button').contains('SEARCH').click()
    cy.get('.search-result-item-link').first().click()
    cy.url().should('include', '/film/')
    cy.get('.film-info')
  })

})
