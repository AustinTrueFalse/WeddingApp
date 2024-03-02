<template>

<v-container class="pl-0 pr-0">
  <Main/>
  <Timing/>
  <Location/>
  <DressCode/>
  <Drinks/>
  <End/>
</v-container>
  
  
</template>

<script>

import Main from './sections/Main.vue'
import Timing from './sections/Timing.vue'
import Location from './sections/Location.vue'
import DressCode from './sections/DressCode.vue'
import Drinks from './sections/Drinks.vue'
import End from './sections/End.vue'

export default {
  name: "Frame",
  components: {
    Main,
    Timing,
    Location,
    DressCode,
    Drinks,
    End
  },
};
</script>

<style>


</style>