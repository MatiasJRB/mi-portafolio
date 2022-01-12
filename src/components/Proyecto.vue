<template>
    <q-card  class=""  flat bordered style="border-radius: 15px">
      <q-card-section vertical>

        <q-card-section class="q-pt-xs text-center q-mt-md">
          
          <div class="row">
            <div class="col q-mt-sm q-mx-md">
              <q-separator color="dark"/>
            </div>
            <div class="col">
              <div class="text-caption">{{ project.date }}</div></div>
            <div class="col q-mt-sm q-mx-md">
              <q-separator color="dark"/>
            </div>
          </div>
          <div class="text-h6 text-dark  q-my-sm">
            {{project.title}}
          </div>          
          <div class=" text-dark full-width q-my-sm">
            {{project.description}}
          </div>          
        </q-card-section>

        <q-card-section horizontal >
          <div class="row q-pa-xs full-width" style="margin: 0px">
            <div class="col-md-12 col-xs-12 flex flex-center">
              <q-carousel
                @click.stop=""
                swipeable
                animated
                v-model="slide"
                class="full-width"
                thumbnails
                infinite
                
                style="border-radius: 15px"
              >
              <q-carousel-slide
               class="full-width"
                v-for="(image,index) in project.images"
                :key="index"
                :name="index"
                :img-src="image"
                style="border-radius: 15px"
               />

              </q-carousel>
            </div>
            <div class="col-md-12 col-xs-12 col-md q-my-sm" v-if="!showMore">
              <div class="q-mx-md " v-html="project.content">
                <!-- {{descripcion}} -->
              </div>
            </div>
          </div>      
          
          
        </q-card-section>
        <q-card-section class="row">
          <div  v-for="(media,index) in project.media" :key="index">
            <q-btn class="q-ml-sm" :label="media.title" @click="handleMedia(media)" rounded/>
          </div>
        </q-card-section>
        <q-separator color="accent"/>

        <q-card-actions vertical v-show="showMore">
          <div class="row q-pa-xs flex flex-center " style="margin: 0px">
            <q-btn @click.stop="goToProjectPage" flat class="bg-accent full-width" borderer text-color="dark" label="Saber más" rounded>
               </q-btn>
          </div>
        </q-card-actions>
      </q-card-section>

      

      

      <q-card-actions class="q-ml-md q-my-sm">
        <q-badge outline color="dark" text-color="dark" :label="'Status:' + project.status" class="q-mx-xs" />
        <div class="" v-for="(tag,index) in project.tags" :key="index" >
          <q-badge outline color="dark" :label="tag" class="q-mx-xs" />
        </div>
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
      default: "NOMBRE DEL projectO"
    },  
    imagen:
    {
      type: String,
      default: "https://cdn.quasar.dev/img/parallax2.jpg"
    },  
    fecha:
    {
      type: String,
      default: "4 de Junio, 2021"
    },  
    project: {
      type: Object,
      required: true 
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
      showMore: false,
      mostrar_info_detalleada: false,
      slide: 0
    }
  },
  methods: {
    handleMedia(media) {
      if (media.type === 'video') {
      }
    }
  },
  mounted () {
    console.log(this.project)
    this.showMore = this.project.showMore
  }
})
</script>
