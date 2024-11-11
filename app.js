const app = Vue.createApp({
    data() {
      return {
        showDetails: false, 
        isEditing: false,   
        heading: 'Contacts List',
        contacts: [
          { name: "Nelson Yeboah Koranteng", phone: "614609140", email: "nelson.koranteng@gmail.com", age: 10, image: "https://randomuser.me/api/portraits/men/1.jpg" },
          { name: "Stephen Mensah", phone: "614601133", email: "stmensah@gmail.com", age: 20, image: "https://randomuser.me/api/portraits/men/2.jpg" },
          { name: "Alice Walker", phone: "612345678", email: "alice.walker@example.com", age: 25, image: "https://randomuser.me/api/portraits/women/3.jpg" },
          { name: "John Doe", phone: "619876543", email: "john.doe@example.com", age: 30, image: "https://randomuser.me/api/portraits/men/4.jpg" },
          { name: "Jane Smith", phone: "613456789", email: "jane.smith@example.com", age: 22, image: "https://randomuser.me/api/portraits/women/5.jpg" },
          { name: "Mary Johnson", phone: "620123456", email: "mary.johnson@example.com", age: 35, image: "https://randomuser.me/api/portraits/women/6.jpg" }
        ]
      };
    },
    methods: {
      incrementAge(contact) {
        contact.age++;
      },
      toggleDetails() {
        this.showDetails = !this.showDetails;
      },
      toggleEdit() {
        this.isEditing = !this.isEditing;
      }
    }
  });
  
  app.mount('#app');
  