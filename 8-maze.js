function maze(arr) {

}

//start at [0,0] => check R/D
//* cannot go
//' ' can go

//start at arr[0][0], check if can go right
//if can, arr[0][1] returning R
//if not, check down
//can go, arr[1][0] returning D
//if not, check left/check up returning L/U
//base case is 'e', to exit from maze, simply returning ?