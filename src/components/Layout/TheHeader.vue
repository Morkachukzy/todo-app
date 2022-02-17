<template>
  <header>
    <h1><slot></slot></h1>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>

<style scoped>
h1 {
  font-size: 2.5rem;
  text-transform: uppercase;
  letter-spacing: 0.6rem;
  color: white;
}
</style>
