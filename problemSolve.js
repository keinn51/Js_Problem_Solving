
function Circle(radius)
{
	console.log(this);
	this.radius = radius;
	this.getDiameter = function() 
	{
		return (2 * this.radius);
	};

	return (100);
}
// normal function's this indicates 'Window'
Circle(10);	// Window

// declare 'radius' like global variable
console.log(radius); //10

// make a new instance 'circle'. 'this' will bind with circle.
const circle = new Circle(10);	// Circle {}