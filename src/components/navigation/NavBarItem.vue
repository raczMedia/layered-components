<template>
  <div class="text-gray-800">
    <slot name="before"></slot>
    {{ label }}
    <slot name="after"></slot>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "NavBarItem",
  props: {
    label: {type: String, required: true},
    active: {type: Boolean, default: false},
  }
});
</script>

<style lang="scss" scoped>

</style>