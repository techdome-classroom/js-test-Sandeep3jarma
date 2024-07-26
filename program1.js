// const getTotalIsles = function (grid) {


//   // write your code here
  

// };

// module.exports = getTotalIsles;
 
// program1.js
function getTotalIsles(grid) {
  if (grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

  const directions = [
      [1, 0], // down
      [-1, 0], // up
      [0, 1], // right
      [0, -1] // left
  ];

  function isValid(r, c) {
      return r >= 0 && r < rows && c >= 0 && c < cols && grid[r][c] === 'L' && !visited[r][c];
  }

  function dfs(r, c) {
      visited[r][c] = true;
      for (const [dr, dc] of directions) {
          const newRow = r + dr;
          const newCol = c + dc;
          if (isValid(newRow, newCol)) {
              dfs(newRow, newCol);
          }
      }
  }

  let islandCount = 0;

  for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
          if (grid[r][c] === 'L' && !visited[r][c]) {
              dfs(r, c);
              islandCount++;
          }
      }
  }

  return islandCount;
}

module.exports = getTotalIsles;

