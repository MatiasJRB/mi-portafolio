<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md" >
      <div class="row full-height absolute-top q-mx-xl">

         
        <div class="col-5 bg-primary ">
          <q-card>
            <div class="row justify-center right">
              <div >
                <div>
                  Fullstack developer
                </div>
                <div>
                  Rios Matias
                </div>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar.png">
                </q-avatar>
                <div>
                  Buenos Aires, Argentina
                </div>
                <div>
                  Disponible para relocación
                </div>
              </div>
              
            </div>
            
          </q-card>          
        </div>
        <q-separator vertical class="full-height" color="dark"   />


        <div class="col-5 bg-secondary">
          <div class="row justify-around q-ma-lg">
            <div class="col">
              <div>Compañia</div>
              <div>Nuqlea</div>
              <div>No disponible para contratar</div>
            </div>
            <q-separator vertical color="dark"   />
            <div class="col q-ml-sm">
              <div>
                Concentrado en
              </div>
              <div>
                Quasar framework
              </div>
              <div>
                <q-btn  flat icon="place"  />
              </div>
            </div>
          </div>
          <div class="row justify-around q-ma-lg">
            <div class="col-8">
              <div>Top skills</div>
              <div class="row justify-around q-ma-lg">
                <div class="col">
                  habilidad 1
                </div>
                <div class="col">
                  habilidad 2
                </div>
                <div class="col">
                  habilidad 3
                </div>
              </div>
            </div>
            <div class="col">
              <div>Main tools</div>
              <div>VueJS</div>
              <div>VScode</div>
              <div>Github</div>
            </div>
          </div>

          <div class="row justify-around q-ma-lg">
            <div class="col">
              <div>Sobre mí</div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Amet aspernatur, facilis magni nihil iusto, eum, quos minus nisi 
                quisquam repellendus praesentium voluptatibus asperiores dolorem ipsum.
                 Itaque expedita corporis pariatur velit!
              </div>
            </div>
          </div>

          <div class="row justify-around q-ma-lg">
            <div class="col">
              <div>Proyectos</div>
              <q-card>
                <div class="row justify-around q-ma-lg">
                  <div class="col">JS GraphQL library</div>
                </div>
                <div class="row justify-around q-ma-lg">
                  <div class="col">https://github.com</div>
                </div>
                <div class="row justify-around q-ma-lg">
                  <div class="col">Override the digital divide with additional clickthroughs from DevOps. User generated content in real-time will have multiple touchpoints for offshoring.</div>
                </div>
                <div class="row justify-around q-ma-lg">
                  <div class="col"> Status: in progress. JavaScript. GraphQL</div>
                </div>
              </q-card>

              <q-card>
                <div class="row justify-around q-ma-lg">
                  <div class="col">Running Lists</div>
                </div>
                <div class="row justify-around q-ma-lg">
                  <div class="col">https://running-lists.com</div>
                </div>
                <div class="row justify-around q-ma-lg">
                  <div class="col">Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</div>
                </div>
                <div class="row justify-around q-ma-lg">
                  <div class="col">  Status: live. RoR. HTML. CSS</div>
                </div>
              </q-card>

              <q-card>
                <div class="row justify-around q-ma-lg">
                  <div class="col">Northwest Podcast</div>
                </div>
                <div class="row justify-around q-ma-lg">
                  <div class="col">https://npodcast.com</div>
                </div>
                <div class="row justify-around q-ma-lg">
                  <div class="col">Leverage agile frameworks to provide a robust synopsis for high level overviews.</div>
                </div>
                <div class="row justify-around q-ma-lg">
                  <div class="col">  Status: live. JavaScript. HTML</div>
                </div>
              </q-card>
            </div>
          </div>

          <div class="row justify-around q-ma-lg">
            <div class="row justify-around q-ma-lg">
                Work history
            </div>
            <div class="row justify-around q-ma-lg">
                <q-timeline :layout="layout" color="dark">
                  <q-timeline-entry heading>
                    Timeline heading
                    <br>
                    ({{$q.screen.lt.sm ? 'Dense' : ($q.screen.lt.md ? 'Comfortable' : 'Loose')}} layout)
                  </q-timeline-entry>

                  <q-timeline-entry
                    title="Event Title"
                    subtitle="February 22, 1986"
                    side="left"
                  >
                    <div>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                  </q-timeline-entry>

                  <q-timeline-entry
                    title="Event Title"
                    subtitle="February 21, 1986"
                    side="right"
                    icon="delete"
                  >
                    <div>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                  </q-timeline-entry>

                  <q-timeline-entry heading>November, 2017</q-timeline-entry>

                  <q-timeline-entry
                    title="Event Title"
                    subtitle="February 22, 1986"
                    side="left"
                  >
                    <div>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                  </q-timeline-entry>

                  <q-timeline-entry
                    title="Event Title"
                    subtitle="February 22, 1986"
                    side="right"
                  >
                    <div>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                  </q-timeline-entry>

                  <q-timeline-entry
                    title="Event Title"
                    subtitle="February 22, 1986"
                    side="left"
                    color="orange"
                    icon="done_all"
                  >
                    <div>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                  </q-timeline-entry>

                  <q-timeline-entry
                    title="Event Title"
                    subtitle="February 22, 1986"
                    side="right"
                  >
                    <div>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                  </q-timeline-entry>

                  <q-timeline-entry
                    title="Event Title"
                    subtitle="February 22, 1986"
                    side="left"
                  >
                    <div>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                  </q-timeline-entry>
                </q-timeline>
            </div>
          </div>


          <div class="row justify-around q-ma-lg">
            <div class="row justify-around q-ma-lg">
              Contact
            </div>
            <div class="row justify-around q-ma-lg">
              <div class="col"></div>
              <div class="col"></div>
              <div class="col"></div>
            </div>
          </div>


        </div>




        <div class="col bg-primary">
          .col c
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
   computed: {
    layout () {
      return this.$q.screen.lt.sm ? 'dense' : (this.$q.screen.lt.md ? 'comfortable' : 'loose')
    }
  }
}
</script>
