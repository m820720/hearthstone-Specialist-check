// type = primary , other
var hearthstoneAPI = require('./hearthstone-api');

class deck{
	constructor(type){
	this.card = [];
	this.card_number = 0;
	this.type = type;
	}
	add(cardname){
			if(this.card_number==30 || this.card_number>30){
				console.log("deck full")
				return ;
			}
			if(this.card.includes(cardname) && this.card.includes(cardname+"v2")) 
				return ;
			if(this.card.includes(cardname) && !this.card.includes(cardname+"v2"))
				cardname = cardname+"v2";
			
			this.card.push(cardname);
			this.card_number++;
	}
	del(cardname){
		var index= this.card.indexsOf(cardname);
		if(index!= -1){
		this.card.splice(index,1);
		this.card_number--;
		}
	}
	delDeck(){
		this.card=[];
		this.card_number=0;
	}
}
module.exports = function (type){
	return new deck(type);
}
