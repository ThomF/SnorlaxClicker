let clickMaster = {
    click: 0,
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
    yawn: 2,
    rest: 5
}
let clickVal = {
    rest: 0,
    yawn: 0
}


function mainClick(){
    let clicks = document.getElementById('clickCount')
    let clickValue = document.getElementById('clickValue')


    clicks.innerText = clickMaster.click++
    clickValue.innerText = clickCash.clickValue++ 
    console.log(clickMaster.click)

    clickUp()
}



function clickUp(){
    let value = document.getElementById('clickValue')


    if (clickVal.yawn > 0) {
        clickVal.yawn * 1.5
    }else{
        console.log('no yawn upgrades to click')
    }
    
    if (clickVal.rest > 0) {
        clickVal.rest * 1.5
    } else{
        console.log('no rest upgrades to click')
    }



}

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
    clickUp()
}

function restUpgrade(){
    let yawnUp = document.getElementById('restUp')
    let cValue = document.getElementById('clickValue')

    if (clickCash.clickValue >= upgradeCost.rest) {
        clickVal.rest++
        clickCash.clickValue -= upgradeCost.rest
    }else(
        console.log("not enough!")
    )

    console.log(clickCash.clickValue)
    yawnUp.innerText = clickVal.rest
    cValue.innerText = clickCash.clickValue
    console.log()
    clickUp()
}

