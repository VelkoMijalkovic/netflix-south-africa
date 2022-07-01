const app = Vue.createApp({
    data() {
      return {
        email : '',
        password: '',
        isDisabled: false,
        error: 'wrong username/password',
        showError: false,

       //check for admin admin to access
      }
    },
    methods: {
     
    },
    computed: {
      check : function(){
        if ((this.email === 'admin@admin') && (this.password === 'admin')){
         return this.isDisabled = true;
          } 
      }
    }
    
  })