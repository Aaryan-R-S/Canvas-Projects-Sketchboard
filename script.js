const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth / 1.75
canvas.height = window.innerHeight / 1.2

const decrease = document.getElementById('decrease')
const increase = document.getElementById('increase')
const sizeT = document.getElementById('sizeT')
const col = document.getElementById('col')
const clear = document.getElementById('clear')

let press = false
let color = 'red'
let size = 4

let x = undefined
let y = undefined
let x1 = undefined
let y1 = undefined
let x2 = undefined
let y2 = undefined

function drawC(x, y, r, color) {
    ctx.beginPath()
    ctx.arc(x, y, r, 0, Math.PI * 2, false)
    ctx.fillStyle = color
    ctx.fill()
}

function drawL(x1, y1, x2, y2, color){
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.lineWidth = size
    ctx.strokeStyle = color
    ctx.stroke()
}

function updateSizeScreen(){
    sizeT.innerText = size
}
updateSizeScreen()

canvas.addEventListener('mousedown', (e) => {
    press = true
    x = e.offsetX
    y = e.offsetY
    x1 = e.offsetX
    y1 = e.offsetY
})

canvas.addEventListener('mouseup', () => {
    press = false
    x1 = undefined
    y1 = undefined
})

canvas.addEventListener('mousemove', (e) => {
    if(press){
        x = e.offsetX
        y = e.offsetY
        if(size>=11){
            drawC(x, y, size, color)
        }
        x2 = e.offsetX
        y2 = e.offsetY
        drawL(x1, y1, x2, y2, color)
        x1 = x2
        y1 = y2
    }
})

decrease.addEventListener('click',()=>{
    if(size>1){
        size-=1
    }
    updateSizeScreen()
})

increase.addEventListener('click',()=>{
    size+=1
    updateSizeScreen()
})

col.addEventListener('change',(e)=>{
    color = e.target.value
})

clear.addEventListener('click', ()=>{
    ctx.clearRect(0,0, canvas.width, canvas.height)
})