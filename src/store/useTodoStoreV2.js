import axios from "axios";
import { defineStore } from "pinia";
import {v4 as uuid} from "uuid"

export const useTodoStoreV2 = defineStore("TodoV2", {
  state: () => ({
    todos: [],
    todoMessage: "",
    error: false,
    loading: false,
  }),
  actions: {
    async getAllTodos() {
      this.loading = true;
      await axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then((res) => {
          if (res.status === 200) {
            this.loading = false;
            this.todos = res.data.map((item) => ({
              id: item.id,
              title: item.title,
              complete: item.completed,
              createdAt: new Date(),
              updatedAt: new Date(),
            }));
          } else if (res.status === 404) {
            console.log("404 endpoint not found");
          } else {
            console.log("Something went wrong");
          }
        });

        
    },
   async add() {
    //   if (!this.todoMessage) return (this.error = true);
    //   const todoData = {
    //     id: uuid(),
    //     title: this.todoMessage,
    //     complete: false,
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   };
    //   this.todos.push(todoData);
    //   this.todoMessage = "";
    //   this.error = false;
    if(!this.todoMessage) return this.error = true;
    this.loading = true;
    const jsonData = {
        title: this.todoMessage,
        completed: false,
        userId: 1,
    };
    await axios.post('https://jsonplaceholder.typicode.com/todos',jsonData).then((res) => {
        if(res.status === 201){
            this.loading = false;
            const item = res.data;
            this.todos.push({
              id: uuid(),
              title: item.title,
              complete: item.completed,
              createdAt: new Date(),
              updatedAt: new Date(),
            });
            this.todoMessage = "";
        }
    })
    },
    update(id, status) {
      const index = this.todos.findIndex((item) => item.id === id);
      this.todos[index] = {
        ...this.todos[index],
        complete: status,
        updatedAt: new Date(),
      };
    },
    remove(id) {
      this.todos = this.todos.filter((item) => item.id !== id);
    },
  },
  getters: {
    getTodos: (state) => state.todos,
    hasError: (state) => state.error,
  },
});
