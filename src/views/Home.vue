<template>
  <div class="home__container">
    <banner />
    <nav class="home__nav-cards">
      <nav-card
        v-for="data in cardsNavData"
        :key="data.id"
        :navCardData="data"
        :cardActive="data.title === currentFilter"
        @click="filter(data.title)"
      />
    </nav>
    <div class="home__sort">
      <strong>Ordenar</strong>
      <select name="sort" @change="handleSortCardsData">
        <option value="price">Preço</option>
        <option value="release">Lançamento</option>
      </select>
    </div>
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
    return {
      autoplay: true,
    };
  },
  methods: {
    ...mapActions(["getCardsData", "getCardsNavData"]),
    ...mapMutations(["setCurrentFilter", "sortCardsData"]),
    filter(id) {
      this.setCurrentFilter(id);
    },
    handleSortCardsData(e) {
      this.sortCardsData(e.target.value);
    },
    continueAutoplay() {
      const interval = setInterval(() => {
        if (!this.autoplay) clearInterval(interval);
      }, 5000);
    },
  },
  computed: {
    ...mapState(["currentFilter", "cardsNavData"]),
    ...mapGetters(["filteredCards"]),
  },
  created() {
    this.getCardsData();
    this.getCardsNavData();
    this.continueAutoplay();
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
    gap: 0.25rem;
  }
  .home__sort {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    strong {
      text-transform: uppercase;
    }

    select {
      padding: 0.25rem 0;
      width: 10%;
    }
  }
  .home__cards {
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    column-gap: 2rem;
    row-gap: 3rem;
  }
}
</style>
