IHE.SecureRoute = Ember.Route.extend({

	beforeModel : function() {
		var isLoggedIn = this.controllerFor('application').get('isLoggedIn');
		if (isLoggedIn !== true) {
			this.transitionTo('public');
		}
	},

	model : function() {
		var _this = this;
		return new Ember.RSVP.Promise(function(resolve) {
			setTimeout(function() {
				resolve('true');
			}, 500);
		});
	}
});