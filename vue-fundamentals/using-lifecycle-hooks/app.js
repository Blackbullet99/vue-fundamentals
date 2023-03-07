const vm = Vue.createApp({
    data() {
        return{
            message: "Hello World",
        }
    },
    beforeCreate() {
        console.log('beforeCreate() function called!', this.message)
    },
    created() {
        console.log('created() function called!', this.message)
    },
    beforeMount() {
        console.log('beforeMount() function called!', this.$el)
    },
    mounted() {
        console.log('mounted() function called!', this.$el)
    },
    beforeUpdate() {
        console.log('beforeUpdate() function called!')
    },
    updated() {
        console.log('updated() function called!')
    },
    beforeUnmount() {
        console.log('beforeUnmount() function called!')
    },
    unmounted() {
        console.log('unmounted() function called!')
    }
})

vm.mount('#app')


/*
Understanding Proxies - allows us to intercept and observe changes 
to data (make sure you check MDN docs for this, can be useful
for checking userlogin or if user is already logged in)
const data = {
    name: 'John',
}

const observedData = new Proxy(data, {
    set(target, key, value) {
        document.querySelector('#name').textContent = value
        target[key] = value
    }
})
observedData.name = 'Jane'
console.log(observedData.name) 
*/


/* 
Understaning lifecycle hooks

Vue lifecycle -allows us to run code when a new instance is created

lifescycle hooks -

-beforeCreate - runs before the instance is created
-created - runs after the instance is created
-beforeMount - runs before the instance is mounted to the DOM
-mounted - runs after the instance is mounted to the DOM

mainly used for debugging and not really advised
-beforeUpdate - runs before the data is updated
-updated - runs after the data is updated

destroy the vue instance
-beforeUnmount - runs before the instance is unmounted from the DOM
-unmounted - runs after the instance is unmounted from the DOM

-all lifecycles are functions

Make sure you check the vue docs for lifecycle hooks


Virtual Dom -
compile - to take in something and convert it into something

The virtual Dom is a Javascript object. It is a lightweight copy
of the actual Dom. It's faster to perform comparisons and updates on the virtual
DOM than its is to perform them on the actual DOM.

Understanding Reactivity with Proxies
-Reactivity is when a program is able to react to changes in data

-How proxies work

*/