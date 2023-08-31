<template>
   <section class="w-9/12 max-w-lg mx-auto flex items-center gap-3 mt-7 bg-white shadow p-5 rounded">
    <form @submit.prevent="todoStore.add" class="w-full">
      <input v-model="todoStore.todoMessage" type="text" placeholder="add a todo" class="w-full p-2 mr-2 font-sans text-gray-700 rounded-lg border focus:outline-none transition-all hover:border-blue-300 focus:border-blue-300 placeholder:text-sm" :class="{'border-gray-100': !todoStore.hasError, 'border-red-500':todoStore.hasError}">
      <button type="submit" class="p-2 text-right mt-4 text-white text-sm font-sans rounded-lg bg-blue-400 transition-all ease-in-out duration-150 hover:bg-blue-500">add new</button>
    </form>
   </section> 
</template>
<script setup>
import { useTodoStore } from "../store/useTodoStore";
import { useTodoStoreV2 } from "../store/useTodoStoreV2";
const todoStore = useTodoStoreV2();
</script>
