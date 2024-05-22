
const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            navLinks: [
                { text: 'Home', href: 'index.html' },
                { text: 'Community', href: 'community.html' },
                { text: 'Treatment', href: 'treatment.html' },
                { text: 'Connect', href: 'contact.html' }
            ]
        };
    }
});
app.mount('#bar');


const tag = Vue.createApp({
    data() {
        return {
            message1: 'Your companion',
            message2: 'In quality diagnosis'
        };
    }
});
tag.mount('#message');

const prompt = Vue.createApp({
    data() {
        return {
            prompte: "or take our SELF-ASSESMENT QUIZ...",
        };
    }
});
prompt.mount('#prompt');


const login = Vue.createApp({
    data() {
      return {
        signInLink: "login.html", 
        loginLink: "login.html"
      };
    }
  });
login.mount('#login');
  


