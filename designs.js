$(document).ready(function () {
    $('#sizePicker input').last().click(function (event) {
        event.preventDefault();
    });
});

function makeGrid() {
    $('#pixel_canvas').empty();
    let gridHeight = Number($('#input_height').val());
    let gridWidth = Number($('#input_width').val());
    for (let i = 1; i <= gridHeight; i++) {
        let tr = document.createElement('tr');
        for (let z = 1; z <= gridWidth; z++) {
            let td = document.createElement('td');
            tr.appendChild(td);
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

$('#sizePicker input').last().click(makeGrid);