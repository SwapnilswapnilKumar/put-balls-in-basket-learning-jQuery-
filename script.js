var colors = ['red', 'blue', 'yellow', 'lightgrey', 'darkorchid', 'black', 'orange', 'deeppink', 'green', 'purple', 'saddlebrown', 'lightseagreen', 'deepskyblue', 'firebrick', 'crimson'];

var box = $('#box')

$('button').click(function(e){
    var randomColor = colors[Math.floor(Math.random()*colors.length)]
    box.append(`<div class="ball" style="background-color:${randomColor}"</div>`)
});