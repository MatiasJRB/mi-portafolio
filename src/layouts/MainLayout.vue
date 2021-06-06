<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class=" q-layout__section--marginal ">
      <q-toolbar
        style="height: 100px"
        class="bg-info ">     
        <div class="left q-ml-xl">
          <q-avatar size="xl">
            <img src="../assets/MR-logo.svg" >
          </q-avatar>
    
        </div>

        
        
        <q-toolbar-title
          class="text-dark text-center">
        </q-toolbar-title>

        <div class="right q-mr-xl">
          <q-btn size="md" icon="work"  @click="click_toolbar_porfolio" active color="dark" label="Porfolio" :class="class_button_porfolio" text-color="dark" style="border-radius: 50px"/>
          <q-btn size="md" icon="article" @click="click_toolbar_blog" color="dark" label="Blog" :class="class_button_toolbar" text-color="dark" style="border-radius: 50px"/>
        </div>
      </q-toolbar>

      <q-page-sticky style="z-index: 5000" :offset="[18, 18]">
        <div class="q-px-sm q-py-lg">
          <div class="column items-center"  position="bottom-rigth">
            <q-fab color="accent" text-color="dark" icon="keyboard_arrow_up" direction="up">
              <q-fab-action color="dark" icon="email" />
              <q-fab-action color="dark"  icon="fab fa-whatsapp" />
                          
            </q-fab>
          </div>
      </div>
      <!--q-btn @click="enviar_iniciar_nuevo_movimiento" fab icon="add" color="primary" /-->
    </q-page-sticky>
      
    </q-header>

    <!--q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer-->

    <q-page-container>
      <router-view />
    </q-page-container>
    
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
import { fasAirFreshener } from '@quasar/extras/fontawesome-v5'
const linksData = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
];

export default {
  name: 'MainLayout',
  components: {  },
  data () {
    return {
      class_button_toolbar: this.mostrando_porfolio? 'bg-info q-mx-xs' : 'bg-accent q-mx-xs',
      class_button_porfolio: this.mostrando_porfolio? 'bg-accent q-mx-xs' : 'bg-info q-mx-xs',
      mostrando_porfolio: true,
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  },
  created()
  {
    this.class_button_toolbar=this.mostrando_porfolio? 'bg-info q-mx-xs' : 'bg-accent q-mx-xs';
    
    this.class_button_porfolio= this.mostrando_porfolio? 'bg-accent q-mx-xs' : 'bg-info q-mx-xs';
    
  },
  methods:
  {
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

