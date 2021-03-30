const App = {
    data(){
        return {
            heading : "A trip to Japan !",
            subhead : "Nature Park in Japan.",
            myImg : "japan.jpeg",
            url : "https://leetcode.com/",
        }
    }
}

Vue.createApp(App).mount('#card')