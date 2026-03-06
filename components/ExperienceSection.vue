<template>
  <div class="overflow-x-hidden">
    <div class="container-inner mx-auto text-xl py-16 relative">
      <h2 id="experience" class="font-bold mb-8">Experience</h2>

      <div>
        <div
          v-for="(job, index) in experience"
          :key="index"
          class="border-l-2 border-green-700 pl-6 ml-4 relative mb-8"
        >
          <div
            class="absolute top-1 w-4 h-4 bg-green-700 rounded-full border-2 border-white"
            style="left: -9px"
          ></div>
          <div class="font-bold text-lg">{{ job.company }}</div>
          <div class="text-green-700 font-bold">{{ job.role }}</div>
          <div class="text-sm text-gray-600 mb-2">{{ job.date }} | {{ job.location }}</div>
          <ul class="list-disc pl-5 text-base space-y-1 text-gray-600">
            <li v-for="(point, i) in job.points" :key="i">{{ point }}</li>
          </ul>
          <div class="flex flex-wrap gap-2 mt-2">
            <span
              v-for="(tag, i) in job.tech"
              :key="i"
              class="inline-block bg-green-700 bg-opacity-10 text-green-700 text-xs px-2 py-1 rounded"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>

      <h2 id="education" class="font-bold mb-8 mt-16">Education</h2>

      <div>
        <div
          v-for="(edu, index) in education"
          :key="index"
          class="border-l-2 border-green-700 pl-6 ml-4 relative mb-8"
        >
          <div
            class="absolute top-1 w-4 h-4 bg-green-700 rounded-full border-2 border-white"
            style="left: -9px"
          ></div>
          <div class="font-bold text-lg">{{ edu.school }}</div>
          <div class="text-green-700 font-bold">{{ edu.degree }}</div>
          <div v-if="edu.date" class="text-sm text-gray-600">{{ edu.date }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExperienceSection",
  data() {
    return {
      experience: [
        {
          company: "Blue Falls Manufacturing (Arctic Spas)",
          role: "Senior Software Developer",
          date: "Jan 2024 – Present",
          location: "Edmonton, Canada",
          points: [
            "Led development of users/dealers portal serving 50,000+ users with real-time data via AWS IoT",
            "Developed OCR application and IoT device registration for AWS IoT Core",
            "Engineered Bluetooth BLE communication between Linux chips and mobile apps",
            "Built Flutter app for device simulation with MQTT for AWS IoT integration",
          ],
          tech: ["Laravel", "Flutter", "AWS IoT", "MQTT", "BLE", "Yocto", "Python"],
        },
        {
          company: "UpBeing Inc.",
          role: "Senior Full Stack Developer",
          date: "Apr 2023 – Nov 2023",
          location: "Edmonton, Canada",
          points: [
            "Developed core API set empowering dev and data science teams",
            "Elevated test coverage to 80% with PHPUnit",
            "Integrated Google Places API and built Flutter screens",
          ],
          tech: ["Laravel", "PHP", "Flutter", "PHPUnit", "REST APIs"],
        },
        {
          company: "Krokology",
          role: "Fullstack Web Developer",
          date: "Oct 2021 – Feb 2022",
          location: "Zaporizhzhia, Ukraine",
          points: [
            "Built online learning platform with interactive quizzes for 10,000+ users",
            "Database of 240,000+ questions, admin panel for PDF/Word uploads",
            "Integrated ChatGPT API for content quality improvement",
          ],
          tech: ["Laravel", "Vue.js", "MySQL", "ChatGPT API"],
        },
        {
          company: "123workforce",
          role: "Fullstack Web Developer",
          date: "May 2018 – Jan 2023",
          location: "Dublin, Ireland",
          points: [
            "Developed backend for online resume builder (civ.ie)",
            "Led small team, built core API and frontend with Vue.js/Vuex",
            "Implemented Stripe and PayPal payment systems",
          ],
          tech: ["Laravel", "Vue.js", "Vuex", "Stripe", "PayPal"],
        },
        {
          company: "Artorg IT",
          role: "Junior Backend Developer",
          date: "Nov 2017 – May 2018",
          location: "Zaporizhzhia, Ukraine",
          points: [
            "Bug resolution and code improvement across various websites",
          ],
          tech: ["PHP", "WordPress", "OpenCart"],
        },
      ],
      education: [
        {
          school: "Georgia Institute of Technology",
          degree: "M.S. Computer Science (OMSCS)",
          date: "Jan 2025 – Present",
        },
        {
          school: "Zaporizhzhia Polytechnic National University, Ukraine",
          degree: "B.S. Electronics and Telecommunications",
          date: null,
        },
      ],
    };
  },
};
</script>
