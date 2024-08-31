<template>
    <fieldset>
        <div class="form-field">
                <input name="contactName" v-model="inputName" type="text" id="contactName" placeholder="Nombre" >
        </div>
        <div class="form-field">
                <input name="contactEmail" v-model="inputEmail" type="email" id="contactEmail" placeholder="Email" >
        </div>
        <div class="form-field">
            <input name="contactEmail" v-model="inputPHone" type="text" id="contactEmail" placeholder="Telefono" >
        </div>
        <div class="form-field">
              <textarea name="contactMessage" id="contactMessage" placeholder="message" rows="10" cols="50"></textarea>
        </div>                      
        <div class="form-field">
            <button v-if="loading == false" class="submitform" @click="sendEmail">Enviar</button>
            
            <div v-else class="container-button">
              <span class="loader"></span>
            </div>

        </div>
    </fieldset>

 </template>
 

 <script lang="ts" setup>
  import { defineComponent, ref } from 'vue';
  import Swal from 'sweetalert2';
  import emailjs from 'emailjs-com';

  const SERVICE_ID: string = 'service_2ipm0pk'
  const TEMPLATE_ID: string = 'template_1242uhr'
  const USER_ID: string = 'mzeiAllv-6Vixu-lC'


  const inputName = ref<string>('');
  const inputEmail = ref<string>('');
  const inputPHone = ref<string>('');
  const inputMessage = ref<string>('');

  const loading = ref<boolean>(false);


  function sendEmail(){

    if(inputName.value == '' || inputEmail.value == '' || inputPHone.value == ''){
      Swal.fire({
          title: 'Error',
          text: 'Debe llenar todos los campos para continuar',
          icon: 'error',
          confirmButtonText: 'OK',
          customClass: {
            confirmButton: 'my-custom-button'
          },
        });
        return false;
    }
    loading.value = true;
       emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: inputName.value,
        from_email: inputEmail.value,  
        message: inputMessage.value,
        phone:inputPHone.value
      }, USER_ID)
        .then((response) => {
          loading.value = false;
          Swal.fire({
            title: 'Contaco',
            text: 'Gracias por enviar tu solicitud. Me pondré en contacto con usted.',
            icon: 'success',
            confirmButtonText: 'OK',
            customClass: {
              confirmButton: 'my-custom-button'
            },
            // Puedes agregar otros parámetros de configuración aquí
          });
          return false;
        }, (error) => {
          loading.value = false;
          Swal.fire({
            title: 'Error',
            text: 'Ocurrió un error. Intente más tarde.',
            icon: 'error',
            confirmButtonText: 'OK',
            customClass: {
              confirmButton: 'my-custom-button'
            },
          });
          inputName.value = ''
          inputEmail.value = ''
          inputMessage.value = ''
          inputPHone.value = ''
        return false;
    })

   
    

 }




 </script>
 


 <style scoped>


 div.container-button{
  font-size: 1.5rem;
  display: flex; /* Cambiado de block a flex para usar Flexbox */
  justify-content: center; /* Centra horizontalmente */
  align-items: center; /* Centra verticalmente */
  height: 6.6rem;
  line-height: 6.6rem;
  padding: 0 3rem;
  margin-top: 4.8rem;
  width: 100%;
  background: #FF0077;
  color: #FFFFFF;
  letter-spacing: .2rem; 
 }


  .loader {
    vertical-align: center;
    width: 30px;
    height: 30px;
    border: 5px solid #FFF;
    border-bottom-color: #FF3D00;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    
  }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    } 
 </style>
 