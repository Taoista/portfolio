<template>

    <!-- <fieldset>
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
            <button class="submitform" @click="toggleActive">Enviar</button>
            <div id="submit-loader">
            <div class="text-loader">Sending...</div>                             
                    <div class="s-loader">
                            <div class="bounce1"></div>
                            <div class="bounce2"></div>
                            <div class="bounce3"></div>
                    </div>
                </div>
        </div>
        </fieldset> -->

        <button @click="handClick">testiando con vuejs</button>

 </template>
 
 <script lang="ts" setup>
    import { ref } from 'vue';
    import Swal from 'sweetalert2';

    console.log('inciando el componente en vue js')
    
    const handClick = () => {
        console.log('Hola mundo');
        Swal.fire('Hola Mundo!', 'Este es un ejemplo de SweetAlert2', 'success');
    };



    console.log('terminando el componente en vue js')
    
 </script>
 
 <style scoped>
 h1 {
   color: #42b983;
   cursor: pointer;
 }
 </style>
 