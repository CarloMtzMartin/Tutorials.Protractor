'use strict';
var AngularHomePage = require('./angularHome.page.js');

describe('angularjs homepage todo list', function() {
  var page;

  beforeEach(function() {
    page = new AngularHomePage();
  });

  it('Should ...', function() {
    page.addToDo('New Page Object Pattern to-do.');

    expect(page.todoList.count()).toEqual(3);
    expect(page.todoItemAtIndex(2).getText()).toEqual('New Page Object Pattern to-do.');

    page.toggleToDo(2);
    expect(page.isCompleted(2)).toBe(true);
    expect(page.completedTodoList.count()).toEqual(2);
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