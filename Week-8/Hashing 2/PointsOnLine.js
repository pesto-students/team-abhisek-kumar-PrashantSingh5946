function maxPointsOnLine(points) {
    if (points.length <= 2) return points.length;

    let maxPoints = 0;

    // Helper function to calculate the slope between two points
    const getSlope = (point1, point2) => {
        if (point1[0] === point2[0]) {
            // Special case for vertical lines (infinite slope)
            return Infinity;
        }
        return (point2[1] - point1[1]) / (point2[0] - point1[0]);
    };

    for (let i = 0; i < points.length; i++) {
        let slopeMap = new Map(); // Hashmap to store slopes and their counts
        let samePointCount = 0; // To keep track of points with the same coordinates

        for (let j = 0; j < points.length; j++) {
            if (i !== j) {
                if (points[i][0] === points[j][0] && points[i][1] === points[j][1]) {
                    // If points are the same, increment samePointCount
                    samePointCount++;
                } else {
                    const slope = getSlope(points[i], points[j]);
                    slopeMap.set(slope, (slopeMap.get(slope) || 0) + 1);
                }
            }
        }

        let currentMax = samePointCount; // Maximum points on the same line including the same points
        for (let count of slopeMap.values()) {
            // Find the maximum count of points on the same line (with the same slope)
            currentMax = Math.max(currentMax, count + samePointCount);
        }

        maxPoints = Math.max(maxPoints, currentMax);
    }

    return maxPoints;
}

// Test Case 1
const input1 = [[1, 1], [2, 2], [3, 3], [4, 5], [5, 6], [6, 7]];
console.log(maxPointsOnLine(input1)); // Output: 3

// Test Case 2
const input2 = [[1, 1], [2, 2], [3, 3]];
console.log(maxPointsOnLine(input2)); // Output: 3