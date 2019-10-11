'use strict';

var AngularHomePage = function() {
    browser.get('https://angularjs.org');
}

AngularHomePage.prototype = Object.create({}, {
    titleText: { get: function() { return element(by.css('.hero > h2')); }},
    subtitleText: { get: function() { return element(by.css('.hero > h3')); }}, // NEW
    newToDoTextbox: { get: function() { return element(by.model('todoList.todoText')); }},
    addToDoButton: { get: function() { return element(by.css('[value="add"]')); }},
    deleteToDoButton: { get: function() { return element(by.css('[value="remove"]')); }}, // NEW
    todoList: { get: function() { return element.all(by.repeater('todo in todoList.todos')); }},
    completedTodoList: { get: function() { return element.all(by.css('.done-true')); }},
    todoItemAtIndex: { value: function(index) { return this.todoList.get(index); }},
    addToDo: { value: function(todo) {
        this.newToDoTextbox.sendKeys(todo);
        this.addToDoButton.click();
    }},
    toggleToDo: { value: function(index) { this.todoList.get(index).element(by.css('input')).click(); }},
    isCompleted: { value: function(index) { return this.todoList.get(index).element(by.model('todo.done')).isSelected(); }}
});

module.exports = AngularHomePage;