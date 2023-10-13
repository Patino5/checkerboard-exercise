/*

**The Rules**

You are not allowed to edit the html file, which means that you must create all the tiles dynamically.  Same goes for CSS: no CSS in the html file or in a separate stylesheet. You must set all the style properties using Javascript.

**Hints**

* Create a container for your tiles with the following styles:
    * `display = "flex"`
    * `flexWrap = "wrap"`
    * `width = "800px"`
    * `height = "800px"`
* Each tile should have the following styles:
    * `width = "12.5%"`
    * `height = "12.5%"`

**JUST TO REITERATE, YOU WILL NOT WRITE ANY HTML OR CSS FOR THIS EXERCISE.  ONLY JS!!!**

*/
const body = document.getElementsByTagName('body')[0]

createContainer();
makeSquares();
applyGradient();


function createContainer(){
    const board = document.createElement('div')
    board.style.display = 'flex'
    board.style.flexWrap = 'wrap'
    board.style.width = '800px'
    board.style.height = '800px'
    board.style.margin = 'auto'
    
    body.appendChild(board);
    
}
function makeSquares(){
   const board = body.querySelector('div')
    // makes row tiles
    for (let row = 0; row < 8; row++){
        // makes col tiles
        for (let col = 0; col < 8; col++){
            let tile = document.createElement('div')
            tile.style.width = '12.5%'
            tile.style.height = '12.5%'
            tile.style.backgroundColor = randomColor()//(row + col) % 2 === 0 ? 'red' : 'black'
            tile.className = 'deleteMe'
            board.appendChild(tile)
        }
    }
}

function applyGradient(){
    const gradient = document.createElement('div');
    gradient.style.position = 'absolute'
    gradient.style.top = '0'
    gradient.style.left = '0'
    gradient.style.width = '100%'
    gradient.style.height = '100%'
    gradient.style.backgroundImage = 'linear-gradient(315deg, rgba(0,191,255,0), rgba(0,191,255,1))'
    gradient.style.zIndex = '1'

    body.appendChild(gradient)
}

function randomColor(){
    return `rgb(${Math.ceil(Math.random()* 255)}, ${Math.ceil(Math.random()* 255)}, ${Math.ceil(Math.random() * 255)})`
    
}
setInterval(function (){
    const tiles = document.querySelectorAll('.deleteMe');
    for (let i = 0; i < tiles.length; i++){
        tiles[i].style.backgroundColor = randomColor();
    }
}, 2000)
