// Install Jasmine-Reporters.
// npm install --save-dev jasmine-reporters@^2.0.0

'use strict';
var AngularHomePage = require('../TestFramework/Pages/angularHome.page.js');

describe('AngularJs Homepage Tests', function() {
  var angularHomePage;

  beforeEach(function() {
    angularHomePage = new AngularHomePage();
  });

  it('Should add a new to-do.', function() {
    angularHomePage.addToDo('New Page Object Pattern to-do.');
    expect(angularHomePage.todoList.count()).toEqual(3);
    expect(angularHomePage.todoItemAtIndex(2).getText()).toEqual('New Page Object Pattern to-do.');
  });

  it('Should mark a to-do as completed.', function() {
    angularHomePage.toggleToDo(1);
    expect(angularHomePage.isCompleted(1)).toBe(true);
    expect(angularHomePage.completedTodoList.count()).toEqual(2);
  });

  // it('should add a todo', function() {
    
  //   browser.get('https://angularjs.org');

  //   element(by.model('todoList.todoText')).sendKeys('write first protractor test');
  //   element(by.css('[value="add"]')).click();

  //   var todoList = element.all(by.repeater('todo in todoList.todos'));
  //   expect(todoList.count()).toEqual(3);
  //   expect(todoList.get(2).getText()).toEqual('write first protractor test');
    
  //   // You wrote your first test, cross it off the list
  //   todoList.get(2).element(by.css('input')).click();
  //   var completedAmount = element.all(by.css('.done-true'));
  //   expect(completedAmount.count()).toEqual(2);
  // });
});