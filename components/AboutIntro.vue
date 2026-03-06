<template>
  <div class="container-inner mx-auto">
    <p class="text-lg sm:text-xl">
      I build scalable web applications, IoT integrations, and mobile solutions.
      I specialize in <a href="https://laravel.com/">Laravel</a>, <a href="https://vuejs.org/">Vue.js</a>,
      React, and Flutter with deep experience in AWS cloud services and real-time systems.
      Currently a Senior Developer at <a href="https://www.arcticspas.com/">Arctic Spas</a> and
      M.S. CS student at <a href="https://www.gatech.edu/">Georgia Tech</a>.
    </p>
    <div class="flex justify-between items-center py-6">
      <div class="w-full sm:w-1/2 px-8 py-8 sm:py-0">
        <img :src="require('~/assets/svg/mind_map.svg')" alt="browser" />
      </div>
      <div class="w-1/2 px-8 hidden sm:flex justify-end">
        <img :src="require('~/assets/svg/code_review.svg')" alt="mobile" />
      </div>
    </div>
  </div>
</template>
