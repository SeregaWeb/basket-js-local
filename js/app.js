$( document ).ready(function() {

    function getLocalSt(){
        var arr = JSON.parse(localStorage.getItem('shop')) || [];
        return arr;
    }

    var mydata = JSON.parse(data),
    basket = getLocalSt();

    function basketShow(basket){
        $('.basket-list').text('');
        basket.forEach(function(val,key){
            var templateBasket = $('#template-basked').text();
            templateBasket = $(templateBasket);
            templateBasket.find('img').attr('src',val.img);
            templateBasket.find('.card-name').text(val.name);
            templateBasket.find('.card-bottom__price').text(val.price );
            templateBasket.find('.card-bottom__num').val(val.count);
            $('.basket-list').append(templateBasket);
        })
    }
    basketShow(basket);

    mydata.forEach(function(val, key ) {
        var template = $('#template-card').text();
        template = $(template);
        template.find('img').attr('src',val.img);
        template.find('.card-name').text(val.name);
        template.find('.card-bottom__price').text(val.price );
        
        $('.card-list').append(template);
    });

    $(document).on('click','.js-add',function(){
       var card = $(this).closest('li');
      
       fl = false;

       basket.forEach(function(val, key){
           if(card.index() == val.id){
               val.count ++;
            fl = true;
               return;
           }
           
       })

       if(false == fl){
            card.clone().appendTo('.basket-list');
            nawItem = {
                name:card.find('.card-name').text(),
                img:card.find('img').attr('src'),
                price:card.find('.card-bottom__price').text(),
                id:card.index(),
                count:1
            }

        basket.push(nawItem);

        }
        localStorage.setItem('shop', JSON.stringify(basket));
        basketShow(basket);

    })
  
});