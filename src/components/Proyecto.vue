<template>
    <q-card class="width: 100% min-width: 350px max-width: 350px"  flat bordered>
      <q-card-section vertical>

        <q-card-section class="q-pt-xs text-center q-mt-md">
          <q-separator color="dark"/>
          <div class="text-caption q-mt-sm q-mb-xs">{{fecha}}</div>
          <q-separator color="dark"/>
          <div class="text-h6 text-dark  q-my-sm">
            {{nombre}}
          </div>          
        </q-card-section>

        <q-card-section horizontal>
          <div class="row" style="margin: 0px">
            <div class="col-12 col-md">
              <q-img
                class="rounded-borders q-ma-xs"
                style="max-width: 400px"            
                :src="imagen"
                spinner-color="dark"
                :key="transition"
                :transition="transition"
                contain
              >
                <div class="absolute-bottom text-caption text-center" >
                  Contain
                </div>
              </q-img>
            </div>
            <div class="col-12 col-md">
              <div class="text-body1  text-dark q-ma-xs">
                {{descripcion}}
              </div>
            </div>
          </div>
          
          
        </q-card-section>
      </q-card-section>

      <q-separator color="accent"/>

      

      <q-card-actions class="q-ml-md q-my-sm">
        <q-badge outline color="dark" text-color="dark" label="Status: in progress" class="q-mx-xs" /> 
        <q-badge outline color="dark" label="JavaScript" class="q-mx-xs"/>
        <q-badge outline color="dark" label="GraphQL" class="q-mx-xs"/>
        <q-badge outline color="dark" label="CSS" class="q-mx-xs"/>
      </q-card-actions>
    </q-card>
</template>

<script>

import Vue from 'vue'; // es6 syntax

export default({
  props:{
    transition:
    {
      type: String,
      default: "flip-down"
    },
    nombre:
    {
      type: String,
      default: "NOMBRE DEL PROYECTO"
    },  
    imagen:
    {
      type: String,
      default: "https://cdn.quasar.dev/img/parallax2.jpg"
    },  
    fecha:
    {
      type: String,
      default: "FECHA DEL PROYECTO"
    },  
    descripcion:
    {
      type: String,
      default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  },
  data()
  {
    return{
      mostrar_info_detalleada: false
    }
  }
})
</script>
