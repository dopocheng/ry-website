import { createRouter, createWebHistory } from 'vue-router'
import AboutUs from '../views/AboutUs.vue';
import Home from '../views/Home.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'hom',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: AboutUs
    }
  ],
  scrollBehavior(to) {
    if (to.hash) {
      const header = document.querySelector('.header');
      const headerOffset = header ? header.offsetHeight : 0;
      const element = document.querySelector(to.hash);
      console.log('hash---', element)
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;

        return window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    return { x: 0, y: 0 };
  }
});
//   scrollBehavior(to, from, savedPosition) {
//     if (to.hash) {
//       return window.scrollTo({
//         top: 12,
//         selection: to.hash,
//         behavior: 'smooth',
//         offset: { x: 0, y: document.querySelector('.header').offsetHeight }
//       })
//     }
//     return { x: 0, y: 0 }
//   }
// })

export default router
