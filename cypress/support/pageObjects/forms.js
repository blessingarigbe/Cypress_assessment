class Forms {
    email(emailAddress){
        return cy.get('input[name="email"]').type(emailAddress)
    }
    password(password){
        return cy.get('input[name="password"]').scrollIntoView().type(password, {force: true})
    }
    fullname(full_name){
        return cy.get('input[name="full_name"]').clear().type(full_name)
    }
    username(userName){
        return cy.get('input[name="username"]').clear().type(userName)
    }
    confirmPassword(confirmpassword){
        return cy.get('input[name="confirmPassword"]').type(confirmpassword)
    }
    phoneNumber(phoneNumber){
        return cy.get('input[name="phone_number"]').type(phoneNumber)
    }
    newPassword(newpassword){
        return cy.get('input[name="new_password"]').type(newpassword, {force: true})
    }
}
export default Forms