<script>

import '../../assets/main.css'

export default {
    computed: {
        dialogVisible: {
            get() {
                return this.$store.getters.dialogForUpdateVisible;
            },
            set(value) {
                // Если требуется управление видимостью модального окна из компонента
                this.$store.dispatch(value ? 'showUpdateSuccessModal' : 'hideUpdateSuccessModal');
            },
        },
        getUserQuery() {
            return this.$store.getters.userQuery
        },
        getForm() {
            return this.$store.getters.form
        }

    },
    methods: {
        hideModal() {
            this.$store.dispatch('hideUpdateSuccessModal');
        },
        changeUpdateAgree(q) {
            this.$store.dispatch('updateInfo');
        },
        
    },
}
</script>

<template>
    <v-dialog v-model="dialogVisible" class="max-width-modal">
        <v-card
        rounded="xl"
        class="header-font"  
        >
        
        <v-card-text>
            По вашему номеру телефона уже есть заполненная анкета
        </v-card-text>
        
        <v-card-text>Изменить данные старой анкеты?  
        </v-card-text>
        <v-card-text v-if="getForm.radios != '3'">           
            Ваш выбор:     
            <v-list lines="one">
                <v-list-item  v-for="drink in getForm.selected">
                    <v-icon>mdi-circle-small</v-icon> {{ drink }}
                </v-list-item>
            </v-list>
        </v-card-text>
        <v-card-actions>
            <v-btn 
                rounded="xl"
                class="ml-2"
                @click="changeUpdateAgree(getUserQuery)"
                :loading="$store.state.isPostingInfo"
            >Перезаписать
            </v-btn>
        </v-card-actions>
        <v-card-actions>
            <v-btn 
                rounded="xl"
                class="ml-2"
                @click="hideModal()"              
            >Закрыть
            </v-btn>
        </v-card-actions>
        </v-card>
    </v-dialog>
</template>