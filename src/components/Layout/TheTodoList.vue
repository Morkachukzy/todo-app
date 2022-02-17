<template>
  <div class="todo-list">
    <ul>
      <li
        v-for="(todo, index) in todos"
        :key="JSON.stringify(todo)"
        :data-index="index"
        @mouseover.stop="setHoveredTodo(index)"
        @mouseleave.stop="unsetSetHovered"
      >
        <div class="checkbox">
          <base-check-box :currentTodo="todo" @check-entry="checkEntry" />
        </div>
        <span :class="[selectedCSS(todo), 'todo-content']">
          {{ todo.title }}
        </span>
        <div class="delete-button" v-if="isHoveredTodoActiveAt(index)">
          <base-delete-button
            :currentTodo="todo"
            :index="index"
            @delete-todo="deleteTodo"
          />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TheTodoList",
  props: {
    todos: {
      type: Array,
    },
  },
  data() {
    return {
      isSelected: false,
      selectedIndex: null,
      displayDeleteButton: false,
      hoveredTodo: null,
    };
  },
  emits: ["check-entry", "delete-todo"],

  methods: {
    checkEntry(currentTodo) {
      this.$emit("check-entry", currentTodo);
    },
    selectedCSS(todo) {
      // if()
      return { "cross-out": !todo.active };
    },
    setHoveredTodo(index) {
      this.hoveredTodo = index;
      // console.log("CAlled" + this.displayDeleteButton);
    },
    isHoveredTodoActiveAt(index) {
      // console.log("CAlled 2");
      return this.hoveredTodo === index;
    },
    unsetSetHovered() {
      this.hoveredTodo = null;
    },
    deleteTodo(currentTodo) {
      // console.log("delete 3 called"+ currentTodo);
      this.$emit("delete-todo", currentTodo);
    },
  },
};
</script>

<style scoped src="@/assets/styles/Layout/TheTodoList.css"></style>
