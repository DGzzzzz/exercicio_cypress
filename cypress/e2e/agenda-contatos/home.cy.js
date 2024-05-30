/// <reference types="cypress" />

describe('Deve renderizar a pagina de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve renderizar a pagina com dois contatos', () => {
        cy.get('.sc-beqWaB.eQdhbg.contato').should('have.length', 2)
    })

    it('Deve incluir um novo contato', () => {
        cy.get('[type="text"]').type('Fulado de tal')
        cy.get('[type="email"]').type('email@email.com')
        cy.get('[type="tel"]').type('51 999999999')
        cy.get('.adicionar').click()
        
        cy.get('.sc-beqWaB.eQdhbg.contato').should('have.length', 3)
    })

    it('Deve editar um contato', () => {
        cy.get(':nth-child(4) > .sc-gueYoa > .delete').click()
        cy.get('[type="text"]').type('Douglas Winter')
        cy.get('[type="email"]').type('contato@email.com')
        cy.get('[type="tel"]').type('51 888888888')
        cy.get('.adicionar').click()

        cy.wait(3000)
        
        cy.get(':nth-child(4) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(1)').contains('Douglas Winter')
        cy.get(':nth-child(4) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(2)').contains('51 888888888')
        cy.get(':nth-child(4) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(3)').contains('contato@email.com')
    })

    it('Deve excluir um contato', () => {
        cy.get('.sc-beqWaB.eQdhbg.contato').should('have.length', 3)
        cy.get(':nth-child(4) > .sc-gueYoa > .delete').click()
        
        cy.get('.sc-beqWaB.eQdhbg.contato').should('have.length', 2)
    })
})