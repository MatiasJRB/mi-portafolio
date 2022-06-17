
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      // { path: 'portfolio', component: () => import('pages/Portfolio.vue') },
      { path: 'portfolio/:id', name: 'portfolio', component: () => import('pages/Project.vue') },
      // { path: 'about', component: () => import('pages/About.vue') },
      // { path: 'contact', component: () => import('pages/Contact.vue') },
      // { path: 'skills', component: () => import('pages/Skills.vue') },
      // { path: 'blog', component: () => import('pages/Blog.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
