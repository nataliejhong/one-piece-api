document.querySelector('#getButton').addEventListener('click', apiRequest)

async function apiRequest(){
    const nakama = document.querySelector('input').value
    try{
        const response = await fetch(`https://one-piece-oda-api.herokuapp.com/api/${nakama}`)
        const data = await response.json()
        console.log(data)

        document.getElementById('opName').innerText = data.name
        document.getElementById('opAge').innerText = data.currentAge
        document.getElementById('opOccupation').innerText = data.occupation
        document.getElementById('opPosition').innerText = data.crewPosition
        document.getElementById('opCrew').innerText = data.crew
        document.getElementById('opHome').innerText = data.home
        document.getElementById('opBounty').innerText = data.bounty
        
        document.getElementById('opImage').src = data.image
        document.getElementById('alienCaption').innerText = data.name

    } catch(error){
        console.log(error)
    }
}