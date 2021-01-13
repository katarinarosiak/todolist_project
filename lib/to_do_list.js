const Todo = require('./todo.js');

class ToDoList {
  constructor(title) {
    this.title = title;
    this.toDos = [];
  }
  add(item) {
    if (item instanceof Todo) {
      this.toDos.push(item);
    } else {
      throw new TypeError("can only add Todo objects");
    }
  }
  size() {
    return this.toDos.length;
  }

  first() {
    return this.toDos[0];
  }

  last() {
    return this.toDos[this.toDos.length - 1]
  }

  itemAt(place) {
    this._validateIndex(place);
    return this.toDos[place];
  }

  markDoneAt(position) {
    this._validateIndex(position);
    this.toDos[position].markDone();
  }

  markUndoneAt(position) {
    this._validateIndex(position);
    this.toDos[position].markUndone();
  }

  _validateIndex(index) {
    if (!(index in this.toDos)) {
      throw new ReferenceError(`invalid index: ${index}`);
    }
  }

  shift() {
    this.toDos.shift();
  }
  pop() {
    this.toDos.pop();
  }

  removeAt(index) {
    this._validateIndex(index);
    return this.toDos.splice(index, 1);
  }

  toString() {
    let title = `---- ${this.title} ----`;
    let list = this.toDos.map(todo => todo.toString()).join("\n");
    return `${title}\n${list}`;
  }

  forEach(callback) {
    this.toDos.forEach(callback);
  }


  filter(callback) {
    let newList = new ToDoList(this.title);
    this.forEach(todo => {
      if (callback(todo)) {
        newList.add(todo);
      }
    });

    return newList;
  }

  findByTitle(title) {
    return this.filter(todo => todo.getTitle() === title).first();
  }

  allDone() {
    return this.filter(todo => todo.isDone());
  }

  allNotDone() {
    return this.filter(todo => !todo.isDone());
  }

  isDone() {
    return this.todos.every(todo => todo.isDone());
  }

  markDone(title) {
    let todo = this.findByTitle(title);
    if (todo !== undefined) {
      todo.markDone();
    }
  }


  markAllDone() {
    this.toDos.forEach(item => item.markDone());
  }

  markAllUndone() {
    this.toDos.forEach(item => item.markUndone());
  }

  toArray() {
    return this.toDos.slice();
  }
}


let list = new ToDoList("Today's Todos");


let todo1 = new Todo("Buy milk");
let todo2 = new Todo("Clean room");
let todo3 = new Todo("Go to the gym");
let todo4 = new Todo("Go shopping");
let todo5 = new Todo("Feed the cats");
let todo6 = new Todo("Study for Launch School");
let todo7 = new Todo("Go to the gym");


list.add(todo1);
list.add(todo2);
list.add(todo3);
list.add(todo4);
list.add(todo5);
list.add(todo6);
list.add(todo7);


module.export = ToDoList;