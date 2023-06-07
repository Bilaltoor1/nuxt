<template>
  <div class="card">
    <div class="card-img">
      <img src="/mailchimp-mpwF3Mv2UaU-unsplash.jpg" alt="card-img">
    </div>
    <div class="card-content">
      <p class="card-author">{{ props.author }}</p>
      <p class="card-description">{{ props.title }}
      </p>
      <button class="card-read-more">Read more</button>
    </div>
  </div>
</template>
<script setup>
const props = defineProps([ 'title', 'author' ])
</script>
<style lang="scss">
@import "public/css/global";

.card {
  border: 1px solid #00dc82;
  width: 300px;
  height: 400px;
  background-color: #00dc82;
  box-shadow: $shadow-up-24 #00dc82;

  .card-img {
    height: 50%;
    width: 100%;
    border-bottom-left-radius: 20%;

    img {
      width: 100%;
      height: 100%;
      border-bottom-left-radius: 20%;

      object-fit: cover;
    }
  }

  .card-content {
    border-top-right-radius: 20%;
    background-color: rgba(255, 255, 255, 0.62);
    padding: 1rem;
    height: 50%;

    .card-description {
      font-size: 1.1rem;
      color: black;
      width: 100%;
      min-height:40% ;
    }

  }
}

.card-read-more {
  text-align: center;
  background-color: #00dc82;
  padding: .3rem .5rem;
  outline: none;
  border: none;
  color:white;
  cursor: pointer;
  transition: all 1s ;
}
.card-read-more:hover{
  color: #00dc82;
  background-color: white;
}

</style>