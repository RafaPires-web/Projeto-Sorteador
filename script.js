const Sorts = document.getElementById("Sorteio") // botao

function gerador() {
    const input1 = Math.ceil(document.querySelector(".Firstvalue").value )
    const input2  = Math.floor(document.querySelector(".Secondvalue").value )

  const result = Math.floor(Math.random() * (input2 - input1 ))+ input1;
  alert(result)
}


