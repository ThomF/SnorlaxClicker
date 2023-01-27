let clickMaster = {
    click: 1,
    rest: 0,
    yawn: 0
}
let clickCash = {
    clickValue: 100
}
let clickAuto = {
    autoFeed: 50,
    autoCatch: 100
}
let upgradeCost = {
    rest: 5,
    yawn: 50
}
let clickVal = {
    rest: 0,
    yawn: 0
}


function mainClick(){
    let clicks = document.getElementById('clickCount')

    clicks.innerText = clickMaster.click++

    console.log(clickMaster.click)

    clickValue()
}



function clickValue(){
    let value = document.getElementById('clickValue')
    let clickValue = 0

    clickMaster.click * clickMaster.rest


}

function yawnUpgrade(){
    let yawnUpgrade = document.getElementById('yawnBtn')
    let yawnUp = document.getElementById('yawnUp')

    if (clickCash.clickValue >= upgradeCost.yawn) {
        clickVal.yawn++
        

    }
    yawnUpgrade.innerHTML = 
    console.log()
}