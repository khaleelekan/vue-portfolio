<template>
  <section id="home" class="relative flex items-center justify-center min-h-screen pt-20 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Floating shapes -->
      <div class="absolute rounded-full top-1/4 left-1/4 w-72 h-72 bg-primary-500/10 blur-3xl animate-float-slow"></div>
      <div class="absolute rounded-full top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 blur-3xl animate-float-medium"></div>
      <div class="absolute w-64 h-64 rounded-full bottom-1/4 left-1/2 bg-blue-500/10 blur-3xl animate-float-slow animation-delay-2000"></div>
      
      <!-- Grid pattern -->
      <div class="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
    </div>

    <!-- Main Content -->
    <div class="container relative z-10 px-6 mx-auto text-center">
      <div class="max-w-4xl mx-auto">

        <!-- Main Heading -->
        <div class="mb-6 space-y-4">
          <h1 class="text-5xl font-bold text-gray-900 md:text-7xl lg:text-8xl dark:text-white animate-fade-in">
            Hi, I'm <span class="text-transparent bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text">Khalil</span>
          </h1>
          <div class="relative inline-block">
            <h2 class="text-2xl text-gray-600 md:text-3xl lg:text-4xl dark:text-gray-300 animate-fade-in animate-delay-200">
              Full-Stack Developer & 
              <span class="relative">
                <span class="font-bold text-transparent bg-gradient-to-r from-primary-500 to-blue-500 bg-clip-text">GIS Specialist</span>
                <span class="absolute left-0 w-full h-1 rounded-full -bottom-1 bg-gradient-to-r from-primary-500 to-blue-500 animate-pulse"></span>
              </span>
            </h2>
          </div>
        </div>

        <!-- Description -->
        <p class="max-w-2xl mx-auto mb-12 text-xl leading-relaxed text-gray-600 dark:text-gray-400 animate-fade-in animate-delay-400">
          I craft <span class="font-semibold text-primary-600 dark:text-primary-400">digital experiences</span> that blend cutting-edge web technologies with 
          <span class="font-semibold text-blue-600 dark:text-blue-400">geospatial innovation</span>. Building scalable solutions that make an impact.
        </p>
        
        <!-- CTA Buttons -->
        <div class="flex flex-col justify-center gap-4 sm:flex-row animate-fade-in animate-delay-600">
          <button 
            class="relative flex items-center justify-center gap-3 px-8 py-4 overflow-hidden text-lg font-semibold group btn-primary rounded-2xl"
            @click="downloadResume"
            :disabled="downloading"
          >
            <div class="absolute inset-0 transition-all duration-300 bg-gradient-to-r from-primary-600 to-primary-700 group-hover:from-primary-700 group-hover:to-primary-800"></div>
            <div class="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:opacity-100"></div>
            <span class="relative z-10 flex items-center gap-2">
              <svg 
                v-if="!downloading"
                class="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              <svg 
                v-else
                class="w-5 h-5 animate-spin" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
              </svg>
              {{ downloading ? 'Downloading...' : 'Download Resume' }}
            </span>
          </button>
          
           <button 
            class="relative flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold transition-all duration-300 border-2 group btn-secondary rounded-2xl border-primary-200 dark:border-gray-600 hover:border-primary-300 dark:hover:border-primary-500 hover:scale-105"
            @click="scrollToSection('#contact')"
          >
            <span class="relative z-10">Contact Me</span>
            <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
          </button>
        </div>

        <!-- Quick Stats -->
        <div class="flex flex-wrap justify-center gap-8 mt-12 animate-fade-in animate-delay-800">
          <div class="text-center">
            <div class="text-2xl font-bold text-primary-600 dark:text-primary-400">3+</div>
            <div class="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-primary-600 dark:text-primary-400">50+</div>
            <div class="text-sm text-gray-600 dark:text-gray-400">Projects</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-primary-600 dark:text-primary-400">100%</div>
            <div class="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Floating Tech Icons -->
    <div class="absolute top-20 left-10 opacity-20 animate-float-slow">
      <div class="p-3 border bg-white/10 backdrop-blur-sm rounded-2xl border-white/20">
        <span class="font-mono text-sm text-primary-600">{"<Vue/>"}</span>
      </div>
    </div>
    <div class="absolute top-40 right-20 opacity-20 animate-float-medium animation-delay-1000">
      <div class="p-3 border bg-white/10 backdrop-blur-sm rounded-2xl border-white/20">
        <span class="font-mono text-sm text-blue-600">{"<React/>"}</span>
      </div>
    </div>
    <div class="absolute bottom-40 left-20 opacity-20 animate-float-slow animation-delay-1500">
      <div class="p-3 border bg-white/10 backdrop-blur-sm rounded-2xl border-white/20">
        <span class="font-mono text-sm text-purple-600">{"<Node/>"}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const downloading = ref(false)

const scrollToSection = (sectionId) => {
  const element = document.querySelector(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const downloadResume = async () => {
  downloading.value = true
  
  try {
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Khalil_Resume_FullStack_Developer.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
  } catch (error) {
    console.error('Download failed:', error)
  } finally {
    downloading.value = false
  }
}
</script>

<style scoped>
.btn-primary {
  @apply text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed;
}

.btn-secondary {
  @apply bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-700 shadow-lg hover:shadow-xl;
}

@keyframes float-slow {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
}

@keyframes float-medium {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(3deg); }
}

.animate-float-slow {
  animation: float-slow 8s ease-in-out infinite;
}

.animate-float-medium {
  animation: float-medium 6s ease-in-out infinite;
}

.animation-delay-1000 {
  animation-delay: 1s;
}

.animation-delay-1500 {
  animation-delay: 1.5s;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}

.animate-delay-200 {
  animation-delay: 0.2s;
}

.animate-delay-400 {
  animation-delay: 0.4s;
}

.animate-delay-600 {
  animation-delay: 0.6s;
}

.animate-delay-800 {
  animation-delay: 0.8s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>