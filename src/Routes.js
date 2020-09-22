import Vue from 'vue';
import Router from 'vue-router';

import Layout from '@/components/Layout/Layout';
import LayoutAdmin from '@/components/LcgLayout/Layout';
import Login from '@/pages/Login/Login';
import AdminLogin from '@/pages/LcgLogin/Login';
import ErrorPage from '@/pages/Error/Error';
// Core
import TypographyPage from '@/pages/Typography/Typography';

// Tables
import TablesBasicPage from '@/pages/Tables/Basic';

// Maps
import GoogleMapPage from '@/pages/Maps/Google';

// Main
import AnalyticsPage from '@/pages/Dashboard/Dashboard';
import AdminDashBoard from '@/pages/LcgDashboard/Dashboard';

// Charts
import ChartsPage from '@/pages/Charts/Charts';

// Ui
import IconsPage from '@/pages/Icons/Icons';
import NotificationsPage from '@/pages/Notifications/Notifications';


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/login',
            name: 'AdminLogin',
            component: AdminLogin,
        },
        {
            path: '/error',
            name: 'Error',
            component: ErrorPage,
        },
        {
            path: '/',
            name: 'Layout',
            component: LayoutAdmin,
            children: [
                {
                    path: 'dashboard',
                    name: 'DashBoardPage',
                    component: AdminDashBoard,
                }
            ],
        },
        {
            path: '/app',
            name: 'Example',
            component: Layout,
            children: [
                {
                    path: 'dashboard',
                    name: 'AnalyticsPage',
                    component: AnalyticsPage,
                },
                {
                    path: 'typography',
                    name: 'TypographyPage',
                    component: TypographyPage,
                },
                {
                    path: 'components/icons',
                    name: 'IconsPage',
                    component: IconsPage,
                },
                {
                    path: 'notifications',
                    name: 'NotificationsPage',
                    component: NotificationsPage,
                },
                {
                    path: 'components/charts',
                    name: 'ChartsPage',
                    component: ChartsPage,
                },
                {
                    path: 'tables',
                    name: 'TablesBasicPage',
                    component: TablesBasicPage,
                },
                {
                    path: 'components/maps',
                    name: 'GoogleMapPage',
                    component: GoogleMapPage,
                },
            ]
        }
    ],
});
