var express = require('express');
var router = express.Router();
var deck = require('../lib/decks');
var unirest = require('unirest');
var hearthstone = require('../lib/hearthstone-api')
var primary = deck("Primary");
var secondary = deck("Secondary");
var tertiary = deck("Tertiary");

const MAXDIFF = 5;
const MAXCARD = 30;

//confirm Specialist
router.get('/comfirm', function(req, res, next) {
	 Array.prototype.diffArr = function(a) {
    return this.filter(function(i) {return a.indexOf(i) < 0;});
};
  var diff = (deck1,deck2)=>{
	temp = deck1.diffArr(deck2);
	console.log(temp)
	console.log(temp.length)
	return temp.length;
  }
   if(primary.card_number!=MAXCARD || secondary.card_number!=MAXCARD || tertiary.card_number!=MAXCARD)
	   res.send("NOT Specialist");
   if(diff(primary.card,secondary.card)<=MAXDIFF && diff(primary.card,tertiary.card)<=MAXDIFF )
	  res.send("Specialist")
  else res.send("NOT Specialist");
});


// get all decks
router.get('/', function(req, res, next) {
  res.send("Primary Deck"+"\n"+primary.card+"\n"+primary.card_number+"\n"
		  +"Secondary Deck"+"\n"+secondary.card+"\n"+secondary.card_number+"\n"
		  +"Tertiary Deck"+"\n"+tertiary.card+"\n"+tertiary.card_number)
});

router.get('/Detail/:Card',function(req,res,next){
    var Card = req.params.Card; 
	hearthstone.getCard(Card,function(body){
			res.send(body);
	})
})

// get special deck 
router.get('/:DeckType', function(req, res, next) {
	var DeckType = req.params.DeckType;
	if(DeckType=="Primary"){
		res.send(DeckType+" Deck "+primary.card+" "+primary.card_number);
	}else if(DeckType=="Secondary"){
		res.send(DeckType+" Deck "+secondary.card+" "+secondary.card_number);
	}else if(DeckType=="Tertiary"){
		res.send(DeckType+" Deck "+tertiary.card+" "+tertiary.card_number);
	}else res.send("DeckType Error")
});

//add card 
router.post('/:DeckType/:Card', function(req,res,next){
	var DeckType = req.params.DeckType;
	var Card = req.params.Card;
	
	//return request status
	hearthstone.IsHearthstoneCard(Card,function(s){
		if(s==200) {
			if(DeckType=="Primary"){
				primary.add(Card)
				res.send(DeckType+" Deck "+"add "+primary.card+primary.card_number);
			}else if(DeckType=="Secondary"){
				secondary.add(Card)
				res.send(DeckType+" Deck "+"add "+secondary.card+secondary.card_number);
			}else if(DeckType=="Tertiary"){
				tertiary.add(Card)
				res.send(DeckType+" Deck "+"add "+tertiary.card+tertiary.card_number);
			}else res.send("DeckType Error")
		}
		else res.send("This isn't hearthstone card");
	})
	
	
})

//del all decks
router.delete('/',function(req,res,next){
	primaty.delDeck();
	secondary.delDeck();
	tertiary.delDeck();
	res.send("Delete all decks" )
})
//del special deck
router.delete('/:DeckType',function(req,res,next){
	var DeckType = req.body.DeckType
	if(DeckType=="Primary"){
		primary.delDeck();
		res.send(DeckType+" Deck delete");
	}else if(DeckType=="Secondary"){
		secondary.delDeck();
		res.send(DeckType+" Deck delete");
	}else if(DeckType=="Tertiary"){
		tertiary.delDeck();
		res.send(DeckType+" Deck delete");
	}else res.send("DeckType Error") 
	
})
//del card 
router.delete('/:DeckType/:Card',function(req,res,next){
	var DeckType = req.body.DeckType;
	var Card = req.body.Card;
	if(DeckType=="Primary"){
		primary.del(Card);
		res.send("Delete "+Card+" from "+DeckType);
	}else if(DeckType=="Secondary"){
		secondary.del(Card);
		res.send("Delete "+Card+" from "+DeckType);
	}else if(DeckType=="Tertiary"){
		tertiary.del(Card);
		res.send("Delete "+Card+" from "+DeckType);
	}else res.send("DeckType Error") 
})
module.exports = router;
