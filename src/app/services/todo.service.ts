import { Injectable } from '@angular/core';
import { Observable } from 'rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Todo } from '../models/Todo';

@Injectable({
	providedIn: 'root'
})

export class TodoService {
	tosURL:string = 'https://jsonplaceholder.typicode.com/tos';

	constructor(private http:HttpClient) { }
	
	getTos():Observable<Todo[]> {
		return this.http.get<Todo[]>(this.tosURL);
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
