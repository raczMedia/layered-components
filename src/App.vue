<template>
  Layered Components

  <NavBar>
    <template #left>
      Logo
    </template>
    <template #right>
      <div>Home</div>
      <div>About</div>
      <div>Contact</div>
    </template>
  </NavBar>
</template>

<script>
import NavBar from "@/components/navigation/NavBar/NavBar";

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>
