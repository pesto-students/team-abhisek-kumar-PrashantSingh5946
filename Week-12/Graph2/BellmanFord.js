function parseGraph(input) {
    const lines = input.trim().split(';');
    const graph = [];

    for (const line of lines) {
        const edges = line.split(',').map(Number);
        graph.push(edges);
    }

    return graph;
}

function bellmanFord(graph, source) {
    const numNodes = graph.length;
    const distances = Array(numNodes).fill(Infinity);
    const predecessors = Array(numNodes).fill(null);

    distances[source] = 0;

    for (let i = 0; i < numNodes - 1; i++) {
        for (let node = 0; node < numNodes; node++) {
            for (let neighbor = 0; neighbor < graph[node].length; neighbor += 2) {
                const nextNode = graph[node][neighbor];
                const weight = graph[node][neighbor + 1];

                if (distances[node] + weight < distances[nextNode]) {
                    distances[nextNode] = distances[node] + weight;
                    predecessors[nextNode] = node;
                }
            }
        }
    }

    // Check for negative cycles
    for (let node = 0; node < numNodes; node++) {
        for (let neighbor = 0; neighbor < graph[node].length; neighbor += 2) {
            const nextNode = graph[node][neighbor];
            const weight = graph[node][neighbor + 1];

            if (distances[node] + weight < distances[nextNode]) {
                // Negative cycle found
                return "Graph contains negative cycle";
            }
        }
    }

    return { distances, predecessors };
}

// Test case 1
const input1 = `1,6,2,3;-1;2,-2,3,4;-3 0`;
const graph1 = parseGraph(input1);
const source1 = 0;
const result1 = bellmanFord(graph1, source1);
console.log(result1.distances, result1.predecessors);

// Test case 2
const input2 = `1,-1;2;-2 2`;
const graph2 = parseGraph(input2);
const source2 = 2;
const result2 = bellmanFord(graph2, source2);
console.log(result2.distances, result2.predecessors);
