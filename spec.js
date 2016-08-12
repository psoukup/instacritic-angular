//testing file

describe('Instacritic demo', function() {
  it('should have a title', function() {
    browser.get('http://localhost:3000/#/home');

    expect(browser.getTitle()).toEqual('InstaCritic')
  })

  it('print out nav li', function() {
    browser.get('http://localhost:3000/#/home');

    element.all(by.css('.items li')).each(function(element, index) {
      element.getText().then(function(text) {
        console.log(index, text)
      })
    })
  })
})
