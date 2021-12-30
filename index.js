$(document).ready(function() {

    // bannner owl carousel
    $('#banner-area .owl-carousel').owlCarousel({
        dots: true,
        items: 1,
        autoplay: true,
        slideTransition: 'linear',
        autoplaySpeed: 1000,
        smartSpeed: 100,
        center: true,
        loop: true
    });

    // top sale owl carousel
    $('#top-sale .owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

    // isotope filter
    var $grid = $(".grid").isotope({
        itemSelector:'.grid-item',
        layoutMode:'fitRows',
        masonry: {
            isFitWidth: true,
        }
    });

    // filter items on btn click
    $(".btn-group").on("click","button", function(){
        var $filterValue = $(this).attr('data-filter');
        $grid.isotope({filter: $filterValue});
    })

    // new phones owl carousel
    $('#new-phones .owl-carousel').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

    // blogs owl carousel
    $('#blogs .owl-carousel').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            750: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })

    // product qty section
    let $qty_up = $('.qty .qty-up');
    let $qty_down = $('.qty .qty-down');
    let $qty_input = $('.qty .qty-input');

    // click on qty-up button
    $qty_up.click(function(e){
        if($qty_input.val() >= 0 && $qty_input.val() <= 99){
            $qty_input.val(function(i, oldval){
                return ++oldval;
            })
        }
    })

    // click on qty-down button
    $qty_down.click(function(e){
        if($qty_input.val() <= 100 && $qty_input.val() > 1){
            $qty_input.val(function(i, oldval){
                return --oldval;
            });
        }
    })

    // cart qty buttons
    let $product1_qty_up = $('.qty .product1-qty-up');
    let $product1_qty_down = $('.qty .product1-qty-down');
    let $product2_qty_up = $('.qty .product2-qty-up');
    let $product2_qty_down = $('.qty .product2-qty-down');
    let $qty_input1 = $('.qty .qty-input1');
    let $qty_input2 = $('.qty .qty-input2');

    // click on qty-up 1 button
    $product1_qty_up.click(function(e){
        if($qty_input1.val() >= 0 && $qty_input1.val() <= 99){
            $qty_input1.val(function(i, oldval){
                return ++oldval;
            })
        }
    })

    // click on qty-up 1 button
    $product1_qty_down.click(function(e){
        if($qty_input1.val() <= 100 && $qty_input1.val() > 1){
            $qty_input1.val(function(i, oldval){
                return --oldval;
            })
        }
    })
    // click on qty-up 1 button
    $product2_qty_up.click(function(e){
        if($qty_input2.val() >= 0 && $qty_input2.val() <= 99){
            $qty_input2.val(function(i, oldval){
                return ++oldval;
            })
        }
    })

    // click on qty-up 1 button
    $product2_qty_down.click(function(e){
        if($qty_input2.val() <= 100 && $qty_input2.val() > 1){
            $qty_input2.val(function(i, oldval){
                return --oldval;
            })
        }
    })

});













