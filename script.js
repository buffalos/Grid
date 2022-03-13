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
        cell.onclick = function (){
            this.style.backgroundColor = colorSelected;
        };
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
        cell.onclick = function (){
            this.style.backgroundColor = colorSelected;
        };
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

    let grid = document.getElementById('grid');

    for (const row of grid.rows) {
        for (const cell of row.cells) {
            cell.style.backgroundColor = colorSelected;
        }
    }
}

function clearAll(){
    alert("Clicked Clear All")
    let grid = document.getElementById('grid');

    for (const row of grid.rows) {
        for (const cell of row.cells) {
            cell.style.backgroundColor = "white";
        }
    }
}

function fillU(){
    alert("Clicked Fill All Uncolored")

    let grid = document.getElementById('grid');

    for (const row of grid.rows) {
        for (const cell of row.cells) {
            if (cell.style.backgroundColor != "red" && cell.style.backgroundColor != "green" && cell.style.backgroundColor != "yellow" && cell.style.backgroundColor != "blue"){
                cell.style.backgroundColor = colorSelected;
            }
        }
    }
}
