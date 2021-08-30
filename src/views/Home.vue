<template>
  <div class="home__container">
    <banner />
    <nav class="home__nav-cards">
      <nav-card
        v-for="data in cardsNavData"
        :key="data.id"
        :navCardData="data"
        @click="filter(data.title)"
      />
    </nav>
    <div class="home__cards">
      <card v-for="data in filteredCards" :key="data.id" :cardData="data" />
    </div>
  </div>
</template>

<script>
import Banner from "@/components/Banner";
import Card from "@/components/Card";
import NavCard from "@/components/NavCard";

import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    Banner,
    Card,
    NavCard,
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["getCardsData", "getCardsNavData"]),
    ...mapMutations(["setCurrentFilter"]),
    filter(id) {
      this.setCurrentFilter(id);
      console.log(this.currentFilter);
    },
  },
  computed: {
    ...mapState(["currentFilter", "cardsNavData"]),
    ...mapGetters(["filteredCards"]),
  },

  created() {
    this.getCardsData();
    this.getCardsNavData();
  },
};
</script>

<style scoped lang="scss">
.home__container {
  height: 100%;
  width: 100%;
  padding: 3% 5%;

  .home__nav-cards {
    display: flex;
    margin-top: 4rem;
  }
  .home__cards {
    margin-top: 5rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    column-gap: 2rem;
    row-gap: 3rem;
  }
}
</style>
