<template>
  <h1>{{ texto }}</h1>
</template>

<script>
export default {
  name: 'Titulo',
  props: {
    texto: String,
  }
}
</script>

<!-- scoped significa que solo va a afectar al h1 de este componente -->
<style scoped> 
  h1 {
    color: crimson;
  }
</style>