import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  title:string;

  constructor() { }

  ngOnInit() {
    idnum: number = 6;
  }

  onSubmit() {
    idnum++;
    const todo = {
      id: idnum,
      title: this.title,
      completed: false
    }

    this.addTodo.emit(todo);
  }

}
