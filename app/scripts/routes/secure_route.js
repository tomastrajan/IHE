IHE.SecureRoute = Ember.Route.extend({

	beforeModel : function() {
		var isLoggedIn = this.controllerFor('application').get('isLoggedIn');
		if (isLoggedIn !== true) {
			this.transitionTo('public');
		}
	}
});