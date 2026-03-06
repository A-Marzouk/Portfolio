<template>
  <div class="overflow-x-hidden border-gray-200 border-b">
    <div class="get-to-know-me container-inner mx-auto text-xl pb-16 relative">
      <h2 id="about" class="font-bold mb-6">Get to know me:</h2>

      <div class="absolute left-0" style="top: 50px; transform: translateX(-100%)">
        <svg width="170px" height="170px"><use xlink:href="#dots-triangle" /></svg>
      </div>

      <div class="flex flex-col sm:flex-row justify-between items-center mb-16">
        <div>
          <img :src="require('~/assets/img/portfolio-image.png')" alt="avatar" class="w-32 h-32 rounded-full mb-8 lg:mb-0" />
        </div>
        <div class="flex-1 text-lg sm:text-xl ml-6">
          I'm a Senior Full Stack Developer with over 5 years of experience building web applications, IoT systems, and mobile apps.
          Currently based in <a href="https://www.edmonton.ca/">Edmonton, AB</a> and pursuing a Master's in Computer Science at
          <a href="https://www.gatech.edu/">Georgia Institute of Technology</a>. I'm proficient in the LEMP stack, Python, and modern
          JavaScript frameworks. I speak English, Russian, Ukrainian, and Arabic, bringing a multicultural perspective to every team I work with.
        </div>
      </div>
    </div>
  </div>
</template>
