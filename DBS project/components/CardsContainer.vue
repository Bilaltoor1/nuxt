<template>
  <section class="card-section">
    <h1 class="card-section-heading">
      Trending Blogs 👌👌
    </h1>
    <div class="cards-container">
      <div v-for="blog in data" :key="blog.id" @click="$router.push(`/blog/${blog.id}`)">
        <CardComp :title="blog.title" :author="blog.author"/>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.card-section {
  width: 100%;
  min-height: 100vh;
}

.card-section-heading {
  color: #00dc82;
  font-size: 3rem;
  font-weight: 600;
  text-align: center;
}

.cards-container {
  margin-top: 8rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 4rem;
  padding-left: 4rem;
  width: 100%;
  height: 100%;
  padding-bottom: 4rem;
}
</style>
<script setup>
import CardComp from './cardComp';
import axios from 'axios';

let data = ref([])
axios.get('http://localhost:3001/all-blogs').then(d => {
  data.value = d.data
}).catch(e => {
  console.log(e)
});
</script>