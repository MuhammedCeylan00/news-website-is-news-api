<template>
    <div id="buttons">
    <button @click="updateCategoryButton">{{category}}</button>
</div>
</template>

<script>

export default{
    props: {
        category : {type:String}
    },
     methods: {
        updateCategoryButton(){
        this.$emit('updateCategoryButton',this.category)
       }
    }
    }
   
</script>


<style>
#buttons{
    width: 7%;
    padding: 5px;
}
button{
    width: 100%;
    background-color:rgb(134, 106, 233);
    border: none;
    height: 25px;
    padding-bottom: 4px;
    border-radius: 3px;
}
</style>