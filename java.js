const grid = document.querySelector('.grid');

for (let i = 0; i < 16; i++) {
    const content = document.createElement('div');
    content.classList.add('row' + `${i}`);
    for (let j = 0; j < 16; j++) {
        const moreContent = document.createElement('div');
        moreContent.classList.add('slots');
        
        content.appendChild(moreContent);
        
    }
    grid.appendChild(content);
}


for (let i = 0; i < 16; i++) {
    const content = document.querySelector('.row' + `${i}`);
    content.style.cssText = 'display: flex;';
}

