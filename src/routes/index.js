import Home from '../views/Home.vue';
import Managers from '../views/Managers.vue';
import ManagerDetail from '../components/TheManagerDetail.vue';
import ManagerDetailHome from '@/components/TheManagerDetailHome';
import Orders from '../views/Orders.vue';
import Order from '../views/Order.vue';

export default [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/managers',
    component: Managers,
    children: [
      { path: '', component: ManagerDetailHome, name: 'managers' },
      { path: ':id', component: ManagerDetail, name: 'manager' }
    ]
  },
  {
    path: '/orders',
    name: 'orders',
    component: Orders
  },
  {
    path: '/order',
    name: 'order',
    component: Order
  },
  {
    path: '*',
    redirect: '/'
  }
];
