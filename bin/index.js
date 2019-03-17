var unirest = require("unirest");
var hearthstone = require('../lib/hearthstone-api'); 
var deck = require('../decks')
const express = require('express');
const app = express();

app.get('/',function(req,res){
	res.send('專精制組牌模擬器');
})
var create_new_deck = () =>{
	var primary_deck = deck('primary');
	var second_deck = deck('second');
	var tertiary_deck = deck('tertiary');
	console.log(primary_deck);
	console.log(second_deck);
	console.log(tertiary_deck);
}
create_new_deck();
hearthstone.getCard('Ysera');

