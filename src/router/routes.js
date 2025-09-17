

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
       { path: '/loginpage2', component: () => import('pages/LoginPage2.vue') },   // About page
      { path: '/loginpage3', component: () => import('pages/LoginPage3.vue') }, // Contact page
       { path: '/loderpage', component: () => import('pages/LoderPage.vue') }, // Contact page
        { path: '/lockpage', component: () => import('pages/LockPage.vue') },
      { path: '/activitioncode', component: () => import('pages/ActivationCode.vue') },
       { path: '/newpassword', component: () => import('pages/Newpassword.vue') },
         { path: '/forgotpassword', component: () => import('pages/ForgotPassword.vue') }// Contact page



    ],






  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
