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
        },
    }
</script>

<template>
    <nav>
      <router-link to="/">App</router-link>
    </nav>
    <router-view></router-view>
    <form @submit.prevent="addText">
        <input v-model="newTitle" placeholder="Title">
        <input v-model="newDate" placeholder="Date">
        <input v-model="newText" placeholder="Text">
        <button>投稿する</button>
    </form>
    <div>
        <ul>
            <li v-for="item in blogArray" :key="blogArray.id">
                {{ item.title }}
                {{ item.date }}
                {{ item.text }}
            </li>
        </ul>
    </div>
</template>