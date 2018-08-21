import Controller from '@ember/controller';

export default Controller.extend({
	cat: 'Tom',

 	weekDays : [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
 	],

 	actions:
	 {
		doSomething()
		{
			let cat= this.get('cat');
			console.log(cat);
		},

 		validateUser()
		{
			let user = this.get('user');
			let password = this.get('pass');
			if(user=="Lex3960" && this.get('pass')==="loquesea"){
				console.log("You're in");
			}
			else {
				console.log("You shall not pass");
			}
 			this.set('user', null);
			this.set('pass', null);
 		},

 		myLuckyDay(){
			var weekDays= this.get('weekDays');
			var n = Math.floor(Math.random() * weekDays.length);
			console.log(weekDays.objectAt(n));
			this.set('luckyDay', weekDays.objectAt(n));
		}
 	}
});
