<template>
  <q-page class="flex flex-center bg-info" >
    <!-- Contenedor de principal -->
    <div class="row">
      <div class="col">
        <div class=" row q-gutter-md q-mx-md bg-info" style="margin: 0px;max-width: 1200px" >         
          <!-- Column A -->
          <div class="col-12 bg-info col-md-4 " style="margin: 0px">
              <q-card
              flat
              class="bg-info " >
                <div class="row justify-center  q-my-xl " style=" ">
                  <div >
                    <div class="text-h6 text-weight-thin">
                      Full Stack Engineer
                    </div>
                    <div class="text-h3 text-weight-bold q-my-sm">
                      Rios <br>Matias
                    </div>
                    <div class="bg-info q-my-lg">
                      <img src="https://res.cloudinary.com/geome7ric-weasel/image/upload/v1622690940/MVIMG_20210420_174739_ryzkpg.png"
                      style="width: 250px">
                    </div>
                    <div class="row justify-center " style=" ">
                      <div class="col">
                        <q-btn class="col bg-dark full-height" text-color="accent"  color="bg-dark" icon="location_on"></q-btn>
                      </div>
                      <div class="col-9 bg-dark" style="border-radius: 3px;">
                        <div class="text-white text-weight-thin q-ml-md q-my-md" style="" >
                          Buenos Aires, Argentina
                        </div>
                      </div>                  
                    </div>
                  </div>
                  
                </div>            
                
              </q-card> 
              
                    
          </div>
          
          <q-separator size="xl" class="q-mt-lg" vertical color="dark"/>

          <!-- Column B -- Blog -->

          <div class="col-12 bg-info col-md-7 q-pa-lg" v-show="mostrar_blog" style="margin: 0px">
            <div class="row justify-center q-ma-lg q-pa-xs">
              
              <div v-for="project in projects" :key="project.id" class="col-12 col-md text-center">

                <Proyecto
                :project="project"/>

              </div>
            </div>
          </div>
          
          <!-- Column B -- Porfolio -->
          <div class="col-12 bg-info col-md-7 q-pa-lg" v-show="mostrar_portfolio" style="margin: 0px">

            <!-- Company | Focused on -->
            <div class="row justify-center q-ma-lg q-pa-xs" style=" ">
              <div class="col-12 col-md ">
                <div class="text-overline">
                  COMPAÑÍA
                </div>
                <div class="text-weight-thin text-h4  ">
                  Nuqlea
                </div>
                <div class="text-caption q-my-sm  ">
                  No disponible para contratar
                </div>
              </div>
              <!--q-separator vertical color="dark"  class="q-ml-xl" /-->
              <div class="col-12 col-md">
                <div class="text-overline">
                  CONCENTRADO EN
                </div>
                <div class="text-weight-thin text-h4" >
                  Quasar
                </div>
                <div class="text-caption text-h4" >
                  Framework 
                </div>                
                <div>
                  <q-btn size="xs" flat icon="help" style="margin-left: -10px" />
                </div>
              </div>
            </div>


            <!-- Skills -->
            <div class="row justify-around q-ma-lg" style=" ">
              <div class="col-12 col-md-7">
                <div class="text-overline">
                  TOP SKILLS
                </div>
                <div class="row justify-around q-mt-lg q-mb-sm text-weight-thin " style=" ">
                  <div  style="border-radius: 7px; ">
                    <q-card class="my-card bg-accent q-px-xs"  flat > 
                      <q-card-section>
                        <div class="text-h5 text-weight-thin q-mt-sm q-mb-xs text-center q-mt-md" >VueJS</div>                      
                      </q-card-section>

                      <q-card-actions>           

                        <q-space />

                        <q-btn
                          color="grey"
                          round
                          size="xs"
                          flat
                          dense
                          text-color="dark"
                          :icon="more_skill1 ? 'expand_less' : 'info'"
                          @click="more_skill1 = !more_skill1"
                        />
                      </q-card-actions>

                      <!--q-slide-transition>
                        <div v-show="more_skill1">
                          <q-separator />
                          <q-card-section class="text-subitle2">
                            {{ info_skill1 }}
                          </q-card-section>
                        </div>
                      </q-slide-transition-->
                    </q-card>
                  </div>
                  
                  <div class="bg-accent q-mx-sm" style="border-radius: 3px; width: 100px">
                    <q-card class="my-card bg-accent q-px-xs"  flat > 
                      <q-card-section>
                        <div class="text-h5 text-weight-thin q-mt-sm q-mb-xs text-center q-mt-md">VScode</div>                      
                      </q-card-section>

                      <q-card-actions>           

                        <q-space />

                        <q-btn
                          color="grey"
                          round
                          size="xs"
                          flat
                          dense
                          text-color="dark"
                          :icon="more_skill1 ? 'expand_less' : 'info'"
                          @click="more_skill1 = !more_skill1"
                        />
                      </q-card-actions>

                      
                    </q-card>
                  </div>

                  <div class="bg-accent " style="border-radius: 3px; width: 100px">
                    <q-card class="my-card bg-accent q-px-xs"  flat > 
                      <q-card-section>
                        <div class="text-h5 text-weight-thin q-mt-sm q-mb-xs text-center q-mt-md">Github</div>                      
                      </q-card-section>

                      <q-card-actions>           

                        <q-space />

                        <q-btn
                          color="grey"
                          round
                          size="xs"
                          flat
                          dense
                          text-color="dark"
                          :icon="more_skill1 ? 'expand_less' : 'info'"
                          @click="more_skill1 = !more_skill1"
                        />
                      </q-card-actions>

                      <!--q-slide-transition>
                        <div v-show="more_skill1">
                          <q-separator />
                          <q-card-section class="text-subitle2">
                            {{ info_skill1 }}
                          </q-card-section>
                        </div>
                      </q-slide-transition-->
                    </q-card>
                  </div>
                </div>

                <div class="row bg-accent text-dark text-body2" v-show="more_skill1" style=" ">
                  <q-slide-transition>
                    <div >
                      <q-separator />
                      <q-card-section class="text-subitle2">
                        {{ info_skill1 }}
                      </q-card-section>
                    </div>
                  </q-slide-transition>
                </div>
              </div>

              <div class="col-12 col-md-3 text-weight-thin text-h5">
                <div class="text-overline">
                  MAIN TOOLS
                </div>
                <div class="bg-accent q-mt-lg" style="border-radius: 3px; width: 100px">
                  <div class="q-ml-md">
                    VueJS
                  </div>
                </div>
                <div class="bg-accent q-my-sm" style="border-radius: 3px; width: 100px">
                  <div class="q-ml-md">
                    VScode
                  </div>
                </div>
                <div class="bg-accent" style="border-radius: 3px; width: 100px">
                  <div class="q-ml-md">
                    Github
                  </div>
                </div>
              </div>
            </div>



            <!-- About -->
            <div class="row justify-around q-ma-lg" style=" ">
              <div class="col ">
                <div class="text-overline">
                  SOBRE MÍ

                </div>
                <div class="text-body2 q-my-md">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Soy Ingeniero en Computación graduado de la Universidad Nacional del Sur, y me encuentro trabajando a jornada completa. Suelo aceptar diferentes trabajos freelance que me obligan a aprender nuevas herramientas de manera autodidacta. Me apasiona el entrenamiento y el deporte (guerrero educado), la creación y edición de fotos y videos y determinados e-sports.
                  <br>
                </div>
              </div>
            </div>

            <!-- History -->
            <div class="row justify-around q-ma-lg" style=" ">
              
              <div class="row justify-center flex flex-center q-pa-xs q-ma-lg full-width" style=" ">
                 <div class="text-dark text-overline">
                   HISTORIA PRINCIPAL
                 </div>
                 <div class="">
                   <q-toggle
                      v-model="mostrar_historia_version_larga"
                      checked-icon="check"
                      color="accent"
                      unchecked-icon=""
                    />
                 </div>
                 <div class="text-dark text-overline">
                  HISTORIA DETALLADA
                 </div>
              </div>      


              <div class="row justify-around q-ma-lg" style=" ">



                  <q-timeline :layout="layout" color="dark">

                    <!--q-timeline-entry heading>
                      Timeline heading
                      <br>
                      ({{$q.screen.lt.sm ? 'Dense' : ($q.screen.lt.md ? 'Comfortable' : 'Loose')}} layout)
                    </q-timeline-entry-->

                    <q-timeline-entry
                      v-show="mostrar_historia_version_larga"
                      title="Me egreso del secundario"
                      subtitle="12 de Diciembre, 2012"
                      side="left"
                      icon="school"
                    >
                      <div>
                        Termino el secundario en el Colegio Nacional
                      </div>
                    </q-timeline-entry>

                    <q-timeline-entry
                      v-show="mostrar_historia_version_larga"
                      title="Me convierto en técnico en armado y reparación de PC"
                      subtitle="20 de Noviembre, 2013"
                      side="right"                      
                      icon="school"
                    >
                      <div>
                        Certificado por la Escuela Argentina de Idiomas y Tecnología
                      </div>
                    </q-timeline-entry>

                    <q-timeline-entry
                      v-show="mostrar_historia_version_larga"
                      title="Vendo mi primer software, Geome7ric 1.0"
                      subtitle="12 de junio, 2018"
                      side="left"                      
                      icon="school"
                    >
                      <div>
                        Solucioné el problema de stock, ventas y manejo de clientela a una forrajería. Un evento que marcó mi inicio en el mundo freelance
                      </div>
                    </q-timeline-entry>


                    <q-timeline-entry
                      title="Comienzan mi pasantía en Profertil S.A. "
                      subtitle="1 de octubre, 2020"
                      side="right"
                      icon="work"
                    >
                      <div>
                        Trabajo a jornada parcial, como administrador de redes y sistemas Windows, dando soporte a productos ASPEN y desarrollando
                      </div>
                    </q-timeline-entry>

                    <!--q-timeline-entry heading>November, 2017</q-timeline-entry-->

                    <q-timeline-entry
                      title="Me recibo de Ingeniero en Computación"
                      subtitle="9 de abril, 2021"
                      icon="school"
                      side="left"
                    >
                      <div class="">
                        Prensento mi proyecto final frente a amigos y familiares, para poner un fin a mi carrera de ingeniero
                      </div>
                    </q-timeline-entry>

                    <q-timeline-entry
                      title="Comienzo a brindar servicios con dedicación exclusiva a Profertil S.A."
                      subtitle="12 de abril, 2021"
                      side="right"
                    >
                      <div>
                        Trabajo a jornada completa, como administrador de redes y sistemas Windows, y dando soportes a productos ASPEN
                      </div>
                    </q-timeline-entry>

                    <q-timeline-entry
                      title="Adquiero mi primer contrato"
                      subtitle="7 de junio, 2021"
                      side="left"                      
                      color="accent"
                      icon="work"
                    >
                      <div>
                        Comienzo como Fullstack developer en Nuqlea, la evolución de CAPP, la plataforma líder en construcción
                      </div>
                    </q-timeline-entry>

                  </q-timeline>
              </div>
            </div>

            <!-- Projects -->
            <div class="row justify-around q-ma-lg" >
              <div class="col" >
                <div class="text-overline">
                  <div class="row justify-center flex flex-center q-pa-xs q-ma-lg full-width" style=" ">
                    <div class="text-dark text-overline">
                      PORTFOLIO PERSONAL
                    </div>
                    <div class="">
                      <q-toggle
                          v-model="showGeome7ricPortfolio"
                          checked-icon="check"
                          color="accent"
                          unchecked-icon=""
                        />
                    </div>
                    <div class="text-dark text-overline">
                      PORFOLIO GEOME7RIC
                    </div>
                  </div>     
                </div>
                <div v-for="project in projects" :key="project.id"
                  class="q-mt-md" >

                  <Proyecto
                    :imagen="project.imagen"
                    :project="project"
                    :fecha="project.fecha"
                    :descripcion="project.descripcion"
                    :nombre="project.nombre"/>

                </div>
              </div>
            </div>


            

            <!-- Contact -->  
            <div class="row justify-around q-ma-lg" style=" ">
              <div class="row text-h6 justify-around q-ma-lg text-center text-weight-regular" style=" ">
                <div class="text-overline">
                  CONTACTO

                </div>
              </div>                        
            </div>
            <div class="row justify-around q-ma-lg" style=" ">
              <div class="col">
                <q-input v-on:keyup.55="showAddNewPost" color="dark" v-model="tipo_proyecto" hint="Nombre"  class=" q-mr-xs"/>
              </div>
              <div class="col">
                <q-input color="dark" v-model="tipo_proyecto" hint="Email" type="phone-number" class="q-ml-xs"/>
              </div>
              <div class="col flex flex-center">
                <q-btn flat label="Consulta" size="md"  class="full-width"  @click="mostrar_datos_consulta = !mostrar_datos_consulta">
                  
                </q-btn>
              </div>
            </div>
            <div class="row justify-around q-ma-lg" v-show="mostrar_datos_consulta" style=" ">
              <div class="row justify-around full-width" style=" ">
                  <div class="q-pa-md full-width">
                    <q-badge color="dark">
                      Presupuesto: $ {{ presupuesto }}.000 pesos
                    </q-badge>
                    <q-slider
                      v-model="presupuesto"
                      class="full-width q-mt-xl"
                      :min="0"
                      :max="500"
                      :step="5"
                      label
                      label-always
                      label-text-color="dark"
                      color="accent"
                    />
                  </div>
                <div class="col"></div>
              </div>
              <div class="row justify-around full-width" style=" "> 
                <q-input color="dark" v-model="tipo_proyecto" hint="Tipo de proyecto"    class="full-width"/>
              </div>
              <div class="row justify-around full-width" style=" ">
                <q-input color="dark" v-model="tipo_proyecto" hint="Numero de telefono" type="phone-number" class="full-width"/>
              </div>
            </div>
            <div class="row justify-around q-ma-lg" style=" ">
              <q-input
                color="dark"
                hint="Tu mensaje"
                class="full-width"
                v-model="texto_descripcion"
                filled
                type="textarea"                    
                autogrow                     
              ></q-input>
            </div>
            <div class="row justify-end q-ma-lg " style=" ">
                <q-btn flat label="Enviar"  class="q-mr-md" @click="mostrar_datos_consulta = !mostrar_datos_consulta">
                </q-btn>
            </div>

            


          </div>

            <!--div class="col-12 bg-info   col-md" style="width: 300px">
              asdasd
            </div-->     
          
        </div>
      </div>
    </div>

    <q-dialog v-model="mostrar_formulario_new_post" position="bottom">
      <div class="bg-white full-width">
        <div class="row">Añadir un nuevo post</div>
        <q-input label="Título"/>
        <q-input autogrow label="Descripción"/>
        <q-uploader
          label="Portada"
          url="http://localhost:4444/upload"
          style="max-width: 300px"
        />
        <q-editor></q-editor>
      </div>
    </q-dialog>
    
    
    <!--Footer-->
        <div class="row full-width bg-dark justify-around" style="height: 130px;  ">
          <div class="col">
            <div class=" q-ml-xl q-mt-sm">
              <q-avatar size="xl" style="margin-left: -4px">
                <img src="../assets/FVE-image-accent.svg" >
              </q-avatar>  
              <div class="text-accent text-weigth-regular">
                2021 - Matias Rios <br>Todos los derechos reservados
              </div>    
            </div>
          </div>        
        </div>
    



    
    
  </q-page>
