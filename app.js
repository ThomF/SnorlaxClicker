let isAutoUpRunning = false

let clickMaster = {
    click: 0,

    clickValue: 200,
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
        price: 25,
        quantity: 0,
        multiplier: 0,
    }
];

let autoClickUpgrades = [
    {
        name: 'HyperBeam',
        price: 200,
        quantity: 0,
        multiplier: 0
    },
    {
        name: 'Pound',
        price: 2500,
        quantity: 0,
        multiplier: 0,
}]

let totalUp = {
    total: 0
}
let totalAutoUp = {
    total: 0
}


function mainClick(){
    let clicks = document.getElementById('clickCount')
    let clickValue = document.getElementById('clickValue')
    // let upgradedClick = totalUp.total += clickMaster.clickValue
    
    clicks.innerText = clickMaster.click += 1
    clickMaster.clickValue = clickMaster.clickValue + 1 + totalUp.total
    clickValue.innerText = clickMaster.clickValue
    console.log(clickMaster.click)

    // totalUp.total += clickMaster.clickValue
    
    
    clickUp()
    clickAutoUp()
    autoClicking()
    // drawClick()
    console.log(totalUp.total)
}

function buyUpgrades(upgradeName){
    let clickValue = document.getElementById('clickValue')
    let yawnUp = document.getElementById('yawnUp')
    let restUp = document.getElementById('restUp')
    let yBtn = document.getElementById('yawnBtn')
    let rBtn = document.getElementById('restBtn')
    let yawnTotal = document.getElementById('yawnTotal')
    let yawnTotal2 = document.getElementById('yawnTotal2')
    
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
            yawnTotal.innerText = purchasedUpgrade.multiplier
        }else if (purchasedUpgrade.name == 'rest'){
            purchasedUpgrade.quantity += 1
            purchasedUpgrade.multiplier += 5
            purchasedUpgrade.price +=25
            console.log(purchasedUpgrade.price)
            rBtn.innerText = purchasedUpgrade.price
            yawnTotal2.innerText = purchasedUpgrade.multiplier
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
    let hbTotal = document.getElementById('hbTotal')
    let poundTotal = document.getElementById('poundTotal')

    const autoClickUp = autoClickUpgrades.find(p => p.name == upgradeName)
    console.log(autoClickUp);
    
    if (clickMaster.clickValue >= autoClickUp.price) {
        clickMaster.clickValue -= autoClickUp.price
        
        if (autoClickUp.name == 'HyperBeam') {
            autoClickUp.quantity += 1
            autoClickUp.multiplier += 75
            autoClickUp.price +=200
            console.log(autoClickUp.price)
            yBtn.innerText = autoClickUp.price
            hbTotal.innerText = autoClickUp.multiplier
        }else if (autoClickUp.name == 'Pound'){
            autoClickUp.quantity += 1
            autoClickUp.multiplier += 150
            autoClickUp.price +=350
            console.log(autoClickUp.price)
            rBtn.innerText = autoClickUp.price
            poundTotal.innerText = autoClickUp.multiplier
        } else if (clickMaster.clickValue < autoClickUp.price) {
        autoClickUp.quantity += 0
    }
    if (autoClickUp.name == 'HyperBeam') {
        yawnUp.innerText = autoClickUp.quantity
        // purchasedUpgrade.quantity += totalUp.total++
    }else if (autoClickUp.name == 'Pound'){
        restUp.innerText = autoClickUp.quantity
        // purchasedUpgrade.quantity += totalUp.total
    }else{
        console.log("how did you get here")
    }
    
    clickValue.innerText = clickMaster.clickValue
    clickAutoUp()
}
}

function clickUp(){
    totalUp.total = clickUpgrades.reduce((acc, cur) => acc + cur.multiplier, 0)
    console.log(totalUp)
    updateClickPlus()
}

function updateClickPlus(){
    let upPlus = document.getElementById('totalPerClick')
    upPlus.innerText = totalUp.total + 1
}

function clickAutoUp(){
    totalAutoUp.total = autoClickUpgrades.reduce((acc, cur) => acc + cur.multiplier, 0)
    console.log(totalAutoUp)
    updateAutoClickPlus()
}
function updateAutoClickPlus(){
    let upPlus = document.getElementById('totalAuto')
    upPlus.innerText = totalAutoUp.total
}

function autoUpdater(){
    let clickValue = document.getElementById('clickValue')
    if(totalAutoUp.total > 0){
        clickMaster.clickValue = clickMaster.clickValue + totalAutoUp.total
        clickValue.innerText = clickMaster.clickValue
        // totalAutoUp.total += clickMaster.clickValue
    }
}
function autoClicking(){
    if (!isAutoUpRunning) {
        setInterval(autoUpdater, 4000)
        isAutoUpRunning = true;
    }
}

function drawClick(){
    let total = document.getElementById('totalPerClick')

    if (totalUp.total < 1) {
        total.innerText += 1
    }
    console.log(totalUp.total)
}
