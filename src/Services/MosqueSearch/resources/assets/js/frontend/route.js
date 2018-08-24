const FrontendApp = require('./FrontendApp');

export default new VueRouter({
   routes: [
       {
           path: '/',
           component: FrontendApp, 
           name: 'frontend.index' 
       }
   ],
});