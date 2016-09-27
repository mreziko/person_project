/**
 * Created by Reziko on 9/27/2016.
 */
angular.module("person_form").controller("formCtrl",["$scope", "serviceRec",
    function($scope, serviceRec) {

   // $scope.personInfo = "";
    $scope.$watch(function () {

        return serviceRec.personInfo;
    }, 
    function (newVal, oldVal) {
        if (oldVal != newVal) {
            console.log("FROM WATCH LIST, inventory_type");
            console.log("NEW VAL, inventory_type")
            console.log(newVal);
            console.log("OLD VAL, inventory_type");
            console.log(oldVal);
            
            $scope.personInfo = newVal;
        }

    });


    $scope.$watch(function () {
        return serviceRec.personInfoIds;

    },
    function (newVal, oldVal) {
        if(oldVal != newVal){
            console.log("From Watch ,Person Table");
            console.log(newVal);
            console.log("OLD VAL Person Table");
            console.log(oldVal);

            $scope.personInfoIds;
        }
    });


}]);