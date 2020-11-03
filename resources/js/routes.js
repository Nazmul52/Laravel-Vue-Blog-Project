
let home = require('./components/home.vue').default;
let contact = require('./components/contact.vue').default;


export const routes = [

  { path: '/', component: home, name: '/' },
  { path: '/contact', component: contact, name: 'contact' },

]