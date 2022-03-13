let numRows = 0;
let numCols = 0;
let colorSelected; 

//Add a row
function addR() {
    alert("Clicked Add Row")

    //referencing 'grid' object within HTML file
    let grid = document.getElementById('grid');

    //create an instance of a row
    let row = document.createElement('tr');

    for(let i = 0; i <= numCols; i++) {
        //create an instance of a cell and append it to row
        let cell = document.createElement('td');
        row.append(cell);

        //on click, change to current selected color
        cell.onclick = changeColor;
    }
    //add row inside grid tag
    grid.appendChild(row);
    numRows++;
}

//Add a column
function addC() {
    alert("Clicked Add Col")

    //referencing 'grid' object within HTML file
    let grid = document.getElementById('grid');

    for(const row of grid.rows) {
        //create an instance of a cell and append it to row
        let cell = document.createElement('td');
        row.append(cell);

        //on click, change to current selected color
        cell.onclick = changeColor;
    }
    numCols++;
}

//Remove a row
function removeR() {
    alert("Clicked Remove Row")

    document.getElementById('grid').deleteRow(numRows-1);
    numRows--;
}

//Remove a column
function removeC() {
    alert("Clicked Remove Col")

    let grid = document.getElementById('grid');
    for(const row of grid.rows){
        row.getElementsByTagName('td')[numCols].remove();
    }
    numCols--;
}

//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    alert("Clicked Fill All")
}

function clearAll(){
    alert("Clicked Clear All")
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}

function changeColor() {
    //changing background of the cell that calls this function to the selected color
    this.style.backgroundColor = colorSelected;
}