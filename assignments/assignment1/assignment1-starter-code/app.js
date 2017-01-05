(function(){
angular.module("assignment1App",[])

.controller("assignment1Controller",function($scope){
  $scope.lunchItems="";
  $scope.message="";
  $scope.count=function(){

    console.log("here "+$scope.lunchItems);
    var items=$scope.lunchItems;
    if(items == "") {
      $scope.message="Please enter data first";
    } else {
      var items=$scope.lunchItems.split(",");
      console.log(items);

      if(items.length <=3) {
        $scope.message="Enjoy!"
      } else {
        $scope.message="Too much!"
      }
    }

  }

});




})();
