const { createApp } = Vue;

createApp({
    data() {
        return {
            searchQuery: '',
            loading: false,
            selectedFilter: 'mostStars',
            results: [
                { id: 1, user: 'user 435678', postedTime: '10min ago', text: 'How can I manage pet allergies.....??', tag: 'allergies', stars: 7, comments: 9 },
                { id: 2, user: 'user 396748', postedTime: '15h ago', text: 'What triggers asthma symptoms?', tag: 'asthma', stars: 5, comments: 10 },
                { id: 3, user: 'user 178678', postedTime: '1h ago', text: 'How often should I see my doctor for asthma', tag: 'asthma', stars: 20, comments: 5 },
                { id: 4, user: 'user 087532', postedTime: '15min ago', text: 'What should i do during an asthma or allergic reaction?', tag: 'asthma', stars: 14, comments: 0 },
                { id: 5, user: 'user 523678', postedTime: '1 Day ago', text: 'What are some common symptoms of allergies?', tag: 'allergies', stars: 17, comments: 25 }
            ]
        };
    },
    computed: {
        filteredResults() {
            let results = this.results;
            if (this.selectedFilter === 'mostStars') {
                results = results.sort((a, b) => b.stars - a.stars);
            } else if (this.selectedFilter === 'recentlyUpdated') {
                results = results.sort((a, b) => this.parseTime(a.postedTime) - this.parseTime(b.postedTime));
            } else if (this.selectedFilter === 'relatedDisease') {
                results = results.filter(result => result.tag.includes(this.searchQuery.toLowerCase()));
            } else if (this.selectedFilter === 'mostCommented') {
                results = results.sort((a, b) => b.comments - a.comments);
            }
            return results;
        }
    },
    methods: {
        applyFilter() {
            this.loading = true;
            setTimeout(() => {
                this.loading = false;
            }, 500); 
        },
        parseTime(timeString) {
            const timeUnits = {
                'min': 1,
                'h': 60,
                'Day': 1440,
                'Week': 10080,
                'Month': 43800
            };
            const timeValue = parseInt(timeString.match(/\d+/)[0]);
            const timeUnit = timeString.match(/[a-zA-Z]+/)[0];
            return timeValue * timeUnits[timeUnit];
        }
    }
}).mount('#app');
