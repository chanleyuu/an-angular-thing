import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-tos',
  templateUrl: './tos.component.html',
  styleUrls: ['./tos.component.css']
})
export class TosComponent implements OnInit {
  tos:Todo[];

  constructor(private todoService:TodoService) { }

  ngOnInit() {
  	this.todoService.getTos().subscribe(tos => {
  	this.tos = tos;
  	});
  }


  deleteTodo(todo:Todo) {
    this.tos = this.tos.filter(t => t.id !== todo.id);
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo:Todo) {
    this.todoService.addTodo(todo).subscribe(todo => {
      this.tos.push(todo);
    });
    console.log("yay");
  }
}
