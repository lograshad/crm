<template>
    <div class="accordion space-y-4">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="accordion-item border-b border-gray-300 pb-4"
      >
        <button
          @click="toggleItem(index)"
          class="accordion-header flex justify-between items-center w-full text-left font-semibold text-base md:text-lg py-2"
        >
          <span>{{ item.title }}</span>

          <span
            :class="{'rotate-45': openIndex === index}"
            class="transform transition-transform duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </span>
        </button>
        <div
          v-if="openIndex === index"
          class="accordion-content mt-2 text-grey-400 text-sm md:text-base"
        >
          <p>{{ item.content }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  
  export default {
    name: "FAQs",
    props: {
      items: {
        type: Array,
        required: true,
      },
    },
    setup() {
      const openIndex = ref(null);
  
      const toggleItem = (index) => {
        openIndex.value = openIndex.value === index ? null : index;
      };
  
      return { openIndex, toggleItem };
    },
  };
  </script>
  
  <style scoped>
  .rotate-45 {
    transform: rotate(45deg);
  }
  </style>
  