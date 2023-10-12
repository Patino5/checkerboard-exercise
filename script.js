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
function createContainer(){
    const board = document.createElement('div')
    board.style.display = 'flex'
    board.style.flexWrap = 'wrap'
    board.style.width = '800px'
    board.style.height = '800px'
    board.style.margin = 'auto'
    board.style.zIndex = '10'
    board.style.backgroundImage = 'linear-gradient (315deg, rgba(255, 0, 0, 0), rgba(255, 0, 0, 1))'
    body.appendChild(board);
}
function makeSquares(){
    board = body.querySelector('div')
    // makes row tiles
    for (let row = 0; row < 8; row++){
        // makes col tiles
        for (let col = 0; col < 8; col++){
            let tile = document.createElement('div')
            tile.zIndex = '-1'
            tile.style.width = '12.5%'
            tile.style.height = '12.5%'
            tile.style.backgroundColor = (row + col) % 2 === 0 ? 'red' : 'black'
            tile.className = 'deleteMe'
            board.appendChild(tile)
        }
    }
}

/*
function randomColor(){
    let randomColor = `rgb(${Math.ceil(Math.random()* 255)}, ${Math.ceil(Math.random()* 255)}, ${Math.ceil(Math.random() * 255)})`
    return randomColor
}
setInterval(function (){
    let tiles = document.querySelectorAll('.deleteMe');
    for (let i = 0; i < tiles.length; i++){
        tiles[i].style.backgroundColor = randomColor();
    }
}, 2000)
*/