<template>
  <button @click="selectAction"><slot></slot></button>
</template>

<script>
export default {
  props: {
    display: {
      type: String,
      default: "All",
    },
    action: {
      type: String,
      default: null,
    },
  },
  emits: ["display-todos", "clear-completed-todos"],
  methods: {
    selectAction() {
      this.action ? this.clearCompletedTodos() : this.displayTodos();
    },
    displayTodos() {
      this.$emit("display-todos", this.display);
    },
    clearCompletedTodos() {
      this.$emit("clear-completed-todos", this.action);
    },
  },
};
</script>

<style scoped src="@/assets/styles/UI/BaseButton.css"></style>
