//vm = Vue Model

const vm = Vue.createApp({
  data() {
    return {
      //   firstName: "John",
      //   middleName: "",
      //   lastName: "Doe",
      //   url: "https://www.youtube.com/",
      //   raw_url: '<a href="https://www.youtube.com/" target="_blank">Youtube</a>',
      //   age: 30,
      mode: 1,
      birds: ["Eagle", "Owl", "Parrot", "Dove"],
      people: [
        {name: 'John', age: 20},
        {name: 'Jane', age: 30},
        {name: 'Jack', age: 40},
      ]
    };
  },
  //   methods: {
  //     //category
  //     increment() {
  //       this.age++;
  //     },
  //     updateLastName(msg, e) {
  //       console.log(msg);
  //       this.lastName = e.target.value;
  //     },
  //     updateMiddleName(e) {
  //       this.middleName = e.target.value;
  //     },
  //   },
  //   computed: {
  //     //category
  //     fullName() {
  //       return `${this.firstName} ${
  //         this.middleName
  //       } ${this.lastName.toUpperCase()}`;
  //     },
  //   },
}).mount("#app");

// methods: can define functions for our Vue instance or application

/* directives: can define custom directives for our Vue instance 
or application
all directives start with
v- (v-if, v-for, v-on, v-bind, v-model, v-text, v-html, v-cloak) 


Two-way binding: this is the ability to update the data through the 
html doc or javascript file

v-cloak this is used to hide the html until the Vue instance is loaded

v-bind: this is used to bind the data(or url) to the html
a shorthand for v-bind is :

v-model this is used to bind the data to the html and update the data

cross site scripting (XSS): this is a security risk that allows 
hackers to inject malicious code into a website

v-html: this is used to render the html as html and not as text

v-on: this is used to listen to events
you can use the shorthand @ instead of v-on: and the event name

Go to the Vue documentation to see all the events and event 
modifiers

to use the event modifiers you can use the dot notation
eg v-on:click.prevent

keyboard events and modifiers vue docs(make sure to check this)
e.g @keyup.enter

v-model modifiers (also check the vue docs)
e.g v-model.number - converts the input to a number
    v-model.trim - removes the white spaces
    v-model.lazy - updates the data only when the event is triggered


computed properties: these are properties that are calculated in
some form of manner e.g fullName is a computed property so it 
should only be called when it is needed not on every render
hence the use of the computed method

compute (to calculate something)

are computed properties data or methods? it is a cobination of both
-data is used to store single values, you can store an array or
an object as well, it's not the kind of object that you'll store
functions
-methods property however can be used to store functions
-computed property are used when you have a function that calculates
a value

difference between methods and computed properties
-with methods you're alllowed to calculate values but you'll loose
out on the performance game that computed properties provide
-computed properties serve one purpose and that's to calculate
a value and unlike methods you're always expected to return a value
because the value is what is cached or stored in vue

binding classes
e.g :class="{'active': isActive, 'text-danger': hasError}"

binding styles
e.g :style="{color: 'red', fontSize: '20px'}" check the vue docs

conditional Rendering - this is when elements are added or removed
from the DOM based on some condition
e.g v-if, v-else, v-else-if, v-show

when setting this the value must be the condition that you want to
check for. what vue does is that it adds or removes elements based
on the condition you set in the directives

v-if - this is used to render an element if the condition is true
v-else - this is used to render an element if the condition is false
v-else-if - this is used to render an element if the condition is false
v-show - this is used to render an element if the condition is true
the difference between v-if and v-show is that v-if removes the element
from the DOM while v-show just hides the element

which to choose?
use v-show if the elements will constantly appear/disappear on the
page(i.e toggled frequently)

use v-if if the elements will appear/disappear occasionally, or 
rarely


list rendering - this is when you want to render a list of items

to loop through an array you can use the v-for directive
e.g v-for="bird in birds"

-bird is the alias for the current item in the array 
e.g egale, owl, parrot, dove
-in is the keyword that separates the alias from the array and tells
vue that you want to loop through the array
-birds is the array that you want to loop through

its common practice to name the alias in the singular form of
the array name

understanding the role of the key attribute 
vheck the docs for list rendering and maintaining state

-keys are used to identify each item in the list
it prevents strange behaviours from happening when the list is
updated
*/
