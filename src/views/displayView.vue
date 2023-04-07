<script>
export default{
    name: displayView,
    props: {
        blogArray: {
            type: Array,
            required: true
        }
    }
}
</script>
<template>
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