<template>
  <span @click="toggleSelect" :class="selectedCSS">
    <img :src="iconURL" alt="" />
  </span>
</template>

<script>
export default {
  name: "BaseCheckBox",
  props: {
    currentTodo: {
      type: Object,
      default() {
        return {
          title: "",
          active: true,
        };
      },
    },
    clickable: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      isSelected: !this.currentTodo.active,
      iconURL: null,
    };
  },
  mounted() {
    console.log("Hi: " + this.isSelected);
    this.setIconURL();
  },
  emits: ["check-entry"],
  methods: {
    toggleSelect() {
      if (this.clickable) {
        this.isSelected = !this.isSelected;
        this.setIconURL();
        this.$emit("check-entry", this.currentTodo);
      }
    },
    setIconURL() {
      this.isSelected
        ? (this.iconURL = require("../../assets/icons/icon-check.svg"))
        : (this.iconURL = null);
    },
  },
  computed: {
    selectedCSS() {
      return [{ background: this.isSelected }, { hover: this.clickable }];
    },
  },
};
</script>

<style scoped src="@/assets/styles/UI/BaseCheckBox.css"></style>
