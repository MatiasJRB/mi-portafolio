<template>
  <q-page 
    class="flex flex-center text-white bg-dark	" 
  >
    <div>
      <div class="bg-red flex flex-center" :style="mobile?  '' : 'height: 100vh;' ">
        <div class="row justify-center  "
          :style="mobile?  '' : 'width: 89em'">
          <div class="col-xs-12 col-md-6 " :style="!mobile?  '' : 'height: 100vh;'" >
            <transition
                name="fade"
                appear
                :duration="2000"
              >   
              <div :class="mobile? 'q-pa-lg' : 'q-pa-xl'" >            
                <div :class="getNameClass" >
                  <p>
                    Hi,<br> I'm <span class="text-primary">Matias</span>, <br> Full Stack Engineer
                  </p>
                </div>            
                <div :class="getJobClass" >
                  Feel free to contact me
                </div>
                <SocialMedia
                  class="q-mt-md"
                  :behavior="'justify-start'"/>
                <!-- <div class="row full-width q-mt-lg">
                  <q-btn @click="$router.push('/contact')" class="text-capitalize col-5 " outline color="secondary" label="Contact me!"/>
                </div> -->
              </div>
            </transition>
          </div>
          <div class="col-md-6 col-xs-12"  >
            <transition
                name="fade"
                appear
              >   
                <div id="header" v-if="!mobile" class="q-mt-xl" :style="'border-radius:8px;height  : 33em;border: 2px solid white; border-color: #ffffff; width: ' + getImageWidth" >                     
                  
                  <q-img 
                  height="33em" class="bg-white" 
                  style="margin-top: -15px; margin-left: -12px; border-radius:8px"  src="../assets/portfolio.jpg"/>
                </div>
                <v-else>
                  <div class="row justify-center q-mb-md">
                    <q-avatar size="200px" class="shadow-5">
                    <img src="../assets/portfolio.jpg" />
                  </q-avatar>
                  </div>
                </v-else>
            </transition>
            
          </div>        
        </div>
      </div>

      <div class="bg-green" :style="mobile?  '' : 'width: 85em'">
        <About/>
      </div>

      <div class="bg-yellow" :style="mobile?  '' : 'width: 85em'">
        <Skills/>
      </div>

      
      <div class="bg-blue" :style="mobile?  '' : 'width: 85em'">
        <div :class="getTitle + ' q-ml-xs'">
          My portfolio
        </div>
        <Portfolio/>
      </div>

      <div class="bg-orange" :style="mobile?  '' : 'width: 85em'">
        <Contact
          class="q-my-xl"/>
      </div>

    
  </div>
  </q-page>
</template>

<script>


// import Proyecto from 'components/Proyecto.vue'
import ModuloFunciones from '../modules/ModuloFunciones.vue'
import ModuloNetwork from '../modules/ModuloNetwork.vue'
import Vue from 'vue'; // es6 syntax
import SocialMedia from '../components/SocialMedia.vue'
import { mapState } from 'vuex'

import { scroll } from 'quasar'
const { getVerticalScrollPosition, setVerticalScrollPosition } = scroll

import Portfolio from '../pages/Portfolio.vue'
import Contact from '../pages/Contact.vue'
import Skills from '../pages/Skills.vue'
import About from '../pages/About.vue'


