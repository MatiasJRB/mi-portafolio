<template>
  <div id="q-app" >
    <router-view />
  </div>
</template>
<script>
export default {
  
  name: 'App',
  created () {
    
    this.$emitter.on('positiveNotify', (msg) => this.positiveNotify(msg))
    this.$emitter.on('negativeNotify', (msg) => this.negativeNotify(msg))
  },
  methods: {
    positiveNotify(msg) {
      this.$q.notify({
          message: msg,
          color: 'primary'
        })
    },
    negativeNotify(msg) {
      this.$q.notify({
          message: msg,
          color: 'secondary'
        })
    }
  }
}
</script>
