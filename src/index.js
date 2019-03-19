/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
   var loveTriangles = 0;
   preferences.unshift(Math.random());

    for (var i = 0; i < preferences.length; i++) {
        if (preferences[preferences[preferences[i]]] == i) {
            loveTriangles++;
        }
    }

    return Math.floor(loveTriangles / 3);

};
