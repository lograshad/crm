<script setup>
import Vue from "vue";
import LogoIcon from "~/components/icons/LogoIcon.vue";
import FooterLogoIcon from "~/components/icons/FooterLogoIcon.vue";
</script>

<template>
  <div>
    <div class="px-20">
      <header class="flex items-center justify-between py-3">
        <LogoIcon class="" />
        <nav class="flex-1 flex gap-6 justify-center">
          <g-link class="text-[#808080] font-semi-bold text-sm" to="/"
            >Home</g-link
          >
          <g-link class="text-[#808080] font-semi-bold text-sm" to="/pricing/"
            >Pricing</g-link
          >
          <g-link class="text-[#808080] font-semi-bold text-sm" to="/features/"
            >Features</g-link
          >
          <g-link class="text-[#808080] font-semi-bold text-sm" to="/contact/"
            >Contact</g-link
          >
        </nav>
        <button class="bg-[#162450] text-white py-3 px-10 rounded-lg">
          Start Now
        </button>
      </header>
      <slot />
    </div>
    <footer class="bg-[#F9F9FB]">
      <div class="px-36 py-20">
        <FooterLogoIcon />
        <div class="flex gap-5 mt-5">
          <div class="flex-1 flex gap-28">
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
          </div>
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
                <g-link class="text-base text-grey-300">Privacy Policy</g-link>
              </li>
              <li>
                <g-link class="text-base text-grey-300"
                  >Terms of Service</g-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="bg-primary px-32 py-4 flex items-center justify-between">
        <span class="text-white">© 2024 CRMinder</span>
        <span class="text-white flex-1 text-center">Crafted with ❤️ by Protomated. All rights reserved.</span>
        <span class="text-white">Protected by 256-bit encryption</span>
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
