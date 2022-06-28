const app = Vue.createApp({
  data() {
    return {
      titulo: 'Verduleria',
      frutas: [
        {nombre: 'Pera', cantidad: '7'},
        {nombre: 'Manzana', cantidad: '12'},
        {nombre: 'Banana', cantidad: 0}
      ],
    }
  }
});

const app2 = Vue.createApp ({
  data() {
    return {
      titulo2: 'Insumos de computación',
      insumos: [
        {componente: 'Placa madre', disponible: 'no'},
        {componente: 'Placa de video', disponible: 'si'},
        {componente: 'Memoria RAM', disponible: 'si'}
      ]
    }
  }
});

const app3 = Vue.createApp ({
  data() {
    return {
      titulo3: 'Nombre de los alumnos del grado 7a',
      alumnos: [
        {nombre: 'Cristian Paiva', presente: 'si'},
        {nombre: 'María Elena García', presente: 'si'},
        {nombre: 'Emiliano Eggel', presente: 'no'}
      ]
    }
  }
});