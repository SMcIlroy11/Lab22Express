var app=angular.module('lab22', []);


app.controller('labCtrl', function($http, $scope, $interval){


var c=0;
var lyric=null;


var timer= $interval(function (){
$http ({
  method: 'GET',
  url: '/deathCab/lyrics'
}).then(function(response) {

$scope.lyric=response.data;

});
  c++;
},5000);


});
