let clickMaster = {
    click: 0,
    clickValue: 100,
}
// let clickCash = {
//     clickValue: 100
// }
let clickAuto = {
    autoFeed: 50,
    autoCatch: 100
}
// let upgradeCost = {
//     yawn: 2,
//     rest: 5
// }
let clickVal = {
    rest: 0,
    yawn: 0
}

let clickUpgrades = [
    {
    name: 'yawn',
    price: 3,
    quantity: 0,
    multiplier: 1.2
    },
    {
        name: 'rest',
        price: 6,
        quantity: 0,
        multiplier: 1.8
    }
];


function mainClick(){
    let clicks = document.getElementById('clickCount')
    let clickValue = document.getElementById('clickValue')


    clicks.innerText = clickMaster.click++
    clickValue.innerText = clickMaster.clickValue++ 
    console.log(clickMaster.click)

    // clickUp()
}

function buyUpgrades(upgradeName){
    let clickValue = document.getElementById('clickValue')
    let yawnUp = document.getElementById('yawnUp')

    const purchasedUpgrade = clickUpgrades.find(p => p.name == upgradeName)
    
    console.log(purchasedUpgrade);
    if (clickMaster.clickValue >= purchasedUpgrade.price) {
        clickMaster.clickValue -= purchasedUpgrade.price
    }
    purchasedUpgrade.quantity += 1
    yawnUp.innerText = purchasedUpgrade.quantity
    clickValue.innerText = clickMaster.clickValue
}

function addUpgrade(){
    let yawnUp = document.getElementById('yawnUp')
    let cValue = document.getElementById('clickValue')
    yawnUp.innerText = yawnUpgrade.quantity
    cValue.innerText = clickMaster.clickValue
}


// function clickUp(){
//     let value = document.getElementById('clickValue')


//     if (clickVal.yawn > 0) {
//         clickVal.yawn * 1.5
//     }else{
//         console.log('no yawn upgrades to click')
//     }
    
//     if (clickVal.rest > 0) {
//         clickVal.rest * 1.5
//     } else{
//         console.log('no rest upgrades to click')
//     }
// }

// function yawnUpgrade(){

//     let yawnUp = document.getElementById('yawnUp')
//     let cValue = document.getElementById('clickValue')

//     if (clickMaster.clickValue >= clickUpgrade.price) {
//         yawnClick.quantity++
//         clickMaster.clickValue -= clickUpgrade.price
//     }else(
//         console.log("not enough!")
//     )

//     console.log(clickCash.clickValue)
//     yawnUp.innerText = yawnUpgrade.quantity
//     cValue.innerText = clickMaster.clickValue
//     console.log()
//     // clickUp()
// }

// function restUpgrade(){
    
// }

