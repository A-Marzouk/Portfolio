<template>
  <div class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between py-16">
    <div class="w-full sm:w-3/5 text-center sm:text-left">
      <h1 class="text-4xl font-bold leading-tight">Senior Full Stack Developer</h1>
      <h2 class="text-2xl text-green-700 font-semibold mt-2">IoT | Cloud | Mobile | Web</h2>
      <p class="text-lg text-gray-600 mt-4">
        5+ years building scalable web apps, IoT systems, and mobile solutions. Currently pursuing M.S. Computer Science at Georgia Tech.
      </p>
      <div class="flex flex-col sm:flex-row items-center gap-4 mt-8">
        <a href="/resume.pdf" download style="color: #fff" class="bg-green-700 text-white rounded px-6 py-3 hover:bg-green-800 transition">Download Resume</a>
        <a href="#contact" class="border border-green-700 text-green-700 rounded px-6 py-3 hover:bg-green-50 transition" @click.prevent="scrollToContact">Contact Me</a>
      </div>
    </div>
    <div class="mt-8 sm:mt-0">
      <img :src="require('~/assets/svg/developer.svg')" alt="hero" class="mx-auto sm:mx-0" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToContact() {
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>
