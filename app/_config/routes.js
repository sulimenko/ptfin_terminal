export default [
  { path: '', component: () => import('layouts/App'), children: [
      {path: '', component: () => import('layouts/auth/Index'), children: [
              { path: '/auth', name: 'auth', icon: 'genderless', component: () => import('pages/auth/Index'), },
          ], },
    { path: '', component: () => import('layouts/main/Index'), children: [
      { path: '/', name: 'index', icon: 'genderless', component: () => import('pages/index/Index'), },
    ], },
  ], },
]
