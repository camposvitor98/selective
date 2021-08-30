<template>
  <div class="details__container">
    <banner />

    <h1><fa-icon icon="chevron-left" /> Histórico Empresarial</h1>
    <div>
      <fa-icon icon="arrow-left" />
      <section>conteudo</section>
      <fa-icon icon="arrow-right" />
    </div>
    <h2>{{ id }}</h2>
  </div>
</template>

<script>
import Banner from "@/components/Banner";
export default {
  name: "Details",
  components: { Banner },
  data() {
    return {
      id: this.$route.params.id,
    };
  },
};
</script>

<style scoped lang="scss">
.details__container {
  min-height: 100%;
  min-width: 100%;
  border: solid purple;
  h1 {
    color: pink;
  }
}
</style>
