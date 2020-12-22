class Map {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.countries = {
        }
    }

    highlight(c) {
        if(typeof c !== 'string')
            return;
        
    }
}

const wrapper = document.createElement('div');
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
wrapper.appendChild(canvas);
document.body.appendChild(wrapper);

const size = {
    width: 840,
    height: 480
}

canvas.width = size.width;
canvas.height = size.height;

const img = new Image(size.width, size.height);
img.src = '/assets/images/Continents.png';

img.addEventListener('load', () => {
    ctx.drawImage(img, 0, 0, size.width, size.height);
});