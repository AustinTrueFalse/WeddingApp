<script>
 
import '../../assets/main.css'

export default {
  computed: {
    getSnackbar() {
      return this.$store.getters.snackbar
    }
  }
}

</script>

<template>
    <v-snackbar class="header-font" 
        rounded="pill"
        v-model="getSnackbar.show" 
        :timeout="getSnackbar.timeout" 
        :color="getSnackbar.color">
        <div class="rounded-snackbar text-center">{{ getSnackbar.message }}</div>
    </v-snackbar>   
</template>

