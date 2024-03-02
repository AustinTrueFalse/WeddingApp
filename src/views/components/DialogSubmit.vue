<script>

import '../../assets/main.css'

export default {
    computed: {
        dialogVisible: {
            get() {
                return this.$store.getters.dialogVisible;
            },
            set(value) {
                this.$store.dispatch(value ? 'showSuccessModal' : 'hideSuccessModal');
            },
        },
        getDialogMessage() {
            return this.$store.getters.dialogMessage
        },
        getForm() {
            return this.$store.getters.form
        }
    },

    methods: {
        hideModal() {
            this.$store.dispatch('hideSuccessModal');
        },
    },
}
</script>

<template>
    <v-dialog v-model="dialogVisible">
        <v-card
        class="header-font"
        rounded="xl"  
        >
        <v-card-title>Анкета заполнена!</v-card-title>
        <v-card-text v-if="getDialogMessage">
            {{ getDialogMessage.header }}          
            <v-card-text
                v-if="getForm.radios == '1'"
                >
                Ваш выбор:
                <v-list v-for="drink in getForm.selected">
                {{ drink }}
                </v-list>
            </v-card-text>         
        </v-card-text>
        <v-card-text v-if="getDialogMessage">
            {{ getDialogMessage.footer }} 
        </v-card-text>
        
        <v-card-actions>
            <v-btn 
            rounded="xl"
            @click="hideModal()">Закрыть</v-btn>
        </v-card-actions>
        </v-card>
    </v-dialog>
</template>