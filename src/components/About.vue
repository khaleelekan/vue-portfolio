<template>
  <section id="about" class="py-20 bg-gray-50 dark:bg-gray-800">
    <div class="container mx-auto px-6">
      <h2 class="section-title">About Me</h2>
      <p class="section-subtitle">
        Passionate developer with expertise in modern web technologies and GIS applications
      </p>
      
      <div class="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <!-- Avatar and Bio -->
        <div class="space-y-6">
          <div class="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl">
            <img src="../assets/avatar.jpg" alt="Developer Avatar" class="w-full h-full object-cover">
          </div>
          
          <div class="text-lg text-gray-600 dark:text-gray-300 space-y-4">
            <p>
              I'm a full-stack developer with 5+ years of experience building web applications 
              using Vue.js, React, Node.js, and Python. I specialize in creating responsive, 
              performant, and user-friendly solutions.
            </p>
            <p>
              My background in GIS allows me to create sophisticated mapping applications 
              and spatial data visualizations that solve real-world problems.
            </p>
          </div>
        </div>
        
        <!-- Skills -->
        <div class="space-y-8">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Technical Skills</h3>
          
          <div v-for="skill in skills" :key="skill.name" class="space-y-2">
            <div class="flex justify-between">
              <span class="font-medium text-gray-700 dark:text-gray-300">{{ skill.name }}</span>
              <span class="text-primary-600 dark:text-primary-400">{{ skill.percentage }}%</span>
            </div>
            <div class="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div 
                class="h-full bg-primary-500 rounded-full transition-all duration-1000 ease-out" 
                :style="{ width: skill.percentage + '%' }"
                :class="{ 'animate-grow': isVisible }"
                ref="skillBars"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const skills = [
  { name: 'Vue.js / React', percentage: 95 },
  { name: 'Node.js / Express', percentage: 90 },
  { name: 'Python / Django', percentage: 85 },
  { name: 'GIS & Mapping', percentage: 88 },
  { name: 'PostgreSQL / MongoDB', percentage: 82 },
  { name: 'AWS / Docker', percentage: 78 }
]

const skillBars = ref([])
const isVisible = ref(false)

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isVisible.value = true
      }
    })
  },
  { threshold: 0.3 }
)

onMounted(() => {
  // Observe the skills section
  const skillsSection = document.querySelector('#about')
  if (skillsSection) {
    observer.observe(skillsSection)
  }
})

onUnmounted(() => {
  observer.disconnect()
})
</script>

<style scoped>
.animate-grow {
  animation: grow 1.5s ease-out forwards;
}

@keyframes grow {
  from {
    width: 0%;
  }
}
</style>