
<template>
  <div :class="`row  ${behavior}`">
    <q-icon name="fab fa-whatsapp" size="20px" @click="useOpenURL('https://api.whatsapp.com/send?phone=542916450794&text=Hi!')" 
      class="q-mx-md cursor-pointer" src="../assets/social/whatsapp.svg" />
    <q-icon name="fab fa-github" size="20px" @click="useOpenURL('https://github.com/MatiasJRB')" 
      class="q-mx-md cursor-pointer" src="../assets/social/github.svg" />
    <q-icon name="fab fa-linkedin" size="20px" @click="useOpenURL('https://www.linkedin.com/in/matiasjriosb/')" 
      class="q-mx-md cursor-pointer"  />
    <q-icon name="fab fa-youtube" size="20px"  @click="useOpenURL('https://www.youtube.com/channel/UCZUdNoXqD2aSVJ3tEEbV5uw')" 
      class="q-mx-md cursor-pointer" />
    <q-icon v-if="!$route.path.includes('cv')"  name="fab fa-instagram" size="20px"  @click="useOpenURL('https://instagram.com/matiasjrios')"
      class="q-mx-md cursor-pointer" />
    <q-btn v-if="header && !$route.path.includes('cv')" label="CV" color="accent" text-color="primary"  @click="$router.push('/cv')" 
      class="q-mx-md flex flex-center" />
  </div>
    
</template>

<script>

import Vue from 'vue';
import { openURL } from 'quasar'

export default({
  props:{
    behavior: {
      type: String,
      defult: 'justify-start'
    },
    header: {
      type: Boolean,
      defult: false
    }
  },
  data()
  {
    return{
    }
  },
  methods: {
    
    useOpenURL(url) {
      openURL(url)
    },
  },
  mounted () {
  }
})
</script>
