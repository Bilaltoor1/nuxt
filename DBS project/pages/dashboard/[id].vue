<template>
  <div class="dashboard">
    <h1>Update Your Blogs</h1>
    <div class="create-blog">
      <input type="number" v-model="id" placeholder="id...">
      <input type="text" v-model="author" placeholder="author...">
      <input type="text" v-model="title" placeholder="title...">
      <textarea id="description" v-model="description" placeholder="description..."></textarea>
      <textarea id="explaination" v-model="explaination" placeholder="explaination ..."></textarea>
      <select name="blogtype" id="blohtype" v-model="blogtype">
        <option value="informative">informative</option>
        <option value="comercial">comercial</option>
      </select>
      <div class="button-container">
        <button class="btn" @click="$router.push('/blog')">Cancel</button>
        <button class="update-btn " @click="updateBlog">Update Blog</button>
      </div>

    </div>
  </div>
</template>

<script setup>
import axios from 'axios';

const blog = ref([])

const route = useRoute();
const ID = route.params.id;
console.log(ID)


await axios.get(`http://localhost:3001/blog/${ ID }`).then(d => {
  blog.value = d.data[ 0 ]
}).catch(e => {
  console.log(e)
});

let id = ref(blog.value.id);
let author = ref(blog.value.author);
let title = ref(blog.value.title);
let description = ref(blog.value.description);
let explaination = ref(blog.value.explaination);
let blogtype = ref(blog.value.blogtype)

// console.log(blog.value);


const updateBlog = async () => {
  await axios.put(`http://localhost:3001/blog/${ID}`, {
    id: id.value,
    author: author.value,
    title: title.value,
    description: description.value,
    explaination: explaination.value,
    blogtype: blogtype.value
  }).then(d => {
    console.log(d)
  }).catch(e => {
    console.log(e)
  });
}

</script>

<style lang="scss">
.btn {
  outline: none;
  border: none;
  padding: .6rem 2rem;
  cursor: pointer;
  color: black;
  background-color: #00dc82;
}

input {
  padding: 1rem 2rem;
}

.create-blog {
  width: 500px;
  gap: 3rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 4rem auto;
  padding: 1rem;
  border: 2px solid #00dc82;
}

textarea {
  padding: 2rem;
}

.dashboard {
  width: 100%;
  height: 100%;
  padding: 4rem;

  h1 {
    font-size: 3rem;
    color: #00dc82;
  }
}

.button-container {
  display: flex;
}
</style>