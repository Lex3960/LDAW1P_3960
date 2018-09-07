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

	isSaving: false;

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

		},

		createMeal(){
			let content=this.get('mealContent');
			let comidita = this.store.createRecord('meal', {
				name: content
			});

			let result = confirm('¿Guardar comida?');
			let isSaving = this.get('isSaving');
			this.set(isSaving, true);

			if(result && isSaving){
				comidita.save().then(()=>{
					console.log('No hay error, no hay error XdxDxd');
				}).catch((e)=>{
					console.log('Uy no, ya valió verghulis debido a: ' + e.toString());
				}).finally(()=>{
					this.set('mealContent',null);
					this.set(isSaving, false);
				});
			}
		},

		editMeal(comidita){
			let result = confirm('¿Guardar cambios?');
			if(result){
				comidita.save();
			}
		},

		deleteMeal(comidita){
			let result = confirm('¿Guardar cambios?');
			if(result){
				comidita.destroyRecord();
			}
		}

 	}
});
