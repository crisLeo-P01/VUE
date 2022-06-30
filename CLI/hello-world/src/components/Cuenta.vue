<template>
  <h2>Tpo de cuenta: {{ cuenta }}</h2>
  <h2>Saldo: {{ saldo }}</h2>
  <h3>Estado de cuenta: {{ estado ? 'Activa' : 'Desactivada' }}</h3>
  <div v-for="(servicio, index) in servicios" :key="index">{{ index + 1 }} - {{ servicio }}</div>
</template>

<script>
export default {
  data() {
    return {
      cuenta: 'Visa',
      saldo: 1000,
      estado: true,
      servicios: ['giros', 'pagos', 'transferencias'],
    }
  },
}
</script>

<style>

</style>