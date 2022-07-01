<template>
  <button @click="accion" :disabled="desactivar">{{ texto }}</button>
</template>

<script>
export default {
  props: {
    texto: String,
    desactivar: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    accion() {
      this.$emit('accion')
    }
  }
}
</script>

<style scoped>
  button {
    margin: 15px auto;
  }
</style>