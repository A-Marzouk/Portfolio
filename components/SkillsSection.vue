<template>
  <div class="overflow-x-hidden border-gray-200 border-b">
    <div class="container-inner mx-auto py-12">
      <h2 id="skills" class="font-bold mb-4 text-xl">Technical Skills</h2>

      <div class="space-y-3">
        <div
          v-for="category in categories"
          :key="category.name"
          class="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3"
        >
          <h3 class="font-bold text-green-700 text-sm uppercase tracking-wide whitespace-nowrap">{{ category.name }}:</h3>
          <div class="flex flex-wrap gap-1.5">
            <span
              v-for="skill in category.skills"
              :key="skill"
              class="border border-gray-500 rounded-full px-2.5 py-0.5 text-xs text-copy-primary"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          name: 'Languages',
          skills: ['PHP', 'Python', 'JavaScript/TypeScript', 'HTML/CSS', 'Dart'],
        },
        {
          name: 'Frameworks',
          skills: ['Laravel', 'Vue.js', 'React.js', 'Flutter', 'Node.js', 'Express', 'Django', 'WordPress'],
        },
        {
          name: 'Databases',
          skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Cloud Firestore'],
        },
        {
          name: 'Cloud & DevOps',
          skills: ['AWS (IoT Core, Lambda, S3)', 'GCP', 'Linux', 'Docker', 'Git/GitHub', 'Apache/Nginx'],
        },
        {
          name: 'Other',
          skills: ['MQTT', 'Bluetooth BLE', 'Yocto', 'REST APIs', 'PHPUnit', 'Stripe/PayPal'],
        },
      ],
    };
  },
};
</script>
