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
    price: 0,
    quantity: 0,
    // multiplier refers to each time a +1 is bought it is stores as that/ if 4 plus 3 are bought multiplier hold 12 3+3+3+3
    multiplier: 0,
    },
    {
        name: 'rest',
        price: 5,
        quantity: 0,
        multiplier: 0,
    }
];

let autoClickUp = [
    {
        name: 'HyperBeam',
        price: 100,
        quantity: 0,
        multiplier: 0
    },
    {
        name: 'Pound',
        price: 250,
        quantity: 0,
        multiplier: 0,
}]

let totalUp = {
    total: 0
}


function mainClick(){
    let clicks = document.getElementById('clickCount')
    let clickValue = document.getElementById('clickValue')
    let upgradedClick = totalUp.total += clickMaster.clickValue
    
    clicks.innerText = clickMaster.click++
    clickValue.innerText = clickMaster.clickValue =+ totalUp.total
    console.log(clickMaster.click)

    totalUp.total += clickMaster.clickValue
    clickMaster.clickValue++
    
    clickUp()
}

function buyUpgrades(upgradeName){
    let clickValue = document.getElementById('clickValue')
    let yawnUp = document.getElementById('yawnUp')
    let restUp = document.getElementById('restUp')
    let yBtn = document.getElementById('yawnBtn')
    let rBtn = document.getElementById('restBtn')

    const purchasedUpgrade = clickUpgrades.find(p => p.name == upgradeName)
    console.log(purchasedUpgrade);
    if (clickMaster.clickValue >= purchasedUpgrade.price) {
        clickMaster.clickValue -= purchasedUpgrade.price
        
        if (purchasedUpgrade.name == 'yawn') {
            purchasedUpgrade.quantity += 1
            purchasedUpgrade.multiplier += 1
            purchasedUpgrade.price +=10
            console.log(purchasedUpgrade.price)
            yBtn.innerText = purchasedUpgrade.price
            
        }else if (purchasedUpgrade.name == 'rest'){
            purchasedUpgrade.quantity += 1
            purchasedUpgrade.multiplier += 5
            purchasedUpgrade.price +=25
            console.log(purchasedUpgrade.price)
            rBtn.innerText = purchasedUpgrade.price
            
        } else if (clickMaster.clickValue < purchasedUpgrade.price) {
        purchasedUpgrade.quantity += 0
    }
    if (purchasedUpgrade.name == 'yawn') {
        yawnUp.innerText = purchasedUpgrade.quantity
        // purchasedUpgrade.quantity += totalUp.total++
    }else if (purchasedUpgrade.name == 'rest'){
        restUp.innerText = purchasedUpgrade.quantity
        // purchasedUpgrade.quantity += totalUp.total
    }else{
        console.log("how did you get here")
    }
    
    clickValue.innerText = clickMaster.clickValue
    clickUp()
}
}

function buyAutoUp(upgradeName){
    let clickValue = document.getElementById('clickValue')
    let yawnUp = document.getElementById('hyperUp')
    let restUp = document.getElementById('poundUp')
    let yBtn = document.getElementById('hyperBtn')
    let rBtn = document.getElementById('poundBtn')

    const autoClickUp = clickUpgrades.find(p => p.name == upgradeName)
    console.log(autoClickUp);
    
    if (clickMaster.clickValue >= autoClickUp.price) {
        clickMaster.clickValue -= autoClickUp.price
        
        if (autoClickUp.name == 'HyperBeam') {
            autoClickUp.quantity += 1
            autoClickUp.multiplier += 1
            autoClickUp.price +=200
            console.log(autoClickUp.price)
            yBtn.innerText = autoClickUp.price
            
        }else if (autoClickUp.name == 'Pound'){
            autoClickUp.quantity += 1
            autoClickUp.multiplier += 5
            autoClickUp.price +=350
            console.log(autoClickUp.price)
            rBtn.innerText = autoClickUp.price
            
        } else if (clickMaster.clickValue < autoClickUp.price) {
        autoClickUp.quantity += 0
    }
    if (autoClickUp.name == 'HyperBea,') {
        yawnUp.innerText = autoClickUp.quantity
        // purchasedUpgrade.quantity += totalUp.total++
    }else if (autoClickUp.name == 'Pound'){
        restUp.innerText = autoClickUp.quantity
        // purchasedUpgrade.quantity += totalUp.total
    }else{
        console.log("how did you get here")
    }
    
    clickValue.innerText = clickMaster.clickValue
    clickUp()
}
}

function clickUp(){

    totalUp.total = clickUpgrades.reduce((acc, cur) => acc + cur.multiplier, 0)
    console.log(totalUp)

    updateClickPlus()
}

function updateClickPlus(){
    let upPlus = document.getElementById('totalPerClick')
    upPlus.innerText = totalUp.total
}

function autoUpgrade(){
    let clickValue = document.getElementById('clickValue')
let yawnUp = document.getElementById('yawnUp')
let restUp = document.getElementById('restUp')


const purchasedUpgrade = clickUpgrades.find(p => p.name == upgradeName)


console.log(purchasedUpgrade);
if (clickMaster.clickValue >= purchasedUpgrade.price) {

    clickMaster.clickValue -= purchasedUpgrade.price
    
    if (purchasedUpgrade.name == 'yawn') {
        purchasedUpgrade.quantity += 1
        purchasedUpgrade.multiplier += 1
    }else if (purchasedUpgrade.name == 'rest'){
        purchasedUpgrade.quantity += 1
        purchasedUpgrade.multiplier += 3
    } else if (clickMaster.clickValue < purchasedUpgrade.price) {
    purchasedUpgrade.quantity += 0
}




if (purchasedUpgrade.name == 'yawn') {
    yawnUp.innerText = purchasedUpgrade.quantity
    // purchasedUpgrade.quantity += totalUp.total++

}else if (purchasedUpgrade.name == 'rest'){
    restUp.innerText = purchasedUpgrade.quantity
    // purchasedUpgrade.quantity += totalUp.total

}else{
    console.log("how did you get here")
}


clickValue.innerText = clickMaster.clickValue

}

}
