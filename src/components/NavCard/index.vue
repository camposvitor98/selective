<template>
  <div class="card__container">
    <fa-icon :icon="navCardData.icon" class="card__icon"></fa-icon>
    <p class="card__title">
      {{ navCardData.title }}
    </p>
  </div>
</template>

<script>
export default {
  name: "NavCard",
  props: ["navCardData"],
  data() {
    return {
      icon: "",
    };
  },
  methods: {
    handleClick() {
      console.log(this.navCardData);
    },
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

  .card__icon {
    width: 100%;
    font-size: 2rem;
    color: gray;
    text-justify: center;
  }
  .card__title {
    font-weight: 600;
  }
}
</style>
