<script>
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
    <v-dialog v-model="dialogVisible">
        <v-card
        rounded="xl"  
        >
        <v-card-title>Анкета с указанным номером телефона уже существует</v-card-title>
        <v-card-text>
            
            Ваши предпочения по напиткам
           
            <v-list v-for="drink in getForm.selected">
            {{ drink }}
            </v-list>
        </v-card-text>
        <v-card-text>Перезаписать выбор по предпочннениями?</v-card-text>
        <v-card-actions>
            <v-btn @click="changeUpdateAgree(getUserQuery)">Перезаписать</v-btn>
        </v-card-actions>
        <v-card-actions>
            <v-btn @click="hideModal()">Close</v-btn>
        </v-card-actions>
        </v-card>
    </v-dialog>
</template>