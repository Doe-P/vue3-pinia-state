<template>
 <div class="w-full min-h-screen bg-gray-100">
  <header class="text-center p-4">
    <h1 class="text-gray-800 font-sans text-2xl font-bold">What are you doing today?</h1>
  </header>
  <input-todo/>
  <todo-list-items :items="todoStore.getTodos" @update="handleUpdate" @remove="handleRemove"/>
 </div>
</template>
<script setup>
import { onMounted } from "vue";
import InputTodo from "./components/InputTodo.vue";
import TodoListItems from "./components/TodoListItems.vue";
import {useTodoStore} from "./store/useTodoStore"
import { useTodoStoreV2 } from "./store/useTodoStoreV2";
 //const todoStore = useTodoStore();
const todoStore = useTodoStoreV2();
const handleUpdate = (id, status) => {
  todoStore.update(id, !status);
}
const handleRemove = (id) => {
  todoStore.remove(id);
};
onMounted( async () => {
  await todoStore.getAllTodos();
})
</script>