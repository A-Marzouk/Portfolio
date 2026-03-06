<template>
  <header class="border-t-14 border-green-700">
    <nav class="container mx-auto flex flex-wrap justify-between items-center py-8">
      <div>
        <nuxt-link to="/">
          <img
            :src="theme === 'theme-dark' ? require('~/assets/svg/ahmed-logo-white.svg') : require('~/assets/svg/ahmed-logo.svg')"
            alt="logo"
            class="w-64"
          />
        </nuxt-link>
      </div>

      <div class="block lg:hidden">
        <button
          class="flex items-center px-3 py-2 border rounded border-gray-500 hover:text-gray-600 hover:border-gray-600"
          @click="menuOpen = !menuOpen"
        >
          <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="current-color h-3 w-3">
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" fill="gray" />
          </svg>
        </button>
      </div>

      <ul
        :class="{ hidden: !menuOpen }"
        class="uppercase tracking-wide font-bold w-full block flex-grow lg:space-x-8 space-y-6 lg:space-y-0 lg:flex lg:flex-initial lg:w-auto items-center mt-8 lg:mt-0"
      >
        <li class="mb-6 lg:mb-0"></li>
        <li>
          <a href="#" class="text-copy-primary hover:text-gray-600" @click.prevent="$emit('toggle-theme')">
            <svg v-if="theme === 'theme-light'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </a>
        </li>
        <li><a href="/#projects" class="text-copy-primary hover:text-gray-600">Projects</a></li>
        <li><a href="/#about" class="text-copy-primary hover:text-gray-600">About</a></li>
        <li><a href="/#contact" class="text-copy-primary hover:text-gray-600">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    theme: {
      type: String,
      default: 'theme-light'
    }
  },
  data() {
    return {
      menuOpen: false
    }
  }
}
</script>
