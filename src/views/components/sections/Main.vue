<template>

    <v-container class="pa-0">

        <v-row justify="space-between"
        class="pt-10">  
            <v-col
                class="montserrat_font first-row"
                cols="1"
            >
                <v-row 
                    align="start"
                    class="pb-10"
                    >
                    <v-col class="pl-10">
                        <v-sheet class="text-left adaptive-font">
                        SAVE
                        </v-sheet>
                        <v-sheet class="text-left adaptive-font">
                        THE
                        </v-sheet>
                        <v-sheet class="text-left adaptive-font">
                        DATE
                        </v-sheet>
                    </v-col>           
                </v-row>

            </v-col>
            <v-col
                class="text-right orlando_font decr-font pa-0 pl-15 pr-3"
                cols="11"
            >
                <v-sheet 
                style="line-height: 0.8;"
                >
                    29
                </v-sheet>
            </v-col>
        </v-row>
        <v-row justify="space-between" >  
            <v-col 
                class="text-right orlando_font decr-font pa-0 pr-3"
                cols="12"
            >
            <v-sheet style="line-height: 0.8; letter-spacing: -10px;">
                AUG
            </v-sheet>
            </v-col>
        </v-row>
        <v-row justify="space-between">  
            <v-col
                class="montserrat_font first-row"
                cols="6"
            >
                <v-row 
                    align="start"
                    class="pb-10"
                    >
                    <v-col class="pl-10">
                        <v-sheet class="text-left adaptive-font pt-5">
                        MAKSIM 
                        <v-icon class="small-dot">mdi-circle</v-icon>
                        VIOLA
                        </v-sheet>
                        <v-sheet class="text-left adaptive-font">
                        WEDDING
                        </v-sheet>
                        
                    </v-col>           
                </v-row>

            </v-col>
            <v-col
                class="text-right orlando_font decr-font pa-0  pr-3"
                cols="6"
            >
                <v-sheet 
                style="line-height: 0.8;"
                >
                    24
                </v-sheet>
            </v-col>
        </v-row>
        <v-row justify="space-between">  
            <v-col
                class="montserrat_font first-row"
                cols="6"
            >
                <v-row 
                    align="start"
                    class="pb-10"
                    >
                    <v-col class="pl-10">
                        <v-sheet class="text-left adaptive-font pt-5">
                        ДОРОГИЕ
                        </v-sheet>
                        <v-sheet class="adaptive-font">
                        ДРУЗЬЯ И РОДНЫЕ!
                        </v-sheet>
                        <v-sheet class="montserrat_small adaptive-font pt-5">
                        В нашей жизни скоро состоится важное событие - свадьба!
                        </v-sheet>
                        <v-sheet class="montserrat_small adaptive-font pt-6">
                        Мы будем очень рады, если вы разделите этот особенный день с нами!
                        </v-sheet>
                        
                        
                    </v-col>           
                </v-row>

            </v-col>
            <v-col
                class="text-right orlando_font pa-0 pr-5 pt-5"
                cols="6"
            >
                <v-sheet
                block
                >
                <MainPhoto />
                    <!-- <img src="../../../../public/mainphoto.png" alt="" height="250"> -->
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
  
</template>

<script>

import MainPhoto from '../sections/MainPhoto.vue'

export default {
  components: {
    MainPhoto
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



.orlando_font {
    font-family: 'Orlando', sans-serif;
    font-size: 150px;
}



.montserrat_font {
    font-family: 'Montserrat', sans-serif;
    font-size: 0.9em;
    line-height: 1.1;
}

.montserrat_small {
    font-family: 'Montserrat', sans-serif;
    font-size: 0.7em;
    line-height: 1.1;
}

.background_color {
    background-color: gray; /* Замените #YourColor на ваш цвет */
}

.margin_between_rows {
    margin-bottom: -5px
}

.text-right {
  text-align: right;
}

.text-left {
  text-align: left;
}

.small-dot {
  font-size: 3px; /* Установите размер, который соответствует вашим требованиям */
}

@media screen and (min-width: 768px) {
  .adaptive-font {
    font-size: 1.5em; /* Увеличенный размер шрифта для экранов шириной 768px и более */
  }
}
@media screen and (max-width: 320px) {
  .decr-font {
    font-size: 120px; /* Увеличенный размер шрифта для экранов шириной 768px и более */
  }
}





</style>