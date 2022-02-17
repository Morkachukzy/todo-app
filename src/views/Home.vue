<template class="red">
  <!-- <div class="container"> -->
  <the-todo-grid class="home" />
  <!-- </div> -->
</template>

<script>
export default {
  components: {
    TheTodoGrid: () => import("@/components/Layout/TheTodoGrid.vue"),
  },
};
</script>

<style scoped src="@/assets/styles/Views/Home.css">
/* @import "../assets/styles/Views/Home.css"; */
</style>
