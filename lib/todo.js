class Todo {

  static DONE_MARKER = '[X]';
  static NOT_DONE_MARKER = '[ ]';

  constructor(title) {
    this.title = title;
    this.done = false;
  }

  toString() {
    let marker = this.isDone() ? ` ${Todo.DONE_MARKER}` : `${Todo.NOT_DONE_MARKER}`
    return `${marker} ${this.title}`;
  }

  markDone() {
    this.done = true;
  }

  markUndone() {
    this.done = false;
  }

  isDone() {
    return this.done;
  }

  getTitle() {
    return this.title;
  }
}

module.exports = Todo;