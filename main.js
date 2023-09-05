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

    document.querySelectorAll('.number-control').forEach((numberControl) => {
        numberControl.addEventListener('click', onClickNumberControl);
    })

    function onClickStandardCell (){
        document.querySelector('.selected')?.classList?.remove('selected');
        
        this.classList.add('selected')
    }

    function onClickNumberControl() {
        const selectedCell = document.querySelector('.selected');
        if(selectedCell == null){
            return;
        }

        const ClickedNumber = this.textContent;
        const isCandidateMove = document.getElementById('candidate-switch').checked;

        if(isCandidateMove){
            const candidatesNode = selectedCell.querySelector('.candidates');

            const candidates = candidatesNode.textContent.split("");

            const numIndex = candidates.indexOf(ClickedNumber); // returns index or -1

            if(numIndex === -1){
                candidates.push(ClickedNumber);

            }else{
                candidates.splice(numIndex, 1);
            }

            candidatesNode.textContent = candidates.sort().join("");

        }else{
            selectedCell.querySelector('.value').textContent = ClickedNumber;

        }

    }
})