<script>
import postView from './components/postView.vue';

export default {
	  components: {
      	postView,
	  },
    data() {
      return{
        PostView: true,
        blogArray: []
      }
    }
	}
</script>

<template>
  <div>
    <router-view />
  </div>
</template>