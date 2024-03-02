<template>

    <v-container class="pa-0 pb-5 mb-10">
        <v-row justify="space-between" class="pt-10">  
            <v-col cols="1">
                <v-row class="pb-10">
                    <v-col class="text-left header-font increase-font pl-10">
                        <v-sheet>
                        SAVE
                        </v-sheet>
                        <v-sheet>
                        THE
                        </v-sheet>
                        <v-sheet>
                        DATE
                        </v-sheet>
                    </v-col>           
                </v-row>

            </v-col>
            <v-col
                class="text-right main-font decriase-main-font pa-0 pl-15 pr-3"
                cols="11"
            >
                <v-sheet>
                    29
                </v-sheet>
            </v-col>
        </v-row>
        <v-row justify="space-between" >  
            <v-col 
                class="text-right main-font decriase-main-font main-font-spacing pa-0 pr-3"
                cols="12"
            >
            <v-sheet>
                AUG
            </v-sheet>
            </v-col>
        </v-row>
        <v-row justify="space-between">  
            <v-col cols="6">
                <v-row class="">
                    <v-col class="text-left header-font increase-font pl-10 pt-10">
                        <v-sheet>
                        MAKSIM 
                        <v-icon class="small-dot">mdi-circle</v-icon>
                        VIOLA
                        </v-sheet>
                        <v-sheet>
                        WEDDING
                        </v-sheet>
                        
                    </v-col>           
                </v-row>

            </v-col>
            <v-col
                class="text-right main-font decriase-main-font pa-0 pr-3"
                cols="6"
            >
                <v-sheet>
                    24
                </v-sheet>
            </v-col>
        </v-row>
        <v-row justify="space-between">  
            <v-col
                class="montserrat_font first-row pt-15"
                cols="6"
            >
                <v-row>
                    <v-col class="text-left pl-10">
                        <v-sheet class="header-font increase-font">
                        ДОРОГИЕ
                        </v-sheet>
                        <v-sheet class="header-font increase-font">
                        ДРУЗЬЯ И РОДНЫЕ
                        </v-sheet>
                        <v-sheet class="header-font-small increase-font-small pt-5">
                        В нашей жизни скоро состоится важное событие - свадьба!
                        </v-sheet>
                        <v-sheet class="header-font-small increase-font-small pt-5">
                        Мы будем очень рады, если вы разделите этот особенный день с нами!
                        </v-sheet>                    
                    </v-col>           
                </v-row>

            </v-col>
            <v-col
                class="text-right orlando_font pa-0 pr-5 pt-5"
                cols="6"
            >
                <v-sheet block>
                    <MainPhoto />
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
  
</template>

<script>

import '../../../assets/main.css'
import MainPhoto from '../sections/MainPhoto.vue'

export default {
  components: {
    MainPhoto
  },
};
</script>

