import Controller from '@ember/controller';

export default Controller.extend({
	cat: 'Tom',

 	weekDays : [
		{day: 'Sunday', number: 1, 'property': 'hello'},
		{day: 'Monday', number: 2, 'property': 'hello'},
		{day: 'Tuesday', number: 3, 'property': 'hello'},
		{day: 'Wednesday', number: 4, 'property': 'hello'},
		{day: 'Thursday', number: 5, 'property': 'hello'},
		{day: 'Friday', number: 6, 'property': 'hello'},
		{day: 'Saturday', number: 7, 'property': 'hello'},
 	],

 	tweetList: [],

 	actions:
	 {
	 	doSomething() {
			let cat= this.get('cat');
			console.log(cat);
		},
 		myLuckyDay(){
			let weekDays= this.get('weekDays');
			let n = Math.floor(Math.random() * weekDays.length);
			console.log(weekDays.objectAt(n));
			this.set('luckyDay', weekDays.objectAt(n));
		},
		addDay(){
			let day=this.get('newDay');
			let days=this.get('weekDays');
 			days.pushObject({
				day:day,
				number: days.length + 1,
				'property': 'hello'
			});
			this.set('tweetContent',null);
		},
		postTweet(){
			let content=this.get('tweetContent');
			let tweets=this.get('tweetList');
 			tweets.pushObject({
				user:'Lex3960',
				content :content
			});
			this.set('tweetContent',null);
		},
		deleteTweet(tweet){
			let tweets=this.get('tweetList');
			let result = confirm("Borrar tweet? : " + tweet.content);
			if(result) {
				tweets.removeObject(tweet);
			}
			else {

			}

		}
 	}
});
