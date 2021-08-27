<template>
  <div class="details__container">
    <h1>Details</h1>
    <h2>{{ id }}</h2>
  </div>
</template>

<script>
export default {
  name: "Details",
  data() {
    return {
      id: this.$route.params.id,
    };
  },
};
</script>

<style scoped lang="scss">
.details__container {
  height: 100%;
  width: 100%;
  border: solid purple;
  h1 {
    color: pink;
  }
}
</style>
