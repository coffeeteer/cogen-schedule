app.controller('MainController', ['$scope', '$http', 'uiCalendarConfig', function($scope, http, uiCalendarConfig){
	$scope.eventSources = [];
	$scope.SelectedEvent = null;
	var isFirstTime = true;

	$scope.events = [];
	$scope.eventSources = [$scope.events];

	//Load events from server
	$http.get('/home/getevents', {
		cache: true,
		params: {}
	}).then(function (data) {
		$scope.events.slice(0, $scope.events.length);
		angular.forEach(data.data, function(value) {
			$scope.events.push({
				title. value.title,
				description: value.Description,
				start: new Date(parseInt(value.StartAt.substr(6))),
				end: new Date(parseInt(value.EndAt.substr(6))),
				allDay: value.IsFullDay
			});
		});
	});

	//configure clendar
	$scope.uiConfig = {
		calendar: {
			height: 450,
			editable: true,
			displayEventTime: false,
			header: {
				left: 'month basicWeek basicDay agendaWeek agendaDay',
				center: 'title',
				ritght: 'today prev.next'
			},
			eventClick: function(event) {
				$scope.SelectedEvent = event;
			},
			eventAfterAllRender: function() {
				if($scope.event.length > 0 && isFirstTime){
					uiCalendarConfig.calendarsmyCalendar.fullCalendar('gotoDate', $scope.events[0].start);
				}
			}
		}
	};
}]);