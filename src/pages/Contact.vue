<template>
  <q-page  class="flex flex-center" :style=" $q.screen.xl? 'padding-left: 130px' : 'padding-left: 130px'" >
   <!-- Vista principal -->
    <div class="full-width " :style=" $q.screen.xl? 'height: 100vh' : ''">
      <div class="row justify-start ">
        <div class="col-6 col-md-6 col-xs-12 col-sm-12  "  >
          
          <div class="">
            <div :class="getNameClass" style="margin-top:20%" >
             Contact me
            </div>
            <div :class="getJobClass" >
              I'm interested in freelance opportunities, especially big ones, to take this with Geome7ric to make it better and bigger. 
              However, if you have another request or question, don't hesitate to use the form.
            </div>
            <div class="q-mt-xl q-mx-lg">
              <div class="row justify-around">
                <div class="col-6">
                  <q-input  class="q-mx-md" filled label="Name"/>
                </div>
                <div class="col-6">
                  <q-input class="q-mx-md" filled label="Email"/>
                </div>
              </div>
              <div class="row q-ma-md ">
                <q-input class="full-width" filled label="Subject"/>
              </div>
              <div class="q-ma-md">
                <q-input  type="textarea" filled label="Message" style="max-height: 250px"/>
              </div>
              <div class="row justify-end">
                <q-btn class="text-capitalize col-4 " outline color="secondary" label="Sent message!"/>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6  full-height">          
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99611.232271834!2d-62.25637244999999!3d-38.72122955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95edbcabdc1302bd%3A0x76d1d88d241e7a11!2sBah%C3%ADa%20Blanca%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1647766554503!5m2!1ses!2sar"
           style="border:0;height:100vh; width: 100%" allowfullscreen="" loading="lazy"></iframe>
        </div>        
      </div>
      
    </div>
  </q-page>
</template>

<script>
export default {
  components: {
  },
  computed: {
    getNameClass() {
      let ret = 'q-mx-xl text-weight-bold  '
      if (this.$q.screen.xl) {
        ret = ret + ' text-h1'
      } else {
        ret = ret + ' text-h2'
      }
      return ret
    },
    getJobClass() {
      let ret = 'q-mx-xl q-mt-md'
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
