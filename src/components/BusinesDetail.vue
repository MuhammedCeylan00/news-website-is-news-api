<template>
    <div id="BusinesDetail">
       <div class="header">
        <h1>{{lists[id].author}}</h1>
      <div class="page">
        <img v-bind:src="lists[id].urlToImage">
         <p>{{lists[id].description}}</p>
      </div>
       </div>
    </div>
</template>

<script>
import axios from "axios";


export default {
  name: 'BusinesDetail',
  mounted() {
        this.url="https://newsapi.org/v2/top-headlines?country=tr&category=business&apiKey=c4162774b9b4413b94c135ca208cea50";
       axios.get(this.url)
      .then(response=>{
        this.lists=response.data.articles;
        console.log(this.lists);
        console.log("id>>>>>>>>>>>>>>>",this.id)
      })
  },
    
  data(){
        return{
      lists:[
      ],
      id:this.$route.params.id,
      okundu:""
    }
   
  },
  methods:{
    

    }
    
}
</script>


