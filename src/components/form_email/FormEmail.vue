<template>
    <fieldset>
        <div class="form-field">
                <input name="contactName" type="text" id="contactName" placeholder="Nombre" value="" minlength="2" required="">
        </div>
        <div class="form-field">
                <input name="contactEmail" type="email" id="contactEmail" placeholder="Email" value="" required="">
        </div>
        <div class="form-field">
            <input name="contactEmail" type="email" id="contactEmail" placeholder="Telefono" value="" required="">
        </div>
        <div class="form-field">
                <textarea name="contactMessage" id="contactMessage" placeholder="message" rows="10" cols="50" required=""></textarea>
        </div>                      
        <div class="form-field">
            <button class="submitform" @click="handClick">Enviar</button>
            <div id="submit-loader">
            <div class="text-loader">Enviando...</div>                             
                    <div class="s-loader">
                            <div class="bounce1"></div>
                            <div class="bounce2"></div>
                            <div class="bounce3"></div>
                    </div>
                </div>
        </div>
    </fieldset>


 </template>
 
 <script lang="ts" setup>
    import { ref } from 'vue';
    import Swal from 'sweetalert2';
    import 'sweetalert2/src/sweetalert2.scss'

    console.log('inciando el componente en vue js')
    // alert('hola mundo')
    const handClick = () => {
        console.log('Enviando dato');
       
    };

    

    console.log('terminando el componente en vue js')
    
 </script>
 
 <style scoped>
 
 .swal2-styled {
    padding-top: 100px !important; /* Define aquí el padding deseado */
    padding-bottom: 100px !important; /* Define aquí el padding deseado */
  }
 </style>
 