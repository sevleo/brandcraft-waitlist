<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import giftIcon from '@/components/giftIcon.svg'
import check from '@/components/check.svg'
import axios from 'axios'

const router = useRouter()

const emailsCount = ref(0)
const email = ref('')
const error = ref('')
const loading = ref(false)
const success = ref(false)

onMounted(async () => {
  // try {
  //   const endpoint = `${import.meta.env.VITE_BACKEND_URL}/emails-count`
  //   const response = await axios.get(endpoint)
  //   emailsCount.value = response.data.emailCount
  // } catch (e) {
  //   console.error('Failed to load email count', e)
  // }
})

const handleSubmit = async () => {
  const endpoint = `${import.meta.env.VITE_BACKEND_URL}/add-email`

  try {
    loading.value = true
    const response = await axios.post(endpoint, { email: email.value })
    emailsCount.value = response.data.emailCount
    email.value = ''
    error.value = ''
    success.value = true
  } catch (err: any) {
    error.value = err.response.data.message
  } finally {
    loading.value = false
  }
}

const handleButtonClick = () => {
  const section = document.querySelector('#top')
  const inputField = document.querySelector('#email') as HTMLInputElement
  const topPosition = section!.getBoundingClientRect().top

  window.scrollTo({
    top: topPosition,
    behavior: 'smooth'
  })

  setTimeout(() => {
    inputField!.focus()
  }, 500)
}
</script>

