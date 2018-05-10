$(function () {

    $('#search').click(function(){
        $('#searchresult').empty();
        var keyword = $('#keyword').val();
        var type = $('#type').val();
        var radius = $('#radius').val();
        PlaceSearch.Search(keyword, type, radius).then(function(data){
            for(var i=0;i<data.length;i++){
                var row = 
                '<a href="detail.html?placeid=' + data[i].id + '">' + 
                '<div class="row borderResult marginBot center resultColor">' + 
                '<div class="col center"><img src=' + data[i].photo + ' class="thumbnail" /></div>' +
                '<div class="col center marginAuto">' + data[i].name + '</div>' +
                '<div class="col center marginAuto">' + data[i].rating + '</div>' +
                '</div>' +
                '</a>';
                $('#searchresult').append(row);
            }
        });
    });    
});