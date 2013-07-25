// Traverse the DOM!

function traverseDom(searchTerm){
    var elements = document.getElementsByName(searchTerm);

    for (var i = 0; i < elements.length; i++){
        if (elements[i].innerText === searchTerm) {
            return elements[i];
        }
    }
return null;
}

traverseDom('i heart js');

