
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'portfolio/:id', name: 'portfolio', component: () => import('pages/Project.vue') },
      { path: 'cv', component: () => import('pages/cv.vue') },
    ]
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