export default {
  name: 'PageIndex',
  data ()
  {
    return{
      longVersion: false,
      mostrar_formulario_new_post: false,
      showGeome7ricPortfolio: false,
      geome7ricProjects: [],
      personalProjects: {},
      metodos_listener_principal:
      {
        'mostrar_blog': (data) => this.manejador_mostrar_blog(data),
        'mostrar_portfolio' : (data) => this.manejador_mostrar_porftolio(data)
      },
      mostrar_blog: false,
      mostrar_portfolio: true,
      mostrar_historia_version_larga: false,
      mostrar_datos_consulta: false,
      funciones: null,
      presupuesto: 50,
      tipo_proyecto: '',
      texto_descripcion: '',
      more_skill1: false,
      more_skill2: false,
      more_skill3: false,
      info_skill1: 'Lo uso hace años y tengo mas de tres proyectos',
      network: null,
      projects: null
    }
  },  
  components:
  {
    Portfolio,
    Contact,
    About,
    Skills,
    SocialMedia
  },
  created()
  {
    
    this.funciones= new Vue(ModuloFunciones);
    this.network = new Vue(ModuloNetwork)
    // this.network.getProjects()    
    //   .then(response=>response.json())
    //   .then(resp=> {
    //     console.log(resp)
    //     this.projects = resp["items"]
    //     // console.log('Los proyectos son estos: ')
    //     // console.log(this.projects)        
    // });
    this.setear_personal_projects()
    this.personalProjects = this.projects
    this.loadGeome7ricProjects()
    this.$root.$on('listener_principal', (param) => this.listener(param));
    console.log("Nope, u won't find any errors here :)")
    //this.funciones.alerta_positiva_home("Bienvenido");
  },  
  beforeMount()
  {
    // this.funciones.mostrar_cargando_tiempo(2000);
  },
  mounted()
  { 
    this.showTitle()
    
  },

  watch: {
    showGeome7ricPortfolio: function (val) {
      this.handleChangePortfolio()
    }
  },
  methods:
  {
    
   
   showTitle() {
     
      

   },
  
   
   

    handleChangePortfolio () {
      if (this.showGeome7ricPortfolio) {
        this.projects = this.geome7ricProjects
      } else {
        this.projects = this.personalProjects
      }
    },

    loadGeome7ricProjects () {},
    
    setear_personal_projects() {},
    showAddNewPost(){
      console.log('Apretaste el 7')
      this.mostrar_formulario_new_post = true
    },
    manejador_mostrar_blog(data)
    {
      this.mostrar_portfolio=false;
      this.mostrar_blog=true;
    },
    manejador_mostrar_porftolio(data)
    {
      this.mostrar_blog=false;
      this.mostrar_portfolio=true;
    },    
    listener(param)
    {
      const funcion = this.metodos_listener_principal[param.function] 
        ? this.metodos_listener_principal[param.function](param)
        : this.funciones.alerta_negativa_default(param.function);
      
    }
  },
  computed: {

    
    getTextClass() {
      let ret = ' q-mt-md'
      if (this.$q.screen.xl) {
        ret = ret + ' '
      } else {
        ret = ret + ' '
      }
      return ret
    },


    getTitle() {
      let ret = 'text-weight-bold   '
      if (this.$q.screen.xl) {
        ret = ret + ' text-h1'
      } else {
        ret = ret + ' text-h2'
      }
      return ret
    },
    hideImage () {
      let ret = false
      ret = this.$q.screen.xs || this.$q.screen.width < 900
      return ret
    },
    getImageWidth () {
      let ret = '665px'
      ret = (this.$q.screen.height *55) / 100
      if (this.mobile) {
         ret = (this.$q.screen.height *55) / 100
      }
      ret = ret.toString() + 'px'
      return ret
    },
    mobile () {
      let ret = false
      ret = this.$q.screen.xs || this.$q.screen.sm || this.$q.screen.width < 1050
      return ret
    },
    layout () {
      return this.$q.screen.lt.sm ? 'dense' : (this.$q.screen.lt.md ? 'comfortable' : 'loose')
    },
    getNameClass() {
      let ret = 'text-weight-bold '
      if (this.$q.screen.xl) {
        ret = ret + ' text-h1'
      } else {
        ret = ret + ' text-h2'
      }
      return ret
    },
    getJobClass() {
      let ret = 'q-mt-md'
      if (this.$q.screen.xl) {
        ret = ret + ' text-h6'
      } else {
        ret = ret + ' text-h6'
      }
      return ret
    },

    
  }
}
</script>

<style scoped>

</style>
