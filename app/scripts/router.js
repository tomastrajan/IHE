IHE.Router.map(function () {
	this.resource('public', { path: '/public' }, function() {
	    this.route('login');
	    this.route('signup');
	});

	this.resource('secure', { path: 'secure'}, function() {

	});

	this.route('notFound', { path: '*path' });
});
