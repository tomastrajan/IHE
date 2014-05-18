IHE.LoadingRoute = Ember.Route.extend({

	renderTemplate : function() {
		this.render('loading', {
			into : 'application'
		});
	}

});