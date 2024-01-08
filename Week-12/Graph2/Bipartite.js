// Function to check if the graph is bipartite
function isBipartite(adjList) {
    const graph = parseAdjacencyList(adjList);
    const numNodes = graph.length;
    const colors = new Array(numNodes).fill(0);
    const visited = new Array(numNodes).fill(false);

    // DFS function to traverse the graph and check for bipartiteness
    function dfs(node, color) {
        visited[node] = true;
        colors[node] = color;

        for (const neighbor of graph[node]) {
            if (!visited[neighbor]) {
                if (!dfs(neighbor, 3 - color)) {
                    return false;
                }
            } else if (colors[neighbor] === colors[node]) {
                return false;
            }
        }

        return true;
    }

    // Loop through all unvisited nodes to ensure all components are covered
    for (let i = 0; i < numNodes; i++) {
        if (!visited[i]) {
            if (!dfs(i, 1)) {
                return false;
            }
        }
    }

    return true;
}

// Function to parse the adjacency list into a graph representation
function parseAdjacencyList(adjList) {
    const rows = adjList.split(';');
    const graph = [];

    for (const row of rows) {
        const adjacentNodes = row.split(',').map(Number);
        graph.push(adjacentNodes);
    }

    return graph;
}

// Sample Input
const sampleInput1 = '1,3;0,2;1,3;0,2';
const sampleInput2 = '1,2;0,2;0,1';

// Test Cases
console.log(isBipartite(sampleInput1)); // Output: true
console.log(isBipartite(sampleInput2)); // Output: false