import VueRouter from 'vue-router'
import Home from '../pages/Home/MyHome.vue'
import News from '../pages/News/MyNews.vue'
import About from '../pages/About/MyAbout.vue'
import Brewing from '../pages/Brewing/MyBrewing.vue'
import Menu from '../pages/Menu/MyMenu.vue'
import TakeOut from '../pages/TakeOut/MyTakeOut.vue'
import Location from '../pages/Location/MyLocation.vue'
import ShoppingCart from '../pages/ShoppingCart/MyShoppingCart.vue'
import Reserve from '../pages/Reserve/MyReserve.vue'
import Activity from '../pages/News/NewsActivity.vue'
import NewProduct from '../pages/News/NewsNewProduct.vue'
import Alcohol from '../pages/Menu/MenuAlcohol.vue'
import Meal from '../pages/Menu/MenuMeal.vue'
import ShoppingList from '../pages/ShoppingCart/ShoppingList.vue'
import CustomerInfo from '../pages/ShoppingCart/CustomerInfo.vue'
import OrderComplete from '../pages/ShoppingCart/OrderComplete.vue'
import Wolf from '../pages/Location/LocationWolf.vue'
import LittleWolf from '../pages/Location/LocationLittleWolf.vue'
import WolfImg from '../pages/Location/LocationWolfImg.vue'
import LittleWolfImg from '../pages/Location/LocationLittleWolfImg.vue'
import ReserveInfo from '../pages/Reserve/ReserveInfo.vue'
import ReserveComplete from '../pages/Reserve/ReserveComplete.vue'







//避免重複點擊路由時報錯
let originPush = VueRouter.prototype.push;
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, () => { }, () => { });
    }
}

const router = new VueRouter({
    routes: [{
        path: "/",
        redirect: "/home"
    },
    {
        path: "/home",
        component: Home,
        meta: {
            toTop: true
        }
    },
    {
        path: "/news",
        component: News,
        meta: {
            toTop: true
        },
        children: [
            {
                path: 'activity',
                component: Activity,
                meta:{
                    toTop:true
                }
            }, {
                path: 'new-product',
                component: NewProduct,
                meta:{
                    toTop:true
                }
            },
        ]
    },
    {
        path: "/about",
        component: About,
        meta:{
            toTop:true
        }
    },
    {
        path: "/brewing",
        component: Brewing,
        meta:{
            toTop:true
        }
    },
    {
        path: "/menu",
        component: Menu,
        children: [
            {
                path: 'alcohol',
                component: Alcohol,
                meta:{
                    toTop:true
                }
            },
            {
                path: 'meal',
                component: Meal,
                meta:{
                    toTop:true
                }
            },
        ]
    },
    {
        path: "/take-out",
        component: TakeOut,
        meta:{
            toTop:true
        }
    },
    {
        path: "/location",
        component: Location,
        children: [
            {
                path: 'wolf',
                components: {
                    default: Wolf,
                    'img': WolfImg
                }
            },
            {
                path: 'little-wolf',
                components: {
                    default: LittleWolf,
                    'img': LittleWolfImg
                }
            }
        ]
    },
    {
        path: "/shopping-cart",
        component: ShoppingCart,
        children: [
            {
                path: 'shopping-list',
                component: ShoppingList,
                meta: {
                    toTop: true
                }
            },
            {
                path: 'customer-info',
                component: CustomerInfo,
                meta: {
                    toTop: true
                }
            },
            {
                path: 'order-complete',
                component: OrderComplete,
                meta: {
                    toTop: true
                }
            }
        ]

    },
    {
        path: "/reserve",
        component: Reserve,
        children:[
            {
                path:'reserve-info',
                component:ReserveInfo,
                meta: {
                    toTop: true
                }
            },
            {
                path:'reserve-complete',
                component:ReserveComplete,
               
            }
        ]
    },
    ]

})


export default router