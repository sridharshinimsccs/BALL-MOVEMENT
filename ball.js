// The area object defines the div in which the balls will be created
const area = {
  element: document.getElementById('area'),
  width: 600,
  height: 400,
};

// The initialize function creates the area div on the Html page
function initialize() {
  area.element.style.width = area.width + 'px';
  area.element.style.height = area.height + 'px';
  document.body.appendChild(area.element);
}

// The moveTo function moves a given ball to a set x and y coordinates on the page
function moveTo(ball, x, y) {
  ball.element.style.left = x + 'px';
  ball.element.style.top = y + 'px';
}

// The changeDirectionIfNecessary function reverses the ball direction when it hits the area borders
function changeDirectionIfNecessary(ball, x, y) {
  if (x < 0 || x > area.width - ball.width) {
      ball.dx = -ball.dx;
  }
  if (y < 0 || y > area.height - ball.height) {
      ball.dy = -ball.dy;
  }
}

// The create function creates a new ball with the given color, dx, and dy
function create(color, dx, dy) {
  const newBall = {
      dx: dx,
      dy: dy,
      width: 40, // You need to define the width and height for the balls
      height: 40,
      element: document.createElement('div'), // Create a new HTML element for the ball
  };

  newBall.element.style.backgroundColor = color;
  newBall.element.style.width = newBall.width + 'px';
  newBall.element.style.height = newBall.height + 'px';
  newBall.element.className = 'ball'; // Set the class name

  area.element.appendChild(newBall.element); // Append the ball element to the area

  return newBall;
}

// The update function updates the ball's position and direction
function update(ball, x, y) {
  moveTo(ball, x, y);
  changeDirectionIfNecessary(ball, x, y);

  setTimeout(function () {
      update(ball, x + ball.dx, y + ball.dy);
  }, 16);
}

// Initialize the area
initialize();

// Create and set initial positions for the balls
const ball1 = create('blue', 4, 3);
const ball2 = create('red', 1, 5);
const ball3 = create('green', 2, 2);
moveTo(ball1, 1, 1);
moveTo(ball2, 10, 10);
moveTo(ball3, 20, 20);

// Start the animation loop for the balls
update(ball1, 70, 0);
update(ball2, 20, 200);
update(ball3, 300, 330);
