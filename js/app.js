// const translateBtn = document.querySelector('#btn--translate')
// const scaleBtn = document.querySelector('#btn--scale')
// const rotateBtn = document.querySelector('#btn--rotate')
// const skewBtn = document.querySelector('#btn--skew')

// translateBtn.addEventListener('click', () => {
//     const block = findBlock('translate')
//     block.classList.add('translate')
// })

createBtn('translate')

// scaleBtn.addEventListener('click', () => {
//     scaleBlock.classList.add('scale')
// })

createBtn('scale')

// rotateBtn.addEventListener('click', () => {
//     rotateBlock.classList.add('rotate')
// })

createBtn('rotate')

// skewBtn.addEventListener('click', () => {
//     skewBlock.classList.add('skew')
// })

createBtn('skew')

createBtn('many-transforms')

function findBlock(transformation) {
    const selector = `.property--${transformation}`
    return document.querySelector(selector).lastElementChild.lastElementChild
}

function createBtn(transformation) {
    const selector = `#btn--${transformation}`
    button = document.querySelector(selector)
    button.addEventListener('click', () => {
        const block = findBlock(transformation)
        block.classList.add(transformation)
    })
    console.log(`Button for ${transformation} is found`)
}