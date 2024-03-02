<template>
    <v-container fluid>
      <v-row>
        <v-col>
          <v-img
            :src="imageUrl"
            alt="Изображение"
            v-bind="{ width: '100%', height: 'auto'}"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        imageUrl: 'gs://weddingapp-1a905.appspot.com/endphoto.jpg',
      };
    },
    mounted() {
      window.addEventListener('resize', this.$forceUpdate);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.$forceUpdate);
    },
  };
  </script>