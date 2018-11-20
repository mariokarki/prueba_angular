(function () {
	"use strict";
	var app = angular.module("newsApp")
	.factory("newsService",function ($http) {
		var service = {
			getAll:function () {
				return $http.get("https://newsapi.org/v2/top-headlines?apiKey=566be5b309754e5688c5e2eba4d9b4a5&country=ar");
				
			}
		}
		return service;
		
	})
}());