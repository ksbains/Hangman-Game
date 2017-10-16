var word = function (){
	w:"";
	size:0;
	g:0;

}

word.prototype.setWord = function(word) {
	this.word = word;
};

word.prototype.setSize = function(size) {
	this.size = size;
};

word.prototype.incrementGuess = function() {
	this.g++;
};