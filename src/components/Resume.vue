<template>
  <section id="resume" class="py-20 bg-gray-50 dark:bg-gray-800">
    <div class="container px-6 mx-auto">
      <h2 class="section-title">Resume</h2>
      <p class="section-subtitle">
        My professional journey and qualifications
      </p>
      
      <div class="max-w-4xl mx-auto">
        <!-- Download Button -->
        <div class="mb-12 text-center">
          <button 
            @click="downloadResume"
            :disabled="downloading"
            class="flex items-center justify-center gap-2 mx-auto text-lg btn-primary"
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
            {{ downloading ? 'Downloading...' : 'Download PDF Resume' }}
          </button>
        </div>
        
        <!-- Resume Content -->
        <div class="grid gap-12 md:grid-cols-2">
          <!-- Experience -->
          <div>
            <h3 class="flex items-center mb-6 text-2xl font-bold text-gray-900 dark:text-white">
              <span class="w-3 h-3 mr-3 rounded-full bg-primary-500"></span>
              Professional Experience
            </h3>
            
            <div class="space-y-8">
              <div v-for="exp in experience" :key="exp.id" class="relative pl-8 border-l-2 border-primary-200 dark:border-primary-800">
                <div class="absolute top-0 w-4 h-4 rounded-full -left-2 bg-primary-500"></div>
                <div class="mb-2">
                  <h4 class="text-lg font-semibold text-gray-900 dark:text-white">{{ exp.position }}</h4>
                  <p class="text-primary-600 dark:text-primary-400">{{ exp.company }}</p>
                  <p class="text-sm text-gray-500 dark:text-gray-400">{{ exp.period }}</p>
                  <p class="text-sm text-gray-500 dark:text-gray-400">{{ exp.location }}</p>
                  <a v-if="exp.projectLink" :href="exp.projectLink" target="_blank" class="flex items-center gap-1 mt-1 text-sm text-blue-600 dark:text-blue-400 hover:underline">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                    View Project
                  </a>
                </div>
                <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                  <li v-for="(responsibility, index) in exp.responsibilities" :key="index" class="flex items-start">
                    <svg class="flex-shrink-0 w-4 h-4 mt-1 mr-2 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    {{ responsibility }}
                  </li>
                </ul>
                <div v-if="exp.achievements" class="mt-4">
                  <h5 class="mb-2 font-semibold text-gray-900 dark:text-white">Key Achievements:</h5>
                  <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                    <li v-for="(achievement, index) in exp.achievements" :key="index" class="flex items-start">
                      <svg class="flex-shrink-0 w-4 h-4 mt-1 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                      </svg>
                      {{ achievement }}
                    </li>
                  </ul>
                </div>
                <div v-if="exp.technologies" class="flex flex-wrap gap-2 mt-3">
                  <span v-for="tech in exp.technologies" :key="tech" class="px-2 py-1 text-xs rounded-full bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200">
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Education & Skills -->
          <div class="space-y-12">
            <!-- Education -->
            <div>
              <h3 class="flex items-center mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                <span class="w-3 h-3 mr-3 rounded-full bg-primary-500"></span>
                Education
              </h3>
              
              <div class="space-y-8">
                <div v-for="edu in education" :key="edu.id" class="relative pl-8 border-l-2 border-primary-200 dark:border-primary-800">
                  <div class="absolute top-0 w-4 h-4 rounded-full -left-2 bg-primary-500"></div>
                  <div class="mb-2">
                    <h4 class="text-lg font-semibold text-gray-900 dark:text-white">{{ edu.degree }}</h4>
                    <p class="text-primary-600 dark:text-primary-400">{{ edu.institution }}</p>
                    <p class="text-sm text-gray-500 dark:text-gray-400">{{ edu.period }}</p>
                    <p class="text-sm text-gray-500 dark:text-gray-400">{{ edu.location }}</p>
                  </div>
                  <p v-if="edu.gpa" class="text-gray-600 dark:text-gray-300">GPA: {{ edu.gpa }}</p>
                  <p v-if="edu.honors" class="text-gray-600 dark:text-gray-300">{{ edu.honors }}</p>
                </div>
              </div>
            </div>

            <!-- Technical Skills -->
            <div>
              <h3 class="flex items-center mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                <span class="w-3 h-3 mr-3 rounded-full bg-primary-500"></span>
                Technical Skills
              </h3>
              
              <div class="grid grid-cols-2 gap-4">
                <div v-for="category in technicalSkills" :key="category.category" class="space-y-3">
                  <h4 class="text-sm font-semibold text-gray-900 dark:text-white">{{ category.category }}</h4>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="skill in category.skills" :key="skill" class="px-2 py-1 text-xs text-gray-700 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-300">
                      {{ skill }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Certifications -->
            <div>
              <h3 class="flex items-center mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                <span class="w-3 h-3 mr-3 rounded-full bg-primary-500"></span>
                Certifications
              </h3>
              
              <div class="space-y-4">
                <div v-for="cert in certifications" :key="cert.name" class="flex items-start text-gray-600 dark:text-gray-300">
                  <svg class="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <div>
                    <p class="font-medium">{{ cert.name }}</p>
                    <p class="text-sm text-gray-500 dark:text-gray-400">{{ cert.issuer }} • {{ cert.year }}</p>
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
import { ref } from 'vue'

const downloading = ref(false)

const experience = [
  {
    id: 1,
    position: 'Full-Stack Developer & GIS Specialist',
    company: 'CoordConvert - Geographic Coordinate Converter',
    period: 'Mar 2024 – Present',
    location: 'Remote',
    projectLink: 'https://coordconvert.netlify.app',
    responsibilities: [
      'Designed and developed a comprehensive geographic coordinate conversion web application',
      'Implemented support for multiple coordinate formats including DMS, Decimal Degrees, UTM, and MGRS',
      'Integrated interactive maps with real-time coordinate visualization using Leaflet.js',
      'Built responsive PWA with offline functionality and mobile-first design',
      'Implemented advanced GIS algorithms for accurate coordinate transformations'
    ],
    achievements: [
      'Successfully deployed with 99.9% uptime on Netlify',
      'Achieved perfect Lighthouse scores for performance and accessibility',
      'Built as a Progressive Web App with offline capabilities',
      'Supported by comprehensive documentation and user guides'
    ],
    technologies: ['Vue.js', 'Leaflet.js', 'JavaScript', 'GIS', 'PWA', 'Netlify', 'Tailwind CSS']
  },
  {
    id: 2,
    position: 'Lead Frontend Engineer',
    company: 'Real Chat (ALX Final Portfolio Project)',
    period: 'Jan 2024 – Apr 2024',
    location: 'Remote',
    responsibilities: [
      'Led frontend architecture for a real-time chat app using React, Firebase, and Zustand',
      'Developed authentication workflows and message synchronization using Firebase Firestore and Storage',
      'Collaborated on CI/CD workflows using GitHub and Vercel',
      'Implemented responsive design and real-time messaging features'
    ],
    technologies: ['React', 'Firebase', 'Zustand', 'Firestore', 'GitHub', 'Vercel']
  },
  {
    id: 3,
    position: 'Full-Stack Developer',
    company: 'School Management Dashboard (Personal Project)',
    period: 'Dec 2023 – Feb 2024',
    location: 'Remote',
    responsibilities: [
      'Designed and built a Next.js + NestJS + PostgreSQL system for managing classes, attendance, and finances',
      'Implemented role-based access control (Admin, Tutors, Parents, Students)',
      'Integrated calendar scheduling, analytics dashboards, and payment tracking modules',
      'Used Docker for containerized deployment and GitHub Actions for CI/CD pipelines'
    ],
    technologies: ['Next.js', 'NestJS', 'PostgreSQL', 'Docker', 'GitHub Actions', 'TypeScript']
  },
  {
    id: 4,
    position: 'Frontend Engineer',
    company: 'MIRATH APP (Startup)',
    period: 'June 2024 – Present',
    location: 'Remote',
    responsibilities: [
      'Built responsive dashboards and inheritance calculation workflows using Next.js, TypeScript, and Tailwind CSS',
      'Collaborated with backend team to integrate Firebase Authentication and real-time data updates',
      'Implemented secure, user-friendly forms and state management using Zustand and custom hooks',
      'Contributed to UX/UI improvements focusing on accessibility and user clarity'
    ],
    achievements: [
      'Improved dashboard load performance by 35%',
      'Designed reusable UI components, reducing frontend redundancy by 40%'
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Zustand']
  }
]

const education = [
  {
    id: 1,
    degree: 'Software Engineering',
    institution: 'ALX Africa',
    period: '2023 - 2024',
    location: 'Remote',
    honors: 'Full Stack Web Development Specialization'
  },
  {
    id: 2,
    degree: 'Bachelor of Science in Geoinformatics Engineering',
    institution: 'University of Lagos',
    period: '2018 - 2025',
    location: 'Lagos, Nigeria'
  }
]

const technicalSkills = [
  {
    category: 'Frontend',
    skills: ['Vue.js', 'React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML/CSS', 'Leaflet.js']
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'NestJS', 'Express.js', 'REST APIs', 'Python', 'Firebase']
  },
  {
    category: 'GIS & Mapping',
    skills: ['Coordinate Systems', 'Geographic Data', 'Leaflet', 'Map Integration', 'Spatial Analysis']
  },
  {
    category: 'Tools & DevOps',
    skills: ['Docker', 'GitHub Actions', 'Netlify', 'Vercel', 'Git', 'CI/CD', 'PWA']
  }
]

const certifications = [
  {
    name: 'ALX Software Engineering Certificate',
    issuer: 'ALX Africa',
    year: '2024'
  },
  {
    name: 'Full Stack Web Development',
    issuer: 'The Odin Project',
    year: '2022'
  },
   {
    name: 'Responsive Web Development',
    issuer: 'Freecode Camp',
    year: '2023'
  },
    {
    name: 'Full stack web development Dr.Angela Yu',
    issuer: 'Udemy',
    year: '2023'
  }
]

const downloadResume = async () => {
  downloading.value = true
  
  try {
    // Simulate download delay for better UX
    await new Promise(resolve => setTimeout(resolve, 800))
    
    // Replace '/resume.pdf' with the actual path to your resume file
    const link = document.createElement('a')
    link.href = '/resume.pdf' // Your resume file in public folder
    link.download = 'Khalil_Resume_FullStack_Developer.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
  } catch (error) {
    console.error('Download failed:', error)
    // You can add user notification here
  } finally {
    downloading.value = false
  }
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
  @apply bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed;
}
</style>