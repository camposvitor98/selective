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
      <router-link :to="`/${cardData.id}`" class="card__more">
        <span @click="handleClick">Saiba Mais</span>
      </router-link>
    </footer>
  </div>
</template>

<script>
import "./style.scss";
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
