<template>
  <q-page padding>
    <div class=" flex flex-center row full-width">
      <div id="cv" :class="cvClass">
        
        <div class="row justify-between">
          <div class="text-h2 text-barlock">
            RIOS MATIAS
          </div>
          <div class="" v-if="showPrint">
            <q-btn  flat dark icon="print" @click="handleClickOnPrint"/>
          </div>
        </div>
        <div class="row q-mt-md ">
          <div class="text-h4 text-barlock">
            Computer Enginner
          </div>
        </div>
        <SocialMedia class="q-mt-md"/>
        <div class="row q-mt-md">
          <div class="text-h6 text-bold">
            Profile
          </div>
        </div>
        <div>
           I am a responsible professional, enthusiastic about the challenges. Proactive attitude,
          decision maker, entrepreneur. A self-taught person concerned about being better day by
          day.
          Focused and disciplined, well disposed to new opportunities, whether following a
          leader or leading a team, always focused on achieving the goals in an optimal way. My
          sense of humor and willingness to help and listen contribute to creating a good work
          environment.

        </div>
        <div class="row q-mt-md">
          <div class="text-h6 text-bold">
            Areas of knowledge
          </div>
        </div>
        <div>
          - Good practices in the designs of infrastructure, solutions and code <br>
          - Semi-Senior technical background in technologies involved in making mobile products<br>
          - Experience using CI/CD and TDD based on SCRUM<br>
          - Experience in direct customer management<br>
          - Experience leading a small team in a fast-paced environment<br>
          - Experience with Quasar Framework (Web, Android and iOS), Vue JS, React Native
          (Android and iOS), JavaScript, NestJS, Express JS, MySQL, Laravel, PHP, Nginx, AWS, NextJS,
          Git, Jira, Docker, HTTP clients, Figma
        </div>
        <div class="row q-mt-md">
          <div class="text-h6 text-bold">
            Professional experience
          </div>
        </div>
        <div class="row q-mt-xs">
          <div class="text-subtitle1 text-weight-medium text-accent">
            Full Stack Developer 
          </div>
        </div>
        <div class="row ">
          Nuqlea | June 21 - Present
        </div>
        <div class="q-mt-xs">
          - In charge of the technical part of the startup's mobile products<br>
          - Design solutions to problems that require comprehensive knowledge regarding
          integrating Android and iOS applications into an ecosystem<br>
          - Develop functionalities with quality and speed
        </div>
        <div class="row q-mt-xs">
          <div class="text-subtitle1 text-accent">
             Full Stack Engineer - Co-Founder 
          </div>
        </div>
        <div class="row ">
          Geome7ric | February 20 - Present
        </div>
        <div class="q-mt-xs">
          - Design of solutions and selection of appropriate technologies with an understanding of
          infrastructure and development costs to deliver the most suitable budget<br>
          - Direct customer management<br>
          - Designing user experiences<br>
          - Development and workflow organizer<br>
          - Development<br>
          - Cloud server managment<br>
          - CI/CD, TDD<br>
          - Logging and maintenance of live products
        </div>
        <div class="row q-mt-xs">
          <div class="text-subtitle1 text-accent">
            Full Stack Engineer
          </div>
        </div>
        <div class="row ">
          Freelance | June 18 - Present
        </div>
        <div class="q-mt-xs">
          My tasks are the same as those I perform with Geome7ric, but only on projects that I
          can handle alone based on my availability
        </div>
        <div class="row q-mt-xs">
          <div class="text-subtitle1 text-accent">
             Sys Admin 
          </div>
        </div>
        <div class="row ">
           Profertil S.A. | December 20 - May 21
        </div>
        <div class="q-mt-xs">
          - Administrator of Windows servers<br>
          - In touch with SQL Server systems<br>
          - Maintenance of a intern website made with Codeigneither<br>
          - Scripting with Phyton, MySQL, SQLPlus and Powershell<br>
          - Support of real-time databases as ASPEN InfoPlus 21
        </div>
        <div class="row q-mt-md">
          <div class="text-h6 text-bold">
            Languages
          </div>
        </div>
        <div>
          Intermediate english and native spanish
        </div>
        <div class="row q-mt-md">
          <div class="text-h6 text-bold">
            Education
          </div>
        </div>
        <div>
          - Computer Engineer - National University of the South, 2021. Buenos Aires, Argentina<br>
          - Proffesional IT Technician - Argentine School of Languages and Technologies Technology, 2013. Buenos Aires, Argentina
        </div>
        <div class="row q-mt-md">
          <div class="text-h6 text-bold">
            Certificates
          </div>
        </div>
        <div>
          - Introduction to React - National University of the South and School of Informatic
          Technologies Updating (EATI), 2019. Buenos Aires, Argentina<br>
          - From 0 to ninja in CollectD, InfluxDB and Grafana - National University of the South and
          School of Informatic Technologies Updating (EATI), 2019. Buenos Aires, Argentina
        </div>
        <div class="row q-mt-md">
          <div class="text-h6 text-bold">
            Hobbies
          </div>
        </div>
        <div class="">
          - Photography<br>
          - Consuming content from IT personalities<br>
          - Media editing (Sony Vegas, Adobe Premiere, Photoshop)<br>
          - Sports: football, calistenics, crossfit, basket<br>
          - e-Sports: CS GO<br>
          - Branding oriented design
        </div>
        
      </div>
    </div>
  </q-page>
</template>

<script>
import SocialMedia from '../components/SocialMedia.vue'
export default {
  name: 'CV',
  components: {
    SocialMedia
  },
  data () {
    return {
      cvClass: 'bg-dark-bold q-pa-lg col-md-6 col-lg-6 col-xl-6 col-sm-12',
      showPrint: true
    }
  }, 
  methods: {
    handleClickOnPrint() {
      this.showPrint = false
      this.cvClass = 'q-pa-lg q-ma-xl col-md-6 col-lg-6 col-xl-6 col-sm-12'
      this.$nextTick(() => {
        this.$helper.printHTML('cv')
        this.$nextTick(() => {
          this.showPrint = true
          this.cvClass= 'bg-dark-bold q-pa-lg col-md-6 col-lg-6 col-xl-6 col-sm-12'
        })
      })
      

    }
  }
}
</script>
