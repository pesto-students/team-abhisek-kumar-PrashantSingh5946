// Function to perform Depth-First Search (DFS)
function dfs(vertex, adjacencyMatrix, visited, stack) {
    visited[vertex] = true;

    for (let i = 0; i < adjacencyMatrix.length; i++) {
        if (adjacencyMatrix[vertex][i] === 1 && !visited[i]) {
            dfs(i, adjacencyMatrix, visited, stack);
        }
    }

    stack.push(vertex);
}

// Function to perform Topological Sort
function topologicalSort(adjacencyMatrix) {
    const numVertices = adjacencyMatrix.length;
    const visited = new Array(numVertices).fill(false);
    const stack = [];

    for (let i = 0; i < numVertices; i++) {
        if (!visited[i]) {
            dfs(i, adjacencyMatrix, visited, stack);
        }
    }

    const sortedVertices = stack.reverse();
    return sortedVertices;
}

// Sample input
const input1 = [
    [0, 1, 0, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0]
];

const input2 = [
    [0, 1, 1, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 1],
    [0, 0, 0, 0]
];

// Function to display the output in the required format
function displayTopologicalOrder(sortedVertices) {
    console.log("Sample Output:", sortedVertices.join(" -> "));
}

// Test Case 1
const sortedVertices1 = topologicalSort(input1);
displayTopologicalOrder(sortedVertices1);

// Test Case 2
const sortedVertices2 = topologicalSort(input2);
displayTopologicalOrder(sortedVertices2);