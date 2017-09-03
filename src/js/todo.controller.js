export function registerButtonHandler(){
    const addBtn = document.getElementById('add-button');
    addBtn.addEventListener('click', addToDo);
}

export function addToDo() { // note: this function is imported directly in tests
    'use strict';
    const input = document.getElementById('todo-text');

    if (input.value.length > 0) {
        const node = document.createElement('li');
        const textnode = document.createTextNode(input.value);
        node.appendChild(textnode);
        document.getElementById('todo-list').appendChild(node);
        input.value = '';

        // ******
        // Implementation of 'done'
        // ******
        // node.addEventListener('click', setDone);
    }
}

// ******
// Implementation of 'done'
// ******
// const done = new Map();
// export function setDone(index) {
//     const doneDate = new Date(getCurrentDate() + ' 00:00:00Z');
//     done.set(index, doneDate);

//     const span1 = document.createElement('span');
//     span1.appendChild(document.createTextNode(this.textContent));
//     span1.className = 'done';


//     const span2 = document.createElement('span');
//     span2.appendChild(document.createTextNode(formatDate(doneDate)));
//     span2.className = 'done-date';

//     this.innerHTML = '';
//     this.appendChild(span1);
//     this.appendChild(span2);
// }

// export function isDone(index) {
//     return done.get(index);
// }

// function getCurrentDate() {
//     return formatDate(new Date());
// }

// function formatDate(date){
//     return date.toISOString().slice(0, 10);
// }
