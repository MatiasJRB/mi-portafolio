<template>
  <q-layout view="lHh lpR lFf"  >
    <q-page-sticky position="top-right" class="  " v-if="mobile" style="z-index:10000000">
      <div class="row justify-end q-ma-md">
        <q-btn  flat icon="menu" @click="expanded =! expanded"/>
      </div>
    </q-page-sticky> 
    <div class="col fixed-left full-height  bg-dark text-secondary"  style="width: 130px; z-index:1000; margin:0 "
      v-if="!mobile" >
      <q-card @click="$router.push('/')" flat v-ripple clickable class="bg-black text-grey-6 cursor-pointer " style="height: 170px">
        <div class="row justify-center">
          <q-img class="flex flex-center col-6 q-mt-xl" src="../assets/MR_LOGO_WHITE.svg" >        
         </q-img>
        </div>
        <div class="q-ma-md text-center q-mb-lg">Full Stack<br> Enginner</div>
      </q-card>
      <div class="" :style="'margin-top:' + getDistance">
        <q-separator color="primary"  />
        <div class="text-white">
        </div>
        <q-item 
          clickable
          style="height:45px"
          @click="$router.push('/about')"
          class="">
            <q-item-section :class="$route.path.includes('about')? 'text-grey-4 text-center' :'text-center' " style="font-size: 16px">
              About
            </q-item-section>
        </q-item>
        <q-separator color="primary"/>
        <q-item 
          clickable
          style="height:45px"
          @click="$router.push('/skills')"
          class="">
            <q-item-section :class="$route.path.includes('skills')? 'text-grey-4 text-center' :'text-center' " style="font-size: 16px">
              My skills
            </q-item-section>
        </q-item>
        <q-separator color="primary"/>
        <q-item 
          clickable
          @click="$router.push('/portfolio')"
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
          @click="$router.push('/contact')"
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
      <!-- <div class="row justify-center" style="margin-top: " >
       <q-btn flat size="xs">
         <q-img src="../assets/social/linkdn.png" width="15px" style="filter: grayscale(1);"/>
       </q-btn>
       <q-btn flat size="xs">
         <q-img src="../assets/social/instagram.png" width="15px" style="filter: grayscale(1);"/>
       </q-btn>
      </div> -->
    </div>

    <q-dialog position="top" v-model="expanded">
      <q-card class="" flat style="border-radius: 0px">
        <q-card-section>
          <q-img
            @click="handleMenu('/')"
            class="q-ma-md" width="33px" src="../assets/mr.svg"/>
        </q-card-section>
        <q-separator/>
        <q-card-section
          @click="handleMenu('/')"
        :class="$route.path === '/'? '  bg-primary text-white  ' :' ' "
         >
          Home
        </q-card-section>
        <q-separator/>
        <q-card-section
          @click="handleMenu('/about')"
          :class="$route.path.includes('about')? ' bg-primary text-white  ' :' ' ">
          About
        </q-card-section>
        <q-separator/>
        <q-card-section
        @click="handleMenu('/portfolio')"
           :class="$route.path.includes('portfol')? 'bg-primary text-white  ' :' ' ">
          Portfolio
        </q-card-section>
        <q-separator/>
        <q-card-section
          @click="handleMenu('/contact')"
           :class="$route.path.includes('contact')? 'bg-primary text-white  ' :' ' ">
          Contact
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-page-container style="margin: 0"  >
      
      <transition
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
        appear
        :duration="animationTime"
      >      
        <router-view/>
        <!-- <div class="">
          <q-inner-loading 
            label="Matias is thinking.."
            label-class="text-dark"
            class=" absolute-center" 
            :showing="changingRoute" 
          >
             <q-spinner-oval color="" size="2em" />
          </q-inner-loading>
          <router-view>
          </router-view>
        </div> -->
      </transition>
    </q-page-container>
    
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
import { fasAirFreshener } from '@quasar/extras/fontawesome-v5'


export default {
  name: 'MainLayout',
  components: {  },
  computed: {
    mobile () {
      let ret = false
      ret = this.$q.screen.xs || this.$q.screen.sm || this.$q.screen.width < 1050
      return ret
    },
    getDistance () {
      let ret = (this.$q.screen.height *10) / 100
      ret = ret.toString() + 'px'
      console.log(this.$q.screen)
      return ret
    },
  },
  data () {
    return {
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
    this.class_button_toolbar=this.mostrando_porfolio? 'bg-info q-mx-xs' : 'bg-accent q-mx-xs';
    
    this.class_button_porfolio= this.mostrando_porfolio? 'bg-accent q-mx-xs' : 'bg-info q-mx-xs';
    
  },
  methods:
  {
    handleMenu(path) {
      if (path !== this.$route.path) {
        this.$router.push(path)
          .finally(() => {
            this.expanded = false
          })
      } else {
        this.expanded = false
      }
      
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
      else
        console.log("wtf")
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
      else
        console.log("wtf")
    }
  }
}
</script>

