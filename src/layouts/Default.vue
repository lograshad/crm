<script setup>
import Vue from "vue";
import LogoIcon from "~/components/icons/LogoIcon.vue";
import FooterLogoIcon from "~/components/icons/FooterLogoIcon.vue";
</script>

<template>
  <div class="w-full overflow-x-hidden">
    <div class="md:px-20 px-5">
      <header class="flex items-center justify-between py-3">
        <LogoIcon class="" />
        <nav class="flex-1 flex gap-6 justify-center">
          <g-link class="text-[#808080] font-semi-bold text-sm" to="/"
            >Home</g-link
          >
          <a class="text-[#808080] font-semi-bold text-sm" href="#pricing"
            >Pricing</a
          >
          <a class="text-[#808080] font-semi-bold text-sm" href="#features"
            >Features</a
          >
          <a class="text-[#808080] font-semi-bold text-sm" href="#contact"
            >Contact</a
          >
        </nav>
        <button class="bg-[#162450] text-white py-3 px-10 rounded-lg">
          Start Now
        </button>
      </header>
      <slot />
    </div>
    <footer class="bg-purple-200 mt-32" id="contact">
      <div class="px-5 md:px-36 py-20">
        <FooterLogoIcon />
        <div class="flex xl:flex-row flex-col gap-5 mt-5">
          <div class="flex-1 grid grid-cols-2 xl:flex gap-28">
            <div>
              <div class="text-lg font-semibold mb-4">Company</div>
              <ul class="flex flex-col gap-3">
                <li>
                  <g-link class="text-base text-grey-300">About us</g-link>
                </li>
                <li>
                  <g-link class="text-base text-grey-300">Contact</g-link>
                </li>
                <li>
                  <g-link class="text-base text-grey-300"
                    >Privacy Policy</g-link
                  >
                </li>
                <li>
                  <g-link class="text-base text-grey-300"
                    >Terms of Service</g-link
                  >
                </li>
              </ul>
            </div>
            <div>
              <div class="text-lg font-semibold mb-4">Connect</div>
              <ul class="flex flex-col gap-3">
                <li>
                  <g-link class="text-base text-grey-300">Twitter</g-link>
                </li>
                <li>
                  <g-link class="text-base text-grey-300">LinkedIn</g-link>
                </li>
                <li>
                  <g-link class="text-base text-grey-300"
                    >Email Newsletter</g-link
                  >
                </li>
              </ul>
            </div>
            <div>
              <div class="text-lg font-semibold mb-4">Resources</div>
              <ul class="flex flex-col gap-3">
                <li>
                  <g-link class="text-base text-grey-300">Blog</g-link>
                </li>
                <li>
                  <g-link class="text-base text-grey-300">Enterprise Plan</g-link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div class="text-lg font-semibold mb-4">Contact Info</div>
            <ul class="flex flex-col gap-3">
              <li>
                <g-link class="text-base text-grey-300 flex items-center gap-2">
                  <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00246 2.25722C7.69873 1.4979 6.96332 1 6.14551 1H3.39474C2.3483 1 1.5 1.8481 1.5 2.89453C1.5 11.7892 8.71078 19 17.6055 19C18.6519 19 19.5 18.1516 19.5 17.1052L19.5005 14.354C19.5005 13.5361 19.0027 12.8009 18.2434 12.4971L15.6069 11.4429C14.9249 11.1701 14.1483 11.2929 13.5839 11.7632L12.9035 12.3307C12.1089 12.9929 10.9396 12.9402 10.2082 12.2088L8.29222 10.2911C7.56079 9.55962 7.50673 8.39134 8.16895 7.59668L8.73633 6.9163C9.20661 6.35195 9.33049 5.57516 9.05766 4.89309L8.00246 2.25722Z" stroke="#808080" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<span>+1 - 202 - 555 - 0153</span>
                </g-link>
              </li>
              <li>
                <g-link class="text-base text-grey-300 flex items-center gap-2" 
                mailto="crminder@gmail.com"
                >
                  <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 2L8.60764 6.61227L8.60967 6.61396C9.28785 7.11128 9.62714 7.3601 9.99876 7.45622C10.3272 7.54117 10.6725 7.54117 11.001 7.45622C11.3729 7.36001 11.7132 7.11047 12.3926 6.61227C12.3926 6.61227 16.3101 3.60594 18.5 2M1.5 11.8002V4.2002C1.5 3.08009 1.5 2.51962 1.71799 2.0918C1.90973 1.71547 2.21547 1.40973 2.5918 1.21799C3.01962 1 3.58009 1 4.7002 1H16.3002C17.4203 1 17.9796 1 18.4074 1.21799C18.7837 1.40973 19.0905 1.71547 19.2822 2.0918C19.5 2.5192 19.5 3.07899 19.5 4.19691V11.8036C19.5 12.9215 19.5 13.4805 19.2822 13.9079C19.0905 14.2842 18.7837 14.5905 18.4074 14.7822C17.98 15 17.421 15 16.3031 15H4.69691C3.57899 15 3.0192 15 2.5918 14.7822C2.21547 14.5905 1.90973 14.2842 1.71799 13.9079C1.5 13.4801 1.5 12.9203 1.5 11.8002Z" stroke="#808080" stroke-width="1.56" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<span>crminder@gmail.com</span>
                </g-link>
              </li> 
            </ul>
          </div>
        </div>
      </div>
      <div class="bg-primary px-5 md:px-32 py-4 flex items-center justify-between">
        <span class="text-white text-xs">© 2024 CRMinder</span>
        <span class="text-white flex-1 hidden md:flex justify-center text-center">Crafted with ❤️ by Protomated. All rights reserved.</span>
        <span class="text-white text-xs">Protected by 256-bit encryption</span>
      </div>
    </footer>
  </div>
</template>

// todo add metadata query

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}
</style>
