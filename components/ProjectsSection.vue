<template>
  <div class="overflow-x-hidden">
    <div class="projects container-inner mx-auto text-xl border-t border-gray-500 border-b py-16 mb-16 relative">
      <h2 id="projects" class="font-bold mb-6">Here are some projects I've worked on:</h2>

      <div class="absolute right-0" style="top: 50px; transform: translate(100%) rotate(180deg)">
        <svg width="170px" height="170px"><use xlink:href="#dots-triangle" /></svg>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="project in projects"
          :key="project.name"
          class="bg-background-secondary rounded-lg p-6 border border-gray-500 border-opacity-20"
        >
          <div class="mb-2">
            <span class="font-bold text-lg">{{ project.name }}</span>
            <span
              v-if="project.workProject"
              class="text-xs bg-green-700 text-white px-2 py-0.5 rounded inline-block ml-2"
            >Work Project</span>
          </div>
          <p class="text-base text-gray-600 mb-4">{{ project.description }}</p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span
              v-for="tag in project.tech"
              :key="tag"
              class="text-xs bg-green-700 bg-opacity-10 text-green-700 px-2 py-1 rounded"
            >{{ tag }}</span>
          </div>
          <a
            v-if="project.link"
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="text-green-700 font-bold text-sm"
          >View Project &rarr;</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          name: "ArcticAI — AI Communication Platform",
          description:
            "AI-powered communication platform built for Arctic Spas, featuring trained AI agents for next-generation customer interaction and support.",
          tech: ["Next.js", "React", "OpenAI", "Node.js", "AI Agents"],
          workProject: true,
          link: "https://ai.myarcticspa.com",
        },
        {
          name: "Arctic Spas IoT Portal",
          description:
            "Users/dealers portal serving 50,000+ users with real-time spa data through AWS IoT technologies, including OCR and BLE communication.",
          tech: ["Laravel", "AWS IoT", "Flutter", "MQTT", "Python"],
          workProject: true,
          link: null,
        },
        {
          name: "UpBeing Platform",
          description:
            "Health and wellness platform with core API powering mobile apps and data science pipelines, achieving 80% test coverage.",
          tech: ["Laravel", "PHP", "Flutter", "PHPUnit"],
          workProject: true,
          link: null,
        },
        {
          name: "Krokology",
          description:
            "Online learning platform for medical students in Ukraine with 240,000+ questions, interactive quizzes, and AI-powered content management.",
          tech: ["Laravel", "Vue.js", "MySQL", "ChatGPT API"],
          workProject: false,
          link: "https://krokology.com",
        },
        {
          name: "Civ.ie — Online Resume Builder",
          description:
            "Platform for developers and designers to build professional resumes with unique URLs, featuring Stripe and PayPal payment integration.",
          tech: ["Laravel", "Vue.js", "Vuex", "Stripe", "PayPal"],
          workProject: false,
          link: "https://civ.ie/",
        },
        {
          name: "Foster Care Ireland",
          description:
            "Fostering agency website providing support for foster carers with online enquiry system.",
          tech: ["Laravel", "Vue.js", "MySQL"],
          workProject: false,
          link: "https://fostercareireland.ie/",
        },
      ],
    };
  },
};
</script>
