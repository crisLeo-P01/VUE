<template>
  <h2>Tpo de cuenta: {{ cuenta }}</h2>
  <h2>Saldo: {{ saldo }}</h2>
  <h3>Estado de cuenta: {{ estado ? 'Activa' : 'Desactivada' }}</h3>
  <div v-for="(servicio, index) in servicios" :key="index">{{ index + 1 }} - {{ servicio }}</div>

  <AccionSaldo texto="Disminuir Saldo" @accion="disminuir" :desactivar="desactivar" />
  <AccionSaldo texto="Aumentar Saldo" @accion="aumentar" />
</template>

<script>
import AccionSaldo from './AccionSaldo.vue'

export default {
  components: {
    AccionSaldo,
  },
  data() {
    return {
      cuenta: 'Visa',
      saldo: 1000,
      estado: true,
      servicios: ['giros', 'pagos', 'transferencias'],
      desactivar: false
    }
  },
  methods: {
    aumentar() {
      this.saldo = this.saldo + 100;
      this.desactivar = false;
    },
    disminuir() {
      if (this.saldo === 0) {
        this.desactivar = true;
        alert('El saldo llego a 0')
      } else {
        this.saldo = this.saldo - 100
      }
    },
  }
}
</script>

<style>

</style>