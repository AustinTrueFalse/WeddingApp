<template>

<v-container
class="pa-0">
  <Main class="pb-10"/>
  <Timing/>
  <Location/>
  <DressCode/>
  <Drinks/>
</v-container>
  
  
</template>

<script>

import Main from './sections/Main.vue'
import Timing from './sections/Timing.vue'
import Location from './sections/Location.vue'
import DressCode from './sections/DressCode.vue'
import Drinks from './sections/Drinks.vue'

export default {
  name: "Frame",
  components: {
    Main,
    Timing,
    Location,
    DressCode,
    Drinks
  },
};
</script>

<style>


</style>