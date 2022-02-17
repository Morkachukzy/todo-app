import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {
        title: "10 minutes meditation",
        active: true,
      },
      {
        title: "Jog around the park 5x",
        active: true,
      },
      {
        title: "Complete online Javascript course",
        active: true,
      },
      {
        title: "Read for 1 hour",
        active: true,
      },
      {
        title: "Pick up groceries",
        active: true,
      },
      {
        title: "Complete Todo App on Frontend Mentor",
        active: true,
      },
    ],
    theme: "Dark",
  },
  mutations: {
    CLEAR_COMPLETED_TODOS(state, activeTodos) {
      state.todos = activeTodos;
      activeTodos.forEach((todo) => {
        console.log(todo.title);
      });
    },
    ADD_NEW_TODO(state, newTodo) {
      state.todos.unshift(newTodo);
    },
    MARK_TODO_AT(state, todoIndex) {
      state.todos[todoIndex].active = !state.todos[todoIndex].active;
    },
    DELETE_TODO(state, todoIndex) {
      state.todos.splice(todoIndex, 1);
    },
    TOGGLE_THEME(state) {
      state.theme = state.theme === "Light" ? "Dark" : "Light";
    },
  },
  actions: {
    removeCompletedTodos({ commit, getters }) {
      let activeTodos = getters.getActiveTodos;
      commit("CLEAR_COMPLETED_TODOS", activeTodos);
    },
    addNewTodo({ commit, getters }, todo) {
      let todoIndex = getters.getTodoIndexByTitle(todo);
      if (todoIndex < 0) {
        let newTodo = { ...todo };
        commit("ADD_NEW_TODO", newTodo);
      }
    },
    markTodoAt({ commit, getters, state }, currentTodo) {
      let todoIndex = getters.getTodoIndex(currentTodo);
      if (todoIndex >= 0) {
        commit("MARK_TODO_AT", todoIndex);
        console.log(state.todos[todoIndex].active);
      }
    },
    deleteTodo({ commit, getters }, currentTodo) {
      let todoIndex = getters.getTodoIndex(currentTodo);
      if (todoIndex >= 0) {
        commit("DELETE_TODO", todoIndex);
      }
    },
    toggleTheme({ commit }) {
      commit("TOGGLE_THEME");
    },
  },
  modules: {},
  getters: {
    getAllTodos: (state) => state.todos,
    getActiveTodos: (state) => state.todos.filter((todo) => todo.active),
    getActiveTodosCount: (state) =>
      state.todos.filter((todo) => todo.active).length,
    getCompletedTodos: (state) => state.todos.filter((todo) => !todo.active),
    getTodoIndex: (state) => (currentTodo) =>
      state.todos.findIndex(
        (todo) =>
          todo.title === currentTodo.title && todo.active === currentTodo.active
      ),
    getTodoIndexByTitle: (state) => (currentTodo) =>
      state.todos.findIndex((todo) => todo.title === currentTodo.title),
    getCurrentTheme: (state) => state.theme,
  },
});
