
<template>
  <div :class="`row q-mx-xs ${behavior}`">
    <q-icon name="fab fa-whatsapp" size="20px" @click="useOpenURL('https://api.whatsapp.com/send?phone=542916450794&text=Hi!')" 
      class="q-mx-xs cursor-pointer" src="../assets/social/whatsapp.svg" />
    <q-icon name="fab fa-github" size="20px" @click="useOpenURL('https://github.com/MatiasJRB')" 
      class="q-mx-xs cursor-pointer" src="../assets/social/github.svg" />
    <q-icon name="fab fa-linkedin" size="20px" @click="useOpenURL('https://www.linkedin.com/in/matiasjriosb/')" 
      class="q-mx-xs cursor-pointer"  />
    <q-icon name="fab fa-youtube" size="20px"  @click="useOpenURL('https://www.youtube.com/channel/UCZUdNoXqD2aSVJ3tEEbV5uw')" 
      class="q-mx-xs cursor-pointer" />
    <q-icon name="fab fa-instagram" size="20px"  @click="useOpenURL('https://instagram.com/matiasjrios')"
      class="cursor-pointer" />
    <q-icon name="fab fa-twitch" size="20px" @click="useOpenURL('https://twitch.tv/matiasj7')" 
        class="q-mx-xs cursor-pointer" />
  </div>
    
</template>

<script>

import Vue from 'vue'; // es6 syntax
import { openURL } from 'quasar'

export default({
  props:{
    behavior: {
      type: String,
      defult: 'justify-start'
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
