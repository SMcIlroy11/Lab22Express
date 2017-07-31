var app=angular.module('lab22', []);


app.controller('labCtrl', function($http, $scope, $interval){

console.log("My controller is loaded");
var c=0;
var lyric=null;

var timer= $interval(function (){
$http ({
  method: 'GET',
  url: '/deathCab/lyrics'
}).then(function(response) {
console.log(response);
$scope.lyric=response.data;

});
  c++;
},2000);


});
