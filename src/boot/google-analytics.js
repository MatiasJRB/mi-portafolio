
import ga from 'analytics.js'
export default async ({  router } ) => {
  router.afterEach((to, from) => {
    try {      
      ga.logPage(to.path, to.name, 3869731933)
    } catch (err) {}
  })
}
