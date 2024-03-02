/*
[+] Добавить processcycle на отправку и на апдейт
[-] На апдейте заменить snackbar на что-нибудь другое
[+] Долго отправляется?
*/

import { createStore } from 'vuex' 
import db from '../src/firebase/init.js'
import { where, query, collection, addDoc, getDocs, updateDoc  } from 'firebase/firestore'
import { getStorage, ref, getDownloadURL } from 'firebase/storage';


export default createStore({
    state: {
    // Form
      form: {
        firstName: '',
        phoneNumber: '',
        selected: [],
        radios: '',
        isPostingInfo: false,
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
      imageURL: null,
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
      setPostingInfo(state, value) {
        state.isPostingInfo = value;
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
      },
      setImageURL(state, value) {
        state.imageURL = value;
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

            commit('setPostingInfo', true);

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

                  commit('setPostingInfo', false);
             
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
                commit('setPostingInfo', false);
                
                console.log('Document was created', docRec)
                
           
              } catch (error) {
      
                commit('setSnackbar', {
                  message: 'Ошибка загрузки данных, попробуйте позже', 
                  color: 'error'
                })
                commit('setPostingInfo', false);
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

          commit('setPostingInfo', true);
          const docRefToUpdate = state.userQuery.docs[0].ref
          
          const dataObj = {
            name: state.form.firstName,
            visit: state.form.radios,
            alco: state.form.selected,
            phone: state.form.phoneNumber
          }
          await updateDoc(docRefToUpdate, dataObj);

          commit('setSnackbar', {
            message: 'Данные успешно перезаписаны', 
            color: 'success'
          })
             
          console.log('Объект обновлен успешно')
          commit('setPostingInfo', false);

        } catch (error) {
            
          commit('setSnackbar', {
            message: 'Ошибка загрузки данных, попробуйте позже', 
            color: 'error'
          })
          commit('setPostingInfo', false);
          console.error('Ошибка при обновлении', error)
        }
      },
      async getImageURL({ commit }, imagePath) {
        try {
          const storage = getStorage(); // Получаем экземпляр Firebase Storage
          const storageRef = ref(storage, imagePath);
          const imageURL = await getDownloadURL(storageRef);
  
          // Обработка полученного URL, например, сохранение в состояние Vuex
          commit('setImageURL', imageURL);
  
          console.log('Image URL:', imageURL);
        } catch (error) {
          console.error('Error getting image URL from Firebase Storage:', error.message);
          // Обработка ошибок, например, вывод в Snackbar
          // commit('setSnackbar', { message: 'Error getting image', color: 'error' });
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
        imageURL: (state) => state.imageURL,
    },
  });