console.log("i'm working");

// older method
const App = {
    data(){
        return { name : "Anubhav Sethi"}
    }
}
Vue.createApp(App).mount('#app')

// newer method
Vue.createApp({
    data(){
        return { name : "Happy"}
    }
}).mount('#anotherapp')