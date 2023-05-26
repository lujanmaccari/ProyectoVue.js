const { createApp } = Vue;

createApp({
  data() {
    return {
      titulo: "Proyecto Vue.js",
      numeroInicial: 1,

    };
  },
  methods:{
    suma() {
        return this.numeroInicial += 1
    },
    resta() {
        return this.numeroInicial -= 1
    }
  }
}).mount("#main");
