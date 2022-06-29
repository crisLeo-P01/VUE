const app = Vue.createApp ({ //objeto
  data() { // primer elemento
    return {
      titulo: 'Methods & Computed',
      cantidad: 0,
    }
  },
  methods: {
    agregarSaldo() { // función
      this.cantidad = this.cantidad + 100
    }
  },
  computed: {
    colorCantidad() {
      return this.cantidad > 500 ? 'text-success' : 'text-danger'
    }
  }
})