<template>
    <div id="NewsApi">
       <div class="header">
        <h1>News</h1>
        <div class="buttons">
          <button @click="Busines()">Busines</button>
        <button @click="Entartaintment()">Entertainment</button>
        <button @click="General()">General</button>
        <button @click="Health()">Health</button>
        <button @click="Science()">Science</button>
        <button @click="Sports()">Sports</button>
        <button @click="Technology()">Technology</button>
        </div>
       </div>
       <div class="container">
        <div v-for='(item,index) in lists' :key="index" class="cards">
        <div class="author">{{item.author}}</div>
        <div class="title">{{item.title}}</div>
        <div class="img"><img v-bind:src="item.urlToImage"></div>
        <div class="description">{{item.description}}</div>
          <div class="detail">
            <button>
            <router-link :to="`${urlData}/${index}`">Detail</router-link>
            </button>
            <span>{{okundu}}</span></div>
            <router-view></router-view>
       </div>
       </div>
    </div>
</template>

<script>
import axios from "axios";


export default {
  name: 'NewsApi',
  mounted() {
    this.url="https://newsapi.org/v2/top-headlines?country=tr&apiKey=c4162774b9b4413b94c135ca208cea50"
       axios.get(this.url)
      .then(response=>{
        this.lists=response.data.articles;
        console.log(this.lists);
        this.urlData="topheadlines"
      })
  },
    
  data(){
        return{
      lists:[
      ],
    category:"business",
    okundu:"",
    urlData:""
    }
   
  },
  methods:{
    Busines(){
      this.urlData="busines"
      console.log("Business");
        this.category="business",
         this.url="https://newsapi.org/v2/top-headlines?country=tr&category="+this.category+"&apiKey=c4162774b9b4413b94c135ca208cea50";
         axios.get(this.url)
      .then(response=>{
        this.lists=response.data.articles;
        console.log(this.lists);
      })
      this.okundu="okundu"
    },
    Entartaintment(){
      this.urlData="entartaintment"
      console.log("Entartaintment");
        this.category="entertainment",
         this.url="https://newsapi.org/v2/top-headlines?country=tr&category="+this.category+"&apiKey=c4162774b9b4413b94c135ca208cea50";
         axios.get(this.url)
      .then(response=>{
        this.lists=response.data.articles;
        console.log(response);
      })
    },
    General(){
      this.urlData="general"
       console.log("General");
        this.category="general",
         this.url="https://newsapi.org/v2/top-headlines?country=tr&category="+this.category+"&apiKey=c4162774b9b4413b94c135ca208cea50";
         axios.get(this.url)
      .then(response=>{
        this.lists=response.data.articles;
        console.log(response);
      })
    },
    Health(){
      this.urlData="health"
      console.log("Health");
        this.category="health",
         this.url="https://newsapi.org/v2/top-headlines?country=tr&category="+this.category+"&apiKey=c4162774b9b4413b94c135ca208cea50";
         axios.get(this.url)
      .then(response=>{
        this.lists=response.data.articles;
        console.log(response);
      })
    },
    Science(){
      this.urlData="science"
      console.log("Science");
        this.category="science",
         this.url="https://newsapi.org/v2/top-headlines?country=tr&category="+this.category+"&apiKey=c4162774b9b4413b94c135ca208cea50";
         axios.get(this.url)
      .then(response=>{
        this.lists=response.data.articles;
        console.log(response);
      })
    },
    Sports(){
      this.urlData="sports";
      console.log("Sports");
        this.category="sports",
         this.url="https://newsapi.org/v2/top-headlines?country=tr&category="+this.category+"&apiKey=c4162774b9b4413b94c135ca208cea50";
         axios.get(this.url)
      .then(response=>{
        this.lists=response.data.articles;
        console.log(response);
      })
    },
    Technology(){
      this.urlData="technology"
      console.log("Technology");
        this.category="technology",
         this.url="https://newsapi.org/v2/top-headlines?country=tr&category="+this.category+"&apiKey=c4162774b9b4413b94c135ca208cea50";
         axios.get(this.url)
      .then(response=>{
        this.lists=response.data.articles;
        console.log(response);
      })
    }

    }
    
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,900&display=swap');
*{
  font-family: 'Lato', sans-serif;
    margin: 0;
    padding: 0;
}

.header{
  display: flex;
    margin-top: 0px;
    height: 3rem;
    padding-bottom: 2rem;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.header h1{
color: rgb(14, 4, 23);
  font-size: 2rem;
  font-style:unset;
}
.buttons{
  width: 100%;
}
button{
    width: 10%;
    margin: 0.5rem;
    background-color: rgb(63, 63, 191);
    color:white;
    border-radius: 10px;
    border: none;
    height: 1.5rem;
    font-size: 70%;
    font-weight: bold;
}
.container{
   max-width: 1250px;
   margin: auto;
   
}
.cards{
  margin: 5px;
  float: left;
  width: 400px;
  height: 550px;
background-color:rgb(166, 154, 208);
  box-shadow: 5px 5px 2px rgb(134, 106, 233);
  border-radius: 20px;
}
.cards .author{
  color: white;
  height: 20px;
  padding-top: 1rem;
  padding-bottom:1rem;
  font-size: 1.5rem;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.cards .title{
  height: 3rem;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  font-size: 1rem;
  color: black;
  font-weight: bold;
}
.cards .img{
  padding-bottom: 1rem;
}
.cards .description{
  font-size: 1rem;
  color: black;
  padding: 0 1rem 1rem 1rem;
}

.cards .img img{
  width: 380px;
  height: 200px;
}
.desc{
  padding: 15px;
  text-align: center;
}
.detail{
  padding-bottom: 2rem;
}
.detail button{
  width: 4rem;
  border: none;
  color: white;
  background-color: aliceblue;
  border-radius: 5px;

}

</style>