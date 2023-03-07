const vm = Vue.createApp({

});

vm.component("hello", {
  template: `<h1>{{message}}</h1>`,
  data() {
    return {
      message: "Hellooooo World!",
    };
  },
});

vm.mount("#app");

// const vm2 = Vue.createApp({
//   data() {
//     return {
//       message: "Hello World",
//     };
//   },
//   render() {
//     return Vue.h("h1", this.message);
//   },
// }).mount("#app2");

//where h stands for hyperscript (javascript to create html elements)

//Components must be created before you mount the application

/*to use a component

e.g vm.component(name of the component, {what you're creating})*/
