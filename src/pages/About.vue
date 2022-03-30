<template>
  <q-page  class="flex flex-center bg-info" :style="( !mobile )? 'padding-left: 130px' : ''">
    <!-- Vista principal -->
    <div class="full-width full-height " :style=" !mobile? '' : ''">
      <div class="row justify-start vertical-middle">
        <div class="col-6 col-md-6 col-xs-12 col-sm-12  "  >
          
          <div class="q-mx-xl q-mt-lg 	"> 
            <div :class="getAboutName" style="" >
              About me
            </div>
            <div :class="getTextClass" style="line:height: 130%" >
              I'm a computer engineer graduated at Universidad Nacional del Sur, and now I'm working full time. <br>
              Currently, I'm leadering a small but powerfull team focused on an hybrid mobile application, avaiable in Play Store and Apple Store.<br>
              I'm co-founder and active part of Geome7ric, a software entrepreneurship started at 2020.<br>
               I usually accept different kinds of freelance jobs that force me to learn new tools in a self-thaugth way.
               I'am passionate about training and sports in general, creating and editing photos and videos and certain e-sports.<br>
                 
            </div>
            <span @click="$router.push('/contact')" style="font-size: 18px" class="text-secondary cursor-pointer " clickable>
              Let's make some special
            </span>
          </div>
        </div>
        <div class="col-md-6 col-xs-12 full-height ">
          
          <div class="row justify-center " style=" ">  
            <div class="q-mt-md  " style="z-index: 2000; margin-bottom: -50px; margin-top">
              <div class="row justify-center full-width ">
                <div class="  q-pa-xs  ">
                  <div class="text-center row justify-center">
                    HISTORIA
                  </div>
                  <div class="row justify-center flex flex-center">
                    <div class="text-dark text-overline ">
                        PRINCIPAL
                    </div>
                    <div class="">
                      <q-toggle
                          v-model="longVersion"
                          checked-icon="check"
                          color="accent"
                          unchecked-icon=""
                        />
                    </div>
                    <div class="text-dark text-overline">
                      DETALLADA
                    </div>
                  </div>
                </div>
              </div>
              
            </div>              
            <q-scroll-area
              style="height: 100vh; "
              class="full-width full-heigth"
            >
              <div class="row justify-around q-ma-xl">

                <div class="row justify-around q-ma-lg" style=" ">
                  <q-timeline layout="dense" color="dark">

                    <q-timeline-entry
                      dense
                      v-show=" longVersion"
                      title="Me egreso del secundario"
                      subtitle="12 de Diciembre, 2012"
                      side="left"
                      icon="school"
                    >
                      <div>
                        Termino el secundario en el Colegio Nacional
                      </div>
                    </q-timeline-entry>

                    <q-timeline-entry
                      v-show=" longVersion"
                      title="Me convierto en técnico en armado y reparación de PC"
                      subtitle="20 de Noviembre, 2013"
                      side="right"                      
                      icon="school"
                    >
                      <div>
                        Certificado por la Escuela Argentina de Idiomas y Tecnología
                      </div>
                    </q-timeline-entry>

                    <q-timeline-entry
                      v-show=" longVersion"
                      title="Vendo mi primer software, Geome7ric 1.0"
                      subtitle="12 de junio, 2018"
                      side="left"                      
                      icon="school"
                    >
                      <div>
                        Solucioné el problema de stock, ventas y manejo de clientela a una forrajería. Un evento que marcó mi inicio en el mundo freelance
                      </div>
                    </q-timeline-entry>


                    <q-timeline-entry
                      title="Comienzan mi pasantía en Profertil S.A. "
                      subtitle="1 de octubre, 2020"
                      side="right"
                      icon="work"
                    >
                      <div>
                        Trabajo a jornada parcial, como administrador de redes y sistemas Windows, dando soporte a productos ASPEN y desarrollando
                      </div>
                    </q-timeline-entry>

                    <q-timeline-entry
                      title="Me recibo de Ingeniero en Computación"
                      subtitle="9 de abril, 2021"
                      icon="school"
                      side="left"
                    >
                      <div class="">
                        Prensento mi proyecto final frente a amigos y familiares, para poner un fin a mi carrera de ingeniero
                      </div>
                    </q-timeline-entry>

                    <q-timeline-entry
                      title="Comienzo a brindar servicios con dedicación exclusiva a Profertil S.A."
                      subtitle="12 de abril, 2021"
                      side="right"
                    >
                      <div>
                        Trabajo a jornada completa, como administrador de redes y sistemas Windows, y dando soportes a productos ASPEN
                      </div>
                    </q-timeline-entry>

                    <q-timeline-entry
                      title="Primer trabajo como desarrollador"
                      subtitle="7 de junio, 2021"
                      side="left"                      
                      color="accent"
                      icon="work"
                    >
                      <div>
                        Comienzo como Fullstack Developer en Nuqlea, la evolución de CAPP, la plataforma líder en construcción
                      </div>
                    </q-timeline-entry>

                  </q-timeline>
                </div>
              </div>
            </q-scroll-area>
          </div>
        </div>        
      </div>
      
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data () {
    return {
      longVersion: false
    }
  },
  mounted () {
    
    console.log(this.$route)
  },
  computed: {
    getImageWidth () {
      let ret = '665px'
      ret = (this.$q.screen.height *80) / 100
      ret = ret.toString() + 'px'
      console.log(this.$q.screen)
      return ret
    },
    mobile () {
      let ret = false
      ret = this.$q.screen.xs || this.$q.screen.sm || this.$q.screen.width < 1050
      return ret
    },
    getAboutName() {
      let ret = 'text-weight-bold   '
      if (this.$q.screen.xl) {
        ret = ret + ' text-h1'
      } else {
        ret = ret + ' text-h2'
      }
      return ret
    },
    getTextClass() {
      let ret = 'text-subtitle1 q-mt-md'
      if (this.$q.screen.xl) {
        ret = ret + ' '
      } else {
        ret = ret + ' '
      }
      return ret
    }
  }
}
</script>
