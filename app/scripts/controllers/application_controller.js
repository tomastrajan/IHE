IHE.ApplicationController = Ember.Controller.extend({

	currentYear: new Date().getFullYear(),

	isLoggedIn: false,

	actions: {
		logout: function() {
			this.set('isLoggedIn', false);
			this.transitionToRoute('public');
		}
	}

});