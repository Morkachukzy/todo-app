<template>
  <div class="input-wrapper">
    <div class="checkbox-wrapper">
      <base-check-box :clickable="false" class="checkbox"></base-check-box>
    </div>
    <input type="text" v-model="newTodo.title" @keydown.enter="addTodo" />
  </div>
</template>

<script>
const sentenceCase = (str) => {
  return str
    .replace(/[a-z]/i, function (letter) {
      return letter.toUpperCase();
    })
    .trim();
};
const titleCase = (str) => {
  return str.replace(/\w\S/g, function (t) {
    return t.toLowerCase();
  });
};
let r = "magBan is a jof!";
console.log(titleCase(r));
export default {
  name: "CreateTodo",
  data() {
    return {
      newTodo: {
        title: "",
        active: true,
      },
    };
  },
  methods: {
    addTodo() {
      this.newTodo.title = sentenceCase(this.newTodo.title.toLowerCase());
      this.$emit("add-todo", this.newTodo);
      this.newTodo.title = "";
      console.log(this.newTodo.title);
    },
  },
};
</script>

<style scoped src="@/assets/styles/Activities/CreateTodo.css"></style>
