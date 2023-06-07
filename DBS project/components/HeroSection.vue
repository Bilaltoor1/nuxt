<template>
  <div class="hero-section">
    <div class="hero-img">
      <img src="/mailchimp-mpwF3Mv2UaU-unsplash.jpg" alt="hero-img">
    </div>
    <div class="hero-content">
      <h1 class="hero-heading">Journey of <span>Thoughts:</span> Roaming the Blogging Universe</h1>
      <Nuxt-link>Get More</Nuxt-link>
    </div>
  </div>
</template>

<style lang="scss">
@import "public/css/global";

.hero-section {
  width: 100%;
  height: calc(100vh - 5rem);
  position: relative;

  .hero-img {
    width: 100%;
    height: 100%;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      opacity: 20%;
    }
  }

  .hero-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    a {
      display: inline-block;
      padding: 10px 30px;
      color: #00dc82;
      border: none;
      font-size: 120%;
      cursor: pointer;
      font-weight: 500;
      background-color: $grey-1;
      text-decoration: none;
      transition: background-color 0.3s ease;
    }

    a:hover {
      background-color: #00dc82;
      color: $grey-1;
    }


    .hero-heading {
      text-align: center;
      text-transform: capitalize;
      font-size: 3rem;
      font-weight: 600;
      color: #00dc82;
      span {
        color:$grey-1;
      }
    }
  }
}

</style>