<template>
  <q-layout view="hHh lpR fff"  >
    <q-scroll-observer @scroll="onScroll" /> 
    <transition 
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
      appear
      :duration="animationTime">
      <q-header reveal   v-if="mobile" >
        <q-toolbar class="row justify-between bg-dark">
          <q-card @click="handleMenu('header')" 
            flat  class="col-2 flex flex-center bg-dark text-grey-6  ">
            <div class="row cursor-pointer"  >
              <q-img  width="32px" class="" src="../assets/MR_LOGO_WHITE.svg" >        
              </q-img>
            </div>
          </q-card>
          <q-btn
            flat
            icon="menu"
            @click="expanded =! expanded"
            />
        </q-toolbar>
      </q-header>
      
      <q-header v-else reveal elevated >
        <q-toolbar class="row justify-around bg-dark  text-secondary"  style=" margin:0 ">
          
          <q-card @click="handleMenu('header')" 
            flat  class="col-2 flex flex-center bg-dark text-grey-6  ">
            <div class="row cursor-pointer"  >
              <q-img  width="32px" class="" src="../assets/MR_LOGO_WHITE.svg" >        
              </q-img>
            </div>
          </q-card>
          <div class="row" :style="'margin-top:' + getDistance">
            <q-item 
              clickable
              style="height:45px"
              @click="handleMenu('about')"
              class="col">
                <q-item-section :class="$route.path.includes('about')? 'text-grey-4 text-center' :'text-center' " style="font-size: 16px">
                  About
                </q-item-section>
            </q-item>
            <q-separator color="primary"/>
            <q-item 
              clickable
              style="height:45px"
              @click="handleMenu('skills')"
            >
                <q-item-section :class="$route.path.includes('skills')? 'text-grey-4 text-center' :'text-center' " style="font-size: 16px">
                  My skills
                </q-item-section>
            </q-item>
            <q-separator color="primary"/>
            <q-item 
              clickable
              @click="handleMenu('portfolio')"
              style="height:45px"
              class="">
                <q-item-section :class="$route.path.includes('portfolio')? 'text-grey-4 text-center' :'text-center' " style="font-size: 16px">
                  Portfolio
                </q-item-section>
            </q-item>
            <q-separator color="primary"/>
            <q-item 
              clickable
              style="height:45px"
              @click="handleMenu('contact')"
              class="">
                <q-item-section :class="$route.path.includes('contact')? 'text-grey-4 text-center' :'text-center' " style="font-size: 16px">
                  Contact
                </q-item-section>
            </q-item>
            <q-separator color="primary"/>
            <!-- <q-item 
              clickable
              style="height:45px"
              @click="$router.push('/blog')"
              class="">
                <q-item-section :class="$route.path.includes('blog')? 'text-grey-4 text-center' :'text-center' " style="font-size: 16px">
                  Blog
                </q-item-section>
            </q-item> -->
            <q-separator color="primary"/>
          </div>
          <div class="flex flex-center">
            
          <SocialMedia
            style="margin-top: -3px"
            :header="true"
            :behavior="'justify-evenly flex flex-center'" class="col-3 q-mt-md flex flex-center full-height"/>
          </div>
        </q-toolbar>
      </q-header>
     
    </transition>

    <q-dialog position="top" v-model="expanded">
      <q-card class="bg-dark text-white" flat style="border-radius: 0px">
        <q-card-section>
          <q-img
            @click="handleMenu('header')"
            class="q-ma-md cursor-pointer" width="33px" src="../assets/MR_LOGO_WHITE.svg"/>
        </q-card-section>
        <q-separator/>
        <q-card-section
          @click="handleMenu('header')"
        :class="$route.path === '/'? '   cursor-pointer' :'cursor-pointer ' "
         >
          Home
        </q-card-section>
        <q-separator/>
        <q-card-section
          @click="handleMenu('about')"
          :class="$route.path.includes('about')? '  cursor-pointer ' :' cursor-pointer' ">
          About
        </q-card-section>
        <q-separator/>
        <q-card-section
        @click="handleMenu('portfolio')"
           :class="$route.path.includes('portfol')? '  cursor-pointer' :'cursor-pointer ' ">
          Portfolio
        </q-card-section>
        <q-separator/>
        <q-card-section
          @click="handleMenu('contact')"
           :class="$route.path.includes('contact')? ' cursor-pointer ' :' cursor-pointer' ">
          Contact
        </q-card-section>
        <q-separator/>
        <SocialMedia  :behavior="'justify-around'" class=" q-my-md" />
      </q-card>
    </q-dialog>

    <q-page-container style=" background: rgb(29, 29, 29) " class="text-white"  >
      
      <transition
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
        appear
        :duration="animationTime"
      >      
        <router-view/>
      </transition>
    </q-page-container>

     <q-footer elevated>
        <q-toolbar>
          <q-toolbar-title>
            <div class="q-my-xs">
              <div class="row justify-center">
                <div class="text-caption">
                  Designed and built by Matias Rios
                </div>
              </div>
            </div>
          </q-toolbar-title>
        </q-toolbar>

        
      </q-footer>
    
  </q-layout>
