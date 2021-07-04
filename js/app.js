function findBlock(transformation) {
    const propertySelector = `.property--${transformation}`
    return document.querySelector(propertySelector).lastElementChild.lastElementChild
}

function createBtn(transformation) {
    const idOfButton = `btn--${transformation}`
    buttons = document.querySelectorAll('button')
    for (let button of buttons) {
        if (button.id === idOfButton) {
            button.addEventListener('click', () => {
                const block = findBlock(transformation)
                if (button.classList.contains('btn--reset')) {
                    block.classList.remove(transformation)
                    button.classList.remove('btn--reset')
                    button.innerText = button.getAttribute('data-name')
                } else {
                    block.classList.add(transformation)
                    button.classList.add('btn--reset')
                    button.setAttribute('data-name', button.innerText)
                    button.innerText = 'Un' + transformation
                }
            })
        }
    }
    console.log(`Button for ${transformation} is found`)
}

createBtn('translate')

createBtn('scale')

createBtn('rotate')

createBtn('skew')

createBtn('many-transforms')

createBtn('transform-origin')

createBtn('perspective')

createBtn('perspective-origin')

createBtn('translate3D')

createBtn('scale3D')

createBtn('rotate3D')

createBtn('many-transforms3D')

createBtn('trf-style-flat')

createBtn('trf-style-preserve-3d')

createBtn('backface-visibility')

const resetBtn = document.querySelector('#btn--reset-all')
resetBtn.addEventListener('click', () => {
    const blocks = document.querySelectorAll('.property__block')
    for (let block of blocks) {
        block.classList = 'property__block'
    }
    for (let button of buttons) {
        if (button.classList.contains('btn--reset')) {
            button.classList.remove('btn--reset')
            button.innerText = button.getAttribute('data-name')
        }
    }
})