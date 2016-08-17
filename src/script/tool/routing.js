
/*這邊集中管理 router 導向到的 Components*/

import Index from '../component/index';

const RoutesGroup = {

  index: {
    path: '/',
    components: Index 
  },
  // childRouteExample: {
  //   path: '/childRouteExample',
  //   components: '{childRouteExample Temple}',
  //   indexRoute: { component: 'childRouteExample index component' },
  //   childRoutes: [
  //     {
  //       path: 'foo', // route display => http://localhost/childRouteExample/foo
  //       components: '{foo component}',
  //       onEnter: (location, replaceWith) => {  },
  //       onLeave: () => {  }
  //     }
  //   ]
  // }
}



export default ( store ) => {
  
  // console.log(store)
  return {
    childRoutes: [
      RoutesGroup.index,
      // RoutesGroup.childRouteExample
    ]
  };
}









