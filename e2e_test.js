const LoginPage = require("./pages/LoginPage")

Feature('Zero Bank Application - E2E Test')

Before(({ I }) =>{
    console.log('Before HOOK')
    I.amOnPage('http://zero.webappsecurity.com/index.html')
})

After(({ I }) => {
    console.log('After Hook')
})

Scenario(' Login Test - Negative', ({ I, LoginPage }) =>{
    I.amOnPage('http://zero.webappsecurity.com/index.html')
    I.click('#signin_button')
    I.seeElement('#login_form')
    // I.fillField('#user_login', 'Invalid Username')
    // I.fillField('#user_password', 'Invalid Username')
    // I.click('.btn-primary')
    LoginPage.submitLogin('Invalid username', 'invalid password')
    LoginPage.assertLoginFormIsVisible()
    
    I.seeElement('.alert-error')
    I.see('Login and/or password are wrong.')
})