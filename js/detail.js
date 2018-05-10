$( document ).ready(function() {

    var placeid = getUrlParameter('placeid');

    PlaceSearch.Detail(placeid).then(function(data){
        console.log(data);
        $('#gallery').empty();
        $('#placename').html(data.name);        
        $('#address').html(data.address);               
        $('#phone').html(data.phone);
        for(var i=0;i<data.photos.length;i++){            
            if (i === 0) {
            var row = 
                ' <div class="carousel-item active">' +
                    '<img src=' + data.photos[i] + ' class="d-block w-100 photo" alt="First slide" />'+
                '</div>';
            console.log(row)
            }else{
            var row = 
                ' <div class="carousel-item">' +
                    '<img src=' + data.photos[i] + ' class="d-block w-100 photo" alt="First slide" />'+
                '</div>';
            console.log(row)
            }
            $('#target').append(row);
        }
        var score = Math.round(data.rating);
        if (score === 0) {
            var rating = 
            '<span class="fa fa-star"></span>'+
            '<span class="fa fa-star"></span>'+
            '<span class="fa fa-star"></span>'+
            '<span class="fa fa-star"></span>'+
            '<span class="fa fa-star"></span>';
            $('#rating').html(rating);
        }else if (score === 1) {
            var rating = 
            '<span class="fa fa-star checked"></span>'+
            '<span class="fa fa-star"></span>'+
            '<span class="fa fa-star"></span>'+
            '<span class="fa fa-star"></span>'+
            '<span class="fa fa-star"></span>';
            $('#rating').html(rating);
        }else if (score === 2) {
            var rating = 
            '<span class="fa fa-star checked"></span>'+
            '<span class="fa fa-star checked"></span>'+
            '<span class="fa fa-star"></span>'+
            '<span class="fa fa-star"></span>'+
            '<span class="fa fa-star"></span>';
            $('#rating').html(rating);
        }else if (score === 3) {
            var rating = 
            '<span class="fa fa-star checked"></span>'+
            '<span class="fa fa-star checked"></span>'+
            '<span class="fa fa-star checked"></span>'+
            '<span class="fa fa-star"></span>'+
            '<span class="fa fa-star"></span>';
            $('#rating').html(rating);
        }else if (score === 4) {
            var rating = 
            '<span class="fa fa-star checked"></span>'+
            '<span class="fa fa-star checked"></span>'+
            '<span class="fa fa-star checked"></span>'+
            '<span class="fa fa-star checked"></span>'+
            '<span class="fa fa-star"></span>';
            $('#rating').html(rating);
        }else if (score === 5) {
            var rating = 
            '<span class="fa fa-star checked"></span>'+
            '<span class="fa fa-star checked"></span>'+
            '<span class="fa fa-star checked"></span>'+
            '<span class="fa fa-star checked"></span>'+
            '<span class="fa fa-star checked"></span>';
            $('#rating').html(rating);
        }

        if (data.open_now === true) {
            $('#opennow').html("Open!");
            $('#opennow').css("color", "green"); 
        }else{
            $('#opennow').html("Closed!");
            $('#opennow').css("color", "red");  
        }

    });

    //Get URL parameter
    function getUrlParameter(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    }

});