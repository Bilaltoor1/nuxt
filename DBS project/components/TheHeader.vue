<template>
  <header class="header">
    <div class="logo" @click="$router.push('/')">
      <img src="svgs/logo.svg" alt="logo">
    </div>
    <ul class="header-list">
      <li class="header-item">
        <Nuxt-link class="header-link" to="/">Home</Nuxt-link>
      </li>
      <li class="header-item">
        <Nuxt-link class="header-link" to="/blog">Blogs</Nuxt-link>
      </li>
      <li class="header-item">
        <Nuxt-link class="header-link" to="/dashboard">Dashboard</Nuxt-link>
      </li>
      <li class="header-item">
        <Nuxt-link class="header-link" to="/login">Login / Sign Up</Nuxt-link>
      </li>
    </ul>
  </header>
</template>

<style lang="scss">
@import "../public/css/global";

.header {
  height: 4rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  //position: fixed;
  background-color: $grey-12;
  z-index: 1000;
  border-bottom: 1px solid #00dc82 ;
  transition: background-color 1s;
}
.header:hover{
  background-color: $grey-1;
}

.logo {
  width: max-content;
  margin-left: 2rem;
  height: 80%;
  align-self: center;
 cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
}

.header-list {
  display: flex;
  margin-right: 2rem;
  width: 30%;
  justify-content: space-around;
  align-items: center;

  .header-item {
    list-style: none;

    .header-link {
      font-size: 1.2rem;
      color: #00dc82;
      transition: color .4s;
      cursor: pointer;
    }

    .header-link:hover {
      color: $green-12;
      text-shadow: $dark-shadow-12;
    }
  }
}
</style>


<script setup>
</script>