
function generateTable() {
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
    let k = 1;

    for (let i=1; i<11; i++) {
        const row = document.createElement('tr');

        for (let j = 1; j <11; j++) {
            const cell = document.createElement("td");
            const cellText = document.createTextNode(k++);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }

        tblBody.appendChild(row);
    }

    tbl.appendChild(tblBody);
    document.body.appendChild(tbl);
    tbl.setAttribute("border", "1");
}

generateTable ();
