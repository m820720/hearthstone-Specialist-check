var unirest = require("unirest");


module.exports ={
getCard : function(key,callback){
	unirest.get("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/"+key)
	.header("X-RapidAPI-Key", "40139fc7bbmsh4002453ebc2ccdap17fb2ejsn70265822b9d6")
		.end(function (result) {
			callback(result.body);
		});
	},
IsHearthstoneCard : function(key,callback){
	unirest.get("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/"+key)
	.header("X-RapidAPI-Key", "40139fc7bbmsh4002453ebc2ccdap17fb2ejsn70265822b9d6")
		.end(function (result) {
			callback(result.status)
		});
	},
getCardClass : function(key,callback){
	unirest.get("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/"+key)
	.header("X-RapidAPI-Key", "40139fc7bbmsh4002453ebc2ccdap17fb2ejsn70265822b9d6")
		.end(function (result) {
			callback(result.body[0].cardSet);
		});
}
}
