const grid = document.querySelector('.grid');

for (let i = 0; i < 16; i++) {
    const content = document.createElement('div');
    content.classList.add('row' + `${i}`);
    for (let j = 0; j < 16; j++) {
        const moreContent = document.createElement('div');
        moreContent.classList.add('slots');
        moreContent.setAttribute('draggable', "false");
        content.appendChild(moreContent);
        
    }
    content.setAttribute('dragabble', "false");
    grid.appendChild(content);
}


for (let i = 0; i < 16; i++) {
    const content = document.querySelector('.row' + `${i}`);
    content.style.cssText = 'display: flex;';
}

const spots = document.querySelectorAll('.slots');

for (let i = 0; i < spots.length; i++) {
    spots[i].addEventListener('mouseover', ()=> {
        
        spots[i].setAttribute('id', 'slots-over');
        
    });
}
