import angular from 'angular';
import alerts from './alerts';
import AlertsController from './AlertsController';

angular
    .module('app', [alerts])
    .controller('AlertsController', AlertsController);