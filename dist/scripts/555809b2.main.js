!function(){window.IHE=Ember.Application.create({LOG_TRANSITIONS:!0})}(),function(){IHE.ApplicationController=Ember.Controller.extend({currentYear:(new Date).getFullYear(),isLoggedIn:!1,actions:{logout:function(){this.set("isLoggedIn",!1),this.transitionToRoute("public")}}})}(),function(){IHE.PublicLoginController=Ember.Controller.extend({needs:["application"],app:Ember.computed.alias("controllers.application"),email:"",password:"",actions:{login:function(){console.log("called"),"test"===this.get("email")&&"test"===this.get("password")&&(console.log("success"),this.get("app").set("isLoggedIn",!0),this.transitionToRoute("secure"))}}})}(),function(){IHE.ApplicationAdapter=DS.FixtureAdapter}(),function(){IHE.ApplicationRoute=Ember.Route.extend({})}(),function(){IHE.IndexRoute=Ember.Route.extend({beforeModel:function(){this.transitionTo("public")}})}(),function(){IHE.PublicRoute=Ember.Route.extend({beforeModel:function(){var a=this.controllerFor("application").get("isLoggedIn");a===!0&&this.transitionTo("secure")}})}(),function(){IHE.SecureRoute=Ember.Route.extend({beforeModel:function(){var a=this.controllerFor("application").get("isLoggedIn");a!==!0&&this.transitionTo("public")}})}(),function(){IHE.Router.map(function(){this.resource("public",{path:"/public"},function(){this.route("login"),this.route("signup")}),this.resource("secure",{path:"secure"},function(){}),this.route("notFound",{path:"*path"})})}();