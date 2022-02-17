<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { eventBus } from "@/main";

export default {
  data() {
    return {
      theme: this.getCurrentTheme,
    };
  },
  mounted() {
    this.setSelectedTheme();
    console.log("mounted: " + this.theme);
  },
  created() {
    eventBus.$on("change-theme", this.setSelectedTheme);
  },
  watch: {
    theme() {
      document.documentElement.setAttribute("data-theme", this.theme);
      document.body.setAttribute("data-theme", this.theme);
      console.log("watcher: " + this.theme);
    },
  },
  computed: {
    ...mapGetters(["getCurrentTheme"]),
  },
  methods: {
    setSelectedTheme() {
      this.theme = this.getCurrentTheme;
    },
  },
};
</script>

<style src="@/assets/styles/App.css"></style>
