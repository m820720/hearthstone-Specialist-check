
var diff_deck_number = (deck1,deck2){
	
}

module.exports={
isSpecialist : function (primary,second,tertiary){
	if(primary.card_number!=30 || second.card_number!=30 || tertiary.card_number!=30){
			return false;
	}
	primary.card.sort();
	second.card.sort();
	tertiary.card.sort();
	if(diff_deck_number(primary,second)<=5 && diff_deck_number(second,tertiary)<=5)
		return true;
	else return false;	
}