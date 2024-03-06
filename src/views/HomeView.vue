<script>

import '../assets/main.css'

  import InputForm from './components/InputForm.vue'
  import YandexMap from './components/YandexMap.vue'
  import Frame from './components/Frame.vue'

  export default {
    components: {
      InputForm,
      YandexMap,
      Frame
    },
  }

</script>

<template>


        
      <v-container 
        class="pa-0 max-width-frame overflow-hidden" 
        >

        <Frame />

      </v-container>

</template>


