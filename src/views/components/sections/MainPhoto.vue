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
        imageUrl: '/public/mainphoto.png',
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