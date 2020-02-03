// This function is used for clickking the caret and displaying links in block
function clickCaret() {
  let selectId = document.getElementById('myLinks');
  if (selectId.style.display === 'block') {
    selectId.style.display = 'none';
  }else {
    selectId.style.display = 'block';
  }
}
