<template>

    <v-container class="pa-0 pt-15 pb-16" >
        
        <EndPhoto/>

        <v-sheet class="pl-10 pr-10">
            <v-sheet class="text-center header-font increase-font pt-8">
            ОРГАНИЗАЦИОННЫЕ МОМЕНТЫ
            </v-sheet>
            <v-sheet class="text-center header-font-small increase-font-small pt-10">
            Мы не хотим обременять вас выбором подарка, поэтому будем рады вкладу в бюджет нашей семьи.
            </v-sheet>
            <v-sheet class="text-center header-font-small increase-font-small pt-10">
            Пожалуйста, не дарите нам цветы, забудьте слово “горько” на этот вечер и будьте собой :)
            </v-sheet>
            <v-sheet class="text-left header-font increase-font padding-big decriase-padding">
            ДО ВСТРЕЧИ,
            </v-sheet>
            <v-sheet class="text-left header-font increase-font pt-1">
            МАКСИМ И ВИОЛА
            </v-sheet>
        </v-sheet>
                

    </v-container>
  
</template>

<script>

import '../../../assets/main.css'
import EndPhoto from '../sections/EndPhoto.vue'

export default {
  components: {
    EndPhoto
  },
};
</script>

<style scoped>


@font-face {
    font-family: 'Orlando';
    src: url('../../../assets/fonts/OrlandoCapsCG.otf') format('truetype');
    font-weight: normal;
    font-style: normal;
}


.padding-big {
  padding-top: 250px;
}

@media screen and (max-width: 430px) {
  .decriase-padding {
    padding-top: 100px;
  }
    
}


</style>