<template>
  <main class="main flex justify-center items-center h-auto w-full">
    <div
      class="waitlist-container max-w-xl w-full text-center px-4 py-8 flex flex-col items-center"
    >
      <!-- Heading and Subheading -->
      <div id="top" class="text-[30px] mt-[20px] font-light">Brandcraft.art</div>
      <h1
        class="text-[50px] max-w-[500px] mt-[80px] font-extrabold mb-[20px] leading-[50px] tracking-tight"
      >
        Grow Your Personal Brand
      </h1>
      <h2 class="text-[20px] max-w-[500px] mb-[80px]">
        Build engagement, track growth, and manage all your platforms from a single dashboard
      </h2>

      <div v-if="!success" class="h-[160px]">
        <div class="flex justify-center items-center gap-1">
          <img :src="giftIcon" alt="Gift Icon" class="w-4 h-4" />
          <p>Exclusive discount for Early Birds</p>
        </div>
        <form @submit.prevent="handleSubmit" class="mb-4 w-[350px]">
          <label for="email" class="sr-only">Email</label>

          <input
            v-model="email"
            type="email"
            id="email"
            placeholder="Enter your email"
            class="w-full p-2 border rounded-lg bg-[white] outline-none mt-[10px] mb-[10px] focus:border-[#0000005a]"
            required
          />
          <p class="mb-[10px] text-[red]">
            {{ error || '' }}
          </p>

          <button
            type="submit"
            class="w-full bg-[#047f58] text-white p-2 rounded-lg font-semibold hover:bg-[#047f58df] transition"
            :class="loading ? 'bg-[#9d9d9d] cursor-not-allowed pointer-events-none' : ''"
          >
            {{ loading ? 'Saving...' : 'Join the Waitlist' }}
          </button>
        </form>
      </div>
      <div v-else-if="!loading" class="h-[160px] w-[350px] p-5 flex">
        <div
          class="bg-[#e2fbe8] py-[40px] rounded-xl flex flex-col w-full justify-center items-center border-[1px] border-[#047f5888]"
        >
          <img :src="check" alt="Done" class="w-[20px] h-[20px] text-red-600" />

          <p class="text-[black] text-[18px] font-bold">Done!</p>
          <p class="text-[black] text-[14px]">
            You'll receive an email with your discount code on launch day.
          </p>
        </div>
      </div>

      <!-- Signup Form -->

      <!-- Social Proof -->
      <p class="text-sm">
        <strong>
          <span>{{ emailsCount !== undefined ? emailsCount : 0 }}</span> brand builders
        </strong>
        have already joined!
      </p>

      <!-- Features Section -->
      <div class="features mt-[100px] text-left">
        <h2 class="text-[30px] font-semibold text-center mb-[80px]">Features You'll Love</h2>
        <ul class="flex flex-col gap-6">
          <li>
            <div class="flex justify-start items-center gap-16">
              <p class="text-[50px] font-sans font-thin self-start leading-[1] w-[40px]">1</p>
              <div>
                <p class="text-[20px] font-bold">Calendar</p>
                <ul>
                  <li class="text-gray-700">Bird’s-eye view of all your social media presence.</li>
                  <li class="text-gray-700">
                    Schedule content for automatic posting across platforms.
                  </li>
                  <li class="text-gray-700">
                    Drag & drop to organize and shuffle scheduled posts.
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <div class="flex justify-start items-center gap-16">
              <p class="text-[50px] font-sans font-thin self-start leading-[1] w-[40px]">2</p>
              <div>
                <p class="text-[20px] font-bold">AI-Driven Content Suggestions</p>
                <ul>
                  <li class="text-gray-700">
                    Platform-specific recommendations for tone, length, and engagement.
                  </li>
                  <li class="text-gray-700">Real-time adjustments based on current trends.</li>
                  <li class="text-gray-700">
                    Guided prompts from AI to help craft engaging posts.
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <div class="flex justify-start items-center gap-16">
              <p class="text-[50px] font-sans font-thin self-start leading-[1] w-[40px]">3</p>
              <div>
                <p class="text-[20px] font-bold">Campaign and Story Planner</p>
                <ul>
                  <li class="text-gray-700">
                    Define campaigns with themes, stories, and target topics.
                  </li>
                  <li class="text-gray-700">
                    Use AI to break down stories into tailored posts for each platform.
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div class="flex justify-start items-center gap-16">
              <p class="text-[50px] font-sans font-thin self-start leading-[1] w-[40px]">4</p>
              <div>
                <p class="text-[20px] font-bold">Cross-Platform Story Cohesion</p>
                <ul>
                  <li class="text-gray-700">
                    Maintain a consistent brand voice with platform-specific adaptations.
                  </li>
                  <li class="text-gray-700">
                    AI-assisted storytelling aligned with brand goals and audience needs.
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div class="flex justify-start items-center gap-16">
              <p class="text-[50px] font-sans font-thin self-start leading-[1] w-[40px]">5</p>
              <div>
                <p class="text-[20px] font-bold">Analytics & Growth Insights</p>
                <ul>
                  <li class="text-gray-700">
                    Track engagement, follower growth, and top-performing content.
                  </li>
                  <li class="text-gray-700">
                    Platform-specific insights for refining content strategy.
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div class="flex justify-start items-center gap-16">
              <p class="text-[50px] font-sans font-thin self-start leading-[1] w-[40px]">6</p>
              <div>
                <p class="text-[20px] font-bold">Multi-Platform Campaign Management</p>
                <ul>
                  <li class="text-gray-700">
                    Plan, schedule, and track multi-platform campaigns from one dashboard.
                  </li>
                  <li class="text-gray-700">
                    Efficiently coordinate posts for a cohesive brand presence.
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <!-- FAQ Section -->
      <div class="faq text-left mt-[140px] flex flex-col justify-center items-center">
        <h2 class="text-[30px] font-semibold text-center mb-[40px]">Frequently Asked Questions</h2>

        <div class="flex flex-col gap-8 max-w-[400px]">
          <div>
            <p class="font-bold text-[20px]">What is this?</p>
            <p class="text-gray-700">
              A unified social media management tool to grow your personal brand across platforms
              with integrated AI support.
            </p>
          </div>
          <div>
            <p class="font-bold text-[20px]">Why do I need this?</p>
            <p class="text-gray-700">
              If you're serious about building a cohesive brand presence, this tool saves you time
              and optimizes your message for each platform.
            </p>
          </div>
          <div>
            <p class="font-bold text-[20px]">Why should I join waitlist?</p>
            <p class="text-gray-700">
              As an early access user, you will enjoy lifetime discount to use the product.
            </p>
          </div>
          <div>
            <p class="font-bold text-[20px]">What about pricing?</p>
            <p class="text-gray-700">
              We are finalizing pricing and will notify you upon launch, but most likely it will be
              a credit based pricing due to high AI usage. You pay for what you use.
            </p>
          </div>
          <div>
            <p class="font-bold text-[20px]">Will there be a free tier?</p>
            <p class="text-gray-700">
              Yes, a basic free tier will be available to help you get started!
            </p>
          </div>
          <div>
            <p class="font-bold text-[20px]">How will my email be used?</p>
            <p class="text-gray-700">
              We will use it to notify you about major launches and releases.
            </p>
            <p class="text-gray-700">
              We may also occasionally contact you to ask for feedback and suggestions.
            </p>
          </div>
        </div>
      </div>

      <p class="mt-[100px]">Don’t miss out – join the waitlist today for exclusive perks!</p>
      <button
        @click="handleButtonClick"
        type="submit"
        class="w-[350px] bg-[#047f58] text-white p-2 rounded-lg font-semibold hover:bg-[#047f58df] transition mt-[10px]"
      >
        Join the Waitlist
      </button>

      <!-- Privacy Policy Link -->
      <p class="privacy mt-[100px] text-gray-500 text-xs">
        By joining the waitlist, you agree to our
        <a @click="router.push('/privacy')" href="#" class="underline">Privacy Policy</a> on email
        handling.
      </p>
      <p class="privacy mt-[10px] text-gray-500 text-xs">
        © 2024 Brandcraft.art by <a href="" class="underline">Seva Leo</a>.
      </p>
      <p class="privacy mt-[10px] text-gray-500 text-xs">All rights reserved.</p>
    </div>
  </main>
</template>

<style scoped>
.waitlist-container {
  max-width: 800px;
}

path {
  color: rgb(193, 0, 0);
}
</style>
