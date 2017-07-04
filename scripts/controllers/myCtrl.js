app.controller('myCtrl', function($scope, user){
	$scope.UserName = user.getUserFirstName();
	$scope.reactions = user.getReactions();
	$scope.insertReaction = function (feeling, color) {
	  $scope.reactions.push({feeling: feeling, color: color});
	}
});