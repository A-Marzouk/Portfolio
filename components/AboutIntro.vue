<template>
  <div class="container-inner mx-auto">
    <p class="text-lg sm:text-xl">
      Greetings! I'm Ahmed. I spend my days designing and developing web applications,
      I specialize in the <a href="https://laravel.com/">Laravel PHP framework</a> on the backend,
      <a href="https://vuejs.org/">Vue.js</a> and <a href="https://react.dev/">React.js</a> on the frontend and other wide range of different technologies.
      you can take a look at my <a href="https://www.linkedin.com/in/find-ahmed-marzouk/">LinkedIn account</a>
      or send me an email at <a href="mailto:contact@ahmedmarzouk.net">contact@ahmedmarzouk.net</a>.
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
