<script>
  import DialogSubmit from '../components/DialogSubmit.vue'
  import DialogUpdate from '../components/DialogUpdate.vue'
  import Snackbar from '../components/Snackbar.vue'

  export default {
    components: {
      DialogSubmit,
      DialogUpdate,
      Snackbar,
    },
    data: () => ({

      rules: [
        value => {
          if (value) return true
   
          return 'Введите Фамилию и Имя'
          
        },
      ],
      phoneNumberRules: [
        value => {
          if (!value) return 'Введите номер телефона'
          if (value.length != 16) return 'Номер телефона должен быть не более 11 символов'

          return true
        },
      ],
      
    }),
    computed: {
      form: {
        get() {
          return this.$store.state.form;
        },
        set(value) {
          this.$store.commit('updateForm', value);
        },
      },
      isFormValid() {
        const isValid = 
            this.form.firstName.trim() !== '' 
            && 
            this.form.phoneNumber.length == 16
            &&
            this.form.selected.length > 0
            &&
            this.form.radios
        console.log('isFormValid:', isValid);
        return isValid;
    },  
    },
    methods: {
      async postInfo () {
        this.$store.dispatch('postInfo')
      },
      closeDialog() {
        this.$store.dispatch('showSuccessModal')
      },
      formatPhoneNumber() {
        this.form.phoneNumber = this.form.phoneNumber.replace(/\D/g, '');
        this.form.phoneNumber = this.form.phoneNumber.replace(/(\d{1,1})(\d{1,3})(\d{1,3})(\d{1,2})(\d{1,2})/, '+$1-$2-$3-$4-$5');
      },   
      // test(arr, target) {
        
      //   const finalArr = []

      //   for(let i=0; i<=arr.length; i++) {
      //     for(let j=0; j<=arr.length; j++) {
      //       console.log(arr[i] + arr[j])
      //       arr[i] + arr[j] == target  ? finalArr.push(i, j) : console.log('дальше')
      //     }
      //   }

      //   console.log(Array.from(new Set(finalArr)))
      //   // return Array.from(new Set(finalArr))

        
      // }
    }
  }

</script>

<template>

      <v-container>
        
        <DialogSubmit />
        <DialogUpdate />  
        <Snackbar />


        <v-row justify="center" align="center"> 
          <v-col cols="2" md="1">
            <v-card class="custom-card">
              <v-card-text class="rotated-text">
                Ваш текст здесь
              </v-card-text>
            </v-card>              
          </v-col>
          <v-col cols="10" md="5">           
              <v-sheet class="mx-auto">
                <v-form @submit.prevent>
                  <v-text-field
                    v-model="form.firstName"
                    :rules="rules"
                    label="Фамилия Имя"
                    variant="underlined"
                  ></v-text-field>
                  <v-text-field
                    v-model="form.phoneNumber"
                    label="Номер телефона"
                    :rules="phoneNumberRules"
                    variant="underlined"
                    @input="formatPhoneNumber"
                  ></v-text-field>
                </v-form>
                  <p class="pt-5">Сможете ли вы прийти?</p>
                      <v-radio-group v-model="form.radios">
                      <v-radio label="Смогу / сможем присутствовать" value="1"></v-radio>
                      <v-radio label="Затрудняюсь ответить, сообщу позже" value="2"></v-radio>
                      <v-radio label="Не смогу прийти" value="3"></v-radio>
                      </v-radio-group>
                  <p>Предпочтения по напиткам</p> 
                      <v-checkbox
                        v-model="form.selected"
                        hide-details class="shrink mr-0 mt-0"
                        label="Шампанское"
                        value="Шампанское"
                        ></v-checkbox>
                      <v-checkbox
                        v-model="form.selected"
                        hide-details class="shrink mr-0 mt-0"
                        label="Белое вино"
                        value="Белое вино"
                      ></v-checkbox>
                      <v-checkbox
                        v-model="form.selected"
                        hide-details class="shrink mr-0 mt-0"
                        label="Водка"
                        value="Водка"
                      ></v-checkbox>
                      <v-checkbox
                        v-model="form.selected"
                        hide-details class="shrink mr-0 mt-0"
                        label="Коньяк"
                        value="Коньяк"
                      ></v-checkbox>
                      <v-checkbox
                        v-model="form.selected"
                        hide-details class="shrink mr-0 mt-0"
                        label="Виски"
                        value="Виски"
                      ></v-checkbox>           
              <v-btn 
               
                @click="test([2, 2, 3], 4)"
                variant="outlined"
                type="submit" 
                rounded="xl"
                block
                class="my__button mt-4"
                :loading="$store.state.isPostingInfo"
                >Отправить
              
              
              </v-btn>
                   
              
              </v-sheet>              
          </v-col>          
        </v-row>        
      </v-container>


</template>


<style>

@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Kanit:wght@400;600&family=Montserrat:wght@100;300;400&display=swap');






</style>