<template>

    <v-container class="pa-0 pl-5 pr-5">
        <v-sheet class="text-center">
            <v-img
              :src="imageURL"
              v-bind="{ width: '100%', height: 'auto'}"
                
            ></v-img>
            </v-sheet>
    </v-container>
    
</template>

<script>
export default {
  
  mounted() {
    window.addEventListener('resize', this.$forceUpdate);
    this.loadImage();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.$forceUpdate);
  },
  methods: {
    async loadImage() {
      const imagePath = 'gs://weddingapp-1a905.appspot.com/endphoto.jpg';
     

      try {
        await this.$store.dispatch('getImageURL', imagePath);
  
      } catch (error) {
        
      }
    },
  },
  computed: {
    imageURL() {
      return this.$store.getters.imageURL;
    },
  },
};
</script>
