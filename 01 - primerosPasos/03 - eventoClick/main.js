const app = Vue.createApp ({ //objeto
  data() { // primer elemento
    return {
      titulo: 'Evento Click',
      cantidad: 0,
    }
  },
  methods: {
    agregarSaldo() { // función
      this.cantidad = this.cantidad + 100
    }
  },
})