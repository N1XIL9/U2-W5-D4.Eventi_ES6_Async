const items = document.getElementById('items')

function selectItem(event) {
  let itemSelected = event.target
    itemSelected.classList.toggle('selected')
}

function getInputAndAddItem(eventObject) {

    if (eventObject.key !== 'Enter') {
      return;
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

  function trashItem () {
    let trash = document.getElementById ('items')
    trash.classList.remove('trash')
  }