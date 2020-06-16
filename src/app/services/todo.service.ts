import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Todo } from '../models/Todo';

const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json'
		})
}

@Injectable({
	providedIn: 'root'
})

export class TodoService {
	tosURL:string = 'https://jsonplaceholder.typicode.com/tos';
	tosLimit = '?_limit=5';

	constructor(private http:HttpClient) { }
	
	getTos():Observable<Todo[]> {
		return this.http.get<Todo[]>(`${this.tosURL}${this.tosLimit}`);
	}
	
	toggleCompleted(todo: Todo):Observable<any> {
		const url = `${this.tosURL}/${todo.id}`;
		return this.http.put(url, todo, httpOptions);
	}
}

/*
	return [
      {
        id: 1,
        title: 'Todo One',
        completed: false
      },
      {
        id: 2,
        title: 'Todo Two',
        completed: false
      },
      {
        id: 3,
        title: 'Todo Three',
        completed: false
      }
	] */
