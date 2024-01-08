// Function to detect cycle in a directed graph using DFS
function hasCycle(adjList) {
    const graph = parseInput(adjList);
    const visited = new Array(graph.length).fill(false);
    const recursionStack = new Array(graph.length).fill(false);

    function dfs(node) {
        visited[node] = true;
        recursionStack[node] = true;

        for (const neighbor of graph[node]) {
            if (!visited[neighbor] && dfs(neighbor)) {
                return true;
            } else if (recursionStack[neighbor]) {
                return true;
            }
        }

        recursionStack[node] = false;
        return false;
    }

    for (let i = 0; i < graph.length; i++) {
        if (!visited[i] && dfs(i)) {
            return true;
        }
    }

    return false;
}

// Function to parse the input into an adjacency list
function parseInput(adjList) {
    return adjList.split(';').map(row => row.split(',').map(Number));
}

// Function to take user input and call hasCycle function
function main() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Enter the graph as an adjacency list: ', (adjList) => {
        const result = hasCycle(adjList);
        console.log(result);
        readline.close();
    });
}

// Call the main function to start the program
main();