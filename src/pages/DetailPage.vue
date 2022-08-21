<template>
    <div id="DetailPage">
      <div class="container2">
      <h1>News</h1>
<div class="description">{{lists[id].description}}</div>
<div class="imgcontent">
<img v-bind:src="lists[id].urlToImage">
        <div class="content">
          {{lists[id].content}}
        </div>
        </div>
         <p>{{lists[id].description}}</p>
         </div>
       </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'DetailPage',
  mounted() {
    if(this.category!="topheadlines"){
       this.url="https://newsapi.org/v2/top-headlines?country=tr&category="+this.category+"&apiKey=c4162774b9b4413b94c135ca208cea50";
       axios.get(this.url)
      .then(response=>{
        this.lists=response.data.articles;
        console.log(this.lists);
        console.log("id>>>>>>>>>>>>>>>",this.id)
      })
    }else{
       this.url="https://newsapi.org/v2/top-headlines?country=tr&apiKey=c4162774b9b4413b94c135ca208cea50"
       axios.get(this.url)
      .then(response=>{
        this.lists=response.data.articles;
        console.log(this.lists);
        console.log("id>>>>>>>>>>>>>>>",this.id)
      })
    }
    
  },
    
  data(){
        return{
      lists:[
      ],
      id:this.$route.params.id,
      category:this.$route.params.category,
      okundu:""
    }
  },

  methods:{
    } 
}
</script>
<style>
.container2{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
h1{
  color:black;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 3rem;
  padding-bottom: 2rem;
}
.description{
  width: 75%;
  color: rgb(255, 0, 0);
  padding-bottom: 2rem;
}
.imgcontent{
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 10rem;
  padding-right: 10rem;
  width: 65%;
  padding-bottom: 3rem;
}

.imgcontent img{
  width: 40%;
}
.imgcontent .content{
  color: black;
  font-size: 100%;
}
.container2 p{
  width: 75%;
  color: black;
  font-size: 100%;
}
</style>


