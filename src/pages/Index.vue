<template>
  <q-page class="flex flex-center bg-info">
    <!-- Contenedor de principal -->
    <div class="row">
      <div class="col">
        <div class=" row q-gutter-md q-mx-md bg-info" style="margin: 0px;max-width: 1200px" >         
          <!-- Column A -->
          <div class="col-12 bg-info col-md-4 " style="margin: 0px">
              <q-card
              flat
              class="bg-info " >
                <div class="row justify-center  q-my-xl " style=" ">
                  <div >
                    <div class="text-h6 text-weight-thin">
                      Fullstack developer
                    </div>
                    <div class="text-h3 text-weight-bold q-my-sm">
                      Rios <br>Matias
                    </div>
                    <div class="bg-info q-my-lg">
                      <img src="https://res.cloudinary.com/geome7ric-weasel/image/upload/v1622690940/MVIMG_20210420_174739_ryzkpg.png"
                      style="width: 250px">
                    </div>
                    <div class="row justify-center " style=" ">
                      <div class="col">
                        <q-btn class="col bg-dark full-height" text-color="accent"  color="bg-dark" icon="location_on"></q-btn>
                      </div>
                      <div class="col-9 bg-dark" style="border-radius: 3px;">
                        <div class="text-white text-weight-thin q-ml-md q-my-md" style="" >
                          Buenos Aires, Argentina
                        </div>
                      </div>                  
                    </div>
                    <!--div class="text-overline full-width q-my-sm">
                      Disponible para relocación
                    </div-->
                  </div>
                  
                </div>            
                
              </q-card>  
              <!--div class="row justify-center relative-bottom q-pb-xs q-mt-xl">
                <div class="row justify-center">
                  Connect
                </div>
                <div class="row justify-center">
                  <q-avatar>
                    <img src="https://cdn.quasar.dev/img/avatar.png">
                  </q-avatar>
                </div>
              </div-->  
              
                    
          </div>
          
          <q-separator size="xl" class="q-mt-lg" vertical color="dark"/>
          
          <!-- Column B -->
          <div class="col-12 bg-info col-md-7 q-pa-lg" style="margin: 0px">

            <!-- Company | Focused on -->
            <div class="row justify-around  q-ma-lg q-pa-md" style=" ">
              <div class="col">
                <div class="text-overline">
                  COMPAÑIA
                </div>
                <div class="text-weight-thin text-h4  ">
                  Nuqlea
                </div>
                <div class="text-caption q-my-sm  ">
                  No disponible para contratar
                </div>
              </div>
              <q-separator vertical color="dark"   />
              <div class="col q-ml-xl">
                <div class="text-overline">
                  CONCENTRADO EN
                </div>
                <div class="text-weight-thin text-h4" >
                  Quasar Framework
                </div>
                <div>
                  <q-btn size="xs" flat icon="help" style="margin-left: -10px" />
                </div>
              </div>
            </div>


            <!-- Skills -->
            <div class="row justify-around q-ma-lg" style=" ">
              <div class="col-12 col-md-7">
                <div class="text-overline">
                  TOP SKILLS
                </div>
                <div class="row justify-around q-mt-lg q-mb-sm text-weight-thin " style=" ">
                  <div  style="border-radius: 7px; ">
                    <q-card class="my-card bg-accent q-px-xs"  flat > 
                      <q-card-section>
                        <div class="text-h5 text-weight-thin q-mt-sm q-mb-xs text-center q-mt-md" >VueJS</div>                      
                      </q-card-section>

                      <q-card-actions>           

                        <q-space />

                        <q-btn
                          color="grey"
                          round
                          size="xs"
                          flat
                          dense
                          text-color="dark"
                          :icon="more_skill1 ? 'expand_less' : 'info'"
                          @click="more_skill1 = !more_skill1"
                        />
                      </q-card-actions>

                      <!--q-slide-transition>
                        <div v-show="more_skill1">
                          <q-separator />
                          <q-card-section class="text-subitle2">
                            {{ info_skill1 }}
                          </q-card-section>
                        </div>
                      </q-slide-transition-->
                    </q-card>
                  </div>
                  
                  <div class="bg-accent q-mx-sm" style="border-radius: 3px; width: 100px">
                    <q-card class="my-card bg-accent q-px-xs"  flat > 
                      <q-card-section>
                        <div class="text-h5 text-weight-thin q-mt-sm q-mb-xs text-center q-mt-md">VScode</div>                      
                      </q-card-section>

                      <q-card-actions>           

                        <q-space />

                        <q-btn
                          color="grey"
                          round
                          size="xs"
                          flat
                          dense
                          text-color="dark"
                          :icon="more_skill1 ? 'expand_less' : 'info'"
                          @click="more_skill1 = !more_skill1"
                        />
                      </q-card-actions>

                      
                    </q-card>
                  </div>

                  <div class="bg-accent " style="border-radius: 3px; width: 100px">
                    <q-card class="my-card bg-accent q-px-xs"  flat > 
                      <q-card-section>
                        <div class="text-h5 text-weight-thin q-mt-sm q-mb-xs text-center q-mt-md">Github</div>                      
                      </q-card-section>

                      <q-card-actions>           

                        <q-space />

                        <q-btn
                          color="grey"
                          round
                          size="xs"
                          flat
                          dense
                          text-color="dark"
                          :icon="more_skill1 ? 'expand_less' : 'info'"
                          @click="more_skill1 = !more_skill1"
                        />
                      </q-card-actions>

                      <!--q-slide-transition>
                        <div v-show="more_skill1">
                          <q-separator />
                          <q-card-section class="text-subitle2">
                            {{ info_skill1 }}
                          </q-card-section>
                        </div>
                      </q-slide-transition-->
                    </q-card>
                  </div>
                </div>

                <div class="row bg-accent text-dark text-body2" v-show="more_skill1" style=" ">
                  <q-slide-transition>
                    <div >
                      <q-separator />
                      <q-card-section class="text-subitle2">
                        {{ info_skill1 }}
                      </q-card-section>
                    </div>
                  </q-slide-transition>
                </div>
              </div>

              <div class="col-12 col-md-3 text-weight-thin text-h5">
                <div class="text-overline">
                  MAIN TOOLS
                </div>
                <div class="bg-accent q-mt-lg" style="border-radius: 3px; width: 100px">
                  <div class="q-ml-md">
                    VueJS
                  </div>
                </div>
                <div class="bg-accent q-my-sm" style="border-radius: 3px; width: 100px">
                  <div class="q-ml-md">
                    VScode
                  </div>
                </div>
                <div class="bg-accent" style="border-radius: 3px; width: 100px">
                  <div class="q-ml-md">
                    Github
                  </div>
                </div>
              </div>
            </div>



            <!-- About -->
            <div class="row justify-around q-ma-lg" style=" ">
              <div class="col ">
                <div class="text-overline">
                  SOBRE MÍ

                </div>
                <div class="text-body2 q-my-md">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Soy Ingeniero en Computación graduado de la Universidad Nacional del Sur, y me encuentro trabajando a jornada completa. Suelo aceptar diferentes trabajos freelance que me obligan a aprender nuevas cosas de manera autodidacta. Me apasiona el entrenamiento y el deporte (guerrero educado), la creación y edición de fotos y videos y determinados e-sports.
                  <br>
                </div>
              </div>
            </div>

            <!-- Projects -->
            <div class="row justify-around q-ma-lg" style=" ">
              <div class="col">
                <div class="text-overline">
                  PROYECTOS
                </div>
                <Proyecto class="q-my-md"></Proyecto>
                <Proyecto class="q-my-md"></Proyecto>
                <Proyecto class="q-my-md"></Proyecto>
                <Proyecto class="q-my-md"></Proyecto>
              </div>
            </div>


            <!-- History -->
            <div class="row justify-around q-ma-lg" style=" ">
              <div class="row justify-around q-ma-lg" style=" ">
                  <div class="text-overline">
                    HISTORIA
                </div>
              </div>
              <div class="row justify-around q-ma-lg" style=" ">
                VERSION CORTA O LARGA?
              </div>
              <div class="row justify-around q-ma-lg" style=" ">
                  <q-timeline :layout="layout" color="dark">
                    <!--q-timeline-entry heading>
                      Timeline heading
                      <br>
                      ({{$q.screen.lt.sm ? 'Dense' : ($q.screen.lt.md ? 'Comfortable' : 'Loose')}} layout)
                    </q-timeline-entry-->

                    <q-timeline-entry
                      title="Me egreso del secundario"
                      subtitle="12 de Diciembre, 2012"
                      side="left"
                      icon="school"
                    >
                      <div>
                        Termino el secundario en el Colecio Nacional con un promedio de 8.33
                      </div>
                    </q-timeline-entry>
                    <q-timeline-entry
                      title="Me convierto en técnico en armado y reparación de PC"
                      subtitle="20 de Noviembre, 2013"
                      side="left"                      
                      icon="school"
                    >
                      <div>
                        Certificado por la Escuela Argentina de Idiomas y Tecnología
                      </div>
                    </q-timeline-entry>

                    <q-timeline-entry
                      title="Event Title"
                      subtitle="February 21, 1986"
                      side="right"
                      icon="delete"
                    >
                      <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </div>
                    </q-timeline-entry>

                    <q-timeline-entry heading>November, 2017</q-timeline-entry>

                    <q-timeline-entry
                      title="Event Title"
                      subtitle="February 22, 1986"
                      side="left"
                    >
                      <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </div>
                    </q-timeline-entry>

                    <q-timeline-entry
                      title="Event Title"
                      subtitle="February 22, 1986"
                      side="right"
                    >
                      <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </div>
                    </q-timeline-entry>

                    <q-timeline-entry
                      title="Event Title"
                      subtitle="February 22, 1986"
                      side="left"
                      color="accent"
                      icon="done_all"
                    >
                      <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </div>
                    </q-timeline-entry>

                    <q-timeline-entry
                      title="Event Title"
                      subtitle="February 22, 1986"
                      side="right"
                    >
                      <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </div>
                    </q-timeline-entry>

                    <q-timeline-entry
                      title="Event Title"
                      subtitle="February 22, 1986"
                      side="left"
                    >
                      <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </div>
                    </q-timeline-entry>
                  </q-timeline>
              </div>
            </div>

            <!-- Contact -->  
            <div class="row justify-around q-ma-lg" style=" ">
              <div class="row text-h6 justify-around q-ma-lg text-center text-weight-regular" style=" ">
                <div class="text-overline">
                  CONTACTO

                </div>
              </div>                        
            </div>
            <div class="row justify-around q-ma-lg" style=" ">
              <div class="col">
                <q-input color="dark" v-model="tipo_proyecto" hint="Nombre"  class=" q-mr-xs"/>
              </div>
              <div class="col">
                <q-input color="dark" v-model="tipo_proyecto" hint="Email" type="phone-number" class="q-ml-xs"/>
              </div>
              <div class="col">
                <q-btn flat label="Consulta" size="md"  class="full-width full-height" @click="mostrar_datos_consulta = !mostrar_datos_consulta">
                  
                </q-btn>
              </div>
            </div>
            <div class="row justify-around q-ma-lg" v-show="mostrar_datos_consulta" style=" ">
              <div class="row justify-around full-width" style=" ">
                  <div class="q-pa-md full-width">
                    <q-badge color="dark">
                      Presupuesto: $ {{ presupuesto }}.000 pesos
                    </q-badge>
                    <q-slider
                      v-model="presupuesto"
                      class="full-width q-mt-xl"
                      :min="0"
                      :max="500"
                      :step="5"
                      label
                      label-always
                      label-text-color="dark"
                      color="accent"
                    />
                  </div>
                <div class="col"></div>
              </div>
              <div class="row justify-around full-width" style=" "> 
                <q-input color="dark" v-model="tipo_proyecto" hint="Tipo de proyecto"    class="full-width"/>
              </div>
              <div class="row justify-around full-width" style=" ">
                <q-input color="dark" v-model="tipo_proyecto" hint="Numero de telefono" type="phone-number" class="full-width"/>
              </div>
            </div>
            <div class="row justify-around q-ma-lg" style=" ">
              <q-input
                color="dark"
                hint="Tu mensaje"
                class="full-width"
                v-model="texto_descripcion"
                filled
                type="textarea"                    
                autogrow                     
              ></q-input>
            </div>
            <div class="row justify-end q-ma-lg " style=" ">
                <q-btn flat label="Enviar"  class="q-mr-md" @click="mostrar_datos_consulta = !mostrar_datos_consulta">
                </q-btn>
            </div>

            


          </div>

            <!--div class="col-12 bg-info   col-md" style="width: 300px">
              asdasd
            </div-->     
          
        </div>
      </div>
    </div>
    
    
    <!--Footer-->
        <div class="row full-width bg-dark justify-around" style="height: 130px;  ">
          <div class="col">
            <div class=" q-ml-xl q-mt-sm">
              <q-avatar size="xl" style="margin-left: -4px">
                <img src="../assets/FVE-image-accent.svg" >
              </q-avatar>  
              <div class="text-accent text-weigth-regular">
                2021 - Matias Rios <br>Todos los derechos reservados
              </div>    
            </div>
          </div>        
        </div>
    



    
    
  </q-page>
</template>

<script>


import Proyecto from 'components/Proyecto.vue'
import ModuloFunciones from '../modules/ModuloFunciones.vue'
import Vue from 'vue'; // es6 syntax

export default {
  name: 'PageIndex',
  data()
  {
    return{
      mostrar_datos_consulta: false,
      funciones: null,
      presupuesto: 50,
      tipo_proyecto: '',
      texto_descripcion: '',
      more_skill1: false,
      more_skill2: false,
      more_skill3: false,
      info_skill1: 'Lo uso hace años y tengo mas de tres proyectos',
    }
  },  
  components:
  {
    Proyecto
  },
  created()
  {
    this.funciones= new Vue(ModuloFunciones);
    this.funciones.alerta_positiva_home("Bienvenido :)");
  },
  computed: {
    layout () {
      return this.$q.screen.lt.sm ? 'dense' : (this.$q.screen.lt.md ? 'comfortable' : 'loose')
    },
    
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 100px
</style>
