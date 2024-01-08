function parseAdjacencyList(input) {
    return input.split(";").map(row => row.split(",").map(Number));
}

function dfsTraversal(adjacencyList, startNode) {
    const visited = new Array(adjacencyList.length).fill(false);
    const result = [];

    function dfs(node) {
        visited[node] = true;
        result.push(node);

        for (const adjacentNode of adjacencyList[node]) {
            if (!visited[adjacentNode]) {
                dfs(adjacentNode);
            }
        }
    }

    dfs(startNode);
    return result;
}

// Test Case 1
const input1 = "1,2;0,3,4;0,5;1;1;2";
const adjacencyList1 = parseAdjacencyList(input1);
const startNode1 = 0;
const dfsResult1 = dfsTraversal(adjacencyList1, startNode1);
console.log(dfsResult1.join(" "));

// Test Case 2
const input2 = "1,2;0;0";
const adjacencyList2 = parseAdjacencyList(input2);
const startNode2 = 0;
const dfsResult2 = dfsTraversal(adjacencyList2, startNode2);
console.log(dfsResult2.join(" "));