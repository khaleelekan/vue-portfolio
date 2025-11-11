<template>
  <section id="home" class="relative flex items-center justify-center min-h-screen pt-20 overflow-hidden">
    <!-- Animated Background -->
    <div class="absolute inset-0 gradient-bg opacity-10"></div>
    
    <div class="container z-10 px-6 mx-auto text-center">
      <div class="max-w-4xl mx-auto">
        <h1 class="mb-6 text-5xl font-bold text-gray-900 md:text-7xl dark:text-white animate-fade-in">
          Hi, I'm <span class="text-primary-600 dark:text-primary-400">Khalil</span>
        </h1>
        <h2 class="mb-8 text-2xl text-gray-600 md:text-3xl dark:text-gray-300 animate-fade-in animate-delay-200">
          Full-Stack Developer & GIS Specialist
        </h2>
        <p class="max-w-2xl mx-auto mb-12 text-xl text-gray-500 dark:text-gray-400 animate-fade-in animate-delay-400">
          I build modern, scalable, and user-friendly web applications with cutting-edge technologies.
        </p>
        
        <div class="flex flex-col justify-center gap-4 sm:flex-row animate-fade-in animate-delay-600">
          <button 
            class="flex items-center justify-center gap-2 btn-primary" 
            @click="downloadResume"
            :disabled="downloading"
          >
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
          </button>
          <button class="btn-secondary" @click="scrollToSection('#contact')">
            Contact Me
          </button>
        </div>
      </div>
      
      <!-- Scroll indicator -->
      <div class="absolute transform -translate-x-1/2 bottom-8 left-1/2 animate-bounce">
        <button @click="scrollToSection('#about')" class="text-gray-400 transition-colors hover:text-primary-600">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </button>
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
    // Simulate download delay for better UX
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const link = document.createElement('a')
    link.href = '/resume.pdf' // Your resume file in public folder
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