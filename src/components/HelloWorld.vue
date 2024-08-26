<!-- src/components/HelloWorld.vue -->
<template>
   <!-- <form name="contactForm" id="contactForm" method="post" action=""> -->
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
                        <button class="submitform" @click="greet">Enviar</button>
                        <div id="submit-loader">
                        <div class="text-loader">Sending...</div>                             
                                <div class="s-loader">
                                        <div class="bounce1"></div>
                                        <div class="bounce2"></div>
                                        <div class="bounce3"></div>
                                </div>
                            </div>
                    </div>
              </fieldset>

              <!-- <button class="" @click="toggleActive">Enviar</button> -->
          <!-- </form> -->
</template>

<script setup>
console.log('inciando el componente en vue js')
import Swal from 'sweetalert2'
import { ref } from 'vue';

const isActive = ref(false);

function toggleActive(){
    console.log("hola mundo")
}
console.log('terminando el componente en vue js')

</script>

<style scoped>
h1 {
  color: #42b983;
  cursor: pointer;
}
</style>
