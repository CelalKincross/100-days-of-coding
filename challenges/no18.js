// Prompt
// Given an array of points (x, y) in a two-dimensional space find the k closest points to the origin (0, 0).

// Create a new array to store the distances of each point from the origin.
// Iterate through the input array of points and calculate the distance of each point from the origin using the Euclidean distance formula: sqrt(x^2 + y^2).
// Sort the array of distances in ascending order.
// Use the first k elements of the sorted distances array to determine the indices of the k closest points in the input array.
// Create a new array to store the k closest points and add the corresponding points from the input array to this new array.
// Return the new array of k closest points.

function kClosestPoints(points, k) {
    let distances = new Array(points.length);
    for (let i = 0; i < points.length; i++) {
        let point = points[i];
        distances[i] = Math.sqrt(point[0] * point[0] + point[1] * point[1]);
    }
    distances = distances.map((d, i) => [d, i]).sort((a, b) => a[0] - b[0]);
    let kClosestPoints = new Array(k);
    for (let i = 0; i < k; i++) {
        kClosestPoints[i] = points[distances[i][1]];
    }
    return kClosestPoints;
}

