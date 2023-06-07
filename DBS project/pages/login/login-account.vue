<template>
  <NuxtLayout name="custom">
    <Login/>
  </NuxtLayout>
</template>
<script setup>
import Login from '../../components/login'
definePageMeta(
    {
      layout: false
    }
)
</script>