Vue.createApp({
    data(){
        return {
            heroSelect: "",
            avengerSelect: [],
            myDyanamic: "",
            myBonds: [
                {text: 'Anubhav', value: 6},
                {text: 'Rishi', value: 31},
                {text: 'Anurag', value: 7},
                {text: 'Aryan', value: 9},
            ],
        }
    }
}).mount('#vapp')