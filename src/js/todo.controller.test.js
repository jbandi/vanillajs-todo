import 'babel-polyfill';
import $ from 'jquery';
import {registerButtonHandler, addToDo} from './todo.controller';
import {expect} from 'chai';
// import fs from 'fs';

describe('ToDo List', () => {
    beforeEach(() => {

        // Programmatically set up the (minimal) dom for test
        document.body.innerHTML = `
            <div class="row">
                <div class="col-xs-6">
                    <h2>Add a ToDo:</h2>
                    <input id="todo-text" type="text" />
                    <button id="add-button" >+</button>
                </div>
                <div class="col-xs-6">
                    <h2>Items:</h2>
                    <ul id="todo-list"> </ul>
                </div>

            </div>`;

        // Alternative: Set up the dom with an existing html template
        // const template = fs.readFileSync('./src/test-fixture/todo.controller.fixture.html', 'utf8');
        // const template = window.__html__['src/test-fixture/todo.controller.fixture.html']; // for Karma using the html2js preprocessor
        // document.body.innerHTML = template;


        registerButtonHandler();
    });

    it('extends the list when adding an item', () => {

        const input = $('#todo-text');
        input.val('First ToDo');

        addToDo();

        const todoListItems = $('#todo-list').children();

        // Using Jest matchers:
        // expect(todoListItems.length).toBe(1);
        // expect(todoListItems.first().text()).toBe('First ToDo');

        // Using mocha/chai
        expect(todoListItems.length).to.equal(1);
        expect(todoListItems.first().text()).to.equal('First ToDo');
    });

    it('renders done items', () => {

        const input = $('#todo-text');
        input.val('First ToDo');

        addToDo();

        const todoItem = $('#todo-list').children().first();
        todoItem.click();

        const todoListItems = $('#todo-list').children();
        const expectedDate = new Date().toISOString().slice(0, 10);


        // Using Jest matchers:
        // expect(todoListItems.length).toBe(1);
        // expect(todoListItems.first().find('.done-date').first().text()).toBe(expectedDate);

        // Using mocha/chai
        expect(todoListItems.length).to.equal(1);
        expect(todoListItems.first().find('.done-date').first().text()).to.equal(expectedDate);
    });
});
