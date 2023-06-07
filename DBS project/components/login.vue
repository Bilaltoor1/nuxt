<template>
  <div class="login-section">
    <div class="login-img">
      <img src="~/public/mailchimp-mpwF3Mv2UaU-unsplash.jpg" alt="login-img">
    </div>
    <div class="login-content">
      <h4><span>Login</span> Here ✔✔</h4>
      <form action="" id="form" @submit.prevent="SendFormData">
        <label for="email">Email</label>
        <input type="email" placeholder="email" id="email" v-model="email">
        <label for="password">Password</label>
        <input type="password" placeholder="password" id="password" v-model="password">
        <input type="submit" value="SUBMIT" id="submit">
      </form>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'

const email = ref('')
const password = ref('')

const SendFormData = () => {
  const user = {
    id: Math.random() * 2,
    name: name.value,
    email: email.value,
    password: password.value
  }
  axios.post('/users', user).then((data) => {
    console.log(data)
  }).catch((e) => {
    console.log(e)
  })
}

</script>


<style lang="scss">
@import "../public/css/global";

.login-section {
  width: 100%;
  height: calc(100vh);
  position: relative;
  overflow: hidden;

  .login-img {
    width: 100%;
    height: 100%;
    filter: blur(8px);
    -webkit-filter: blur(8px);

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      opacity: 20%;
    }
  }

  .login-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    h4 {
      color: $grey-1;
      margin-bottom: 2rem;

      span {
        color: #00dc82;
      }
    }

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


    .login-heading {
      text-align: center;
      text-transform: capitalize;
      font-size: 3rem;
      font-weight: 600;
      color: #00dc82;

      span {
        color: $grey-1;
      }
    }
  }
}

#form {
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 100%;
  padding: 4rem;
  border: 2px solid #00dc82;
}

#name, #email, #password, #submit {
  height: 40px;
}

#name {
  margin-bottom: 1rem;
}

#email {
  margin-bottom: 1rem;
}

#password {
  margin-bottom: 1rem;

}

#submit {
  margin-bottom: 1rem;
}

input {
  outline: none;
  font-size: 1rem;
  color: #00bfa5;
  padding-left: 1rem;
}

input:focus {
  border: 1px solid #00dc82;
}

label {
  font-size: 1.2rem;
  color: #00dc82;
  font-weight: 400;
  text-align: left;
}

input::placeholder {
  font-size: 1rem;
  color: #00bfa5;
  //padding-left: 1rem;
}
.login-page{
  background-color: transparent;
}
</style>