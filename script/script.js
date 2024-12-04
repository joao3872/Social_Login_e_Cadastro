let btn = document.querySelectorAll('.btn_social')

let icons = document.querySelectorAll('.icons')

let voltar = document.querySelector('.voltar')




// Função criada para substituir o ícone, quando o cursor do mouse, está dentro do botão / link.

function hoverOn() {
    for (let c = 0; c < btn.length; c++) {
        btn[c].addEventListener('mouseenter', () => {
            if (btn[c] == btn[0]) {
                icons[0].setAttribute('src', 'imagens/facebook-brands-solid2.svg')
            } else if (btn[c] == btn[1]) {
                icons[1].setAttribute('src', 'imagens/twitter-brands-solid2.svg')
            } else {
                icons[2].setAttribute('src', 'imagens/github-brands2.svg')
            }
        })
    }
}

hoverOn()


// Função para desfazer a substituição dos ícones, quando o cursor do mouse estiver fora do botão / link.

function hoverOff() {
    for (let c = 0; c < btn.length; c++) {
        btn[c].addEventListener('mouseleave', () => {
            if (btn[c] == btn[0]) {
                icons[0].setAttribute('src', 'imagens/facebook-brands-solid.svg')
            } else if (btn[c] == btn[1]) {
                icons[1].setAttribute('src', 'imagens/twitter-brands-solid.svg')
            } else {
                icons[2].setAttribute('src', 'imagens/github-brands-solid.svg')
            }
        })
    }
}

hoverOff()



const screenTouch = window.matchMedia("(max-width: 1007px)")

function touchHover(event) {
    if (event.matches) {
        for (let c = 0; c < btn.length; c++) {
            btn[c].addEventListener('touchstart', () => {
                if (btn[c] == btn[0]) {
                    icons[0].setAttribute('src', 'imagens/facebook-brands-solid2.svg')
                } else if (btn[c] == btn[1]) {
                    icons[1].setAttribute('src', 'imagens/twitter-brands-solid2.svg')
                } else {
                    icons[2].setAttribute('src', 'imagens/github-brands2.svg')
                }
            })

            btn[c].addEventListener('touchend', () => {
                setTimeout(() => {
                    if (btn[c] == btn[0]) {
                        icons[0].setAttribute('src', 'imagens/facebook-brands-solid.svg')
                    } else if (btn[c] == btn[1]) {
                        icons[1].setAttribute('src', 'imagens/twitter-brands-solid.svg')
                    } else {
                        icons[2].setAttribute('src', 'imagens/github-brands-solid.svg')
                    }
                }, 3000)
            })
        }
    }
}

touchHover(screenTouch)
