<template>
  <div class="card__container">
    <div class="card__body">
      <fa-icon :icon="cardData.icon" class="card__icon"></fa-icon>
      <h2 class="card__title">
        {{ cardData.title }}
      </h2>
      <p class="card__description">
        {{ cardData.text }}
      </p>
    </div>
    <footer class="card__footer">
      <span class="card__price">{{ cardData.price }}</span>
      <span class="card__more" @click="handleClick">Saiba Mais</span>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["cardData"],
  data() {
    return {
      icon: "",
    };
  },
  methods: {
    handleClick() {
      console.log(this.cardData);
    },
  },
};
</script>

<style scoped lang="scss">
.card__container {
  border: 1px solid orange;
  height: 22rem;
  width: 20rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  .card__body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;

    padding: 1rem 1.5rem 0rem;
    margin-top: auto;
    .card__icon {
      font-size: 4rem;
      color: orange;
    }
  }
  .card__footer {
    width: 100%;
    height: 3.5rem;
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    span {
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      padding: 0 1rem;
    }
    .card__more {
      cursor: pointer;
      justify-content: flex-end;
    }
  }
}
</style>
