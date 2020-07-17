//Gloobal Variables



function createGridArray() {
    //Create and return a grid array
    return [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ] 
}

function createDivGrid(grid){
    let locationRow = Math.randomInt(0, NUM_ROWS);
    let locationCol = Math.randomInt(0, NUM_COL);
    for (let row = 0; row < NUM_ROWS; row ++){
        for (let col = 0; col < NUM_COL; col ++){
            //Create a div for each element in 2d grid 
            let divEl = document.createElement("div");
            
            //add Data values for row and col
            divEl.dataset.row = row;
            divEl.dataset.col = col;

            //Add an event listener to each divEl
            divEl.addEventListener("click", cellClicked)
            //Add div to container
            document.getElementById("container").append(divEl);
            if (row == locationRow && col == locationCol) {
                grid[row][col] = 1;
            } 
        }
    }

}

function cellClicked() {
    generateRandomLocation();
    if(row == locationRow) {
        grid[row][col] = 1;
    }
    if (grid[row][col] = 1) {
        grid[row][col].classList.add("red")
    }
    //Get row and col of the clicked cell
    //Get row and col of the clicked cell
    let row = event.target.dataset.row;
    let col = event.target.dataset.col;

    //clear class list of cell
    event.target.classList = "";
    grid[row][col] = 0; // set grid to white
    
}
//function generateRandomLocation() {
    //let locationRow = Math.randomInt(0, 10);
    //let locationCol = Math.randomInt(0, 10);    
    //console.log(locationRow, locationCol);
//}
        