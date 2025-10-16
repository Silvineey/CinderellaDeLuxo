function botoes(){
    const menu=document.querySelector(".menu")
    menu.classList.toggle("ativo")
}

function ocultar(){
    const conteiner=document.querySelector(".conteiner")
    conteiner.classList.add("ocultar")

    setTimeout(() => {
        conteiner.style.display="none"
    }, 1000);
}

function galeria(id){
    const clicado=document.getElementById(id)
    if(!clicado)return
    clicado.style.display="flex"
    void clicado.offsetHeight
    clicado.style.opacity="1"
    clicado.style.visibility="visible"

    const galerias=document.querySelectorAll("section.conteiner")
    galerias.forEach(sections=>{
        if(sections!==clicado){
            sections.style.opacity=0
            sections.style.visibility="hidden"
            setTimeout(() => {
                sections.style.display="none"
            }, 1000);
        }
    })
}