<script>

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
        class="pa-0 custom-max-width"
        >

        <Frame />

        <!-- <v-card
          rounded="xl"
          variant="flat"
        >
          <YandexMap />
        </v-card>
        
        <InputForm />
                  -->
      </v-container>

</template>


<style>

.custom-max-width {
  max-width: 1200px  !important;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

</style>