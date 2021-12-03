import { createWebHistory, createRouter } from "vue-router";
import BeztestHome from '../components/page/beztest-home.vue';
import BeztestOrder from '../components/page/beztest-order.vue';
import BeztestFaq from '../components/page/beztest-faq.vue';
import BeztestCart from '../components/page/beztest-cart.vue';
import BeztestFrontpage from '../components/page/beztest-frontpage.vue';

const routes = [
  {
    path: "/",
    name: "Авторизация",
    component: BeztestFrontpage,
  },
  {
    path: "/main",
    name: "Main",
    component: BeztestHome
  },
  {
    path: "/order",
    name: "Заказы",
    component: BeztestOrder,
  },
  {
    path: "/faq",
    name: "Вопросы",
    component: BeztestFaq,
  },
  {
    path: "/cart",
    name: "Корзина",
    component: BeztestCart,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;