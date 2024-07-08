const app = Vue.createApp({
    data() {
        return {
            query: '',
            advice: '',
            user: 'user 12034565'
        };
    },
    methods: {
        goBack() {
            // Implement go back functionality
            console.log('Go Back');
        },
        async getAdvice() {
            try {
                const response = await fetch('http://localhost:5000/search', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ query: this.query })
                });
                const data = await response.json();
                this.advice = data.answer;
            } catch (error) {
                console.error('Error:', error);
                this.advice = 'Sorry, something went wrong. Please try again later.';
            }
        }
    }
});

app.mount('#app');
