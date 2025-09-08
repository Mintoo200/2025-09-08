describe('Homepage', () => {
    it('affiche un titre', () => {
        cy.visit('https://beta.gouv.fr/')

        cy.findByRole('heading', { level: 1 })
            .should('be.visible')
            .should('have.text', 'Construisons ensemble les services publics numériques de demain')
    })
    it('lance une recherche', () => {
        cy.visit('https://beta.gouv.fr/')

        cy.findByRole('searchbox', { name: 'Recherche' })
            .type('foo')
        cy.findByRole('button', { name: 'Rechercher' })
            .click()

        cy.findByRole('heading', { level: 1 })
            .should('have.text', 'Résultats')
        cy.findByText('Aucun résultat pour « foo »')
            .should('be.visible')
    })
})
