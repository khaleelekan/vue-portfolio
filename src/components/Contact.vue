<template>
  <section id="contact" class="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
    <!-- Background Elements -->
    <div class="absolute top-0 left-0 rounded-full w-72 h-72 bg-primary-500 mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
    <div class="absolute top-0 right-0 bg-purple-500 rounded-full w-72 h-72 mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
    <div class="absolute bottom-0 bg-pink-500 rounded-full left-1/2 w-72 h-72 mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
    
    <div class="container relative z-10 px-6 mx-auto">
      <div class="mb-16 text-center">
        <h2 class="section-title">Let's Connect</h2>
        <p class="max-w-2xl mx-auto section-subtitle">
          Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
        </p>
      </div>
      
      <div class="grid items-start max-w-6xl gap-12 mx-auto lg:grid-cols-2">
        <!-- Contact Information - Enhanced Card -->
        <div class="space-y-8">
          <div class="p-8 border shadow-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border-white/20">
            <h3 class="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Get in Touch</h3>
            <p class="mb-8 leading-relaxed text-gray-600 dark:text-gray-300">
              I'm currently available for freelance work and exciting new opportunities. Whether you have a project in mind or just want to say hello, I'd love to hear from you!
            </p>
            
            <div class="space-y-6">
              <!-- Email with enhanced interaction -->
              <div class="group flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-800 hover:from-blue-100 hover:to-indigo-100 dark:hover:from-gray-600 dark:hover:to-gray-700 transition-all duration-300 transform hover:scale-[1.02]">
                <div class="flex items-center justify-center transition-shadow duration-300 shadow-lg w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl group-hover:shadow-xl">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div class="flex-1">
                  <p class="mb-1 text-sm font-medium text-gray-500 dark:text-gray-400">Email</p>
                  <div class="flex items-center justify-between">
                    <p class="font-semibold text-gray-700 dark:text-gray-300">kalilulekan@gmail.com</p>
                    <button 
                      @click="copyEmail"
                      class="p-2 transition-all duration-300 bg-white rounded-lg shadow-sm dark:bg-gray-600 hover:shadow-md group-hover:bg-primary-50 dark:group-hover:bg-primary-900/30"
                      title="Copy email"
                    >
                      <svg class="w-4 h-4 text-gray-600 dark:text-gray-300 group-hover:text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              
              <!-- Location with map pin -->
              <div class="group flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-gray-700 dark:to-gray-800 hover:from-green-100 hover:to-emerald-100 dark:hover:from-gray-600 dark:hover:to-gray-700 transition-all duration-300 transform hover:scale-[1.02]">
                <div class="flex items-center justify-center transition-shadow duration-300 shadow-lg w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl group-hover:shadow-xl">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <p class="mb-1 text-sm font-medium text-gray-500 dark:text-gray-400">Location</p>
                  <p class="font-semibold text-gray-700 dark:text-gray-300">Lagos, Nigeria</p>
                </div>
              </div>
            </div>
            
            <!-- Social Links - Enhanced -->
            <div class="pt-8 mt-8 border-t border-gray-200 dark:border-gray-700">
              <h4 class="mb-4 text-lg font-semibold text-center text-gray-900 dark:text-white">Follow My Journey</h4>
              <div class="flex justify-center space-x-4">
                <a 
                  v-for="social in socialLinks" 
                  :key="social.name"
                  :href="social.url" 
                  target="_blank"
                  class="flex items-center justify-center w-12 h-12 transition-all duration-300 transform bg-white shadow-lg group dark:bg-gray-700 rounded-xl hover:shadow-xl hover:scale-110 hover:bg-primary-600 dark:hover:bg-primary-600"
                  :title="social.name"
                >
                  <svg class="w-5 h-5 text-gray-600 transition-colors duration-300 dark:text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path :d="social.icon"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Quick Stats -->
          <div class="grid grid-cols-2 gap-4">
            <div class="p-4 text-center border shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border-white/20">
              <div class="mb-1 text-2xl font-bold text-primary-600 dark:text-primary-400">24h</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">Response Time</div>
            </div>
            <div class="p-4 text-center border shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border-white/20">
              <div class="mb-1 text-2xl font-bold text-primary-600 dark:text-primary-400">100%</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">Project Success</div>
            </div>
          </div>
        </div>
        
        <!-- Contact Form - Enhanced -->
        <div class="p-8 border shadow-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border-white/20">
          <div class="mb-8 text-center">
            <h3 class="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Send a Message</h3>
            <p class="text-gray-600 dark:text-gray-300">Let's start a conversation about your project</p>
          </div>
          
          <form @submit.prevent="submitContactForm" class="space-y-6">
            <div class="grid gap-6 md:grid-cols-2">
              <div class="space-y-2">
                <label for="contact-name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Your Name</label>
                <input 
                  type="text" 
                  id="contact-name" 
                  v-model="contactForm.name"
                  required
                  placeholder="Enter your full name"
                  class="w-full px-4 py-3 placeholder-gray-400 transition-all duration-300 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700/50 dark:text-white"
                >
              </div>
              
              <div class="space-y-2">
                <label for="contact-email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                <input 
                  type="email" 
                  id="contact-email" 
                  v-model="contactForm.email"
                  required
                  placeholder="your.email@example.com"
                  class="w-full px-4 py-3 placeholder-gray-400 transition-all duration-300 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700/50 dark:text-white"
                >
              </div>
            </div>
            
            <div class="space-y-2">
              <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Project Type</label>
              <select 
                id="subject" 
                v-model="contactForm.subject"
                required
                class="w-full px-4 py-3 transition-all duration-300 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700/50 dark:text-white"
              >
                <option value="" disabled selected>Select project type</option>
                <option value="Web Development">Web Development</option>
                <option value="GIS Application">GIS Application</option>
                <option value="Full-Stack Project">Full-Stack Project</option>
                <option value="Consultation">Consultation</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div class="space-y-2">
              <label for="contact-message" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Project Details</label>
              <textarea 
                id="contact-message" 
                rows="5"
                v-model="contactForm.message"
                required
                placeholder="Tell me about your project, timeline, and any specific requirements..."
                class="w-full px-4 py-3 placeholder-gray-400 transition-all duration-300 border border-gray-200 resize-none dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700/50 dark:text-white"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              :disabled="isSubmitting"
              class="btn-primary w-full py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              <span>{{ isSubmitting ? 'Sending...' : 'Send Message' }}</span>
              <svg v-if="!isSubmitting" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
              </svg>
              <svg v-else class="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const isSubmitting = ref(false)
const contactForm = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/khalil-dev',
    icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/khalil-dev',
    icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/khalil_dev',
    icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z'
  }
]

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText('kalilulekan@gmail.com')
    // Show a nice toast instead of alert
    showNotification('Email copied to clipboard!', 'success')
  } catch (err) {
    console.error('Failed to copy email: ', err)
    showNotification('Failed to copy email', 'error')
  }
}

const submitContactForm = async () => {
  isSubmitting.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Contact form submitted:', contactForm.value)
    
    // Reset form
    contactForm.value = { name: '', email: '', subject: '', message: '' }
    
    // Show success message
    showNotification('Thank you! Your message has been sent successfully.', 'success')
  } catch (error) {
    showNotification('Failed to send message. Please try again.', 'error')
  } finally {
    isSubmitting.value = false
  }
}

const showNotification = (message, type) => {
  // You can implement a proper toast notification here
  alert(message)
}
</script>

<style scoped>
.section-title {
  @apply text-4xl font-bold text-center text-gray-900 dark:text-white mb-4;
}

.section-subtitle {
  @apply text-xl text-center text-gray-600 dark:text-gray-400 mb-12;
}

.btn-primary {
  @apply bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold transition-all duration-300;
}

@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>