<template>
  <div class="container-inner mx-auto py-16">
    <h1 class="text-4xl font-bold mb-8">Blog</h1>

    <div v-if="posts.length === 0" class="text-center text-gray-500 py-12">
      <p>No posts yet. Stay tuned!</p>
    </div>

    <div v-else>
      <div
        v-for="post in paginatedPosts"
        :key="post.slug"
        class="mb-8 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
      >
        <nuxt-link :to="`/posts/${post.slug}`" class="block">
          <h2 class="text-2xl font-bold mb-2 text-copy-primary hover:text-green-700 transition-colors">
            {{ post.title }}
          </h2>
        </nuxt-link>

        <p class="text-sm text-gray-500 mb-3">
          {{ formatDate(post.date) }}
        </p>

        <p v-if="post.summary" class="text-gray-600 mb-4">
          {{ post.summary }}
        </p>

        <div v-if="post.tags && post.tags.length" class="flex flex-wrap gap-2">
          <span
            v-for="tag in post.tags"
            :key="tag"
            class="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
          >
            {{ tag }}
          </span>
        </div>
      </div>

      <!-- Pagination -->
      <div v-if="totalPages > 1" class="flex justify-center items-center mt-12 space-x-4">
        <button
          :disabled="currentPage === 1"
          class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          @click="currentPage--"
        >
          Previous
        </button>

        <span class="text-gray-600">
          Page {{ currentPage }} of {{ totalPages }}
        </span>

        <button
          :disabled="currentPage === totalPages"
          class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          @click="currentPage++"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const posts = await $content('posts')
      .sortBy('date', 'desc')
      .fetch()

    return {
      posts: posts || []
    }
  },

  data() {
    return {
      currentPage: 1,
      postsPerPage: 5
    }
  },

  computed: {
    totalPages() {
      return Math.ceil(this.posts.length / this.postsPerPage)
    },
    paginatedPosts() {
      const start = (this.currentPage - 1) * this.postsPerPage
      const end = start + this.postsPerPage
      return this.posts.slice(start, end)
    }
  },

  methods: {
    formatDate(date) {
      if (!date) return ''
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en-US', options)
    }
  },

  head() {
    return {
      title: 'Blog | A. Marzouk'
    }
  }
}
</script>
