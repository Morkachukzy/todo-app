<template>
  <div>
    <section class="header">
      <the-header>Todo</the-header>
      <the-theme-switcher :theme="theme"></the-theme-switcher>
    </section>
    <create-todo @add-todo="addTodo"></create-todo>
    <the-todo-list-base></the-todo-list-base>
  </div>
</template>

<script>
export default {
  name: "TheTodoGrid",
  data() {
    return {
      theme: "Dark",
    };
  },
  components: {
    TheHeader: () => import("@/components/Layout/TheHeader.vue"),
    TheThemeSwitcher: () => import("@/components/Themes/TheThemeSwitcher.vue"),
    CreateTodo: () => import("@/components/Activities/CreateTodo.vue"),
    TheTodoListBase: () => import("@/components/Layout/TheTodoListBase.vue"),
  },
  methods: {
    addTodo(newTodo) {
      console.log(newTodo);
      this.$store.dispatch("addNewTodo", newTodo);
    },
  },
};
</script>

<style scoped src="@/assets/styles/Layout/TheTodoGrid.css"></style>
