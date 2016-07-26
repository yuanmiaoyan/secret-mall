// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])
	.directive('hideTabs', function($rootScope) {
		return {
			restrict: 'A',
			link: function(scope, element, attributes) {
				scope.$on('$ionicView.beforeEnter', function() {
					scope.$watch(attributes.hideTabs, function(value) {
						$rootScope.hideTabs = value;
					});
				});

				scope.$on('$ionicView.beforeLeave', function() {
					$rootScope.hideTabs = false;
				});
			}
		};
	})
	.run(function($ionicPlatform) {
		$ionicPlatform.ready(function() {
			// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
			// for form inputs)
			if(window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
				cordova.plugins.Keyboard.disableScroll(true);

			}
			if(window.StatusBar) {
				// org.apache.cordova.statusbar required
				StatusBar.styleDefault();
			}
		});
	})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
	//android footer bottom

	$ionicConfigProvider.platform.android.tabs.position('bottom');

	// Ionic uses AngularUI Router which uses the concept of states
	// Learn more here: https://github.com/angular-ui/ui-router
	// Set up the various states which the app can be in.
	// Each state's controller can be found in controllers.js
	$stateProvider

	// setup an abstract state for the tabs directive
		.state('tab', {
		url: '/tab',
		abstract: true,
		templateUrl: 'templates/tabs.html'
	})

	// Each tab has its own nav history stack:

	.state('tab.dash', {
			url: '/dash',
			views: {
				'tab-dash': {
					templateUrl: 'templates/tab-dash.html',
					controller: 'DashCtrl'
				}
			}
		})
		.state('tab.love-detail', {
			url: '/dash/:dashId',
			views: {
				'tab-dash': {
					templateUrl: 'templates/love-detail.html',
					controller: 'loveCtrl'
				}
			}
		})

	.state('tab.chats', {
			url: '/chats',
			views: {
				'tab-chats': {
					templateUrl: 'templates/tab-chats.html',
					controller: 'ChatsCtrl'
				}
			}
		})
		.state('tab.address', {
			url: '/address',
			views: {
				'tab-chats': {
					templateUrl: 'templates/address.html',
					controller: 'ChatDetailCtrl'
				}
			}
		})
		.state('tab.shipping', {
			url: '/shipping',
			views: {
				'tab-chats': {
					templateUrl: 'templates/shipping.html',
				
				}
			}
		})
		.state('tab.order', {
			url: '/order',
			views: {
				'tab-chats': {
					templateUrl: 'templates/order.html',
					controller:"orderCtrl"
				}
			}
		})
		.state('tab.account', {
			url: '/account',
			views: {
				'tab-account': {
					templateUrl: 'templates/tab-account.html',
					controller: 'AccountCtrl'
				}
			}
		});

	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/tab/dash');

});