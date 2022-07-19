
function buildGrid(size) {
    
    const color = document.querySelector('#colorpicker');
    let dimensions = 720/size;
    const body = document.querySelector('body');
    const placeHolder = document.createElement('div');
    placeHolder.classList.add('grid');
    body.appendChild(placeHolder);
    grid = document.querySelector('.grid');
    for (let i = 0; i < size; i++) {
        const content = document.createElement('div');
        content.classList.add('row' + `${i}`);
        for (let j = 0; j < size; j++) {
            const moreContent = document.createElement('div');
            moreContent.classList.add('slots');
            moreContent.style.cssText = 'width: ' + dimensions + 'px; height: ' + dimensions + 'px;';
            content.appendChild(moreContent);
            
        }
        grid.appendChild(content);
    }

    for (let i = 0; i < size; i++) {
        const content = document.querySelector('.row' + `${i}`);
        content.style.cssText = 'display: flex;';
    }
    
    const spots = document.querySelectorAll('.slots');
    
    for (let i = 0; i < spots.length; i++) {
        spots[i].addEventListener('mouseover', ()=> {
            spots[i].style.backgroundColor = color.value;
            
        });
    }
}




const selectSize = document.querySelector('button');
selectSize.addEventListener('click', ()=> {
    let size = prompt("Input desired Canvas Size: ");
    const element = document.querySelector('.grid');
    element.remove();
    buildGrid(size);
});


buildGrid(16);
