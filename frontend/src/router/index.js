import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/components/Dashboard';
import MainDashboard from '@/components/MainDashboard';
import AdvancedDashboard from '@/components/AdvancedDashboard';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/dashboard/main',
    },
    {
      path: '/dashboard',
      redirect: '/dashboard/main',
      component: Dashboard,
      children: [
        { path: 'main', component: MainDashboard, name: 'MainDashboard' },
        { path: 'advanced', component: AdvancedDashboard, name: 'AdvancedDashboard' },
      ],
    },
  ],
});
