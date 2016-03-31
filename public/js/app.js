var app = angular.module('profile',[]);
app.controller('appController',function(){
  this.user = {
    name: 'Cesar',
    email: 'cesar200526@gmail.com',
    languages: ['AngularJS','Stylus','Jade']
  };
});
