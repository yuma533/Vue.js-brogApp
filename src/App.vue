<script>
import postView from './views/postView.vue';
import displayView from './views/displayView.vue';

export default {
	  components: {
      	postView,
        displayView
	  },
    data() {
      return{
        PostView: true,
        DisplayView: true,
        blogArray: []
      }
    }
	}
</script>


<template>
<div>
    <postView @send-data="(t) => blogArray = t" v-if="PostView" />
    <nav>
      <display-view v-show="DisplayView" :blogArray="blogArray"></display-view>
      <router-link to="/postView" @send-data="(t) => blogArray = t">postView</router-link>
      <router-link to="/displayView" :blogArray="blogArray">/displayView</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>