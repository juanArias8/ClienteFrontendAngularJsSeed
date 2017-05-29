'use strict';

var customerServices = angular.module('myApp.services', ['ngResource']);
customerServices.factory('Customers', function ($resource) {
    return $resource('http://localhost:8080/ClienteBackend/webresources/com.edu.udea.clientebackend.entity.cliente',
            {}, {query: {method: 'GET', isArray: true}
    });
});

