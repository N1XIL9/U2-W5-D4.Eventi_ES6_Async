const items = document.getElementById('items')

function selectItem(event) {
  let itemSelected = event.target
    itemSelected.classList.toggle('selected')
}

function getInputAndAddItem(eventObject) {

    if (eventObject.key !== 'Enter') { // Questa funzione, se non premo Enter, non fa nulla.
      return; // Ritorna subito, esce subito.
    }
  
    let input = document.getElementById('input-item')

    if (input.value !== '') {
      items.innerHTML += `<div class="item" onclick="selectItem(event)">${input.value}<i class="fa-solid fa-trash-can"
      onclick="trashItem()"></i></div>`
      input.value = ''
  
    } else {
      alert("Il campo di testo è vuoto!")
      input.style.borderColor = 'red'
    }
  }

function trashItem (){
    let trash = 
}