</template>

<script>


import Proyecto from 'components/Proyecto.vue'
import ModuloFunciones from '../modules/ModuloFunciones.vue'
import ModuloNetwork from '../modules/ModuloNetwork.vue'
import Vue from 'vue'; // es6 syntax

export default {
  name: 'PageIndex',
  data ()
  {
    return{
      mostrar_formulario_new_post: false,
      showGeome7ricPortfolio: false,
      geome7rcProjects: {},
      personalProjects: {},
      metodos_listener_principal:
      {
        'mostrar_blog': (data) => this.manejador_mostrar_blog(data),
        'mostrar_portfolio' : (data) => this.manejador_mostrar_porftolio(data)
      },
      mostrar_blog: false,
      mostrar_portfolio: true,
      mostrar_historia_version_larga: false,
      mostrar_datos_consulta: false,
      funciones: null,
      presupuesto: 50,
      tipo_proyecto: '',
      texto_descripcion: '',
      more_skill1: false,
      more_skill2: false,
      more_skill3: false,
      info_skill1: 'Lo uso hace años y tengo mas de tres proyectos',
      network: null,
      projects: null
    }
  },  
  components:
  {
    Proyecto
  },
  created()
  {
    console.log('Holissssss')
    
    this.funciones= new Vue(ModuloFunciones);
    this.network = new Vue(ModuloNetwork)
    // this.network.getProjects()    
    //   .then(response=>response.json())
    //   .then(resp=> {
    //     console.log(resp)
    //     this.projects = resp["items"]
    //     // console.log('Los proyectos son estos: ')
    //     // console.log(this.projects)        
    // });
    this.setear_projects()
    this.personalProjects = this.projects
    this.$root.$on('listener_principal', (param) => this.listener(param));
    console.log("Nope, u won't find any errors here :)")
    //this.funciones.alerta_positiva_home("Bienvenido");
  },  
  beforeMount()
  {
    // this.funciones.mostrar_cargando_tiempo(2000);
  },
  mounted()
  { 
  },

  watch: {
    showGeome7ricPortfolio: function (val) {
      this.handleChangePortfolio()
    }
  },
  methods:
  {

    handleChangePortfolio () {
      alert('asd')
      if (this.showGeome7ricPortfolio) {
        this.projects = this.geome7rcProjects
      } else {
        this.projects = this.personalProjects
      }
    },
    setear_projects(){
      this.projects = []
      
      let project = {}


      
      // PROMOCION GEOME7RIC
            
      project = {}
      project.title =  "SISTEMA DE ARCHIVOS DISTRIBUIDO"
      project.description =  "Para la materia Sistemas Distribuidos, desarrollamos con compañeros un programa de archivos distribuido y llevamos a cabo un paper que fue aceptado en formato poster por la CONAIISI 2020. Trabajo supervisado por la Mg. Karina Cenci."
      project.content = ' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Integrantes:  Catalfamo, Salvador. Universidad Nacional del Sur. 8000. Meneses, Christian. Universidad Nacional del Sur. 8000. Mignucci, Bruno. Universidad Nacional del Sur. 8000. Puhl, Juan Manuel. Universidad Nacional del Sur. 8000. Rios, Matias. Universidad Nacional del Sur. 8000..'
      
      project.media = [
        {
          type: 'url',
          title: 'Documento PDF',
          src: 'https://docs.google.com/viewerng/viewer?url=https://matiasjrb.com.ar/documentos/sistemaArchivosDistribuidos/Paper-Distributed_file_system.pdf'
        },
        {
          type: 'url',
          title: 'Karina Cenci',
          src: 'https://lissi.cs.uns.edu.ar/integrantes/karina-cenci/'
        },
        {
          type: 'url',
          title: 'CONAIISI 2020',
          src: 'http://conaiisi2020.frsfco.utn.edu.ar/'
        },
      ]
      project.date =  "14 de diciembre, 2020"
      project.status =  "Terminado"
      project.tags =  ['CONAIISI 2020','Sistemas distribuidos','Distribuidora Amusquibar']      
      project.images = [
        'https://matiasjrb.com.ar/images/sistemaArchivosDistribuido/imagena.jpg'
      ]
      
      project.showMore = false
      this.projects.push(project)


      // PROMOCION GEOME7RIC
            
      project = {}
      project.title =  "APLICACIÓN ANDROID + MÓDULO DE ESCRITORIO"
      project.description =  "Desarrollé una aplicación para las plataformas Android y Windows a pedido de Distribuidora Amusquibar."
      project.content = ' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Se me solicitó un programa de control de pedidos para una distribuidora local. Constará de una aplicación Android para realizar y gestionar pedidos de preventistas o clientes. Se dispone de una aplicación de escritorio Windows, para facilitar la administración de productos y clientes.'
      
      project.media = [
        {
          type: 'url',
          title: 'PlayStore',
          src: 'https://play.google.com/store/apps/details?id=com.amusquibarapp.loginactivity&hl=es_AR'
        }
      ]
      project.date =  "23 de julio, 2020"
      project.status =  "Terminado"
      project.tags =  ['Android','Backoffice','Distribuidora Amusquibar']      
      project.images = [
        'https://matiasjrb.com.ar/images/distribuidoraAmusquibar/android1.jpg',
        'https://matiasjrb.com.ar/images/distribuidoraAmusquibar/android2.jpg',
        'https://matiasjrb.com.ar/images/distribuidoraAmusquibar/android3.jpg',
        'https://matiasjrb.com.ar/images/distribuidoraAmusquibar/android4.jpg',
        'https://matiasjrb.com.ar/images/distribuidoraAmusquibar/windows1.jpg',
        'https://matiasjrb.com.ar/images/distribuidoraAmusquibar/windows2.jpg'
      ]
      
      project.showMore = false
      this.projects.push(project)





      // PROMOCION GEOME7RIC
            
      project = {}
      project.title =  "APARTADO PARA PROMOCIÓN DE GEOME7RIC"
      project.description =  "Un sofware para tu comercio."
      project.content = ' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Geome7ric es un programa para poder llevar el control del stock de tu comercio, así como registro de venta, clientela y proveduría. Ya no más utilizar lapiz y papel para cerrar el día, o siquiera tener registro alguno de las ventas o el stock restante. Es cómodo, fácil de usar e intuitivo, lo que lo convierte en una concreta opción frente a programas como Tango, programas más complejos que requieren de cursos y horas invertidas para comprender como usarlo.   Le permitirá registrar los ingresos del día a día, agilizar las ventas sin tener que memorizar o buscar un precio en un papel y poder estar frente a una computadora y decidir en que consistirá su próxima compra al proveedor sin necesidad de ir a observar el depósito o recontar elementos de su comercio.'
      
      project.media = [
        {
          type: 'video',
          title: 'Demostración',
          src: 'https://www.youtube.com/watch?v=5eG9r3R7iPc'
        }
      ]
      project.date =  "14 de abril, 2020"
      project.status =  "Terminado"
      project.tags =  ['Geome7ric 1.1','Software',' Demostración','Discontinuado']      
      project.images = [
        'https://matiasjrb.com.ar/images/geome7ric/portada.jpg'
      ]
      
      project.showMore = false
      this.projects.push(project)

      // SIGNOS
            
      project = {}
      project.title =  "PROGRAMA DE INVENTARIO Y PÁGINA WEB CON TIENDA"
      project.description =  "Actualización de Geome7ric 1.0 para Signos Indumentaria."
      project.content = ' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Se me solicitó un programa de control de stock y ventas para un local de ropa del centro bahiense. El mismo ya lo había desarrollado, pero decidí darle una actualización para mejorar el rendimiento en cuanto a velocidad de respuestas y estética del programa..'
      
      project.media = [
        {
          type: 'url',
          title: 'Web',
          src: 'https://budapesttrio.com.ar/'
        },
        {
          type: 'url',
          title: 'Budapest Ig',
          src: 'https://www.instagram.com/budapest.trio/'
        }
      ]
      project.date =  "11 de marzo, 2020"
      project.status =  "Terminado"
      project.tags =  ['Signos indumentaria','Software',' Actualizacion','Geome7ric 1.1']      
      project.images = [
        'https://matiasjrb.com.ar/images/signos/logo.png',
        'https://matiasjrb.com.ar/images/signos/programa1.png',
        'https://matiasjrb.com.ar/images/signos/programa2.png',
        'https://matiasjrb.com.ar/images/signos/programa3.png',
        'https://matiasjrb.com.ar/images/signos/programa4.png',
        'https://matiasjrb.com.ar/images/signos/programa5.png'
      ]
      
      project.showMore = false
      this.projects.push(project)

      // BUDAPEST
            
      project = {}
      project.title =  "PÁGINA WEB PARA BUDAPEST"
      project.description =  "Página web para una banda amiga hecha a base de código HTML, CSS y JS."
      project.content = ' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Es posible descargar sus canciones y reproducirlas online. Además, se pueden encontrar las letras de las mismas.'
      
      project.media = [
        {
          type: 'url',
          title: 'Web',
          src: 'https://budapesttrio.com.ar/'
        },
        {
          type: 'url',
          title: 'Budapest Ig',
          src: 'https://www.instagram.com/budapest.trio/'
        }
      ]
      project.date =  "9 de marzo, 2020"
      project.status =  "Terminado"
      project.tags =  ['Budapest','Web']      
      project.images = [
        'https://matiasjrb.com.ar/images/budapest/logo.png',
        'https://matiasjrb.com.ar/images/budapest/portada.jpg'
      ]
      project.showMore = false
      this.projects.push(project)

      // NORTE BUS
            
      project = {}
      project.title =  "PÁGINA WEB PARA NORTEBUS BB"
      project.description =  "Página web para una empresa de transporte hecha a base de código HTML, CSS y JS. Pasá a escucharlos"
      project.content = ' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Una página de contacto responsiva hecha a la velocidad de la luz.  '
      project.media = [
        {
          type: 'url',
          title: 'NorteBus BB',
          src: 'https://nortebusbb.com/'
        }
      ]
      project.date =  "1 de marzo, 2020"
      project.status =  "Terminado"
      project.tags =  ['NorteBus','Web']      
      project.images = [
        'https://matiasjrb.com.ar/images/nortebus/logo.jpg',
        'https://matiasjrb.com.ar/images/nortebus/portada.jpg'
      ]
      project.showMore = false
      this.projects.push(project)

      // EATI 2020
            
      project = {}
      project.title =  "CURSO EATI 2020: DE 0 A NINJA CON COLLECTD, INFLUXDB Y GRAFANA"
      project.description =  "Curso de verano dictado por la Escuela de Actualización en Tecnologías de Informática (EATI) a cargo de Emiliano Marini."
      project.content = ' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Un curso en donde nos acercamos un poco al trabajo que lleva a cabo un SysAdmin en una empresa. Se utilizaron máquinas virtuales donde corrían servidores y monitores los cuales eran accedidos mediante SSH. Se instalaron y configuraron diferentes librerías para poder visualizar adecuadamente en Grafana recursos de la computadora (memoria RAM, uso de disco, etc.) y servicios como MySQL, apache y nginx..'
      project.media = [
        {
          type: 'url',
          title: 'Emiliano Marini',
          src: 'https://www.linkedin.com/in/emarini/'
        }
      ]
      project.date =  "21 de febrero, 2020"
      project.status =  "Terminado"
      project.tags =  ['Emiliano Marini', 'EATI 2020', 'Grafana','CollectD','InfluxDB']      
      project.images = [
        'https://matiasjrb.com.ar/images/eati2020/logo.png',
        'https://matiasjrb.com.ar/images/eati2020/portada.png'
      ]
      project.showMore = false
      this.projects.push(project)

      // PROYECTO LEAP MOTION
            
      project = {}
      project.title =  "PROYECTO LEAP MOTION"
      project.description =  "Un proyecto muy interesante para la materia Ingeniería de aplicaciones correspondiente al segundo cuatrimestre de 4to año de la carrera, a cargo de Luján Ganuza."
      project.content = ' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Se nos fue la mano con la cantidad de horas invertidas en este proyecto, que consistía en una experiencia de realidad virtual controlada mediante gestos de las manos. Un servidor, un Leap Motion, un smarthphone, mucho tiempo y muchas ganas para poder lograr lo demostrado en el trailer.'
      project.media = [
        {
          type: 'url',
          title: 'Luján Ganuza',
          src: 'http://vyglab.cs.uns.edu.ar/webpage/index.php/en/people/m-lujan-ganuza'
        },
        {
          type: 'video',
          title: 'Trailer',
          src: 'https://www.youtube.com/embed/Gon-pctdt1g'
        }
      ]
      project.date =  "27 de noviembre, 2019"
      project.status =  "Terminado"
      project.tags =  ['Leap Motion','C#','Unity3D','Realidad virtual','Mobile']      
      project.images = [
        'https://matiasjrb.com.ar/images/leapmotion.jpeg',
        'https://matiasjrb.com.ar/images/proyectoiap.jpg'
      ]
      project.videos = [
        'https://www.youtube.com/embed/Gon-pctdt1g'
      ]
      project.showMore = false
      this.projects.push(project)




      // PARRILLA AUTOMATICA

      project = {}
      project.title =  "PARRILLA AUTOMÁTICA"
      project.description =  "Un proyecto para la materia Sistemas embebidos correspondiente al segundo cuatrimestre de 4to año de la carrera, a cargo de José Moyano. Basado en la idea de mi amigo y compañero de proyectos Bruno Mignucci, una parrilla automática de madera que todos queremos que Brunito traslade a fierro y braza."
      project.content = ' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fue desarrollado en Java a lo largo de 40 días utilizando como base de datos archivos .xlsx de Excel. El programa funciona con lectora de código de barras y es altamente adaptable a todo tipo de comercios que deseen eliminar el papel de su día a día, para mayor comodidad y seguridad.'
      project.media = [
        {
          type: 'url',
          title: 'José Moyano',
          src: 'https://www.facebook.com/jhmoyano'
        },
        {
          type: 'url',
          title: 'Bruno Mignucci',
          src: 'https://www.facebook.com/brunomignucci'
        },
        {
          type: 'video',
          title: 'Demostración',
          src: 'https://www.youtube.com/watch?v=jU1Nd6McBcM&t=29s'
        },
      ]
      project.date =  "27 de noviembre, 2019"
      project.status =  "Terminado"
      project.tags =  ['Java']      
      project.images = [
        'https://matiasjrb.com.ar/images/parri.png',
        'https://matiasjrb.com.ar/images/petshop/portada.jpg'
      ]
      project.videos = [
        'https://matiasjrb.com.ar/documentos/redes/vid.mp4'
      ]
      project.showMore = false
      this.projects.push(project)

      // PRIMER SOFTWARE VENDIDO

      project = {}
      project.title =  "PRIMER SOFTWARE VENDIDO 'GEOME7RIC 1.0'"
      project.description =  "Software hecho a medida para PetShop Undiano: inventario para control de stock, control de ventas, proveeduría y clientela"
      project.content = ' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fue desarrollado en Java a lo largo de 40 días utilizando como base de datos archivos .xlsx de Excel. El programa funciona con lectora de código de barras y es altamente adaptable a todo tipo de comercios que deseen eliminar el papel de su día a día, para mayor comodidad y seguridad.'
      project.media = [
        {
          type: 'pdf',
          title: 'Manual de usuario',
          src: 'https://matiasjrb.com.ar/documentos/inventario/manual.pdf'
        }
      ]
      project.date =  "29 de junio, 2019"
      project.status =  "Terminado"
      project.tags =  ['Java']      
      project.images = [
        'https://matiasjrb.com.ar/images/petshop/logo.jpg',
        'https://matiasjrb.com.ar/images/petshop/portada.jpg'
      ]
      project.videos = [
        'https://matiasjrb.com.ar/documentos/redes/vid.mp4'
      ]
      project.showMore = false
      this.projects.push(project)

      // RASTREO DNS
      project = {}
      project.title =  "RASTREO DNS"
      project.description =  "Script en Python hecho para la materia Redes y Teleprocesamiento solicitado por Sergio Davicino"
      project.content = ' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Se utilizó la libreria Scapy y servidores de Google. Las características del script son las siguientes. Argumentos y opciones de entrada: El FQDN sobre la cual se va a realizar la traza. Las opciones ”-h” o ”- -help” que hacen que el script retorne una ayuda de la forma de invocación. Validación de la entrada: Se debe validar que el FQDN pasado como par´ametro tenga resolución de DNS antes de iniciar la traza.Salida:En el caso de que las opciones de entrada no se ajusten a lo esperado por el script, debe imprimir por pantalla la ayuda. Para cada uno de los subdominios, el script debe mostrar por pantalla el nombre y la dirección de cada servidor de nombres (ver ejemplo). Al finalizar la traza debe mostrar todos los RRs asociados al FQDN (ver ejemplo).Ejecución:El script debe obtener los nombres de los TLD haciendo una consulta a los servidores de DNS configurados en el equipo (archivo /etc/resolv.conf ), y como última instancia, debe usar los servidores de Google. El script no puede invocar ningún comando exterior, solo librerías de Python y Scapy. En cada uno de los pasos, la resolución de nombres para presentar por pantalla la información, se llevará a cabo usando los servidores que se citan en el primer punto.'
      project.media = [
        {
          type: 'url',
          title: 'Script',
          src: 'https://matiasjrb.com.ar/documentos/redes/RiosMatias105434'
        }
      ]
      project.date =  "14 de junio, 2019"
      project.status =  "Aprobado"
      project.tags =  ['Python', 'DNS', 'FQDN ',  'UNS']      
      project.images = [
        'https://matiasjrb.com.ar/images/redes/dns.jpg'
      ]
      project.videos = [
        'https://matiasjrb.com.ar/documentos/redes/vid.mp4'
      ]
      project.showMore = true
      this.projects.push(project)

      // CURSO DE REACT
      project = {}
      project.title =  "CURSO EATI2019 'INTRODUCCIÓN A REACT'"
      project.description =  "Curso de verano dictado por la Escuela de Actualización en Tecnologías de Informática (EATI) a cargo de Mariano Tucat"
      project.content = ' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Un curso en donde programamos en JavaScript haciendo uso de NodeJS y React Dev Tools. La evaluación consistió en elaborar una pequeña página web de comidas utilizando las facilidades que provee REACT.'
      project.media = [
        {
          type: 'pdf',
          title: 'Certificado de aprobación',
          src: 'https://matiasjrb.com.ar/documentos/eati2019/certificado.pdf'
        },
        {
          type: 'url',
          title: 'Mariano Tucat',
          src: 'https://www.linkedin.com/in/marianotucat/?originalSubdomain=ar'
        },
      ]
      project.date =  "7 de Abril, 2019"
      project.status =  "Aprobado"
      project.tags =  ['React', 'NodeJS', 'UNS', 'EATI2019']      
      project.images = [
        'https://matiasjrb.com.ar/images/eati2019/logo.jpg',
        'https://matiasjrb.com.ar/images/goingbackhome.png'
      ]
      project.videos = [
        'https://www.youtube.com/embed/AuBwgJXerKc'
      ]
      project.showMore = false
      this.projects.push(project)

      // ALIEN
      project = {}
      project.title =  "Going Back Home"
      project.description =  "Proyecto final de materia Computación gráfica"
      project.media = [
        {
          type: 'video',
          title: 'Trailer',
          src: 'https://www.youtube.com/watch?v=AuBwgJXerKc'
        }
      ]
      project.date =  "29 de junio, 2018"
      project.status =  "Terminado"
      project.tags =  ['C++', 'Unity 3D', 'UNS']
      project.images = [
        'https://matiasjrb.com.ar/images/goingbackhome.png',
        'https://matiasjrb.com.ar/images/goingbackhome.png'
      ]
      project.videos = [
        'https://www.youtube.com/embed/AuBwgJXerKc'
      ]
      project.showMore = false
      this.projects.push(project)
      
    },
    showAddNewPost(){
      console.log('Apretaste el 7')
      this.mostrar_formulario_new_post = true
    },
    manejador_mostrar_blog(data)
    {
      this.mostrar_portfolio=false;
      this.mostrar_blog=true;
    },
    manejador_mostrar_porftolio(data)
    {
      this.mostrar_blog=false;
      this.mostrar_portfolio=true;
    },    
    listener(param)
    {
      const funcion = this.metodos_listener_principal[param.function] 
        ? this.metodos_listener_principal[param.function](param)
        : this.funciones.alerta_negativa_default(param.function);
      
    }
  },
  computed: {
    layout () {
      return this.$q.screen.lt.sm ? 'dense' : (this.$q.screen.lt.md ? 'comfortable' : 'loose')
    },
    
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 100px
</style>
