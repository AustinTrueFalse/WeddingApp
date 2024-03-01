<script>
import { YandexMap } from 'vue-yandex-maps';

export default {
  components: {
    YandexMap,
  },
  data() {
    return {
      coordinates: [60.168696, 29.819560],
      controls: ['fullscreenControl'],
      zoom: 15
    };
  },
};
</script>

<template>

  <YandexMap
    :coordinates="coordinates"
    :controls="controls"
    :zoom="zoom"
  >
    <YandexMarker :coordinates="coordinates" :marker-id="123">
      
    </YandexMarker>
  </YandexMap>
  

</template>

<style>
  .yandex-container {
    height: 400px;
  }

  [class*="copyrights-pane"] {
	display: none !important;
  }

  [class*="ground-pane"] {
    filter: grayscale(1);
  }
</style>