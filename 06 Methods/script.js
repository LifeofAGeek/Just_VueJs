const App = {
    data(){
        return{
            cart : [],
            courseList : [{
                id: "lco1",
                courseName: "Django Full stack",
                subtitle: "Learn Django with postgres",
                price: 199,
                courseImage: "django.png",
                url: "https://web.learncodeonline.in/"
            }, {
                id: "lco2",
                courseName: "Interview Preparation",
                subtitle: "Crack the FAANG Interview",
                price: 1999,
                courseImage: "interview.png",
                url: "https://web.learncodeonline.in/"
            }, {
                id: "lco3",
                courseName: "React Native",
                subtitle: "Build Mobile Apps",
                price: 299,
                courseImage: "rn.png",
                url: "https://web.learncodeonline.in/"
            }]
        }
    },
    computed: {
        finalCartValue(){
           return this.cart.reduce((accumulator, course) => (course.price + course.price*0.18) + accumulator,0)
        }
    },
    methods: {
        addToCart(course){
            this.cart.push(course)
        }
    }
}
Vue.createApp(App).mount('#cards')