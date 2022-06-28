const app = Vue.createApp ({
  data() {
    return {
      titulo: 'Mi cuenta de banco con Vue',
      cantidad: 400,
      enlace: 'https://www.youtube.com/',
      estado: false,
      servicios: ['transferencias', 'pagos', 'compra', 'cheques'],
    }
  }
})