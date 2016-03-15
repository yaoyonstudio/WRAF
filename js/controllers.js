angular.module('wraf.controllers', [])

.controller('mainCtrl', function($scope,siteInfo) {
  (function (){
	    var slider = new fz.Scroll('.ui-slider', {
	        role: 'slider',
	        indicator: true,
	        autoplay: true,
	        interval: 3000
	    });
	})();
  $scope.siteTitle = siteInfo.siteTitle;
})

.controller('aboutCtrl', function($scope,PageRes) {
  $scope.title = "关于我们";
  PageRes.get({
      pageId: 101
    }, function(data) {
      $scope.about = data;
  });
})

.controller('servicesCtrl', function($scope,PageRes) {
  $scope.title = "服务范围";
  PageRes.get({
      pageId: 196
    }, function(data) {
      $scope.services = data;
  });
})

.controller('contactCtrl', function($scope,PageRes) {
  $scope.title = "联系我们";
  PageRes.get({
      pageId: 223
    }, function(data) {
      $scope.contact = data;
  });
})

.controller('newsCtrl', function($scope,postListRes,$rootScope) {
  $scope.title = "最新资讯";
  $scope.newsList = [];
  //初始化页面
  $page = 1;
  var theQquery = 'filter[cat]=2&filter[posts_per_page]=6' +'&page=' + $page ;
  postListRes.query({
    theQquery: theQquery
  }, function(data) {
    $scope.newsList = data;
  });

  $page = 2;
  $rootScope.hasData = true;
  $scope.loadMore = function(){
    var theQquery = 'filter[cat]=2&filter[posts_per_page]=6' +'&page=' + $page ;
    postListRes.query({
      theQquery: theQquery
    }, function(moreData) {
      for (var i = 0; i < moreData.length; i++) {
        $scope.newsList.push(moreData[i]);
      }
      $page ++;
      moreData.length === 0 ? $rootScope.hasData = false : $rootScope.hasData = true;
      $rootScope.$broadcast($rootScope.hasData);
    });
  }
})

.controller('contentCtrl', function($scope,$routeParams,postRes) {
		$scope.title = "新闻资讯";
    var postId = parseInt($routeParams.id);
    postRes.get({
      postId: postId
    }, function(data) {
      $scope.post = data;
    });
});
