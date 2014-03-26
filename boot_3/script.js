function Movie() {
  this.title;
  this.director;
}

Movie.prototype['play'] = function(){
   console.log("Playing " + this.title);
};

Movie.prototype['stop'] = function(){
  console.log(this.title + " is stopped")
};

Movie.prototype['set'] = function(prop, value){
  this[prop] = value
};

Terminator = new Movie();
Terminator.set('title', 'Terminator')
Terminator.play();
Terminator.stop();

