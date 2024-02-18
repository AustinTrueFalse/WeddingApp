<script>
export default {
    computed: {
        dialogVisible: {
            get() {
                return this.$store.getters.dialogVisible;
            },
            set(value) {
                // Если требуется управление видимостью модального окна из компонента
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
        rounded="xl"  
        >
        <v-card-title>Ваша анкета заполнена</v-card-title>
        <v-card-text v-if="getDialogMessage">
            {{ getDialogMessage }}
           
                Ваши предпочения по напиткам
           
            <v-list v-for="drink in getForm.selected">
            {{ drink }}
            </v-list>
            Если вы в будущем захотите изменить выбор напитков, заполните эту форму еще раз
        </v-card-text>
        <v-card-actions>
            <v-btn @click="hideModal()">Close</v-btn>
        </v-card-actions>
        </v-card>
    </v-dialog>
</template>