import { defineStore } from 'pinia'
import {v4 as uuid} from "uuid"
export const useTodoStore = defineStore('todo', {
    state: () => ({
        todos: [
            {
                "id": uuid(),
                "title": "Finish homework",
                "complete": false,
                "createdAt": new Date(),
                "updatedAt": new Date()
              },
              {
                "id": uuid(),
                "title": "Buy groceries",
                "complete": false,
                "createdAt": new Date(),
                "updatedAt": new Date()
              },
              {
                "id": uuid(),
                "title": "Go for a run",
                "complete": true,
                "createdAt": new Date(),
                "updatedAt": new Date()
              }
        ],
        todoMessage: '',
        error: false,
    }),
    actions:{
        add(){
            if(!this.todoMessage) return this.error = true;
            const todoData = {
                id: uuid(),
                title: this.todoMessage,
                complete: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            this.todos.push(todoData);
            this.todoMessage = '';
            this.error = false;
        },
        update(id, status){
          const index = this.todos.findIndex((item) => item.id === id);
          this.todos[index] = {...this.todos[index], complete: status, updatedAt: new Date()};
        },
        remove(id){
          this.todos = this.todos.filter((item) => item.id !== id);
        },
    },
    getters:{
        getTodos: (state) => state.todos,
        hasError: (state) => state.error,
    }
})