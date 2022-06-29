
// Los nombres de los componenetes por convencion tienen que ser todo en minúsculas 
app.component('footer-banco', {
  template: /*html*/ `
    <div class="bg-dark py-3 text-white mb-1">
      <h3 class="text-center">{{ texto }}</h3>
    </div>
  `,
  data() {
    return {
      texto: 'Footer de mi sitio web',
    }
  }
})