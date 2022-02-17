<template>
  <div>
    <img :src="selectedThemeIcon" :alt="themeAltText" @click="switchTheme" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { eventBus } from "@/main.js";
export default {
  data() {
    return {
      selectedTheme: this.getCurrentTheme,
      selectedThemeIcon: null,
    };
  },
  mounted() {
    this.setSelectedTheme();
    this.setThemeIcon();
  },
  watch: {
    selectedTheme() {
      this.setThemeIcon();
      eventBus.$emit("change-theme");
    },
  },
  computed: {
    themeAltText() {
      return this.selectedTheme === "Light" ? "Dark" : "Light";
    },
    ...mapGetters(["getCurrentTheme"]),
  },
  methods: {
    switchTheme() {
      this.$store.dispatch("toggleTheme");
      this.setSelectedTheme();
    },
    setThemeIcon() {
      this.selectedTheme === "Light"
        ? (this.selectedThemeIcon = require("../../assets/icons/icon-moon.svg"))
        : (this.selectedThemeIcon = require("../../assets/icons/icon-sun.svg"));
    },
    setSelectedTheme() {
      this.selectedTheme = this.getCurrentTheme;
      console.log(this.selectedTheme);
    },
  },
};
</script>

<style scoped></style>
