<template>
    <div>
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

</style>