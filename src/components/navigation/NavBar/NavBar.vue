<template>
  <nav class="flex justify-between items-center bg-blue-600 px-2 py-4" aria-label="NavBar">
    <slot>
      <div>
        <slot name="left" />
      </div>
      <div>
        <slot name="right" />
      </div>
    </slot>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavBar",
});
</script>