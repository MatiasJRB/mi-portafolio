const RESUME_URL = "/[ENG]-Matias-Rios-CV-Dec-24.pdf";

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", name: "home", component: () => import("pages/Index.vue") },
      {
        path: "resume",
        name: "resume",
        beforeEnter() {
          location.href = RESUME_URL;
        },
      },
    ],
  },
  {
    path: "*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
