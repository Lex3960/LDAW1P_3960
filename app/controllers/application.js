import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
 		validateUser() {
			let user = this.get('user');
			let password = this.get('pass');
			if(user=="Lex3960" && this.get('pass')==="loquesea"){
				console.log("You're in");
				this.transitionToRoute('lab');
			}
			else {
				console.log("You shall not pass");
			}
 			this.set('user', null);
			this.set('pass', null);
 		},
	}
});
