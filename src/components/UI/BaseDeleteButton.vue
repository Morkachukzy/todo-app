<template>
  <span @click="deleteTodo">
    <img :src="iconURL" alt="" />
  </span>
</template>

<script>
export default {
  name: "BaseDeleteButton",
  props: {
    index: {
      type: Number,
      default: null,
    },
    currentTodo: {
      type: Object,
    },
  },
  data() {
    return {
      isShown: false,
      iconURL: require("../../assets/icons/icon-cross.svg"),
    };
  },
  emits: ["delete-todo"],
  methods: {
    deleteTodo() {
      // console.log("delete called");
      this.$emit("delete-todo", this.currentTodo);
    },
  },
  computed: {},
};
</script>
<style scoped src="@/assets/styles/UI/BaseDeleteButton.css"></style>

