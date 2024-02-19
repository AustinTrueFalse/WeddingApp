<script>

  import InputForm from './components/InputForm.vue'
  import YandexMap from './components/YandexMap.vue'

  export default {
    components: {
      InputForm,
      YandexMap
    },
  }

</script>

<template>


        
      <v-container>
        <v-card
          rounded="xl"
        >
          <YandexMap />
        </v-card>
        
        <InputForm />
                 
      </v-container>

</template>


<style>



</style>