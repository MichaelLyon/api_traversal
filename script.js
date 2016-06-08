var userInput1 = $('.userInput')[0];
var submitButton1 =$('.submitButton')[0];
var divToAppendTo = document.getElementById('center_column');

$('.submitButton').click(function(event){
  var jsonObj = $.get(('http://www.omdbapi.com/?s=' + userInput1.value),function(ele){
    updateDom(ele);
  });
  event.preventDefault();
})

function updateDom(obj){
  console.log(obj);
  divToAppendTo.innerHTML = '';
  for (var i = 0; i < obj.Search.length; i++) {
    var newPicture = document.createElement('img');
    var newTitle = document.createElement('div');
    var spacingBR = document.createElement('br');
    newTitle.id = 'titleClass';
    console.log(newTitle);
    var newContent = document.createTextNode(obj.Search[i].Title);
    if(obj.Search[i].Poster==='N/A'){
        newPicture.src = 'mockups/images/no_image.png';
    }else{
        newPicture.src = obj.Search[i].Poster;
    }
    newTitle.appendChild(newContent);
    divToAppendTo.appendChild(newTitle);
    divToAppendTo.appendChild(newPicture);
    divToAppendTo.appendChild(spacingBR);
  }
}
