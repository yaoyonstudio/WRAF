angular.module('wraf.services', [])

// about page/contact page/services page
.factory('PageRes', ['$resource', 'siteInfo', function($resource,siteInfo) {
    var Page = $resource(siteInfo.wpApiUrl + '/pages/:pageId', {
      pageId: '@pageId'
    }, {
      get: {
        method: 'GET'
      }
    });
    return Page;
}])

// post list factory
.factory('postListRes', ['$resource', 'siteInfo', function($resource,siteInfo){
	var postList = $resource(siteInfo.wpApiUrl + '/posts?:theQquery',{
	  theQuery:'@theQuery'
	},{
	    query:{
	      method:'GET',
	      cache:false,
	      isArray:true
	    }
	  }
	);
	return postList;
}])


//single post factory
.factory('postRes', ['$resource', 'siteInfo', function($resource,siteInfo) {
	var post = $resource(siteInfo.wpApiUrl + '/posts/:postId', {
	  postId: '@postId'
	}, {
	  query: {
	    method: 'GET'
	  }
	});
	return post;
}])
