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
    let clickValue = document.getElementById('clickValue')

    clickValue.innerText = clickCash.clickValue
    clicks.innerText = clickMaster.click++
    console.log(clickMaster.click)

    // clickValue()
}



// function clickValue(){
//     let value = document.getElementById('clickValue')
//     let clickValue = 0

//     clickMaster.click * clickMaster.rest


// }

function yawnUpgrade(){
    let yawnUp = document.getElementById('yawnUp')
    let cValue = document.getElementById('clickValue')

    if (clickCash.clickValue >= upgradeCost.yawn) {
        clickVal.yawn++
        clickCash.clickValue -= upgradeCost.yawn
    }else(
        console.log("not enough!")
    )

    console.log(clickCash.clickValue)
    yawnUp.innerText = clickVal.yawn
    cValue.innerText = clickCash.clickValue
    console.log()
}

