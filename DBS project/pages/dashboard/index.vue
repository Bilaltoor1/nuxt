<template>
  <div class="dashboard">
    <h1>Create New Blogs</h1>
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
      <button class="btn" @click="CreateBlog">Create Blog</button>
<!--      <button class="update-btn "  @click="$router.push(`/dashboard/update-1}`)">Update Blog</button>-->
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
const isUpdate = ref(false)
const id = ref(null);
const author = ref(null);
const title = ref('');
const description = ref('');
const explaination = ref('');
const blogtype = ref('')
const CreateBlog = async () => {
  console.log(id.value, author.value, title.value, description.value, explaination.value, blogtype.value)
  await axios.post(`http://localhost:3001/all-blogs`, {
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

const UpdateBlog = () => {
  console.log('updated..')
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
</style>