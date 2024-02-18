import { createStore } from 'vuex' 
import db from '../src/firebase/init.js'
import { where, query, collection, addDoc, getDocs, updateDoc  } from 'firebase/firestore'

export default createStore({
    state: {
    // Form
      form: {
        firstName: '',
        phoneNumber: '',
        selected: [],
        radios: '',
      },
    // Modals
      dialogVisible: false,
      dialogMessage: '',
      dialogForUpdateVisible: false,
    //UpdateLogic
      userQuery: null,
    //Snackbar
      snackbar: {
        show: false,
        message: '',
        timeout: 3000,
        color: 'success',       
      },
    },
    mutations: {
    // Form
      updateForm(state, formData) {
        state.form = formData;
      },
      resetForm(state) {
        state.form = {
          firstName: '',
          phoneNumber: '',
          selected: [],
          radios: '',
        };
      },
    // Modals
      showModal(state) {
        state.dialogVisible = true;
      },
      setModalMessage(state, value) {
        state.dialogMessage = value;
      },
      showUpdateModal(state) {
        state.dialogForUpdateVisible = true;
      },
      hideModal(state) {
        state.dialogVisible = false;
      },
      hideUpdateModal(state) {
        state.dialogForUpdateVisible = false;
      },
    // SnackBar
      setSnackbar(state, {message, color} ) {
        state.snackbar.show = true
        state.snackbar.message = message
        state.snackbar.color = color
      },
      hideSnackbar(state) {
        state.snackbar.show = false;
      }
    },
    actions: {
    // Form
    async postInfo ({ commit, state }) {
     
        const isValid = 
            state.form.firstName.trim() !== '' 
            && 
            state.form.phoneNumber.length == 16
            &&
            state.form.selected.length > 0
            &&
            state.form.radios
        console.log('isFormValid:', isValid);
        
        if(isValid) {

            switch (state.form.radios) {
                case '1':
                  commit('setModalMessage', 'Будем вас ждать!')
                  break;
                case '2':
                  commit('setModalMessage', 'Очень жаль, что вы не сможете прийти :(')
                    break;
                case '3':
                  commit('setModalMessage', 'Очень жаль, что вы не сможете прийти :(')
                    break;
              }
      
              try {
                const q = query(collection(db, 'UserChoises'), where('phone', '==', state.form.phoneNumber))
                const querySnap = await getDocs(q)
                    
                if(!querySnap.empty) {
             
                  commit('showUpdateModal')
      
                  state.userQuery = querySnap
                  return
                }
                const colRef = collection(db, 'UserChoises')
      
                const dataObj = {
                  name: state.form.firstName,
                  visit: state.form.radios,
                  alco: state.form.selected,
                  phone: state.form.phoneNumber
                }
            
                const docRec = await addDoc(colRef, dataObj)
      
                commit('showModal')
                
                
                console.log('Document was created', docRec)
                
           
              } catch (error) {
      
                commit('setSnackbar', {
                  message: 'Ошибка загрузки данных, попробуйте позже', 
                  color: 'error'
                })
      
                console.error('Ошибка загрузки данных:', error.message)
              }  

        } else {
            commit('setSnackbar', {
                message: 'Заполните все поля формы', 
                color: 'error'
            })
        }


        

        
      },
      async updateInfo({ commit, state }) {
       
        try {

          const docRefToUpdate = state.userQuery.docs[0].ref
          
          const dataObj = {
            name: state.form.firstName,
            visit: state.form.radios,
            alco: state.form.selected,
            phone: state.form.phoneNumber
          }
          await updateDoc(docRefToUpdate, dataObj);
             
          console.log('Объект обновлен успешно')

        } catch (error) {
            
          commit('setSnackbar', {
            message: 'Ошибка загрузки данных, попробуйте позже', 
            color: 'error'
          })
          console.error('Ошибка при обновлении', error)
        }
      },
    // Modals
      showSuccessModal({ commit }) {
        commit('showModal');
      },
      showUpdateSuccessModal({ commit }) {
        commit('showUpdateModal');
      },
      hideSuccessModal({ commit }) {
        commit('hideModal');
        commit('resetForm')
      },
      hideUpdateSuccessModal({ commit }) {
        commit('hideUpdateModal');
        commit('resetForm')
      },
      showSnackbar({ commit }, { message, color }) {
        commit('setSnackbar', { message, color })
        setTimeout(() => {
           commit('hideSnackbar')
        }, state.snackbar.timeout);  
      },
      
    },
    getters: {
    // Modals
        form: (state) => state.form,
        dialogVisible: (state) => state.dialogVisible,
        dialogMessage: (state) => state.dialogMessage,
        dialogForUpdateVisible: (state) => state.dialogForUpdateVisible,
        phoneNumber: (state) => state.phoneNumber,
        selected: (state) => state.selected,
        radios: (state) => state.radios,
        userQuery: (state) => state.userQuery,
        snackbar: (state) => state.snackbar,
    },
  });