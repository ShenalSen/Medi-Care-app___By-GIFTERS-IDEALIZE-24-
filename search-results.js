new Vue({
  el: "#app",
  data: {
    activeItem: "ai-advice", // Set the default active item
    searchQuery: "",
    loading: false,
    selectedFilter: "mostStars",
    results: [
      {
        id: 1,
        user: "user 435678",
        postedTime: "10min ago",
        text: "How can I manage pet allergies.....??",
        tag: "allergies",
        stars: 7,
        comments: 9,
      },
      {
        id: 2,
        user: "user 396748",
        postedTime: "15h ago",
        text: "What triggers asthma symptoms?",
        tag: "asthma",
        stars: 5,
        comments: 10,
      },
      {
        id: 3,
        user: "user 178678",
        postedTime: "1h ago",
        text: "How often should I see my doctor for asthma",
        tag: "asthma",
        stars: 20,
        comments: 5,
      },
      {
        id: 4,
        user: "user 087532",
        postedTime: "15min ago",
        text: "What should i do during an asthma or allergic reaction?",
        tag: "asthma",
        stars: 14,
        comments: 0,
      },
      {
        id: 5,
        user: "user 523678",
        postedTime: "1 Day ago",
        text: "What are some common symptoms of allergies?",
        tag: "allergies",
        stars: 17,
        comments: 25,
      },
    ],
    sidebarItems: [
      { id: "ai-advice", text: "AI Advice", icon: "fas fa-robot" },
      { id: "community", text: "Community", icon: "fas fa-users" },
      { id: "treatments", text: "Treatments", icon: "fas fa-pills" },
    ],
    contentMap: {
      "ai-advice": `
                <div class="container-main">
                    <h2>AI Advice</h2>
                    <div class="search-results">
                        <div>
                            <div class="result" id="result-ai"></div>
                        </div>
                    </div>
                </div>`,
      community: `
                <div class="container-main">
                    <h1>Medi Care Community</h1>
                    <div class="filters">
                        <button @click="results" class="results">5 results</button>
                        <select v-model="selectedFilter">
                            <option value="mostStars">Most Stars</option>
                            <option value="recentlyUpdated">Recently Updated</option>
                            <option value="relatedDisease">Related Disease</option>
                            <option value="mostCommented">Most Commented</option>
                        </select>
                        <button @click="save" class="results-1">Save</button>
                    </div>
                    <div class="container">
                        <div class="search-results">
                            <div v-for="result in filteredResults" :key="result.id" class="result">
                                <div class="result-text">
                                    <p><b>{{ result.user }}</b> posted {{ result.postedTime }}</p>
                                    <p class="text">{{ result.text }}</p>
                                    <p>@{{ result.tag }}</p>
                                </div>
                                <div class="result-actions">
                                    <div class="star">
                                        <img src="pngwing.com.png" alt="star">
                                        <span>{{ result.stars }}</span>
                                    </div>
                                    <div class="comment">
                                        <img src="pngwing.com (1).png" alt="comment">
                                        <span>{{ result.comments }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`,

      treatments: `<div v-for="(doctor, index) in filteredDoctors" :key="index" class="doctor-card">
                        
                    </div>`,
    },
  },
  computed: {
    filteredResults() {
      let results = this.results;
      if (this.selectedFilter === "mostStars") {
        results = results.sort((a, b) => b.stars - a.stars);
      } else if (this.selectedFilter === "recentlyUpdated") {
        results = results.sort(
          (a, b) => this.parseTime(a.postedTime) - this.parseTime(b.postedTime)
        );
      } else if (this.selectedFilter === "relatedDisease") {
        results = results.filter((result) =>
          result.tag.includes(this.searchQuery.toLowerCase())
        );
      } else if (this.selectedFilter === "mostCommented") {
        results = results.sort((a, b) => b.comments - a.comments);
      }
      return results;
    },
    content() {
      return this.contentMap[this.activeItem];
    },
  },
  methods: {
    setActiveItem(id) {
      this.activeItem = id;
      if (id === "ai-advice") {
        this.startTypingEffect();
      }
    },
    results() {
      alert("Results button clicked");
    },
    save() {
      alert("Save button clicked");
    },
    applyFilter() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 500);
    },
    parseTime(timeString) {
      const timeUnits = {
        min: 1,
        h: 60,
        Day: 1440,
        Week: 10080,
        Month: 43800,
      };
      const timeValue = parseInt(timeString.match(/\d+/)[0]);
      const timeUnit = timeString.match(/[a-zA-Z]+/)[0];
      return timeValue * timeUnits[timeUnit];
    },
    startTypingEffect() {
      const text = `To manage allergies and asthma effectively, identify and avoid triggers such as allergens
(pollen, dust mites, pet dander, mold) and irritants (tobacco smoke, pollution). Use prescribed medications
like inhalers for asthma and antihistamines for allergies, and consider allergen immunotherapy if needed.
Maintain a clean home environment with air purifiers and regular cleaning, and manage pet exposure by
bathing pets and keeping them out of certain areas.
Follow a balanced diet, exercise regularly, and practice stress management techniques. Develop and adhere to
an asthma and allergy action plan with your doctor, ensuring you have emergency medications and contacts
readily available. Regular medical follow-ups and staying informed about your condition are crucial for
optimal management.`;

      let index = 0;

      function type() {
        if (index < text.length) {
          document.getElementById("result-ai").innerHTML += text.charAt(index);
          index++;
          setTimeout(type, 30); // Adjust the speed of typing (50ms per character)
        }
      }

      document.getElementById("result-ai").innerHTML = ""; // Clear the content before starting the effect
      type();
    },
  },
  mounted() {
    if (this.activeItem === "ai-advice") {
      this.startTypingEffect();
    }
  },
});
