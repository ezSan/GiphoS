//ApiKey giphy
const apiKey = "2F7Zwq8U9gs2PssCkAKfR65Ned1IPdpb";

// Autocomplete endpoint
let userSearchinput = document.getElementById(`search`);

let displayAutocompleSuggestions


// Agregar - remover clases al DOM
const addClass = (nodeElement, className) => {
    nodeElement.classList.add(className);
  }

const removeClass = (nodeElement, className) => {
    nodeElement.classList.remove(className);
}

const toggleClass = (nodeElement, className) => {
    nodeElement.classList.toggle(className);
  }


