<template>
    <div></div>
</template>

<script>
import Vue from 'vue'; // es6 syntax
import ModuloFuncionesVue from './ModuloFunciones.vue';

export default {  
  data () {
    return {  
      login: null,
      url_proyects: "https://www.googleapis.com/blogger/v3/blogs/3800257297603092632/posts?key=AIzaSyBpAaep0sT0QBDF0Llh4Z5qJP5rPywffts",
      funciones: null,
      formdata: [],
      options_fetch:null,
      url_base: "https://geome7ric.matiasjrb.com.ar/php/v1/Api.php?apicall=",
      url_base_laravel: "https://iten.foodstamps.wnpower.host/iten-api/public/api/",
      laravel_request: "",
      cloudinary_name:"geome7ric-weasel-iten",
      cloudinary_preset:"ml_default",
      cloudinary_api_public_key:"699629453836659",
      cloudinary_upload_url: "	https://api.cloudinary.com/v1_1/"+this.cloudinary_name+"/image/upload"
    }
  },
  created()
  {
    this.funciones= new Vue(ModuloFuncionesVue);
    /* aca configuro los listener. por ejemplo
    
    this.$root.$on('alerta_positiva', (param) => this.alerta_positiva(param));
    
    si emiten alerta positiva, lo capturo y ejecuto el metodo this.alertapositiva(param) 
    y asi con todo lo que querramos definir...
    */
    
    console.log("[Mod network]se configuran los listener");
    //this.$root.$on('solicitud_a', (param) => this.prueba_retorno(param));
  },
  methods:
  {

    async getProjects(){
      const response = await fetch(this.url_proyects);

      const data = await response;
      
      /*falta verificar si hubo error */
      return data;
      
    },
    /*
    la apicall que le pedis  */
    async get(apicall)
    {
      await this.get_laravel(apicall)
        .then(response=>response.json())
        .then(resp=>{
          console.log("[Mod network | GET ]");
          console.log("apicall");
          console.log(resp);
          return resp;
        });
    },
    async post(apicall,form_data)
    {
      /*queres que retorne -1 0 1 para error servidor error logico caso positivo 
      ejemplo de como debe quedar una funcion de este modulo. hay que mejorar el post
      async insertar_usuario(datos_usuario)
      {
        if (post(apical_insertar_usuario))
        {
          modfunciones.mensajeexito(contenidomensaje);
        }
        else
        {
          modfunciones.mensajeerror(contenidomensaje);
        }
      */
      var error=false;
      this.options_fetch =
      {
        method: 'POST',
        body: form_data,
        headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Access-Control-Allow-Origin":"*",
      },mode: 'cors',
      };      
      const response = await fetch(this.url_base+apicall,this.options_fetch);

      const data = await response;
      return error;
    },
    async post_laravel(apicall,fetch_data)
    {
      console.log("POST: "+JSON.stringify(fetch_data));
      //Creo los datos a enviar en el request POST, incluido el metodo y el header
      const toSend = {method:'POST',body:JSON.stringify(fetch_data),headers: {
      'Content-Type': 'application/json',}};
      const response = await fetch(this.url_base_laravel+apicall,toSend);
      const data = await response;
      console.log("En network");
      console.log(data);
      return data;
    },
    async get_laravel(apicall)
    {
      var parametros=
      {
        headers: 
        {
          "Content-type": "application/json; charset=UTF-8",
        "Access-Control-Allow-Origin":'*',
        },
        method: 'get'
      }
      
      const response = await fetch(this.url_base_laravel+apicall,parametros);

      const data = await response;
      
      /*falta verificar si hubo error */
      return data;
    },
    async cargar_imagen(imagen_file,image_name,folder_name)
    {
        /* settings*/
        this.formData= new FormData();
        this.formData.append("file",imagen_file);       
        this.formData.append("value",imagen_file);
        this.formData.append("api_key", this.cloudinary_api_public_key);
        this.formData.append("public_id",image_name);
        this.formData.append("resource_type", "image");
        this.formData.append("upload_preset", this.cloudinary_preset);
        this.formData.append("timestamp", new Date());
        this.formData.append("folder",folder_name);
          
        console.log(this.cloudinary_upload_url);
        let requestObj={
          url: this.cloudinary_upload_url,
          method: "POST",
          data: this.formData,
          onUploadProgress: function(progressEvent)
          {
            console.log("progress",progressEvent);
            this.progress= Math.round((progressEvent.loaded*100.0)/progressEvent.total);
            console.log(this.progress);
          }.bind(this)              
        };
        this.showProgress=true;
        const options =
        {
          method: "POST",
          body: this.formData
        };

        fetch(this.cloudinary_upload_url, {
          method: "POST",
          body: this.formData
        })
        .then((response) => {
          return response.text();
        })
        .then((data) => {
          console.log(data);
        });

    },
    async enviar_mail(mensaje,receptor,sujeto)
    {
      /*mensaje receptor y sujeto son strings */
      var fd = new FormData();
      fd.append('mensaje', mensaje); 
      fd.append('receptor', receptor); 
      fd.append('sujeto', sujeto);

      await this.post("mail_gw",fd); 
       
    },    
    async enviar_mail_varios_destinatarios(mensaje,receptores,sujeto)
    {
      /*receptores tiene que ser un arreglo de strings con los mails*/
      var fd;
      for (var a in receptores)
      {
        console.log(a);
        fd= new FormData();
        fd.append('mensaje', mensaje); 
        fd.append('receptor', receptores[a]); 
        fd.append('sujeto', sujeto);
        this.post("mail_gw",fd);
      }
    },
    prueba_retorno(param)
    {
      return param;
    }
  }
}

function alert(msg)
{
  alert(msg);
}

</script>

<style lang="sass">
.my-sticky-header-table
  /* height or max-height is important */
  height: 310px

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th
    /* bg color is important for th; just specify one */
    background-color: #c1f4cd

  thead tr th
    position: sticky
    z-index: 1
  thead tr:first-child th
    top: 0

  /* this is when the loading indicator appears */
  &.q-table--loading thead tr:last-child th
    /* height of all previous header rows */
    top: 48px
</style>


