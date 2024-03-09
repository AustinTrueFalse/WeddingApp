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
    
    },
    methods: {
      async postInfo () {
        this.$store.dispatch('postInfo')
      },
      closeDialog() {
        this.$store.dispatch('showSuccessModal')
      },
      formatPhoneNumber() {

        let phoneNumberDigits = this.form.phoneNumber.replace(/[^0-9+]/g, '');

        

        if (phoneNumberDigits.charAt(0) === '+') {
            
          if (phoneNumberDigits.charAt(1) === '8') {
            phoneNumberDigits = '+7' + phoneNumberDigits.slice(2);
          }

          this.form.phoneNumber = phoneNumberDigits.replace(/(\d{1,1})(\d{1,3})(\d{1,3})(\d{1,2})(\d{1,2})/, '$1-$2-$3-$4-$5');        
        }

        else {
          
          if (phoneNumberDigits.charAt(0) === '8') {
            phoneNumberDigits = '7' + phoneNumberDigits.slice(1);
          }

          this.form.phoneNumber = phoneNumberDigits.replace(/(\d{1,1})(\d{1,3})(\d{1,3})(\d{1,2})(\d{1,2})/, '+$1-$2-$3-$4-$5');
        }

        
        
      }, 
      handleNoDrinkCheckbox() {
        if (this.form.selected.includes("Я не пью")) {
          this.form.selected = ["Я не пью"];
        }
      }, 
      handleDrinkCheckbox() {
        if (this.form.selected.includes("Я не пью")) {
          this.form.selected = this.form.selected.filter(choise => choise !== "Я не пью");
        }
      },  
    }
  }

</script>

<template>
      <v-container>
        
        <DialogSubmit />
        <DialogUpdate />  
        <Snackbar />


        <v-row class="ml-2 mr-2 mb-2" >        
              <v-sheet class="mx-auto header-font">
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
                  <p class="header-font pt-5">Сможете ли вы прийти?</p>
                      <v-radio-group v-model="form.radios">
                      <v-radio label="Смогу / сможем присутствовать" value="1"></v-radio>
                      <v-radio label="Затрудняюсь ответить, сообщу позже" value="2"></v-radio>
                      <v-radio label="Не смогу прийти" value="3"></v-radio>
                      </v-radio-group>
                  <p class="header-font">Предпочтения по напиткам</p> 
                      <v-checkbox                     
                        v-model="form.selected"
                        hide-details class="shrink mr-0 mt-0"
                        label="Игристое сухое"
                        value="Игристое сухое"
                        @change="handleDrinkCheckbox"
                        ></v-checkbox>
                      <v-checkbox                       
                        v-model="form.selected"
                        hide-details class="shrink mr-0 mt-0"
                        label="Игристое полусладкое"
                        value="Игристое полусладкое"
                        @change="handleDrinkCheckbox"
                      ></v-checkbox>
                      <v-checkbox                       
                        v-model="form.selected"
                        hide-details class="shrink mr-0 mt-0"
                        label="Белое вино сухое"
                        value="Белое вино сухое"
                      ></v-checkbox>
                      <v-checkbox                      
                        v-model="form.selected"
                        hide-details class="shrink mr-0 mt-0"
                        label="Белое вино полусладкое"
                        value="Белое вино полусладкое"
                        @change="handleDrinkCheckbox"
                      ></v-checkbox>
                      <v-checkbox                    
                        v-model="form.selected"
                        hide-details class="shrink mr-0 mt-0"
                        label="Красное вино сухое"
                        value="Красное вино сухое"
                        @change="handleDrinkCheckbox"
                      ></v-checkbox>
                      <v-checkbox                   
                        v-model="form.selected"
                        hide-details class="shrink mr-0 mt-0"
                        label="Красное вино полусладкое"
                        value="Красное вино полусладкое"
                        @change="handleDrinkCheckbox"
                      ></v-checkbox>
                      <v-checkbox                 
                        v-model="form.selected"
                        hide-details class="shrink mr-0 mt-0"
                        label="Водка"
                        value="Водка"
                        @change="handleDrinkCheckbox"
                      ></v-checkbox>
                      <v-checkbox                        
                        v-model="form.selected"
                        hide-details class="shrink mr-0 mt-0"
                        label="Коньяк"
                        value="Коньяк"
                        @change="handleDrinkCheckbox"
                      ></v-checkbox>
                      <v-checkbox                        
                        v-model="form.selected"
                        hide-details class="header-font shrink mr-0 mt-0"
                        label="Виски"
                        value="Виски"
                        @change="handleDrinkCheckbox"
                      ></v-checkbox>
                      <v-checkbox 
                        v-model="form.selected"
                        hide-details class="header-font shrink mr-0 mt-0"
                        label="Я не пью"
                        value="Я не пью"
                        @change="handleNoDrinkCheckbox"
                      ></v-checkbox>
                      <v-sheet 
                      
                        class="header-font mt-5">
                        Если вы выбрали вариант "Я не пью" или у вас есть конкретные предпочения в алкоголе, укажите их ниже
                      </v-sheet>
                      <v-text-field
                        class="header-font pt-5"
                        v-model="form.handleChoises"
                        label="Предпочтения"
                        variant="underlined"
                        @input="formatPhoneNumber"
                      ></v-text-field>          
              <v-btn               
                @click="postInfo()"
                variant="outlined"
                type="submit" 
                rounded="xl"
                block
                class="mt-10 header-font"
                :loading="$store.state.isPostingInfo"
                >Отправить
                          
              </v-btn>             
              </v-sheet>                      
        </v-row>        
      </v-container>

</template>


<style>

@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Kanit:wght@400;600&family=Montserrat:wght@100;300;400&display=swap');






</style>