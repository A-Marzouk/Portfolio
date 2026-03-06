<template>
  <div class="container-inner mx-auto py-16">
    <nuxt-link
      to="/blog"
      class="inline-flex items-center text-green-700 hover:text-green-800 mb-8 transition-colors"
    >
      &larr; Back to Blog
    </nuxt-link>

    <article v-if="post">
      <header class="mb-8">
        <h1 class="text-3xl font-bold text-copy-primary mb-4">
          {{ post.title }}
        </h1>

        <p class="text-sm text-gray-500 mb-4">
          {{ formatDate(post.date) }}
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
      </header>

      <div class="prose prose-lg max-w-none">
        <nuxt-content :document="post" />
      </div>
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const post = await $content('posts', params.slug).fetch()

    return {
      post
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
      title: this.post ? `${this.post.title} | A. Marzouk` : 'Blog Post | A. Marzouk'
    }
  }
}
</script>
