<template>
  <section
    v-if="items.length > 0"
    class="flex flex-col items-center justify-center mt-7"
  >
  <todo-list-conatiner v-for="(todo, index) in items" :key="index">
    <div class="max-w-10/12 overflow-hidden whitespace-nowrap text-ellipsis">
      <h1 class="text-xl font-sans font-bold" :class="{'text-gray-700': !todo.complete, 'text-green-500 italic line-through':todo.complete}">{{ todo.title }}</h1>
      <p class="text-xs font-sans font-normal text-gray-400 italic">Updated at: {{ formatDate(todo.updatedAt) }}</p>
    </div>
    <div class="flex items-center gap-3">
      <button
        type="button"
        @click="updateStatus(todo.id, todo.complete)"
        class="transition-all duration-100 ease-linear hover:scale-90"
        :class="{
          'text-gray-700': !todo.complete,
          'text-green-500': todo.complete,
        }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-8 h-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
      <button
        type="button"
        @click="removeTodo(todo.id)"
        class="text-red-500 transition-all duration-100 ease-linear hover:scale-90"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-8 h-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </div>
  </todo-list-conatiner>
  </section>
</template>
<script setup>
import TodoListConatiner from "./TodoListConatiner.vue";
import DateFormatter from "../utils/DateFormatter";
defineProps({
    items: {
        type: Array,
        required: true,
    }
})
const emit = defineEmits(['update', 'remove'])
const { formatDate } = DateFormatter();
const updateStatus = (id, status) => {
    emit('update',id,status);
}
const removeTodo = (id) => {
    emit('remove', id);
}
</script>
