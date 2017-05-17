export default function AlertsController($scope) {
    $scope.list = [
        { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
        { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
    ];

    $scope.onClose = function () {
        console.log('add close() fn here');
    };
}