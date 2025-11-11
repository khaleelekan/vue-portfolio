<template>
  <header class="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
    <nav class="container mx-auto px-6 py-4">
      <div class="flex justify-between items-center">
        <div class="text-2xl font-bold text-primary-600 dark:text-primary-400">
          Khalil.dev
        </div>
        
        <div class="hidden md:flex space-x-8">
          <a v-for="link in navLinks" 
             :key="link.name" 
             :href="link.href" 
             class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-300"
             @click.prevent="scrollToSection(link.href)">
            {{ link.name }}
          </a>
        </div>
        
        <div class="flex items-center space-x-4">
          <ThemeToggle />
          <button class="md:hidden text-gray-700 dark:text-gray-300">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import ThemeToggle from './ThemeToggle.vue'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' }
]

const scrollToSection = (sectionId) => {
  const element = document.querySelector(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>