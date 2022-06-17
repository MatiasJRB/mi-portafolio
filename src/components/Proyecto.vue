
<template>

    <q-card flat class="no-shadow " v-if="project"   >
      <q-card-section vertical>

        <q-card-section class="q-pt-xs  q-mt-md">
          
          <div class="row">
            <div class="text-caption "
              style="margin-top:-10px">{{ project.date }}</div>
          </div>
          <div class="text-h6 text-dark  q-my-sm">
            {{project.title}}
          </div>          
          <div class="" v-html="project.description">
            <!-- {{descripcion}} -->
          </div>         
        </q-card-section>

        <q-card-section horizontal >
          <div class="row q-pa-xs full-width" style="margin: 0px">
            <div class="col-md-12 col-xs-12 flex flex-center">
              
              <q-carousel
                @click.stop=""
                swipeable
                control-color="accent"
                v-model="slide"
                arrows 
                class="full-width"
                infinite            
              >
              <q-carousel-slide
               class="full-width"
                v-for="(image,index) in project.images"
                :key="index"
                :name="index"
                :img-src="image"
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
            <q-btn  color="" flat class="q-ml-sm bg-primary text-white" :label="media.title" @click="handleMedia(media)" />
          </div>
        </q-card-section>
        <q-separator color="secondary"/>

        <q-card-actions vertical v-show="showMore">
          <div class="row  flex flex-center " style="margin: 0px">
            <q-btn @click.stop="goToProjectPage" flat class="bg-accent full-width" borderer text-color="dark" label="Saber más" rounded>
               </q-btn>
          </div>
        </q-card-actions>
        <q-card-actions class="q-ml-md " style="">
          <q-badge outlined  color="dark" text-color="white" :label="'Status: ' + project.status" class="q-mx-xs" />
          <div class="" v-for="(tag,index) in project.tags" :key="index" >
            <q-badge outlined color="dark" :label="tag" class="q-mx-xs" />
          </div>
        </q-card-actions>
      </q-card-section>

      

      

      
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
      isFullscreen: false,
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
    this.showMore = this.project.showMore
  }
})
</script>
