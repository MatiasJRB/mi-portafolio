<template>
    <div></div>
</template>

<script>


export default {  
  data () {
    return {  
    }
  },
  created()
  {   
  },
  methods:
  {
    configurar_colores()
    {
    },
    obtener_colores()
    {
      return this.colores;
    },
    alerta_positiva_default(msg)
    {
      this.$q.notify({
                        color: 'primary',
                        textColor: 'white',
                        icon: 'done',
                        message: msg
                      })
    },
    alerta_positiva_nube(msg)
    {
      this.$q.notify({
                        color: 'green-4',
                        textColor: 'white',
                        icon: 'cloud_done',
                        message: msg
                      })
    },
    alerta_positiva_home(msg)
    {
      this.$q.notify({
                        color: 'accent',
                        textColor: 'dark',
                        icon: 'home',
                        message: msg
                      })
    },
    alerta_negativa_default(msg)
    {
        this.$q.notify({
                        color: 'secondary',
                        textColor: 'white',
                        icon: 'warning',
                        message: msg
                      })
    },
    alerta_negativa_error(msg)
    {
        this.$q.notify({
                        color: 'secondary',
                        textColor: 'white',
                        icon: 'error',
                        message: msg
                      })
    },
    mostrar_cargando_tiempo (tiempo_en_ms) {
      this.$q.loading.show()

        // hiding in 2s
        this.timer = setTimeout(() => {
          this.$q.loading.hide()
          this.timer = void 0
        }, tiempo_en_ms)
      },
    

    beforeDestroy () {
      if (this.timer !== void 0) {
        clearTimeout(this.timer)
        this.$q.loading.hide()
      }
    },
    hoy(dias)
    {
      if (dias==null)
      {
        var hoy = new Date();
        var dd = String(hoy.getDate()).padStart(2, '0');
        var MM = String(hoy.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = hoy.getFullYear();      
        hoy = yyyy + '-' + MM + '-' + dd;
        return hoy;
      }
      else
      {
        //me pide sumar diasfecha.setDate(fecha.getDate() + dias);
        var aux = new Date();
        var hoy= new Date();
        hoy.setDate(aux.getDate()+dias);
        
        var dd = String(hoy.getDate()).padStart(2, '0');
        var MM = String(hoy.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = hoy.getFullYear();      
        hoy = yyyy + '-' + MM + '-' + dd;
        return hoy;
      }      
    },    
    mostrar_cargando(msg) {
      this.$q.loading.show({
        message: msg,
        spinnerColor: 'accent'
      })      
    },
    ocultar_cargando()
    {
      this.$q.loading.hide();
    },
  }
}

function alert(msg)
{
  alert(msg);
}

</script>