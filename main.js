/*
Goal is to fill every cell of a 9x9 grid = 81 squares, with the numbers 1-9 such that no dupilicates appear in any row, column, or 
3x3 subgrid.

 2 types of cells given nums and standard cells.

 given nums = class .given-number
 should have no func

 standard cells = 2 child spans. Classes .candidates and .value 
 when clicked, it should become selected (the cell should have the selected class) Only one cell should be selectable at a time (should unselect the prev)


 controls

 #candidate-switch is unchecked(set to normal move) clicking on any num should place the num in the .value span of selected cell.


*/

document.querySelectorAll('td').forEach((cell) => {
    const isStandard = !cell.classList.contains('given-number');
    if(isStandard){
        cell.addEventListener('click', onClickStandardCell);
    }


    function onClickStandardCell (){
        this.classList('selected')
    }
})