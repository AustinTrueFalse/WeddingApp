<template>

<v-container
class="pa-0">
  <Main class="pb-10"/>
  <Timing/>
</v-container>
  
  
</template>

<script>

import Main from './sections/Main.vue'
import Timing from './sections/Timing.vue'

export default {
  name: "Frame",
  components: {
    Main,
    Timing
  },
};
</script>

<style>


</style>