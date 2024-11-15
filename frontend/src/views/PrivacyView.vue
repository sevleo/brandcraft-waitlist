<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <main class="privacy-policy-container max-w-4xl mx-auto p-6">
    <button
      @click="router.push('/')"
      type="submit"
      class="w-[350px] bg-[#047f58] text-white p-2 rounded-lg font-semibold hover:bg-[#047f58df] transition mt-[10px] mb-[30px]"
    >
      Go Back
    </button>
    <h1 class="text-3xl font-bold mb-6">Privacy Policy</h1>
    <p class="mb-6"><strong>Effective Date:</strong> November 15th 2024</p>

    <section class="mb-6">
      <h2 class="text-2xl font-semibold mb-4">1. Information We Collect</h2>
      <p class="mb-2">We may collect the following information from you:</p>
      <ul class="list-disc ml-6">
        <li>
          <strong>Personal Information:</strong> Email address provided when joining the waitlist or
          signing up for updates.
        </li>
        <li>
          <strong>Usage Data:</strong> Information about your interaction with our website, such as
          IP address, browser type, and pages visited, collected via cookies or similar
          technologies.
        </li>
      </ul>
    </section>

    <section class="mb-6">
      <h2 class="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
      <p class="mb-2">We use the information you provide for the following purposes:</p>
      <ul class="list-disc ml-6">
        <li>To notify you about major launches, updates, and releases.</li>
        <li>
          To send occasional emails requesting your feedback or suggestions to improve our services.
        </li>
        <li>To offer early-bird discounts or other promotions.</li>
        <li>To improve the functionality and user experience of our platform.</li>
      </ul>
    </section>

    <section class="mb-6">
      <h2 class="text-2xl font-semibold mb-4">3. How We Protect Your Data</h2>
      <p class="mb-2">
        We take appropriate security measures to protect your data from unauthorized access,
        alteration, disclosure, or destruction. However, no data transmission or storage is
        completely secure. By using our services, you acknowledge and accept these risks.
      </p>
    </section>

    <section class="mb-6">
      <h2 class="text-2xl font-semibold mb-4">4. Sharing Your Information</h2>
      <p class="mb-2">
        We do not sell, rent, or trade your personal information. Your data may be shared with
        trusted third-party service providers solely to support our operations, such as email
        delivery services.
      </p>
    </section>

    <section class="mb-6">
      <h2 class="text-2xl font-semibold mb-4">5. Your Rights</h2>
      <p class="mb-2">
        You have the right to access, update, or delete your personal information. To exercise these
        rights, please contact us at info@eloqra.com
      </p>
    </section>

    <section class="mb-6">
      <h2 class="text-2xl font-semibold mb-4">6. Changes to This Privacy Policy</h2>
      <p class="mb-2">
        We may update this Privacy Policy from time to time. Any changes will be posted on this page
        with a new effective date. We encourage you to review this page periodically.
      </p>
    </section>

    <section class="mb-6">
      <h2 class="text-2xl font-semibold mb-4">7. Contact Us</h2>
      <p class="mb-2">
        If you have any questions about this Privacy Policy, please contact us at info@eloqra.com
      </p>
    </section>
    <button
      @click="router.push('/')"
      type="submit"
      class="w-[350px] bg-[#047f58] text-white p-2 rounded-lg font-semibold hover:bg-[#047f58df] transition mt-[10px]"
    >
      Go Back
    </button>
  </main>
</template>

<style scoped>
.privacy-policy-container {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
}
</style>
