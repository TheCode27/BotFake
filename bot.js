const quest = document.getElementById("quest")
const answer = document.getElementById("answer")

let init = 0

const botSay = (data) =>{
    return [
        "Halo, nama ku CodeBot siapa nama kamu ?",
        `Halo ${data?.nama}, berapa usia kamu ?`,
        `ohh ${data?.usia}, hobi kamu apa ?`,
        `wawwww sama dong aku juga hobi ${data?.hobi}, btw punya pacar gak ?`,
        `ohh udah ${data?.pacar}, kalau aku cuman robot mana punya pacar 😁, udahan ya chatnya ?`,
    ]
}

quest.innerHTML = botSay()[0]

let userData = []

function botStart() {
    init++
    if(init === 1) {
        console.log({nama:answer.value})
        botDelay({nama: answer.value })
    }else if (init === 2){
        console.log({usia:answer.value})
        botDelay({usia: answer.value })
    }else if (init === 3){
        console.log({hobi:answer.value})
        botDelay({hobi: answer.value })
    }else if (init === 4){
        console.log({pacar:answer.value})
        botDelay({pacar: answer.value })
    }else if (init === 5){
        finishing()
    }else {
        botEnd()
    }
}

function botDelay(jawabanuser){
    console.log({userData: userData})
    setTimeout(() => {
        quest.innerHTML = botSay(jawabanuser)[init]
    }, [1500])
    userData.push(answer.value)
    answer.value = ""
}

function finishing(){
    quest.innerHTML = `terimakasih yah ${userData[0]} !! 🤗`
    answer.value = "siap terimakasih juga!"
}

function botEnd() {
    window.location.reload()
}