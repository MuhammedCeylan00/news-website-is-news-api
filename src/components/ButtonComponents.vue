<template>
    <button>{{category}}</button>
</template>

<script>

export default{
    props:['category'],
     methods: {
       getCategory(){
        this.$emit("categories",this.category)
       }
    }
    }
   
</script>


<style>
button{
    width: 10px;
    height: 50px;
}
</style>