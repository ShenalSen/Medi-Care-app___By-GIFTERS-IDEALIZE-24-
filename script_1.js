
const { createApp } = Vue;

let app = Vue.createApp({
    data() {
        return {
            navLinks: [
                { text: 'Home', href: 'index.html' },
                { text: 'About', href: 'about.html' },
                { text: 'Services', href: 'services.html' },
                { text: 'Contact', href: 'contact.html' },
                { text: 'Login', href: 'login.html' }
            ]
        };
    }
});

// Define the nav-bar component
app.component('nav-bar', {
    template: `<nav class="navbar navbar-expand-lg fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand me-auto" id="navbar-brandme-auto" href="#">
                <img id="Logo" src="images/Logo.png" alt="Logo">
            </a>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Medi Care</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
    
                    <ul class="navbar-nav justify-content-center flex-grow-1 pe-3" id="bar" data-v-app="">
                        <li class="nav-item"><a id="nav-link" class="nav-link mx-lg-2" href="index.html">Home</a></li>
                        <li class="nav-item"><a id="nav-link" class="nav-link mx-lg-2" href="community.html">Community</a>
                        </li>
                        <li class="nav-item"><a id="nav-link" class="nav-link mx-lg-2" href="treatment.html">Treatment</a>
                        </li>
                        <li class="nav-item"><a id="nav-link" class="nav-link mx-lg-2" href="contact.html">Connect</a></li>
                    </ul>
    
                </div>
            </div>
    
            <div class="login">
                <a href="login.html" class="signup-button">Sign in</a>
                <a href="login.html" class="login-button">Login</a>
            </div>
    
            <button class="navbar-toggler pe-0" id="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
    
        </div>
    </nav>`
});

// Mount the app instance to #app element
app.mount('#nav-bar');


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



