// type = primary , other
class deck{
	constructor(type){
	this.card = [];
	this.card_number = 0;
	this.type = type;
	}
	add(cardname){
		if(card_number==30 || card_number>30){
			console.log("deck full")
			return 0 ;
		}
		this.card.push(cardname);
		this.card_number++;
	}
	del(cardname){
		var index= this.card.indexsOf(cardname);
		if(index!= -1){
		this.card.splice(index,1);
		this.card.name--;
		}
	}
}
module.exports = function (type){
	return new deck(type);
}
