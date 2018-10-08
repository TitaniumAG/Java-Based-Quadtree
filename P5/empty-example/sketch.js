let qtree;

function setup() 
{
	createCanvas(400, 400);
	let boundary = new Rectangle(200, 200, 200, 200)
	qtree = new QuadTree(boundary, 4);
	console.log(qtree);




//for(let i = 0; i < 500; i++)
//{
//	let p = new Point(random(width), random(height));
//	qt.insert(p);
//}

//background(0);
//qt.show();

}

function draw()
{
	if(mouseIsPressed)
	{
		let m = new Point(mouseX+random(-20,20), mouseY+random(-20,20));
		qtree.insert(m);
	}

	background(0);
	qtree.show();
}

// (X=0.000000,Y=0.000000,Z=-400020.000000)