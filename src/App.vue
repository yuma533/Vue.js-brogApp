<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <div>
    <nav>
      <router-link to="/postView">postView</router-link>
      <router-link to="/displayView">displayView</router-link>
    </nav>
    <router-view></router-view>
  </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>