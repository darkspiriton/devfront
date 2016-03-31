var app = angular.module('profile',[]);
app.controller('appController',function(){
  this.user = {
    name: 'Cesar',
    email: 'cesar200526@gmail.com',
    languages: ['AngularJS','Stylus','Jade']
  };
});
app.controller('TabsController',function (){
  this.tab = 1;
  this.selectTab = function (tab) {
    this.tab=tab;
  }
});
