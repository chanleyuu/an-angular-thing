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

  ngOnInit(): void {
  	this.tos = this.todoService.getTos().subscribe(tos => { this.tos = tos;});
  }

}
