import template from './template.html';

export default function customAlerts() {
    return {
        restrict: 'E',
        template: template,
        scope: {
            alerts: '=alerts',
            closeAlert: '=onAlertClose'
        }
    };
}