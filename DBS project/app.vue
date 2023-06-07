<template>
  <div class="app">
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>


<style lang="scss">
@import './public/css/global';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}

.app {
  background-color: $grey-14;
  min-height: 100vh;
}

body::-webkit-scrollbar {
  width: .5em;
}

body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

body::-webkit-scrollbar-thumb {
  background-color: #00dc82;
  outline: 1px solid slategrey;
}
</style>
<script setup>

import TheHeader from './components/TheHeader';
import Footer from './components/Footer';

const layout = 'custom'

const { pending , data } =  await useFetch('http://localhost:3001/all-blogs');
console.log(data.value)

</script>