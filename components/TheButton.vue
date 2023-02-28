<template>
  <button
    :type="type"
    :class="`ag-${them}_btn ag-btn_${modifier}`"
  >
    <slot />
  </button>
</template>

<script setup>
const props = defineProps ({
    type: String,
    modifier: String,
    them: String,
})
</script>