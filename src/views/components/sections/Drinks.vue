<template>

    <v-container class="pa-0">
        <v-sheet class="text-center header-font increase-font pt-10">
            ПОЖАЛУЙСТА ПОДТВЕРДИТЕ ВАШЕ ПРИСУТСТВИЕ
        </v-sheet>
                            
        <v-card
            class="pt-10"
            rounded="xl"
            elevation="0"
        >
            <InputForm/>
        </v-card>

                
        
    </v-container>

  
</template>

<script>

import '../../../assets/main.css'
import InputForm from '../InputForm.vue'

export default {
  components: {
    InputForm
  },
};

</script>

