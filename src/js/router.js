angular.module('finalProject')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider'];
function Router($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('register', {
      url: '/',
      templateUrl: '/templates/register.html',
      controller: 'RegisterController as register'
    })
    .state('usersIndex', {
      url: '/users',
      templateUrl: '/templates/usersIndex.html',
      controller: 'UsersIndexController as usersIndex'
    })
    .state('register', {
      url: '/register',
      templateUrl: '/templates/register.html',
      controller: 'RegisterController as register'
    })
    .state('login', {
      url: '/login',
      templateUrl: '/templates/login.html',
      controller: 'LoginController as login'
    })
    .state('usersShow', {
      url: '/users/:id',
      templateUrl: '/templates/usersShow.html',
      controller: 'UsersShowController as usersShow'
    })
    .state('usersEdit', {
      url: '/users/:id/edit',
      templateUrl: '/templates/usersEdit.html',
      controller: 'UsersEditController as usersEdit'
    })
    .state('postsIndex', {
      url: '/posts',
      templateUrl: '/templates/postsIndex.html',
      controller: 'PostsIndexController as postsIndex'
    })
    .state('postsNew', {
      url: '/posts/new',
      templateUrl: '/templates/postsNew.html',
      controller: 'PostsNewController as postsNew'
    })
    .state('postsShow', {
      url: '/posts/:id',
      templateUrl: '/templates/postsShow.html',
      controller: 'PostsShowController as postsShow'
    })
    .state('postsEdit', {
      url: '/posts/:id/edit',
      templateUrl: '/templates/postsEdit.html',
      controller: 'PostsEditController as postsEdit'
    });

  $urlRouterProvider.otherwise('/users');
}
