$(document).ready(function() {
    var origin_id = 0;
    let destination_id = 0;
    // $('#origin-input') = document.querySelector('#origin-input')
    // on('click', f) = addEventListener('click', f);
    $('#origin-input').keyup(function() {
        $('#origin-list').html('');
        let origin = $('#origin-input').val();
        if (origin.length < 3) {
            return;
        }
        $.ajax({
            url: 'https://api.exline.systems/public/v1/regions/origin?title=' + origin,
            dataType: 'json',
            success: function(result) {
                // let regions = result['regions'];
                // $.each(regions, function(index, city) {
                //     // console.log(city);
                //     $('#origin-list').append('<option city-id="'+ city.id +'" value="' + city.title + ' | ' + city.cached_path + '">');
                // })
                $.each(result, function(key, value) {
                    $.each(value, function(k,city) {
                        //console.log(v);
                        $('#origin-list').append('<option city-id="'+ city.id +'" value="' + city.title + ' | ' + city.cached_path + '">');
                    })
                })
                $('#origin-input').change(function(){
                    origin_id = $("#origin-list option[value='" + $('#origin-input').val() + "']").attr('city-id');
                });
                console.log(origin_id);
            }
        })
    })
    $('#destination-input').keyup(function() {
        $('#destination-list').html('');
        let destination = $('#destination-input').val();
        if (destination.length < 3) {
            return;
        }
        $.ajax({
            url: 'https://api.exline.systems/public/v1/regions/destination?title=' + destination,
            dataType: 'json',
            success: function(result) {
                // let regions = result['regions'];
                // $.each(regions, function(index, city) {
                //     // console.log(city);
                //     $('#origin-list').append('<option city-id="'+ city.id +'" value="' + city.title + ' | ' + city.cached_path + '">');
                // })
                $.each(result, function(key, value) {
                    $.each(value, function(k,city) {
                        //console.log(v);
                        $('#destination-list').append('<option city-id="'+ city.id +'" value="' + city.title + ' | ' + city.cached_path + '">');
                    })
                })
                $('#destination-input').change(function(){
                    destination_id = $("#destination-list option[value='" + $('#destination-input').val() + "']").attr('city-id');
                });
                console.log(destination_id);
            }
        })
    })
    $('#button').on('click', function() {
        let url = 'https://api.exline.systems/public/v1/calculate?'
        let service = $('#service-select').val();
        let fee = $('#fee-input').val()/100;
        let weight =  $('#weight-input').val();
        $.ajax({
            url: url + `origin_id=${origin_id}&destination_id=${destination_id}&weight=${weight}&service=${service}`,
            dataType: 'json',
            success: function(result) {
                $('#price').html(result.calculation.price);
                $('#fuel').html(result.calculation.fuel_surplus);
                $('#fee').html(fee);
                let total = result.calculation.price + result.calculation.fuel_surplus + fee;
                $('#total-price').html(total);
                $('#date').html(result.calculation.human_range);
            }
        })
    })
});