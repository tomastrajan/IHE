IHE.PublicLoginController = Ember.Controller.extend({

	needs: ['application'],
	app: Ember.computed.alias("controllers.application"),

	email: '',
	password: '',

	actions: {
		login: function() {
			console.log('called');
			if (this.get('email') === 'test' && this.get('password') === 'test') {
				console.log('success');
				this.get('app').set('isLoggedIn', true);
				this.transitionToRoute('secure');
			}
		}
	}

});