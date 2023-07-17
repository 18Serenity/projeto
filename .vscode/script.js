function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag image
  const img = document.querySelector("#profile img") //a função: queryselector= pesquisa pelo seletor eo que vai entre parenteses é o argumento.

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem sakura.jpeg
    img.setAttribute("src","./assets/sakura.png")//é a função
    img.setAttribute("alt", "foto da sakura sorrindo, com cabello rosa e roupa verde")
  } else {
    //se tiver sem light mode manter a imagem normal
    img.setAttribute("src", "./assets/avatar-dark.png")
    img.setAttribute("alt","foto da sakura sorrindo, com cabelo rosa e roupa vermelha")
  }

}
 //o toggle faz essa condição SE(os if e else acima) sozinho