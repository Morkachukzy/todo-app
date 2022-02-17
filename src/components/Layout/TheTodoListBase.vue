<template>
  <div class="todo-list-base">
    <the-todo-list
      :todos="todos"
      @check-entry="checkEntry"
      @delete-todo="deleteTodo"
    ></the-todo-list>
    <div class="navigation">
      <div class="items-left">{{ itemsLeft }}</div>

      <base-button
        v-for="action in actions"
        :key="action"
        :action="action"
        @clear-completed-todos="clearCompletedTodos"
        class="clear-completed-btn"
        >Clear Completed</base-button
      >
      <div class="display-section">
        <base-button
          v-for="section in sections"
          :key="section"
          :display="section"
          @display-todos="displayTodos"
          :class="[activeCSS(section), 'display-section-btn']"
          >{{ section }}</base-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  components: {
    TheTodoList: () => import("@/components/Layout/TheTodoList.vue"),
  },
  data() {
    return {
      sections: ["All", "Active", "Completed"],
      actions: ["clearCompleted"],
      todos: [],
      activeTodos: [],
      completedTodos: [],
      currentSection: "All",
    };
  },
  mounted() {
    this.todos = this.getAllTodos;
  },
  methods: {
    displayTodos(section) {
      if (section === "All") {
        this.todos = this.getAllTodos;
        console.log(this.todos);
      } else if (section === "Active") {
        this.todos = this.getActiveTodos;
        console.log(this.getActiveTodos);
      } else if (section === "Completed") {
        this.todos = this.getCompletedTodos;
        console.log(this.todos);
      }
      this.currentSection = section;
    },
    clearCompletedTodos(action) {
      if (action === "clearCompleted") {
        this.$store.dispatch("removeCompletedTodos");
        this.todos = this.getActiveTodos;
        this.displayTodos("All");
      }
    },
    checkEntry(currentTodo) {
      this.$store.dispatch("markTodoAt", currentTodo);
    },
    deleteTodo(currentTodo) {
      this.$store.dispatch("deleteTodo", currentTodo);
    },
    activeCSS(section) {
      return { active: this.currentSection === section };
    },
  },
  computed: {
    itemsLeft() {
      return `${this.getActiveTodosCount} items left`;
    },
    ...mapGetters([
      "getAllTodos",
      "getActiveTodos",
      "getActiveTodosCount",
      "getCompletedTodos",
    ]),
  },
};
</script>

<style scoped src="@/assets/styles/Layout/TheTodoListBase.css">
/* @import "../../assets/styles/Layout/TheTodoListBase.css"; */
</style>
