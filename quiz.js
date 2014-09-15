var Person = function(name, height, age, sleeping) {
	this.name = name;
	this.height = height;
	this.age = age;
	this.sleeping = false;
};

Person.prototype.eat = function(){
	return "chomp";
};


Person.prototype.sleep = function(){
	if (this.sleeping === false) {
		this.sleeping = true;
		return "The student is now sleeping.";
	}else{
		return "The student is already sleeping.";
	}
};

Person.prototype.wakeUp = function(){
	if (this.sleeping === true){
		this.sleeping = false;
		return "The student is now awake.";
	}else{
		return "The student is already awake.";
	}
};

//make a student prototype that inherits from person w/ a study attribute
var Student = function(studying){
	this.studying = false;
};

Student.prototype = new Person();
// we want every new student to have a constructor of student, not Person (as above)
Student.prototype.constructor = Student;

Student.prototype.study = function(){
	if(this.study === false){
		this.studying = true;
		return "The student is now studying.";
	}else{
		return "The student is already studying.";
	}
};

Student.prototype.stopStudy = function(){
	if(this.study === true){
		this.study = false;
	}else{
		return "The student has already stopped.";
	}
};

Student.prototype.sleep = function(){
	if (this.sleeping === false && this.study === false){
		this.sleeping = true;
		return "The student is asleep.";
	}else if(this.study ===true){
		return "The student is studying, needs to stop before sleeping.";
	}else{
		return "The student is already sleeping.";
	}
};