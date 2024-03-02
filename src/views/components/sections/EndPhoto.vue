<template>

    <v-container class="pa-0 pl-5 pr-5">
        <v-sheet class="text-center header-font-orlando decriase-font mt-10 end-photo">
          <v-progress-circular 
              class="cycle"
              v-if="loading"
              :size="80"
              :width="10"
              indeterminate
              color="black"

            ></v-progress-circular>
            <v-img
            :src="githubImageURL"
            @load="onImageLoad"
            v-bind="{ width: '100%', height: 'auto'}"
        ></v-img>
        </v-sheet>
        
    </v-container>
    
</template>

<script>
export default {
  data() {
    return {
      githubImageURL: "https://raw.githubusercontent.com/AustinTrueFalse/WeddingApp/main/public/endphoto.jpg",
      loading: true,
    };
  },
  mounted() {
    window.addEventListener('resize', this.$forceUpdate);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.$forceUpdate);
  },
  methods: {
    onImageLoad() {
      this.loading = false;
    },
  },
};
</script>

<style>

.end-photo {

  height: 500px;
}

.cycle {
  margin-top: 150px;
}

</style>