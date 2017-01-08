var contactList=angular.module("myApp", []);

contactList.controller('myController',function($scope,$http){


var refresh=function(){

  $http.get('/contactList').success(function(response){
  var contactList;
  $scope.contactList=response;
  $scope.contact="";

  });
};
refresh();

$scope.addContact= function (){
  if($scope.contact.name!=""){
  console.log("Existe: "+$scope.contact.name);
  $http.post('/contactList',$scope.contact).success(function(response,error){

  refresh();

    });

}else{
  alert("shit");
};

};
  //Muestra lo que se guardo en la db
  //  console.log("from the db: "+JSON.stringify(response));

  //console.log($scope.contact.name);




/*var person1={
  name:"Diego",
  email:"deherrera@gmail.com",
  number:426288
};

var person2={
  name:"Eleo",
  email:"eleogaldos@gmail.com",
  number:4787562
};

var person3={
  name:"Luisa",
  email:"luisa@gmail.com",
  number:4782323
};

var contactList=[person1,person2,person3];
$scope.contactList=contactList;*/



  console.log("controller Ok!");

});
