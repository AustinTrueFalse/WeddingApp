<template>

    <v-container class="pa-0 pl-5 pr-5">
        <v-sheet class="text-center header-font-orlando decriase-font mt-10">
            LOCATION
        </v-sheet>

            <v-card
                elevation="0"
                rounded="xl"
            >
                <YandexMap />
            </v-card>

            <v-sheet class="pl-5">
                <v-sheet class="header-font increase-font pt-8">
                Колокольная горка
                </v-sheet>
                <v-sheet class="header-font-small increase-font-small pt-1">
                п.Репино, Приморское шоссе, 450
                </v-sheet>
                <v-sheet class="header-font increase-font pt-5">
                Для удобства будет организован трансфер
                </v-sheet>
                <v-sheet class="header-font-small increase-font-small pt-1">
                подробности сообщат наши организаторы перед мероприятием
                </v-sheet>
            </v-sheet>
                

    </v-container>
  
</template>

<script>

import '../../../assets/main.css'
import YandexMap from '../YandexMap.vue'

export default {
  components: {
    YandexMap
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






</style>