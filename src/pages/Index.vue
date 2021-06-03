<template>
  <q-page class="flex flex-center bg-info">
    <div class="bg-info" >
      <div class="q-my-xl row full-height absolute-top">

         
      <div class="col-5 bg-info">
          <q-card
          flat
          class="bg-info">
            <div class="row justify-center right">
              <div >
                <div class="text-h6 text-weight-thin">
                  Fullstack developer
                </div>
                <div class="text-h3 text-weight-bold">
                  Rios <br>Matias
                </div>
                <div class="bg-info q-my-md">
                  <img src="https://res.cloudinary.com/geome7ric-weasel/image/upload/v1622690940/MVIMG_20210420_174739_ryzkpg.png"
                  style="width: 250px">
                </div>
                <div class="row justify-center">
                  <div class="col" >
                    <q-btn class="col bg-dark full-height"  color="bg-dark" icon="location_on"></q-btn>
                  </div>
                  <div class="col-9 bg-dark" style="border-radius: 3px;">
                    <div class="text-white text-weight-thin q-ml-md q-my-md" style="" >
                      Buenos Aires, Argentina
                    </div>
                  </div>                  
                </div>
                <div class="text-overline full-width q-my-sm">
                  Disponible para relocación
                </div>
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
        <q-separator vertical color="dark"   />

        <div class="col-5 bg-info">
          <div class="row justify-around q-ma-lg">
            <div class="col">
              <div class="text-overline">
                COMPAÑIA
              </div>
              <div class="text-weight-thin text-h4">
                Nuqlea
              </div>
              <div class="text-caption q-my-sm">
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
          <div class="row justify-around q-ma-lg">
            <div class="col-8">
              <div class="text-overline">
                TOP SKILLS
              </div>
              <div class="row justify-around q-ma-lg text-weight-thin ">
                <div class="bg-accent" style="border-radius: 3px; ">
                  <q-card class="my-card bg-accent"  flat > 
                    <q-card-section>
                      <div class="text-h5 text-weight-thin q-mt-sm q-mb-xs text-center q-mt-md">VueJS</div>                      
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

                    <q-slide-transition>
                      <div v-show="more_skill1">
                        <q-separator />
                        <q-card-section class="text-subitle2">
                          {{ info_skill1 }}
                        </q-card-section>
                      </div>
                    </q-slide-transition>
                  </q-card>
                </div>
                <div class="bg-accent q-mx-sm" style="border-radius: 3px; width: 100px">
                  <q-card class="my-card bg-accent"  flat > 
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

                    <q-slide-transition>
                      <div v-show="more_skill1">
                        <q-separator />
                        <q-card-section class="text-subitle2">
                          {{ info_skill1 }}
                        </q-card-section>
                      </div>
                    </q-slide-transition>
                  </q-card>
                </div>
                <div class="bg-accent " style="border-radius: 3px; width: 100px">
                  <q-card class="my-card bg-accent"  flat > 
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

                    <q-slide-transition>
                      <div v-show="more_skill1">
                        <q-separator />
                        <q-card-section class="text-subitle2">
                          {{ info_skill1 }}
                        </q-card-section>
                      </div>
                    </q-slide-transition>
                  </q-card>
                </div>
              </div>
            </div>
            <div class="col text-weight-thin text-h5">
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

          <div class="row justify-around q-ma-lg">
            <div class="col">
              <div class="text-overline">
                SOBRE MÍ

              </div>
              <div class="text-body2 q-my-md">
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Soy Ingeniero en Computación graduado de la Universidad Nacional del Sur, y me encuentro trabajando a jornada completa. Suelo aceptar diferentes trabajos freelance que me obligan a aprender nuevas cosas de manera autodidacta. Me apasiona el entrenamiento y el deporte (guerrero educado), la creación y edición de fotos y videos y determinados e-sports.

