/// <reference types="cypress" />

describe('Deve renderizar a pagina de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve renderizar a pagina com contatos', () => {
        cy.get('li').should('exist')
    })
})


describe('Deve mannipular os contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve incluir um novo contato', () => {
        cy.get('.contato').then((contatosIniciais) => {
            const numContatosIniciais = contatosIniciais.length;

        cy.get('[type="text"]').type('Fulano de tal')
        cy.get('[type="email"]').type('email@email.com')
        cy.get('[type="tel"]').type('51 999999999')
        cy.get('.adicionar').click()

        cy.get('.contato').should('have.length', numContatosIniciais + 1)
        })
    })

    it('Deve editar o ultimo contato salvo', () => {
        cy.get('.contato').then((contatosIniciais) => {
            const numContatosIniciais = contatosIniciais.length;

            cy.get('.edit').last().click()
            cy.get('[type="text"]').clear().type('Ciclano de tal')
        })    
    })

    it('Deve deletar o ultimo contato salvo', () => {
        cy.get('.contato').then((contatosIniciais) => {
            const numContatosIniciais = contatosIniciais.length;

            cy.get('.delete').last().click()

            cy.get('.contato').should('have.length', numContatosIniciais - 1)
        })
    })
})

