describe('ExampleT', () => {
    beforeEach(() => {
        cy.visit('/examples')
    })

    it('Example Testing', () => {
        cy.get('[data-test="nav-cypress"]').click().url().should('eq', Cypress.config().baseUrl + '/')
        cy.get('[data-test="nav-overview"]').click().url().should('eq', Cypress.config().baseUrl + '/overview')
        cy.get('[data-test="nav-fundamentals"]').click().url().should('eq', Cypress.config().baseUrl + '/fundamentals')
        cy.get('[data-test="nav-forms"]').click()
        cy.url().should('eq', Cypress.config().baseUrl + '/forms')
        cy.get('[data-test="nav-examples"]').click().url().should('eq', Cypress.config().baseUrl + '/examples')
        cy.get('[data-test="nav-component"]').click().url().should('eq', Cypress.config().baseUrl + '/component')
        cy.get('[data-test="nav-best-practices"]').click().url().should('eq', Cypress.config().baseUrl + '/best-practices')
    })

    it('Intercept', () => {
        cy.intercept('POST', 'http://localhost:3000/examples', {
            fixture: 'example.json'
        })
        cy.get('[data-test="post"]').click()
    })

    it.only('Grudge Test', () => {
        cy.contains(/add some grudges/i)
        cy.get('[data-test="grudge-list"]').within(() => {
            cy.get('li').should('have.length', 0)
        })
        cy.get('[data-test="allclean"]').should('not.exist')
        cy.get('[data-test="grudge-input"]').within(() => {
            cy.get('input').type('Test Grudge')
        })
        cy.get('[data-test="addgrudge"]').click()

        cy.get('[data-test="grudge-list"]').within(() => {
            cy.get('li').should('have.length', 1)
        })
        cy.get('[data-test="grudge-input"]').within(() => {
            cy.get('input').type('Nigga')
        })
        cy.get('[data-test="addgrudge"]').click()
        cy.get('[data-test="grudge-list"]').within(() => {
            cy.get('li').should('have.length', 2)
            cy.get('li').its(1).should('contains.text','Nigga')
        })

        cy.get('[data-test="grudge-list"]').within(() => {
            cy.get('li').its(0).within(() => {
                cy.get('button').click()
            })
        })

        cy.get('[data-test="grudge-list"]').within(() => {
            cy.get('li').should('have.length', 1)
        })

        cy.get('[data-test="allclean"]').click()

        cy.get('[data-test="grudge-list"]').within(() => {
            cy.get('li').should('have.length', 0)
        })
     
    })




})
