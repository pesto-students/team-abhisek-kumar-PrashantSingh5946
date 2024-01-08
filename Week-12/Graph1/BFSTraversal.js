// Function to parse the input into an adjacency list
const parseAdjacencyList = (input) => {
    return input.split(';').map(row => row.split(',').map(Number));
};

// Function to perform BFS traversal on the graph
const bfsTraversal = (graph, startNode) => {
    const visited = new Array(graph.length).fill(false);
    const queue = [];

    visited[startNode] = true;
    queue.push(startNode);

    while (queue.length !== 0) {
        const currentNode = queue.shift();
        processNode(currentNode); // Replace this with your processing logic or printing

        for (const adjacentNode of graph[currentNode]) {
            if (!visited[adjacentNode]) {
                visited[adjacentNode] = true;
                queue.push(adjacentNode);
            }
        }
    }
};

// Sample input
const input1 = '1,2;0,3,4;0,5;1;1;2';
const input2 = '1,2,3;0;0;0';

// Sample test case 1
console.log("Test Case 1:");
const graph1 = parseAdjacencyList(input1);
bfsTraversal(graph1, 0); // Start from node 0

// Sample test case 2
console.log("\nTest Case 2:");
const graph2 = parseAdjacencyList(input2);
bfsTraversal(graph2, 0); // Start from node 0