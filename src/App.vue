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
    function reveal() {
      var reveals = document.querySelectorAll(".reveal");

      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }

    window.addEventListener("scroll", reveal);
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
