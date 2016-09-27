/**
 * Created by Reziko on 9/27/2016.
 */

angular.module('person_form').service('serviceRec',["$http", function ($http) {
    var obj = this;

    $http.get("/service/person_table").then(function (response) {

        console.log("Logging Persons Table");
        obj.personInfo = response.data;
        console.log(obj.personInfo);
    });

    this.personInfoIds = null;

    $http.get('/service/person_table/2').then(function (response) {
        console.log("Logging Persons Table");
        obj.personInfoIds = response.data;
        console.log(obj.personInfoIds)
    })
}]);