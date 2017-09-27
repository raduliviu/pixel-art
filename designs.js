//First I'm preventing the form being submitted by the button
$(document).ready(function () {
    $('#sizePicker input').last().click(function (event) {
        event.preventDefault();
    });
});

//Here I'm creating the function that will build our grid
function makeGrid() {
    $('#pixel_canvas').empty();
    let gridHeight = Number($('#input_height').val());
    let gridWidth = Number($('#input_width').val());
    //based on the values the user selects, next up the table is being created
    for (let i = 1; i <= gridHeight; i++) {
        let tr = document.createElement('tr');
        for (let z = 1; z <= gridWidth; z++) {
            let td = document.createElement('td');
            tr.appendChild(td);
            //now I also want not only to change the background color when clicking the cell, I want it to change back when clicking again
            let clicked = false;
            td.onclick = () => {
                clicked = !clicked;
                let pickedColor = $('#colorPicker').val();
                td.style.background = clicked ? pickedColor : '';
            };
        }
        document.querySelector('#pixel_canvas').appendChild(tr);
    }
};
//Finally, I want to run our function to create the grid when clicking the submit button
$('#sizePicker input').last().click(makeGrid);