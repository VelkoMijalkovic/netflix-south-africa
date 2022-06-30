const app = Vue.createApp({
    data() {
      return {
        email : '',
        password: '',
       //check for admin admin to access
      }
    },
    methods: {
      check() {
        if ((this.email === 'Admin@admin') && (this.password === 'Admin')){
          
        }
      }
    }
    
  })