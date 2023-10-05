var insertButton = document.getElementById('insertButton');
var listContainer = document.getElementById('listContainer');
var sportSelector = document.getElementById('sportSelector');
var imageInput = document.getElementById('imageInput');
var profileImage = document.getElementById('profileImage');

insertButton.addEventListener('click', function() {
  var sport = sportSelector.value;

  // Criar o novo elemento da lista
  var listItem = document.createElement('li');
  listItem.textContent = sport;

  // Criar o botão de remoção
  var removeButton = document.createElement('button');
  removeButton.textContent = 'Remover';

  removeButton.addEventListener('click', function() {
    listContainer.removeChild(listItem);
  });

  // Adicionar o botão de remoção ao elemento da lista
  listItem.appendChild(removeButton);

  // Adicionar o elemento da lista ao contêiner
  listContainer.appendChild(listItem);
});



function addItem() {
  var textInput = document.getElementById('textInput');
  var itemText = textInput.value.trim();

  if (itemText !== '') {
    var VContainer = document.getElementById('VContainer');

    var listItem = document.createElement('li');
    listItem.textContent = itemText;

    VContainer.appendChild(listItem);

    textInput.value = '';
  }
}

  //Evento que remove o item ao clicar no botão
  imageInput.addEventListener('change', function() {
    if (imageInput.files && imageInput.files[0]) {
      var reader = new FileReader();
  
      reader.onload = function(e) {
        profileImage.src = e.target.result;
      };
  
      reader.readAsDataURL(imageInput.files[0]);
    }
  });

  

  