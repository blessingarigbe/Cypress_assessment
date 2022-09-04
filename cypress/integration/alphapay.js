// <reference types= 'cypress' />

import Chance from 'Chance';
import Buttons from "../support/pageObjects/buttons";
import Forms from "../support/pageObjects/forms";
import Assertions from "../support/pageObjects/assertions";

const click = new Buttons();
const fill = new Forms()
const assert = new Assertions()
const chance = new Chance();
const testData = require('../fixtures/testData.json')
const fullName = chance.name();
const userName = chance.first();
const newFullName = chance.name();
const newUserName = chance.first();
const phoneNumber = '0801111'+chance.integer({min: 1111 , max: 9999})
const email  = userName+'@yopmail.com'
beforeEach(()=>{
    cy.viewport('macbook-15')
    cy.clearLocalStorage()
    cy.clearCookies()
})
describe('Alpha pay test suite', ()=>{
    it('Sign Up', function () {
        cy.visit(Cypress.env('url'))
        click.signUp()
        fill.fullname(fullName)
        fill.username(userName)
        fill.phoneNumber(phoneNumber)
        fill.email(email)
        fill.password(testData.password)
        fill.confirmPassword(testData.password)
        click.button('Create Account')
        assert.notification('Welcome to your dashboard')
        
        cy.logout()
    });
    it('Sign In', function () {
        // click.button('LOG IN')
        fill.email(email)
        fill.password(testData.password)
        click.button('Sign In')
       
    });
    it('Update Profile', function () {
        click.profile()
        fill.fullname(newFullName)
        fill.username(newUserName)
        click.button('Update Details')
        assert.notification('Update Successful')
    });
    it('Change Password', function () {
        click.profileOption('Security')
        fill.password(testData.password)
        fill.newPassword(testData.newPassword)
        click.button('Change Password')
        assert.notification('Password updated successfully')
    });
    it('Log Out', function () {
        cy.logout()
    });
    it('Login with new password', function () {
        fill.email(email)
        fill.password(testData.newPassword)
        click.button('Sign In')
        
    });
})