/*
export function someAction (context) {
}
*/


export function getProjects ({commit}, data) {
    let projects = []

    let project = {}
      project.title =  "SISTEMA DE TURNOS"
      project.description =  "Para Iten Centro Integral, desarrollamos una aplicacicón con perfiles de administración, profesionales y alumnos, que administra turnos, cupos y más. Además, se confeccionó su landing webpage."
      project.content = ' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Integrantes:  Catalfamo, Salvador. Universidad Nacional del Sur. 8000. Meneses, Christian. Universidad Nacional del Sur. 8000. Mignucci, Bruno. Universidad Nacional del Sur. 8000. Puhl, Juan Manuel. Universidad Nacional del Sur. 8000. Rios, Matias. Universidad Nacional del Sur. 8000.'
      
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
        'https://res.cloudinary.com/geome7ric-weasel-iten/image/upload/v1623368617/assets/fondo_tisy68.jpg'
      ]
      
      project.showMore = false
      project.geome7ric = true

      
     projects.push(project)
      
            
      project = {}
      project.title =  "SISTEMA DE ARCHIVOS DISTRIBUIDO"
      project.description =  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Para la materia Sistemas Distribuidos, desarrollamos con compañeros un programa de archivos distribuido y llevamos a cabo un paper que fue aceptado en formato poster por la CONAIISI 2020. Trabajo supervisado por la Mg. Karina Cenci."
      project.content = ' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Integrantes:  Catalfamo, Salvador. Universidad Nacional del Sur. 8000. Meneses, Christian. Universidad Nacional del Sur. 8000. Mignucci, Bruno. Universidad Nacional del Sur. 8000. Puhl, Juan Manuel. Universidad Nacional del Sur. 8000. Rios, Matias. Universidad Nacional del Sur. 8000.'
      
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
      projects.push(project)


            
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
        'https://res.cloudinary.com/geome7rc/image/upload/v1647801123/portfolio/amusquibar/amusquibar_logo_wtx7ry.png',
        'https://matiasjrb.com.ar/images/distribuidoraAmusquibar/android1.jpg',
        'https://matiasjrb.com.ar/images/distribuidoraAmusquibar/android2.jpg',
        'https://matiasjrb.com.ar/images/distribuidoraAmusquibar/android3.jpg',
        'https://matiasjrb.com.ar/images/distribuidoraAmusquibar/android4.jpg',
        'https://res.cloudinary.com/geome7rc/image/upload/v1647737186/portfolio/amusquibar/backoffice1_yemwny.jpg',
        'https://res.cloudinary.com/geome7rc/image/upload/v1647737185/portfolio/amusquibar/backoffice2_zyofkp.jpg',
        '../assets/amusquibar/backoffice3.jpg'
      ]
      
      project.showMore = false
      projects.push(project)





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
      projects.push(project)

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
      projects.push(project)

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
      projects.push(project)

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
        'https://res.cloudinary.com/geome7rc/image/upload/v1647801672/portfolio/nortebus/nortelogo_pbkbef.jpg',
        'https://matiasjrb.com.ar/images/nortebus/portada.jpg'
      ]
      project.showMore = false
      projects.push(project)

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
        'https://res.cloudinary.com/geome7rc/image/upload/v1647801519/portfolio/eati/eati2020logo_z3i8cy.jpg',
        'https://matiasjrb.com.ar/images/eati2020/portada.png'
      ]
      project.showMore = false
      projects.push(project)

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
      projects.push(project)




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
      projects.push(project)

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
      projects.push(project)

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
      projects.push(project)

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
        'https://res.cloudinary.com/geome7rc/image/upload/v1647801582/portfolio/eati/logo_eati2019_cunio4.jpg'
      ]
      project.videos = [
        'https://www.youtube.com/embed/AuBwgJXerKc'
      ]
      project.showMore = false
      projects.push(project)

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
      projects.push(project)
      return projects
}