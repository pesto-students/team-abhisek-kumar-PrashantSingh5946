function findArticulationPoints(adjList) {
    const graph = adjList.map(row => row.split(',').map(Number));
    const visited = new Array(graph.length).fill(false);
    const low = new Array(graph.length).fill(0);
    const ids = new Array(graph.length).fill(0);
    const parent = new Array(graph.length).fill(-1);
    const isArticulationPoint = new Array(graph.length).fill(false);
    let id = 0;

    function dfs(node, root) {
        let children = 0;
        visited[node] = true;
        id++;
        low[node] = ids[node] = id;
        const currentNode = graph[node];

        for (let i = 0; i < currentNode.length; i++) {
            const adjacentNode = currentNode[i];
            if (adjacentNode === parent[node]) continue;

            if (!visited[adjacentNode]) {
                children++;
                parent[adjacentNode] = node;
                dfs(adjacentNode, root);

                if (ids[node] <= low[adjacentNode]) {
                    isArticulationPoint[node] = true;
                } else {
                    low[node] = Math.min(low[node], low[adjacentNode]);
                }
            } else {
                low[node] = Math.min(low[node], ids[adjacentNode]);
            }
        }

        if (node === root && children > 1) {
            isArticulationPoint[node] = true;
        }
    }

    for (let i = 0; i < graph.length; i++) {
        if (!visited[i]) {
            dfs(i, i);
        }
    }

    const articulationPoints = [];
    for (let i = 0; i < graph.length; i++) {
        if (isArticulationPoint[i]) {
            articulationPoints.push(i);
        }
    }

    return articulationPoints;
}

// Input reading and function call
function main() {
    const input = prompt("Enter the graph as an adjacency list (e.g., '1,2;0,2;0,1,3,5;2,4;3,5;2,4'):");
    const adjList = input.split(';');
    const articulationPoints = findArticulationPoints(adjList);
    console.log("Articulation Points:", articulationPoints);
}

main();