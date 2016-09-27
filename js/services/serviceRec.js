/**
 * Created by Reziko on 9/27/2016.
 */

angular.module('person_form').service('servcieRec',["$http", function ($http) {
    var obj = this;

    $http.get("/service/person_table").then(function (response) {

        console.log("Logging persons")
        obj.personInfo = response.data;
        console.log(obj.personInfo);
    });
}]);