Actualmente me encuentro desarrollando a modo freelance, <a href="https://jmpuhl.web.app/" target="_blank">junto a un compañero</a>, un producto de software multiplataforma (Web, Android, Windows, Linux) que provee un sistema de turnos y seguimiento para gimnasios. Quasar para el frontend (JS,VueJS,CSS,HTML) y Laravel para backend.
              </div>
            </div>
          </div>

          <div class="row justify-around q-ma-lg">
            <div class="col">
              <div class="text-overline">
                PROYECTOS
              </div>
              <q-card>
                <div class="row justify-around q-ma-lg">
                  <div class="col">JS GraphQL library</div>
                </div>
                <div class="row justify-around q-ma-lg">
                  <div class="col">https://github.com</div>
                </div>
                <div class="row justify-around q-ma-lg">
                  <div class="col">Override the digital divide with additional clickthroughs from DevOps. User generated content in real-time will have multiple touchpoints for offshoring.</div>
                </div>
                <div class="row justify-around q-ma-lg">
                  <div class="col"> Status: in progress. JavaScript. GraphQL</div>
                </div>
              </q-card>

              <q-card>
                <div class="row justify-around q-ma-lg">
                  <div class="col">Running Lists</div>
                </div>
                <div class="row justify-around q-ma-lg">
                  <div class="col">https://running-lists.com</div>
                </div>
                <div class="row justify-around q-ma-lg">
                  <div class="col">Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</div>
                </div>
                <div class="row justify-around q-ma-lg">
                  <div class="col">  Status: live. RoR. HTML. CSS</div>
                </div>
              </q-card>

              <q-card>
                <div class="row justify-around q-ma-lg">
                  <div class="col">Northwest Podcast</div>
                </div>
                <div class="row justify-around q-ma-lg">
                  <div class="col">https://npodcast.com</div>
                </div>
                <div class="row justify-around q-ma-lg">
                  <div class="col">Leverage agile frameworks to provide a robust synopsis for high level overviews.</div>
                </div>
                <div class="row justify-around q-ma-lg">
                  <div class="col">  Status: live. JavaScript. HTML</div>
                </div>
              </q-card>
            </div>
          </div>

          <div class="row justify-around q-ma-lg">
            <div class="row justify-around q-ma-lg">
                Work history
            </div>
            <div class="row justify-around q-ma-lg">
                <q-timeline :layout="layout" color="dark">
                  <q-timeline-entry heading>
                    Timeline heading
                    <br>
                    ({{$q.screen.lt.sm ? 'Dense' : ($q.screen.lt.md ? 'Comfortable' : 'Loose')}} layout)
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


          <div class="row justify-around q-ma-lg">
            <div class="row text-h6 justify-around q-ma-lg text-center text-weight-regular">
              Contacto
            </div>                        
          </div>
          <div class="row justify-around q-ma-lg">
            <div class="col">
              <q-input color="dark" v-model="tipo_proyecto" hint="Tipo de proyecto"  class="full-width"/>
            </div>
            <div class="col">
              <q-input color="dark" v-model="tipo_proyecto" hint="Numero de telefono" type="phone-number" class="full-width"/>
            </div>
            <div class="col">
              <q-btn flat label="Consulta" class="full-width full-height" @click="mostrar_datos_consulta = !mostrar_datos_consulta">

              </q-btn>
            </div>
          </div>
          <div class="row justify-around q-ma-lg" v-show="mostrar_datos_consulta">
            <div class="row justify-around full-width">
               <div class="q-pa-md full-width">
                  <q-badge color="dark">
                    Presupuesto: {{ presupuesto }} 
                  </q-badge>
                  <q-slider
                    v-model="presupuesto"
                    class="full-width"
                    :min="0"
                    :max="150"
                    :step="5"
                    label
                    label-always
                    label-text-color="dark"
                    color="accent"
                  />
                </div>
              <div class="col"></div>
            </div>
            <div class="row justify-around full-width">
              <q-input color="dark" v-model="tipo_proyecto" hint="Tipo de proyecto"    class="full-width"/>
            </div>
            <div class="row justify-around full-width">
              <q-input color="dark" v-model="tipo_proyecto" hint="Numero de telefono" type="phone-number" class="full-width"/>
            </div>
          </div>
          <div class="row justify-around q-ma-lg">
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
          <div class="row justify-end q-ma-lg ">
             <q-btn flat label="Enviar"  class="q-mr-md" @click="mostrar_datos_consulta = !mostrar_datos_consulta">

              </q-btn>
          </div>

          


        </div>




        <div class="col bg-info">
          .col c
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data()
  {
    return{
      mostrar_datos_consulta: false,
      presupuesto: 40,
      tipo_proyecto: '',
      texto_descripcion: '',
      more_skill1: false,
      more_skill2: false,
      more_skill3: false,
      info_skill1: 'Lo uso hace años y tengo mas de tres proyectos',
    }
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
