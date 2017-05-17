import angular from 'angular';
import uiBootstrap from 'angular-ui-bootstrap';
import customAlerts from './customAlerts';

import 'bootstrap/dist/css/bootstrap.css';

const moduleName = 'alerts';

angular
    .module('alerts', [uiBootstrap])
    .directive('customAlerts', customAlerts);

export default moduleName;