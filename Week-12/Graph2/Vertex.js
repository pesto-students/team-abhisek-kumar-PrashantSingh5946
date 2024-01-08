function parseAdjacencyList(input) {
    const graph = input.split(';').map(row => row.split(',').map(Number));
    return graph;
}

function findMinVertexCover(graph) {
    const visited = new Array(graph.length).fill(false);
    const vertexCover = [];

    for (let node = 0; node < graph.length; node++) {
        if (!visited[node]) {
            for (const adjacentNode of graph[node]) {
                if (!visited[adjacentNode]) {
                    visited[node] = true;
                    visited[adjacentNode] = true;
                    vertexCover.push(node);
                    vertexCover.push(adjacentNode);
                    break;
                }
            }
        }
    }

    return vertexCover;
}

function main() {
    const input = prompt("Enter the graph as an adjacency list:");
    const graph = parseAdjacencyList(input);
    const vertexCover = findMinVertexCover(graph);
    console.log("Minimum Vertex Cover:", vertexCover);
}

main();