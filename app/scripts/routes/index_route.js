IHE.IndexRoute = Ember.Route.extend({
	beforeModel : function() {
		this.transitionTo('public');
	}
});