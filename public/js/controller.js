angular.module('profileController',[])
  .controller('appController',function(){
    this.user = {
      name: 'Cesar',
      email: 'cesar200526@gmail.com',
      languages: ['AngularJS','Stylus','Jade']
    };
  })
  .controller('TabsController',function (){
    this.tab = 1;
    this.selectTab = function (tab) {
      this.tab=tab;
    }
  })
  .controller('CommentsController',function(){
    this.comments=[];
    this.comment={

    }
    this.show = false;
    this.toggle = function(){
      this.show=!this.show;
    }

    this.anonimoChanged = function(){
      if(this.comment.anonimo){
        this.comment.email="";
      }
    }

    this.addComment = function() {
      this.comment.date = Date.now();
      this.comments.push(this.comment);
      this.comment = {};
    }

  });
