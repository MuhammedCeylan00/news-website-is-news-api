<template>
    <div id="NewsApi">
       <div class="header">
        <h1>News Api </h1>
        <router-view></router-view>
        <button @click="Busines()">Busines</button>
        <button @click="Entartaintment()">Entertainment</button>
        <button @click="General()">General</button>
        <button @click="Health()">Health</button>
        <button @click="Science()">Science</button>
        <button @click="Sports()">Sports</button>
        <button @click="Technology()">Technology</button>
       </div>
       <div class="container">
        <div v-for='(item,index) in lists' :key="index" class="data">
          <div><h3>{{item.title}}</h3>{{item.content}}<button>
            <router-link :to="`${urlData}/${index}`">Detail</router-link>
            </button><span>{{okundu}}</span></div>
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
      })
  },
    
  data(){
        return{
      lists:[
      ],
    category:"business",
    okundu:"",
    urlData:"business"
    }
   
  },
  methods:{
    Busines(){
      this.urlData="business"
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
      this.urlData="entertainment"
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
*{
    margin: 0;
    padding: 0;
}
.header{
    margin-top: 0px;
}
button{
    width: 8rem;
    height: 2rem;
    margin: 0.5rem;
    background-color: rgb(175, 175, 196);
    color:white;
    border-radius: 10px;
    margin-top: 200px;
}
.container{
   max-width: 1250px;
   margin: auto;
   background: #f2f2f2;
   overflow: auto;
}
.data{
  margin: 5px;
  border: 1px solid rgb(63, 30, 209);
  float: left;
  width: 400px;
  height: 400px;
}
.desc{
  padding: 15px;
  text-align: center;
}
button :visited{
  background-color: aliceblue;
}

</style>