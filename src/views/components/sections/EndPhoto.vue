<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="6" md="4" class="text-center"> <!-- Лучше задать конкретные колонки для адаптивности -->
          <v-progress-circular
            v-if="loading"
            :size="80"
            :width="10"
            indeterminate
            color="primary"
          ></v-progress-circular>
          <img
            :src="githubImageURL"

            @load="onImageLoad"

            v-bind="{ width: '100%', height: 'auto'}"
          ></img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      githubImageURL: "https://raw.githubusercontent.com/AustinTrueFalse/WeddingApp/main/public/mainphoto.png",
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