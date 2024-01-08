// Function to parse the input and convert it into an adjacency list
function parseInput(input) {
    const graph = input.split(";").map(row => row.split(",").map(Number));
    return graph;
}

// Function to check if the graph has an Eulerian path or circuit
function hasEulerianPathOrCircuit(graph) {
    const inDegrees = new Array(graph.length).fill(0);
    const outDegrees = new Array(graph.length).fill(0);

    let startNode = -1;
    let endNode = -1;
    let outMinusIn = 0;
    let inMinusOut = 0;

    for (let i = 0; i < graph.length; i++) {
        outDegrees[i] = graph[i].length;

        for (const neighbor of graph[i]) {
            inDegrees[neighbor]++;
        }
    }

    for (let i = 0; i < graph.length; i++) {
        if (inDegrees[i] !== outDegrees[i]) {
            if (outDegrees[i] - inDegrees[i] === 1) {
                outMinusIn++;
                startNode = i;
            } else if (inDegrees[i] - outDegrees[i] === 1) {
                inMinusOut++;
                endNode = i;
            } else {
                return false; // Unequal in-degree and out-degree, not Eulerian
            }
        }
    }

    if ((outMinusIn === 1 && inMinusOut === 1) || (outMinusIn === 0 && inMinusOut === 0)) {
        return true; // Eulerian path or circuit
    }

    return false;
}

// Test cases
const testInput1 = "1,2;2,3;3,0;0,1";
console.log(hasEulerianPathOrCircuit(parseInput(testInput1))); // Output: true

const testInput2 = "1,2;2,3;3,0;0,1,4;4";
console.log(hasEulerianPathOrCircuit(parseInput(testInput2))); // Output: false