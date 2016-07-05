var Person = function(firstName) {
  // To make sure that this points to the right thing regardless of the object
  // being instantiated we could use the code below:
  //   if(this instanceof Person) {
  //   	this.firstName = firstName;
  //   } else {
  //   	return new Person(firstName);
  //   }
  // }
	this.firstName = firstName;
};

Person.prototype.walk = function() {
	console.log('Am walking');
};

Person.prototype.sayHello = function() {
	console.log('Hey, I\'m: ' + this.firstName);
};

// Defining a student constructor
function Student(firstName, subject) {
	// Call the parent constructor
	Person.call(this, firstName);

	// Initialize Student-specific properties
	this.subject = subject;
}

//Set that Student.prototype object inherits from Person.prototype
Student.prototype = Object.create(Person.prototype);

// Set the "constructor" property to refer to Student
Student.prototype.constructor = Student;

//Replace the sayHello method
Student.prototype.sayHello = function() {
	console.log('Hey, I\'m: ' + this.firstName + '. I\'m studying ' +
		this.subject + '.');

};

//Add a sayGoodBye method
Student.prototype.sayGoodBye = function() {
	console.log('Bye Bye');
};

// Using all these things
var student1 = new Student('Joy', 'Discreet Math');
student1.sayHello();
student1.walk();
student1.sayGoodBye();

// Check that instanceof works correctly
console.log(student1 instanceof Person);
console.log(student1 instanceof Student);
