<script>
    export default{
        emits: ['sendData'],
        created() {
            this.$emit('sendData',this.blogArray)
        },
        data() {
            return {
                newTitle: '',
                newDate: '',
                newText: '',
                id: 0,
                blogArray: []
            }
        },
        methods: {
            addText() {
                this.blogArray.push({
                    id: this.id++, 
                    title: this.newTitle, 
                    date: this.newDate, 
                    text: this.newText
                })
                this.newTitle =''
                this.newDate = ''
                this.newText = ''
            }
        }
    }
</script>

<template>
    <form @submit.prevent="addText">
        <input v-model="newTitle" placeholder="Title">
        <input v-model="newDate" placeholder="Date">
        <input v-model="newText" placeholder="Text">
        <button>投稿する</button>
    </form>
</template>