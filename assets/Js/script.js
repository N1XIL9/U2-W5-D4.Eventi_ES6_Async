const items = document.getElementById('items')

function selectItem(event) {
  let itemSelected = event.target
    itemSelected.classList.toggle('selected')
}

function trash (){
    let itemSelected = document.getElementById('trash')
    itemSelected.classList.trash('trash')
}