</template>

<script>
import SocialMedia from '../components/SocialMedia.vue'


export default {
  name: 'MainLayout',
  components: { 
    SocialMedia
   },
  computed: {
    mobile () {
      let ret = false
      ret = this.$q.screen.xs || this.$q.screen.sm || this.$q.screen.width < 1050
      return ret
    },
    getDistance () {
      let ret = (this.$q.screen.height *10) / 100
      ret = ret.toString() + 'px'
      return 0
    },
  },
  data () {
    return {
      hideLayout: false,
      expanded:false,
      class_button_toolbar: this.mostrando_porfolio? 'bg-info q-mx-xs' : 'bg-accent q-mx-xs',
      class_button_porfolio: this.mostrando_porfolio? 'bg-accent q-mx-xs' : 'bg-info q-mx-xs',
      mostrando_porfolio: true,
      leftDrawerOpen: false,
      changingRoute: false,
      animationTime: 300
    }
  },
  beforeRouteUpdate(to,from, next) {
    next()
  },
  watch: {
    leftDrawerOpen(oldValue, newValue) {
      if (!this.leftDrawerOpen) {
        // olvido el drwaer y muestro el boton :D
        this.$emitter.emit('mobileVerstion', true)
      }
    }
  },
  created()
  {
    this.$emitter.on('hideLayout', (value) => {
      this.hideLayout = value
      this.expanded = value
    })

    this.class_button_toolbar=this.mostrando_porfolio? 'bg-info q-mx-xs' : 'bg-accent q-mx-xs';
    
    this.class_button_porfolio= this.mostrando_porfolio? 'bg-accent q-mx-xs' : 'bg-info q-mx-xs';
    
  },
  methods:
  {

     onScroll (info) {

        if (info.position>60) {
          this.hideLayout= true
        } else {
          this.hideLayout = false
        }
      },
    async handleMenu(path) {
      const route = this.$route.name
      if (route?.includes('portfolio') || route?.includes('cv')) {
        await this.$router.push('/')
      }
      this.$emitter.emit('listener_principal', {
        function: 'scrollTo',
        data: path
      })
      
    },
    toolbar_click()
    {
      if (this.mostrando_porfolio)
      {
          
        this.mostrando_porfolio=false;
        this.class_button_toolbar=this.mostrando_porfolio? 'bg-info q-mx-xs' : 'bg-accent q-mx-xs';   
        this.class_button_porfolio= this.mostrando_porfolio? 'bg-accent q-mx-xs' : 'bg-info q-mx-xs';

      }
    },
    click_toolbar_porfolio()
    {
      // enviar que clicklie el porfolio

      if (!this.mostrando_porfolio)
      {
        this.mostrando_porfolio=true;
        this.class_button_toolbar='bg-info q-mx-xs';
        this.class_button_porfolio='bg-accent q-mx-xs';
        var data;
        data=
        {
          function: 'mostrar_portfolio'
        }
        this.$root.$emit('listener_principal',data);
      }
    },
    click_toolbar_blog()
    {
      // enviar que clicklie el porfolio

      if (this.mostrando_porfolio)
      {
        this.mostrando_porfolio=false;
        this.class_button_toolbar='bg-accent q-mx-xs';
        this.class_button_porfolio='bg-info q-mx-xs';
        var data;
        data=
        {
          function: 'mostrar_blog'
        }
        this.$root.$emit('listener_principal',data);
      }
    }
  }
}
</script>

