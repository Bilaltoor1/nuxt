<template>
  <div>
    <NuxtLayout name="custom">
      <SignUp/>
    </NuxtLayout>
  </div>
</template>
<script setup>
// import HeroSection from '../../components/HeroSection';
import SignUp from '../../components/signup';

definePageMeta({
  layout: false,
})

</script>