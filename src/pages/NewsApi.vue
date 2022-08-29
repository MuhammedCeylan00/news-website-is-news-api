<template>
    <div id="NewsApi">
      <h1>News</h1>
       <div class="header">
      <ButtonComponents v-for='(item,index) in categories' :key="index" :category="item" 
      @updateCategoryButton="updateCategory" />
       </div>
       <div class="container">
        <div v-for='(item,index) in lists' :key="index" class="cards">
        <div class="author">{{item.author}}</div>
        <div class="title">{{item.title}}</div>
        <div class="img"><img v-bind:src="item.urlToImage"></div>
        <div class="description">{{item.description}}</div>
          <div class="detail">
            <button>
            <router-link class="routerLink" :to="`${urlData}/${index}`"><p class="message">detail <span class="readSpan">okundu</span></p>
            </router-link>
            </button>
            </div>
            <router-view></router-view>
       </div>
       </div>
    </div>
</template>

<script>
import axios from "axios";
import ButtonComponents from "@/components/ButtonComponents.vue";
export default {
    name: "NewsApi",
    mounted() {
        this.url = "https://newsapi.org/v2/top-headlines?country=tr&apiKey=c4162774b9b4413b94c135ca208cea50";
        axios.get(this.url)
            .then(response => {
            this.lists = response.data.articles;
            console.log(this.lists);
            this.urlData = "topheadlines";
        });
    },
    data() {
        return {
            lists: [],
            category: "business",
            urlData: "",
            getCategory:"",
            categories:["business","entertainment","general","health","science","sports","technology"]
        };
    },
    methods: {
        updateCategory(getCategory) {
            this.url = "https://newsapi.org/v2/top-headlines?country=tr&category=" + getCategory+ "&apiKey=c4162774b9b4413b94c135ca208cea50";
            axios.get(this.url)
                .then(response => {
                this.lists = response.data.articles;
                console.log(this.url);
            });
        },
    },
    components: {  ButtonComponents }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,900&display=swap');
*{
  font-family: 'Lato', sans-serif;
    margin: 0;
    padding: 0;
}
.NewsApi{
  display: flex;
  justify-content: center;
  align-items: center;
}
.header{
 display: flex;
 justify-content: center;
 padding-bottom: 10px;
}
.header h1{
color: rgb(14, 4, 23);
  font-size: 2rem;
  font-style:unset;
}
.buttons{
  width: 100%;
}
.buttons{
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
  align-items: center;
  justify-content: center;
  margin: 5px;
  float: left;
  width: 400px;
  height: 600px;
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
  padding-left: 2.5rem;
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
  height: 30px;
  color: white;
}
.detail button{
  width: 4rem;
  border: none;
  color: white;
  background-color: white;
  border-radius: 5px;
  height: 50px;

}
.routerLink{
  text-decoration: none;
}
/* .readSpan{
  color: white;
  padding-top: 20px;
  font-style: italic;
  font-size:15px;
}  */
/* .routerLink:visited{
  color: rgb(255, 0, 0);
} */

.detail button:visited{
 background-color: blue;
}

</style>