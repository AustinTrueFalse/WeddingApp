<template>

    <v-container class="pa-0" >

        <v-row justify="space-between" align="center"
            class="background_color" style="min-height: 400px;">  
            <v-col
                class="montserrat_font first-row pl-10"
                cols="9"
            >
                <v-row justify="space-between"> 
                    <v-col
                        cols="2"
                        class="orlando_font"
                    >
                        <v-sheet class="background_color white-text adaptive-font">
                            15:00
                        </v-sheet>
                        <v-sheet class="pt-10 background_color white-text adaptive-font">
                            16:30
                        </v-sheet>
                        <v-sheet class="pt-10 background_color white-text adaptive-font">
                            17:00
                        </v-sheet>
                        <v-sheet class="pt-10 background_color white-text adaptive-font">
                            18:00
                        </v-sheet>
                        <v-sheet class="pt-10 background_color white-text adaptive-font">
                            23:00
                        </v-sheet>
                    </v-col> 
                    <v-col
                        cols="10"
                        class="montserrat_font"
                    >
                        <v-sheet class="background_color white-text adaptive-font">
                            ТРАНСФЕР
                        </v-sheet>
                        <v-sheet class="pt-10 background_color white-text adaptive-font">
                            WELCOME
                        </v-sheet>
                        <v-sheet class="pt-10 background_color white-text adaptive-font">
                            ЦЕРЕМОНИЯ
                        </v-sheet>
                        <v-sheet class="pt-10 background_color white-text adaptive-font">
                            УЖИН И ВЕЧЕРИНКА
                        </v-sheet>
                        <v-sheet class="pt-10 background_color white-text adaptive-font">
                            ЗАВЕРШЕНИЕ ВЕЧЕРА
                        </v-sheet>
                    </v-col>           
                </v-row>

            </v-col>

            <v-col cols="3">
                <v-card class="custom-card background_color pa-0">
                    <v-card-text class="orlando_font rotated-text white-text">
                        TIMING
                    </v-card-text>
                </v-card>  
            </v-col>
            
        </v-row>
    </v-container>

  
</template>

<script>


export default {
  components: {
    
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

.background_color {
    background-color: #0a0a0a;
}

.white-text {
  color: #ffffff !important;
}
.text-center {
  text-align: center !important;
}

.orlando_font {
    font-family: 'Orlando', sans-serif;
    font-size: 0.9em;
    
}

.montserrat_font {
    font-family: 'Montserrat', sans-serif;
    font-size: 0.9em;
    line-height: 1.1;
}


.margin_between_rows {
    margin-bottom: -5px
}


.custom-card {
    height: 400px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

.rotated-text {
    font-size: 80px !important;
    transform: rotate(-90deg);
}

@media screen and (min-width: 768px) {
  .adaptive-font {
    font-size: 1.5em;
  }
}





</style>