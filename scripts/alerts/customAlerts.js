export default function customAlerts() {
    return {
        restrict: 'E',
        templateUrl: './template.html',
        scope: {
            alerts: '=list'
        }
    };
}