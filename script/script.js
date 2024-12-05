let btn = document.querySelectorAll('.btn_social')

let icons = document.querySelectorAll('.icons')

let voltar = document.querySelector('.voltar')




// Função criada para substituir o ícone, quando o cursor do mouse, está dentro do botão / link.

function hoverOn() {
    for (let c = 0; c < btn.length; c++) {
        btn[c].addEventListener('mouseenter', () => {
            if (btn[c] == btn[0]) {
                icons[0].setAttribute('src', 'imagens/facebook-brands-solid2.svg')
                btn[0].style.background = 'var(--blue-dark)'
            } else if (btn[c] == btn[1]) {
                icons[1].setAttribute('src', 'imagens/twitter-brands-solid2.svg')
                btn[1].style.background = 'var(--blue-light)'
            } else {
                icons[2].setAttribute('src', 'imagens/github-brands2.svg')
                btn[2].style.background = 'var(--black)'
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
                btn[0].style.background = 'none'
            } else if (btn[c] == btn[1]) {
                icons[1].setAttribute('src', 'imagens/twitter-brands-solid.svg')
                btn[1].style.background = 'none'
            } else {
                icons[2].setAttribute('src', 'imagens/github-brands-solid.svg')
                btn[2].style.background = 'none'
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
                    btn[0].style.background = 'var(--blue-dark)'
                } else if (btn[c] == btn[1]) {
                    icons[1].setAttribute('src', 'imagens/twitter-brands-solid2.svg')
                    btn[1].style.background = 'var(--blue-light)'
                } else {
                    icons[2].setAttribute('src', 'imagens/github-brands2.svg')
                    btn[2].style.background = 'var(--black)'
                }
            })

            btn[c].addEventListener('touchend', () => {
                setTimeout(() => {
                    if (btn[c] == btn[0]) {
                        icons[0].setAttribute('src', 'imagens/facebook-brands-solid.svg')
                        btn[0].style.background = 'none'
                    } else if (btn[c] == btn[1]) {
                        icons[1].setAttribute('src', 'imagens/twitter-brands-solid.svg')
                        btn[1].style.background = 'none'
                    } else {
                        icons[2].setAttribute('src', 'imagens/github-brands-solid.svg')
                        btn[2].style.background = 'none'
                    }
                }, 3000)
            })
        }
    }
}

touchHover(screenTouch)





const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)')

function changeTheme(event) {
    if (event.matches) {
        for (let c = 0; c < btn.length; c++) {
            icons[0].setAttribute('src', 'imagens/facebook-brands-solid.svg')
            icons[1].setAttribute('src', 'imagens/twitter-brands-solid.svg')
            icons[2].setAttribute('src', 'imagens/github-brands2.svg')
            
            btn[c].addEventListener('mouseenter', () => {
                if (btn[c] == btn[0]) {
                    icons[0].setAttribute('src', 'imagens/facebook-brands-solid3.svg')
                    btn[0].style.background = 'var(--blue)'
                } else if (btn[c] == btn[1]) {
                    icons[1].setAttribute('src', 'imagens/twitter-brands-solid3.svg')
                    btn[1].style.background = 'var(--blue-light)'
                } else {
                    icons[2].setAttribute('src', 'imagens/github-brands-solid.svg')
                    btn[2].style.background = 'var(--white)'
                }
            })
        }


        for (let c = 0; c < btn.length; c++) {
            btn[c].addEventListener('mouseleave', () => {
                if (btn[c] == btn[0]) {
                    icons[0].setAttribute('src', 'imagens/facebook-brands-solid.svg')
                    btn[0].style.background = 'none'
                } else if (btn[c] == btn[1]) {
                    icons[1].setAttribute('src', 'imagens/twitter-brands-solid.svg')
                    btn[1].style.background = 'none'
                } else {
                    icons[2].setAttribute('src', 'imagens/github-brands2.svg')
                    btn[2].style.background = 'none'
                }
            })
        }
    }
}

// Escuta a mudança de Tema, na função changeTheme(event) com base no perfersColorScheme.

prefersColorScheme.addListener(changeTheme)

// Após as mudanças serem escutadas, as mudanças são aplicadas.

changeTheme(prefersColorScheme)




function iconVoltar() {
    voltar.addEventListener('mouseenter', () => {
        voltar.setAttribute('src', 'imagens/arrow-left-solid2.svg')
    })

    voltar.addEventListener('mouseleave', () => {
        voltar.setAttribute('src', 'imagens/arrow-left-solid.svg')
    })

    voltar.addEventListener('touchstart', () => {
        voltar.setAttribute('src', 'imagens/arrow-left-solid2.svg')
    })

    voltar.addEventListener('touchend', () => {
        setTimeout(() => {
            voltar.setAttribute('src', 'imagens/arrow-left-solid.svg')
        }, 3000)
    })
}

iconVoltar()
