describe('Registeration & login', () => {
  
  it('passes', () => {
    
    // to create unique User/Pass each time 
    const timestamp = Date.now();
    const email = `${timestamp}one@one.com`
    const password = `${timestamp}Super@secret1`

    cy.visit('/auth/login')
    // click on register 
    cy.get("[href='/auth/register']").click(); 
    cy.url().should('include', "/auth/register");

    //First and last name 
    cy.get("#first_name").type("momo");
    cy.get("#last_name").type("toto");

    //date of birth, Street, Postal code & phone
    cy.get("#dob").type("1999-12-31");
    cy.get("#street").type("52th avenu Str");
    cy.get("#postal_code").type("345561");
    cy.get("#phone").type("01001001000");

    //Country selection & city & state  
    cy.get("#country").select('Egypt');
    cy.get("#city").type('Matroh');
    cy.get("#state").type('Matroh');

    //Email & Password
    cy.get("#email").type(email);
    cy.get("#password").type(password);
    
    //Confirm 
    cy.get("[type='submit']").click();
    
    
    //To Login Page 
    cy.url().should('include', "/auth/login");
    cy.get("#email").type(email);
    cy.get("#password").type(password);
    cy.get("[type='submit']").click();
    
    cy.pause();
    
  })
})
