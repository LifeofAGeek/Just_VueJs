<template>
<main>
    <h1>Counter App</h1>
    <p>Current Count</p>
    <p class="count">{{finalCount}}</p>

    <div class="buttonContainer">
        <button @click="inc()">Increase</button>
        <button @click="dec()">Decrease</button>
        <button @click="reset()">Reset</button>
    </div>

</main>
</template>

<script>
export default{
    name : "Counter App",
    data(){
        return {
            count : 0,
        }
    },
    methods:{
        inc(){
            this.count<20?this.count++:20
        },
        dec(){
            this.count>0?this.count--:0
        },
        reset(){
            this.count=0
        }
    },
    computed:{
        finalCount(){
            return this.count
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap');

* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}
html {
	font-family: 'Roboto', sans-serif;
}
main {
	height: 100vh;
	width: 100%;
	background-image: url('./assets/lco-counter-bg.jpg');
	background-position: center;
	background-size: cover;
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-items: center;
}
h1 {
	font-size: 65px;
	margin: 20px 0;
	color: #cad5e2;
	text-transform: uppercase;
	font-weight: 900;
	text-align: center;
}
p {
	font-size: 28px;
	margin: 20px 0;
	color: #e1eb57;
}
.buttonContainer {
	display: flex;
	flex-direction: column;
}
button {
	padding: 15px 100px;
	margin: 20px 0;
	font-size: 18px;
	text-transform: uppercase;
	border-radius: 25px;
	outline: none;
	border: none;
	background-color: #8d3daf;
	color: #fff;
	transition: all 0.5s ease;
	cursor: pointer;
}
button:hover {
	/* transform: translateY(-5px); */
	transform: scale(1.04);
	color: #f8dc81;
}
.count {
	color: #f8dc81;
}
</style>