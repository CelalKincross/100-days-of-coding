
// Prompt

// Given a two-dimensional array that contains only three values, "H" for hallway, "_" for wall, and exactly one "G" for goal. This represents a maze. The entrance to the maze is always in the top left corner at index 0, 0. Return an array which is a list of (row, column) index pairs that represent a path from the entrance to the goal such that all of the values are "H". No ghosts walking through walls, please. Each move must be horizontal or vertical, no diagonals.

 

// Here’s an example maze:

// const exampleMaze = [
//   ['H', 'H', 'H', '_', '_', 'H', 'H', 'H', 'G'],
//   ['H', '_', 'H', '_', '_', 'H', '_', '_', '_'],
//   ['H', '_', 'H', 'H', '_', 'H', '_', 'H', 'H'],
//   ['_', '_', '_', 'H', '_', 'H', '_', 'H', '_'],
//   ['H', 'H', 'H', 'H', '_', 'H', '_', 'H', '_'],
//   ['H', '_', '_', 'H', '_', 'H', '_', 'H', 'H'],
//   ['H', 'H', '_', '_', '_', 'H', 'H', 'H', '_'],
//   ['H', '_', 'H', 'H', 'H', 'H', '_', '_', 'H'],
//   ['H', 'H', 'H', '_', '_', 'H', 'H', 'H', 'H'],
// ];
//  use a Breadth-First Search (BFS) algorithm. The idea is to start from the top-left corner (the entrance) and explore all the possible paths in a breadth-first manner, keeping track of the visited cells and the path taken to reach the goal.

function mazeSolver(maze) {
    const queue = [[0, 0]];
    const visited = new Set();
    const path = [[0, 0]];
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  
    while (queue.length > 0) {
      const [x, y] = queue.shift();
      visited.add(`${x},${y}`);
  
      if (maze[x][y] === "G") {
        return path;
      }
  
      for (const [dx, dy] of directions) {
        const newX = x + dx;
        const newY = y + dy;
        if (
          newX >= 0 &&
          newX < maze.length &&
          newY >= 0 &&
          newY < maze[0].length &&
          maze[newX][newY] === "H" &&
          !visited.has(`${newX},${newY}`)
        ) {
          queue.push([newX, newY]);
          path.push([newX, newY]);
          visited.add(`${newX},${newY}`);
        }
      }
    }
    return [];
  }
  

// For a first version of this problem, let’s assume that there are no cycles in the maze. That is, the passageways do not loop back on themselves. As an extra challenge, how can you handle a maze with cycles without going into an infinite loop?

const cycleMaze = [  
    ['H', 'H', 'H', '_', '_', 'H', 'H', 'H', 'G'],
    ['H', '_', 'H', '_', '_', 'H', '_', '_', '_'],
    ['H', '_', 'H', 'H', '_', 'H', '_', 'H', 'H'],
    ['_', '_', '_', 'H', '_', 'H', '_', 'H', '_'],
    ['H', 'H', 'H', 'H', '_', 'H', '_', 'H', '_'],
    ['H', '_', '_', 'H', '_', 'H', '_', 'H', 'H'],
    ['H', 'H', '_', '_', '_', 'H', 'H', 'H', '_'],
    ['H', '_', 'H', 'H', 'H', 'H', '_', '_', 'H'],
    ['H', 'H', 'H', '_', '_', 'H', 'H', 'H', 'H'],
];

function mazeSolverCycle(maze) {
    const startQueue = [[0, 0]];
    const goalQueue = [[maze.length - 1, maze[0].length - 1]];
    const startVisited = new Set();
    const goalVisited = new Set();
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  
    startVisited.add("0,0");
    goalVisited.add(`${maze.length - 1},${maze[0].length - 1}`);
  
    while (startQueue.length > 0 && goalQueue.length > 0) {
      const [x, y] = startQueue.shift();
      for (const [dx, dy] of directions) {
        const newX = x + dx;
        const newY = y + dy;
        if (
          newX >= 0 &&
          newX < maze.length &&
          newY >= 0 &&
          newY < maze[0].length &&
          maze[newX][newY] === "H" &&
          !startVisited.has(`${newX},${newY}`)
        ) {
          if (goalVisited.has(`${newX},${newY}`)) {
            return "Path Found";
          }
          startQueue.push([newX, newY]);
          startVisited.add(`${newX},${newY}`);
        }
      }
      const [gx, gy] = goalQueue.shift();
      for (const [dx, dy] of directions) {
        const newX = gx + dx;
        const newY = gy + dy;
        if (
          newX >= 0 &&
          newX < maze.length &&
          newY >= 0 &&
          newY < maze[0].length &&
          maze[newX][newY] === "H" &&
          !goalVisited.has(`${newX},${newY}`)
        ) {
          if (startVisited.has(`${newX},${newY}`)) {
            return "Path Found";
          }
          goalQueue.push([newX, newY]);
          goalVisited.add(`${newX},${newY}`);
        }
      }
    }
    return "No Path Found";
  }
  
//   the algorithm uses two separate queues and two separate sets to keep track of the visited cells, one for each queue. The algorithm starts by adding the entrance cell (0, 0) to the start queue and the goal cell (maze.length - 1, maze[0].length - 1) to the goal queue. Then repeatedly dequeues a cell from both queues, checks if the current cell from the start