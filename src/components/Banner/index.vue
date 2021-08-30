<template>
  <div class="banner__container">
    <section class="banner__header">
      <img src="@/assets/logo.png" alt="Logo" />
      <h2>Histórico Empresarial</h2>
    </section>
    <section class="banner__content">
      <p>
        O aplicativo Histórico Empresarial permite ao usuario ter acesso a todos
        os fatos e acontecimentos relevantes de uma empresa desde o seu ano de
        fundação
      </p>
    </section>
    <section class="banner__footer">
      <span>
        R$
        <strong>40,00</strong>
      </span>
      <primary-button
        size="small"
        label="Saiba mais"
        type="button"
        @click="onButtonClick"
      />
    </section>
  </div>
</template>

<script>
import "./style.scss";
import PrimaryButton from "@/components/PrimaryButton";

export default {
  name: "Banner",
  components: { PrimaryButton },
  data() {
    return {};
  },
  methods: {
    onButtonClick() {
      console.log("funciona");
    },
  },
};
</script>
