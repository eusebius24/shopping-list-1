$(function(){


  

    $('#js-shopping-list-form').submit(function(event){
        event.preventDefault();
        var newItem = $(this).children('input').val();
        var newListItem = '<li><span class="shopping-item">' + newItem + 
            '</span>'+
            '<div class="shopping-item-controls">' + 
            '<button class="shopping-item-toggle">' +
            '<span class="button-label">check</span>' + 
            '</button>' +
          '  ' + '<button class="shopping-item-delete">' +
            '<span class="button-label">delete</span>' +
          '</button>' + '</li>'
        $(this).parents()
        .children('ul')
        .children('li')
        .last()
        .after(newListItem);
        $('#shopping-list-entry').val('');
    });

   

    $('.shopping-list').on('click', 'li div .shopping-item-toggle', function(){
        $(this).parents()
            .children('span')
            .toggleClass('shopping-item__checked');
    });

    $('.shopping-list').on('click','li div .shopping-item-delete', function(){
        $(this).parents('li')
            .remove();
    });

    $('#shopping-list-entry').keypress(function(event){
        var newItem = $(this).val();
        var keyCode = event.which;
        if (keyCode == 13) {
            var newListItem = '<li><span class="shopping-item">' + newItem + 
            '</span>'+
            '<div class="shopping-item-controls">' + 
            '<button class="shopping-item-toggle">' +
            '<span class="button-label">check</span>' + 
            '</button>' +  '  ' +
          '<button class="shopping-item-delete">' +
            '<span class="button-label">delete</span>' +
          '</button>' + '</li>'
             event.preventDefault();
        
            $(this).parents()
            .children('ul')
            .children('li')
            .last()
            .after(newListItem);
            $('#shopping-list-entry').val('');
        }
       
    });

   

   
});