<template>
  <div class="card__container">
    <fa-icon
      :icon="navCardData.icon"
      class="card__icon"
      :class="cardActive && 'card__icon--active'"
    ></fa-icon>
    <p class="card__title">
      {{ navCardData.title }}
    </p>
  </div>
</template>

<script>
export default {
  name: "NavCard",
  props: ["navCardData", "cardActive"],
  data() {
    return {};
  },
  mounted() {
    console.log("Active? ", this.cardActive);
  },
};
</script>

<style scoped lang="scss">
.card__container {
  border: 1px solid orange;
  height: 5.5rem;
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  cursor: pointer;

  .card__icon {
    width: 100%;
    font-size: 2rem;
    color: gray;
    text-justify: center;
  }
  .card__icon--active {
    color: orange;
  }
  .card__title {
    font-weight: 600;
  }
}
</style>
