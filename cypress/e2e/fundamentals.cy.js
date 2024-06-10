describe('Fundamentals test', () => {
  it('Dropdown test', () => {
    // Visit the URL
    cy.visit('/fundamentals')

    // Assert that the text is not visible initially
    cy.contains(/Within your describe block, you will also have it blocks/i).should('not.be.visible')

    // Find the accordion item and click it
    cy.get('[data-test="accordian-item2"] div[role="button"]').click()

    // Wait for the content to become visible
    cy.contains(/Within your describe block, you will also have it blocks/i).should('be.visible')

    // Find the accordion item and click it
    cy.get('[data-test="accordian-item2"] div[role="button"]').click()

    cy.contains(/Within your describe block, you will also have it blocks/i).should('not.be.visible')

  })

  it.only('Form Test', () => {
    // Visit the forms page
    cy.visit('/forms')
  
    // Type the email into the input field and click the Subscribe button
    cy.get('input').type('shreypingle@gmail.com')
    cy.get('button').contains(/Subscribe/i).click()
    
    // Check for the success message
    cy.contains(/Successfully subbed: shreypingle@gmail.com/i).should('exist')
  
    // Wait for the success message to disappear
    cy.wait(3000)
    cy.contains(/Successfully subbed: shreypingle@gmail.com/i).should('not.exist')
  
    // Type an invalid email and click Subscribe
    cy.get('input').clear().type('shreypingle@gmail.org')
    cy.get('button').contains(/Subscribe/i).click()
  
    // Check for the invalid email message
    cy.contains(/Invalid email: shreypingle@gmail.org/i).should('exist')
  
    // Wait for the invalid email message to disappear
    cy.wait(2000)
    cy.contains(/Invalid email: shreypingle@gmail.org/i).should('not.exist')
  
    // Click Subscribe without entering an email
    cy.get('button').contains(/Subscribe/i).click()

  })
  
  
  

})


