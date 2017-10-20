const dict = require ('./dictionary.js');


var word = function (){
	word:"";
}

word.prototype.setWord = function(word) {
	this.word = word;
};

word.prototype.setRandomWord = function() {
	// Get random word from dict
	var rnum = Math.floor(Math.random() * dict.words.length);
	var randomWord = dict.words[rnum];
	this.setWord(randomWord);
	return this;
};

word.prototype.contain = function(letter) {
	for(var i = 0; i< this.w.length; i++){
		if(this.w[i] === letter){
			return true;
		}else{
			return false;
		}
	}
};


module.exports = word;