<template>
  <nav class="flex w-full justify-between items-center bg-blue-600 px-2 py-4" aria-label="NavBar">
    <slot>
      <section aria-label="left">
        <slot name="left" />
      </section>
      <section aria-label="right">
        <slot name="right" />
      </section>
    </slot>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavBar",
});
</script>