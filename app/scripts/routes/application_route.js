IHE.ApplicationRoute = Ember.Route.extend({

	actions : {
		willTransition : function(transition) {
		},
		didTransition : function(reason) {
			Ember.$('.bg-fix .container').css('opacity', 0).css('margin-left', '-=100px')
				.animate({opacity: 1, 'margin-left': '+=100px'}, 300);
		}
	}
});
