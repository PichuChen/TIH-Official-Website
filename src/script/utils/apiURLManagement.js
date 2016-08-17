
/* API 集中在這邊管理 */

/* 
  使用API 請記得使用這支做
 */

const API_LIST = {
  'translation':          '/getJsonLanguagePackageByPackName',
}

export default ( $apiName='' ) => {
  const prefix = '/api';
  let $apiURL = prefix + API_LIST[$apiName] ; 
  if( process.env.NODE_ENV === undefined ){ return $apiURL; }
  if( process.env.NODE_ENV.proxy.devProxy ){
    return process.env.NODE_ENV.proxy.host + $apiURL;
  }
}