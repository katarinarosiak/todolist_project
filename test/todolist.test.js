const Todo = require('../lib/todo');
const TodoList = require('../lib/todolist');

describe('TodoList', () => {
  let todo1;
  let todo2;
  let todo3;
  let list;

  beforeEach(() => {
    todo1 = new Todo('Buy milk');
    todo2 = new Todo('Clean room');
    todo3 = new Todo('Go to the gym');

    list = new TodoList("Today's Todos");
    list.add(todo1);
    list.add(todo2);
    list.add(todo3);
  });

  test('todolist has a size of 3', () => {
    expect(list.size()).toBe(3);
  });

  test('the list as an array', () => {
    expect(list.toArray()).toEqual([todo1, todo2, todo3]);
  });

  test('first returns is a first el of the lest ', () => {
    expect(list.first()).toBe(todo1);
  });

  test('last element is equal to todo3'), () => {
    expect(list.last()).toBe(todo3);
  };

  test('shift to remove the first element and returns it'), () => {
    let todo = list.shift();

    expect(todo).toBe(todo1);
    expect(list.toArray()).toEqual([todo2, todo3]);
  };

  test('pop() removes the last element from the list and returns it', () => {
    let todo = list.pop();

    expect(todo).toBe(todo3);
    expect(list.toArray().toEqual([todo1, todo2]));
  });

  test('isDone() returns true if all of the items are done and false otherwise', () => {
    expect(list.isDone).toBe(false);

    list.markAllDone();
    expect(list.isDone).toBe(true);
  });

  test('TypeError occures when trying to add an item to the list that is not a todo object and add an item to the list otherwise', () => {
    expect(list.add('test')).toThrow(TypeError);
    expect(list.add(1)).toThrow(TypeError);
  })

  test("itemAt() returns an element from given index and raises an error if we don't give a proper index as argument", () => {
    expect(list.itemAt(0)).toBe(todo1);
    expect(() => list.itemAt()).toThrow(ReferenceError);
    expect(() => list.itemAt(-1)).toThrow(ReferenceError);
  });

  test('markDoneAt() raise an error if invalid index is passed as an argument and change the satus of an item on specified positon to done', () => {

    expect(() => list.markDoneAt(-1).toThrow(ReferenceError));
    expect(() => list.markDoneAt(7).toThrow(ReferenceError));
    list.markDone(0);
    expect(todo1.isDone()).toBe(true);
    expect(todo2.isDone()).toBe(false);
  });


  test('markUndoneAt() raise an error if invalid index is passed as an argument and change the satus of an item on specified positon to undone ', () => {

    expect(() => list.markDoneAt(-1).toThrow(ReferenceError));
    expect(() => list.markDoneAt(7).toThrow(ReferenceError));
    list.markDoneAt(0);
    list.markUndoneAt(0);
    list.markDoneAt(1)
    expect(todo1.isDone()).toBe(false);
    expect(todo1.isDone()).toBe(true);
  });

  test('markAllDone() change status of all the items on the list to done', () => {
    list.markAllDone();
    expect(todo1.isDone()).toBe(true);
    expect(todo2.isDone()).toBe(true);
    expect(todo3.isDone()).toBe(true);
    expect(list.isDone()).toBe(true);
  });

  test('removeAt raises an RefferenceError if the index is not valid and removes an item on the specified position and returns that item', () => {
    expect(() => list.markDoneAt(-1).toThrow(ReferenceError));
    expect(() => list.markDoneAt(7).toThrow(ReferenceError));

    let removedItem = list.removeAt(0);
    expect(removedItem).toBe(todo1);
    expect(list.toArray()).toBe([todo2, todo3]);
  });

  test('list.toString() log to console a string representation of the list ', () => {

    let string = `---- Today's Todos ----
   [] Buy milk
   [] Clean room
   [] Go to the gym`;

    expect(list.toString()).toBe(string);
  });

  test('toString is loging to console string represantataion of the list with X if one item is done ', () => {
    list.markDoneAt(0);

    let string = `---- Today's Todos ----
    [X] Buy milk
    [] Clean room
    [] Go to the gym`;

    expect(list.toString()).toBe(string);


  });

  test('toString is loging to console string represantataion of the list with X if all items are done ', () => {
    list.markAllDone();

    let string = `---- Today's Todos ----
    [X] Buy milk
    [X] Clean room
    [X] Go to the gym`;

    expect(list.toString()).toBe(string);
  });

  test('forEach is iterating through all elements of the array', () => {

    let allElements = [];
    list.toArray().forEach(el => allElements.push(el));
    expect(allElements).toEqual([todo1, todo2, todo3]);
  });

  test('filter iterate through all elements of teh array and returns a new object with all elements that the callback returns truthy value for', () => {


  });
});

