<template>
  <button :class="size" :type="type">{{ label }}</button>
</template>

<script>
export default {
  name: "PrimaryButton",
  props: ["label", "type", "size"],
};
</script>

<style scoped lang="scss">
button {
  background-color: #ff7f00;
  border: none;
  border-radius: 0.25rem;
  padding: 0 1rem;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: 200ms;

  &:hover {
    background-color: #ff7f00cf;
  }
}
.large {
  height: 3rem;
}
.medium {
  height: 2.5rem;
}
.small {
  height: 2rem;
}
</style>
