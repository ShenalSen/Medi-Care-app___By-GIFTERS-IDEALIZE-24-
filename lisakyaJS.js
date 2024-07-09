const app = Vue.createApp({
    data() {
        return {
            inputQuery: '',
            displayedQuery: '',
            advice: '',
            user: 'user 12034565'
        };
    },
    methods: {
        goBack() {
            // Implement go back functionality
            console.log('Go Back');
        },
        getAdvice() {
            this.displayedQuery = this.inputQuery;
            // Implement the logic to get advice based on the query
            // For example:
            this.advice = 'Here is some advice based on your query: ' + this.displayedQuery;
        }
    }
});

app.mount('#app');
