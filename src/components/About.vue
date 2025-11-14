<template>
  <section id="about" class="relative py-20 overflow-hidden bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
    <!-- Background Elements -->
    <div class="absolute w-32 h-32 rounded-full top-10 left-10 bg-primary-200 dark:bg-primary-900 opacity-20 animate-float"></div>
    <div class="absolute w-24 h-24 bg-purple-200 rounded-full bottom-20 right-16 dark:bg-purple-900 opacity-30 animate-float animation-delay-2000"></div>
    <div class="absolute w-16 h-16 bg-blue-200 rounded-full top-1/2 left-1/3 dark:bg-blue-900 opacity-40 animate-float animation-delay-4000"></div>
    
    <div class="container relative z-10 px-6 mx-auto">
      <div class="mb-16 text-center">
        <h2 class="section-title">About Me</h2>
        <p class="max-w-2xl mx-auto section-subtitle">
          Full-Stack Developer & GIS Specialist crafting digital solutions that bridge technology and real-world applications
        </p>
      </div>
      
      <div class="grid items-center max-w-6xl gap-16 mx-auto lg:grid-cols-2">
        <!-- Profile Section -->
        <div class="space-y-8">
          <!-- Enhanced Avatar Card -->
          <div class="relative group">
            <div class="absolute transition duration-1000 opacity-25 -inset-4 bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl blur group-hover:opacity-75 group-hover:duration-200"></div>
            <div class="relative p-8 bg-white border border-gray-100 shadow-2xl dark:bg-gray-800 rounded-xl dark:border-gray-700">
              <div class="flex flex-col items-center space-y-6 text-center">
                <div class="relative">
                  <div class="w-48 h-48 overflow-hidden border-4 border-white shadow-2xl rounded-2xl dark:border-gray-700">
                    <img src="../assets/headshot1.jpg" alt="Khalil - Full Stack Developer" class="object-cover w-full h-full transition duration-700 transform group-hover:scale-110">
                  </div>
                  <div class="absolute flex items-center justify-center border-2 border-white shadow-lg -bottom-3 -right-3 w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl dark:border-gray-800">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                  </div>
                </div>
                
                <div class="space-y-3">
                  <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Khalil</h3>
                  <div class="inline-flex items-center px-4 py-2 border rounded-full bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/30 dark:to-blue-900/30 border-primary-100 dark:border-primary-800">
                    <span class="w-2 h-2 mr-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span class="text-sm font-medium text-primary-700 dark:text-primary-300">Available for new projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Bio Cards -->
          <div class="grid grid-cols-2 gap-4">
            <div class="p-4 text-center border shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border-white/20">
              <div class="mb-1 text-2xl font-bold text-primary-600 dark:text-primary-400">3+</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
            <div class="p-4 text-center border shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border-white/20">
              <div class="mb-1 text-2xl font-bold text-primary-600 dark:text-primary-400">50+</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
            </div>
          </div>
          
          <!-- Tech Stack Tags - Moved to left column -->
          <div class="pt-4">
            <h4 class="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Tech Stack</h4>
            <div class="flex flex-wrap gap-3">
              <span 
                v-for="tech in techStack" 
                :key="tech"
                class="px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-300 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 hover:shadow-md hover:border-primary-300 dark:hover:border-primary-600"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
        
        <!-- Skills Section - Now takes full right column -->
        <div class="space-y-8">
          <!-- Enhanced Skills -->
          <div class="space-y-6">
            <div class="flex items-center justify-between">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Technical Expertise</h3>
              <span class="text-sm font-medium text-primary-600 dark:text-primary-400">Proficiency Level</span>
            </div>
            
            <div class="space-y-5">
              <div 
                v-for="(skill, index) in skills" 
                :key="skill.name"
                class="group"
                :style="{ '--delay': index * 100 + 'ms' }"
              >
                <div class="flex justify-between mb-2">
                  <span class="flex items-center font-semibold text-gray-700 dark:text-gray-300">
                    <span class="w-2 h-2 mr-3 transition-transform duration-300 rounded-full bg-primary-500 group-hover:scale-150"></span>
                    {{ skill.name }}
                  </span>
                  <span class="font-bold text-primary-600 dark:text-primary-400">{{ skill.percentage }}%</span>
                </div>
                <div class="h-3 overflow-hidden bg-gray-200 rounded-full shadow-inner dark:bg-gray-700">
                  <div 
                    class="relative h-full overflow-hidden transition-all duration-1000 ease-out rounded-full bg-gradient-to-r from-primary-500 to-primary-600"
                    :style="{ width: isVisible ? skill.percentage + '%' : '0%' }"
                  >
                    <div class="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine"></div>
                  </div>
                </div>
              </div>
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
  { name: 'JavaScript / TypeScript', percentage: 92 },
  { name: 'Node.js / Express', percentage: 88 },
  { name: 'GIS & Mapping Technologies', percentage: 90 },
  { name: 'Python / Django', percentage: 85 },
  { name: 'PostgreSQL / MongoDB', percentage: 83 },
  { name: 'AWS / Docker', percentage: 78 },
  { name: 'Tailwind CSS / UI Design', percentage: 87 }
]

const techStack = [
  'Vue.js', 'React', 'Next.js', 'Nest','Node.js', 'Python',
  'PostgreSQL', 'MongoDB', 'Firebase', 'Docker', 'AWS',
  'Leaflet', 'Mapbox', 'Git', 'Tailwind', 'TypeScript'
]

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
  const aboutSection = document.querySelector('#about')
  if (aboutSection) {
    observer.observe(aboutSection)
  }
})

onUnmounted(() => {
  observer.disconnect()
})
</script>

<style scoped>
.section-title {
  @apply mb-4 text-4xl font-bold text-center text-gray-900 dark:text-white;
}

.section-subtitle {
  @apply text-xl text-center text-gray-600 dark:text-gray-400;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
}

@keyframes shine {
  0% { transform: translateX(-100%) skewX(-12deg); }
  100% { transform: translateX(200%) skewX(-12deg); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-shine {
  animation: shine 3s ease-in-out infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

/* Staggered animation for skill bars */
.group {
  animation-delay: var(--delay);
}
</style>