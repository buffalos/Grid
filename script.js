let numRows = 0;
let numCols = 0;
let colorSelected; 

//Add a row
function addR() {
    alert("Clicked Add Row")

    let grid = document.getElementById('grid');
    let row = document.createElement('tr');

    for(let i = 0; i <= numCols; i++) {
        let cell = document.createElement('td');
        row.append(cell);
        //grid.onclick change to current selected color
    }

    grid.appendChild(row);
    numRows++;
}

//Add a column
function addC() {
    alert("Clicked Add Col")

    let grid = document.getElementById('grid');

    for(const row of grid.rows) {
        let cell = document.createElement('td');
        row.append(cell);
        // grid.onclick change to current selected color
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
