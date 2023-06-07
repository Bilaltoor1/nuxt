<template>

  <div class="blog" id="blog">
    <div class="blog-img">
      <img src="/mailchimp-mpwF3Mv2UaU-unsplash.jpg" alt="blog-main-photo">
    </div>
    <h3 class="blog-title">
      <span>Blog Title : </span>
      {{ data.title }}
    </h3>
    <h4 class="blog-description">
      <span>Description :</span>
      {{ data.description }}
    </h4>
    <p class="blog-explanation">
      <span>Explaination :</span>
      {{ data.explaination }}</p>
    <h3 class="blog-author">
      <span>Author :</span>
      {{ data.author }}</h3>
    <p class="blog-type">{{ data.blogtype }}</p>
    <div class="buttons">
      <button class="del-btn " @click="DeleteBlog">Delete Blog</button>
      <button class="update-btn " @click="$router.push(`/dashboard/${data.id}`)">Update Blog</button>
    </div>
    <teleport to="body">
      <div class="popup" v-show="isDeleted">
        <p>Your Blog Is Successfully Deleted ...</p>
        <button class="del-btn" @click="$router.push('/blog')">GO HOME</button>
      </div>
    </teleport>
  </div>

</template>
<style lang="scss">
@import "public/css/global";

.blog {
  width: 100%;
  min-height: 100vh;
  padding: 5rem;
}

.blog-img {
  width: 100%;
  height: 500px;
  margin-bottom: 2.5rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.blog-title {
  font-size: 2rem;
  color: #00dc82;

  span {
    color: $grey-1;
    font-weight: 700;
  }
}

.blog-description {
  width: 100%;
  height: max-content;
  font-size: 1.5rem;
  padding: 3rem 1rem;
  border: 2px solid #00dc82;
  margin-top: 4rem;
  margin-bottom: 4rem;

  span {
    color: $grey-1;
    font-weight: 700;
  }
}

.blog-explanation {
  font-size: 1.3rem;
}

.blog-author {
  font-size: 2rem;
  color: #00dc82;
}

.blog-type {
  font-size: 1.5rem;
}

.btn {
  outline: none;
  border: none;
  padding: .6rem 2rem;
  cursor: pointer;
  color: white;
}

.del-btn {
  background-color: $red-6;
  outline: none;
  border: none;
  padding: .6rem 2rem;
  cursor: pointer;
  color: white;
}

.update-btn {
  background-color: $green-8;
  margin-left: 2rem;
  outline: none;
  border: none;
  padding: .6rem 2rem;
  cursor: pointer;
  color: white;
}

.popup {
  width: 400px;
  height: max-content;
  padding: 2rem;
  background-color: #00dc82;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .btn {
    color: black;
  }

  p {
    color: white;
    font-size: 1.2rem;
  }
}

span {
  color: $grey-1;
  font-weight: 700;
}

.popup-container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: absolute;
}
</style>
<script setup>

import axios from 'axios';
const router = useRouter();
const route = useRoute();
const id = Number(route.params.id)
const isDeleted = ref(false)
let data = ref([])
await axios.get(`http://localhost:3001/blog/${ id }`).then(d => {
  data.value = d.data[ 0 ]
}).catch(e => {
  console.log(e)
});


const DeleteBlog = async () => {
  await axios.delete(`http://localhost:3001/blog/${ id }`).then(d => {
    isDeleted.value = true
    console.log(d)
  }).catch(e => {
    console.log(e)
  });
}
const UpdateBlog = async () => {
  router.push('/dashboard');


  await axios.put(`http://localhost:3001/blog/${ id }`).then(d => {
    data.value = d.data[ 0 ]
  }).catch(e => {
    console.log(e)
  });
}
</script>