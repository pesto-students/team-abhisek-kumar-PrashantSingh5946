function findBridges(adjList) {
    const graph = adjList.map(row => row.split(',').map(Number));
    const numNodes = graph.length;
    const visited = new Array(numNodes).fill(false);
    const ids = new Array(numNodes).fill(0);
    const low = new Array(numNodes).fill(0);
    let id = 0;
    const bridges = [];

    function dfs(node, parent) {
        visited[node] = true;
        id++;
        ids[node] = id;
        low[node] = id;

        for (const neighbor of graph[node]) {
            if (neighbor === parent) continue;

            if (!visited[neighbor]) {
                dfs(neighbor, node);
                low[node] = Math.min(low[node], low[neighbor]);

                if (ids[node] < low[neighbor]) {
                    bridges.push([node, neighbor]);
                }
            } else {
                low[node] = Math.min(low[node], ids[neighbor]);
            }
        }
    }

    for (let i = 0; i < numNodes; i++) {
        if (!visited[i]) {
            dfs(i, -1);
        }
    }

    return bridges;
}

// Sample Input
const input1 = `1,2;0,2;0,1,3,4;2,4;2,3`;
const input2 = `1,-1;2;-2,2`;

// Test Case 1
const bridges1 = findBridges(input1.split(';'));
console.log("Sample Output 1:", bridges1);

// Test Case 2
const bridges2 = findBridges(input2.split(';'));
console.log("Sample Output 2:", bridges2);