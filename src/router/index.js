import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Handle from '../components/Handle'
import FindProject from '../components/main/FindProject'
import CommunityActivity from '../components/main/CommunityActivity'
import PublishProject from '../components/main/PublishProject'
import PersonalCenter from '../components/main/PersonalCenter'
import BreadDetail from '../components/BreadDetail'
import DetailHome from '../components/detail/DetailHome'
import DetailList from '../components/detail/DetailList'
import DetailWork from '../components/detail/DetailWork'
import ManageCenter from '../components/detail/ManageCenter'
import OrderManage from '@/components/OrderManage'
import OrderHome from '@/components/order/OrderHome'
import OrderManager from '@/components/order/OrderManager'
import OrderDetail from '@/components/order/OrderDetail'
import OrderList from '@/components/order/OrderList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/breadDetail',
      name:'BreadDetail',
      component: BreadDetail,
      children:[
        {path:'', name:'DetailHome', component:DetailHome},
        {path:'detailWork', name:'DetailWork', component:DetailWork},
        {path:'detailList', name:'DetailList', component:DetailList},
      ],
    },
    {
      path:'/handle',
      name:'Handle',
      component: Handle,
      //当前路由的子路由(会显示在当前router-view里的任意定义新router-view的位置)
      children:[
        {path: 'findProject', name: 'FindProject', component: FindProject},
        {path: 'communityActivity', name: 'CommunityActivity', component: CommunityActivity},
        {path: 'publishProject', name: 'PublishProject', component: PublishProject},
        {path: 'personalCenter', name: 'PersonalCenter', component: PersonalCenter},
        {path: 'manageCenter', name:'ManageCenter', component: ManageCenter},
      ],
    },
    //----------------- orderManage  -----------------------------
    {
      path:'/orderManage', name:'OrderManage', component: OrderManage,
      children:[
        {path:'orderHome', name:'OrderHome', component: OrderHome},
        {path:'orderManager', name:'OrderManager', component: OrderManager},
        {path:'orderDetail', name:'OrderDetail', component: OrderDetail},
        {path:'orderList', name:'OrderList', component:OrderList},
      ]
    },

  ]
})
