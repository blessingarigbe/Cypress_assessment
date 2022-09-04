class Buttons {
    button(btn){
        return cy.get('button').contains(btn).click({force: true})
    }
    profile(){
        return cy.get('img[alt="profile_image"]').click()
    }
    profileOption(option){
        return cy.get('a').contains(option).click({force: true})
    }
    signUp(){
        return cy.get('a[href="/auth/signup"]').contains('Sign Up').click()
    }
}
export default Buttons