<template>
  <footer class="footer">
    <!-- Footer content goes here -->
    <div class="copyRight">
      <img src="/svgs/logo.svg" alt="logo">
      <h3>Air University And <span>Bilal Toor & Qasim Gillani 👿</span> Own All the Authority..</h3>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  height: 300px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* Add additional styling as needed */
  .copyRight {
   height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h3{
    color: white;
    font-size: 1.5rem;
    margin-left: 1rem;
    span{
      color: #00dc82;
    }
  }
  img{
    width: 60px;
  }
}
</style>