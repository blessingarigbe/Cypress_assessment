class Assertions {
    welcomeMessage(message){
        cy.get("h1").should('have.text', message)
    }
    notification(message){
        cy.get('div[role="status"]').should('have.text', message)
    }
}
export default Assertions