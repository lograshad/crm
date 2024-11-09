<script>
export default {
  props: {
    color: {
      type: String,
      default: "",
    },
    shadowColor: {
      type: String,
      default: "",
    },
    rate: {
      type: Number,
      default: 1,
    },
    insight: {
      type: String,
      default: "",
    },
    textColor: {
      type: String,
      default: "",
    },
    position: {
      type: String,
      default: "",
    },
  },
};
</script>

<template>
  <div
  :style="{
      backgroundColor: color,
      boxShadow: `0px 30px 90px 0px ${shadowColor}`
    }"
    :class="`rounded-xl absolute p-7 shadow-[0px_30px_90px_0px_${shadowColor}] ${position}`"
  >
    <span :class="`text-3xl font-semibold ${textColor}`"> {{ rate }}% </span>
    <p
      class="text-[#808080] capitalize text-sm border-t border-[#D6D6D6] mt-3 pt-3"
    >{{ insight }}</p>
  </div>
</template>
