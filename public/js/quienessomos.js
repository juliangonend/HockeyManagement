let cards = document.querySelectorAll(".card");

cards.forEach((card)=> {
    let info = card.querySelectorAll('.information')
    
        info.forEach((infor)=>{
            card.addEventListener('click',()=>{
            infor.classList.toggle('visible')
        })
        infor.classList.remove('visible')
    })
})