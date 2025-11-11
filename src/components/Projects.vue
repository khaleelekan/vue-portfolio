<template>
  <section id="projects" class="py-20 bg-gray-50 dark:bg-gray-900">
    <div class="container px-6 mx-auto">
      <h2 class="section-title">Projects Showcase</h2>
      <p class="section-subtitle">
        A selection of my recent work across various technologies and domains
      </p>
      
      <!-- Category Filters -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <button 
          v-for="category in categories" 
          :key="category"
          @click="setActiveCategory(category)"
          :class="[
            'px-6 py-2 rounded-full font-medium transition-all duration-300',
            activeCategory === category 
              ? 'bg-primary-600 text-white shadow-lg' 
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
          ]"
        >
          {{ category }}
        </button>
      </div>
      
      <!-- Projects Grid -->
      <div class="grid gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3 max-w-7xl">
        <div 
          v-for="project in filteredProjects" 
          :key="project.id"
          class="overflow-hidden transition-all duration-500 transform bg-white shadow-lg dark:bg-gray-800 rounded-xl hover:shadow-2xl hover:-translate-y-2 group"
        >
          <div class="relative overflow-hidden">
            <img 
              :src="project.image" 
              :alt="project.title" 
              class="object-cover w-full h-48 transition-transform duration-500 group-hover:scale-110"
            >
            <div class="absolute inset-0 flex items-center justify-center transition-all duration-300 bg-black bg-opacity-0 group-hover:bg-opacity-70">
              <div class="flex space-x-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <a :href="project.demoUrl" target="_blank" class="text-sm btn-primary">Live Demo</a>
                <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" class="text-sm btn-secondary">Source Code</a>
              </div>
            </div>
          </div>
          
          <div class="p-6">
            <h3 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">{{ project.title }}</h3>
            <p class="mb-4 text-gray-600 dark:text-gray-300">{{ project.description }}</p>
            
            <div class="flex flex-wrap gap-2 mb-4">
              <span 
                v-for="tech in project.technologies" 
                :key="tech"
                class="px-3 py-1 text-sm rounded-full bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200"
              >
                {{ tech }}
              </span>
            </div>

            <!-- Project Features -->
            <div v-if="project.features" class="mt-4">
              <h4 class="mb-2 text-sm font-semibold text-gray-900 dark:text-white">Key Features:</h4>
              <ul class="space-y-1 text-xs text-gray-600 dark:text-gray-400">
                <li v-for="(feature, index) in project.features" :key="index" class="flex items-start">
                  <svg class="w-3 h-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  {{ feature }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const categories = ['All', 'GIS', 'Full-Stack', 'Web', 'Mobile']
const activeCategory = ref('All')

const projects = [
  {
    id: 1,
    title: 'CoordConvert',
    description: 'Advanced geographic coordinate conversion tool with interactive mapping and multiple format support',
    image: '/api/placeholder/400/250?text=CoordConvert',
    technologies: ['Vue.js', 'Leaflet.js', 'GIS', 'JavaScript', 'PWA', 'Tailwind CSS'],
    category: 'GIS',
    demoUrl: 'https://coordconvert.netlify.app',
    githubUrl: 'https://github.com/yourusername/coordconvert',
    features: [
      'Multiple coordinate formats (DMS, Decimal, UTM, MGRS)',
      'Interactive map visualization',
      'Progressive Web App',
      'Offline functionality',
      'Real-time coordinate conversion'
    ]
  },
  {
    id: 2,
    title: 'MIRATH APP',
    description: 'Islamic inheritance calculation platform with responsive dashboards and secure workflows',
    image: '/api/placeholder/400/250?text=MIRATH+APP',
    technologies: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS', 'Zustand'],
    category: 'Full-Stack',
    demoUrl: '#',
    githubUrl: '#',
    features: [
      'Inheritance calculation engine',
      'Firebase authentication',
      'Real-time data updates',
      'Responsive dashboard',
      'Secure form handling'
    ]
  },
  {
    id: 3,
    title: 'Real Chat',
    description: 'Real-time chat application with authentication and message synchronization',
    image: '/api/placeholder/400/250?text=Real+Chat',
    technologies: ['React', 'Firebase', 'Zustand', 'Firestore', 'Vercel'],
    category: 'Web',
    demoUrl: '#',
    githubUrl: '#',
    features: [
      'Real-time messaging',
      'Firebase authentication',
      'Message synchronization',
      'Responsive design',
      'CI/CD deployment'
    ]
  },
  {
    id: 4,
    title: 'School Management Dashboard',
    description: 'Comprehensive school administration system with role-based access and analytics',
    image: '/api/placeholder/400/250?text=School+Dashboard',
    technologies: ['Next.js', 'NestJS', 'PostgreSQL', 'Docker', 'TypeScript'],
    category: 'Full-Stack',
    demoUrl: '#',
    githubUrl: '#',
    features: [
      'Role-based access control',
      'Calendar scheduling',
      'Payment tracking',
      'Analytics dashboard',
      'Docker deployment'
    ]
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'Modern, responsive portfolio website showcasing projects and skills',
    image: '/api/placeholder/400/250?text=Portfolio',
    technologies: ['Vue.js', 'Tailwind CSS', 'Netlify', 'JavaScript'],
    category: 'Web',
    demoUrl: '#',
    githubUrl: '#',
    features: [
      'Responsive design',
      'Dark mode support',
      'Project showcase',
      'Contact integration',
      'Fast performance'
    ]
  },
  {
    id: 6,
    title: 'GIS Data Visualizer',
    description: 'Interactive platform for visualizing and analyzing geographic data sets',
    image: '/api/placeholder/400/250?text=GIS+Visualizer',
    technologies: ['Vue.js', 'Mapbox', 'GeoJSON', 'D3.js', 'JavaScript'],
    category: 'GIS',
    demoUrl: '#',
    githubUrl: '#',
    features: [
      'Interactive maps',
      'Data layer toggling',
      'Spatial analysis',
      'Export functionality',
      'Responsive design'
    ]
  }
]

const filteredProjects = computed(() => {
  if (activeCategory.value === 'All') {
    return projects
  }
  return projects.filter(project => project.category === activeCategory.value)
})

const setActiveCategory = (category) => {
  activeCategory.value = category
}
</script>

<style scoped>
.section-title {
  @apply text-4xl font-bold text-center text-gray-900 dark:text-white mb-4;
}

.section-subtitle {
  @apply text-xl text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto;
}

.btn-primary {
  @apply bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-sm;
}

.btn-secondary {
  @apply bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-sm;
}
</style>