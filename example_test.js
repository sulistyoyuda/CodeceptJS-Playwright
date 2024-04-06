Feature('My Test Suite');

Scenario('test something',  ({ I }) => {
    I.amOnPage('https://example.com/')
    I.see('Example')
    I.dontSee('Google')
    I.seeElement('h1')
    I.dontSeeElement('#idontexist')
});

Scenario('test something - second test',  ({ I }) => {
    I.amOnPage('https://example.com/')
    I.see('Example')
    I.dontSee('Google')
    I.seeElement('h1')
    I.dontSeeElement('#idontexist')
});

Scenario('test something - third test',  ({ I }) => {
    I.amOnPage('https://example.com/')
    I.see('Example')
    I.dontSee('Google')
    I.seeElement('h1')
    I.dontSeeElement('#idontexist')
});