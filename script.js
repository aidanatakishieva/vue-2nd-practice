const App = {
    data() {
      return {
        selected: '',
        categories: ['science', 'math', 'poetry', 'history'],
        posts: [
          {
            author: '@mDean',
            title: 'Magnam Odit',
            label: 'science'
          },
          
          {
            author: '@jCooper',
            title: 'Eum Commodi Cupiditate',
            label: 'poetry'
          },
          {
            author: '@lLamb',
            title: 'Amet',
            label: 'history'
          },
        
        ],
        newTitle: '',
        newAuthor: '',
        newLabel: '',
      }
    },
    methods: {
      addPost() {
        let addedPost = {
          author: this.newAuthor,
          title: this.newTitle,
          label: this.newLabel
        }
        this.posts.push(addedPost)
        this.newTitle = '';
        this.newAuthor = '';
        this.newLabel = '';
      }
    },
    computed: {
      filteredByLabel() {
        let filter = new RegExp(this.selected, 'i')
        return this.posts.filter(el => el.label.match(filter))
      }
    }
  }
  
  Vue.createApp(App).mount('#app')