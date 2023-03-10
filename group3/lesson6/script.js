$(document).ready(function() {
    let origin_id = 0;
    let destination_id = 0;
    // $('').on('ckick', f); - слушатель события
    // $('#origin-input') = document.querySelector('#origin-input')
    $('#origin-input').keyup(function() { // когда кнопка отпускается
        $('#origin-list').html(''); // innerHTML = html
        let origin = $('#origin-input').val();
        $.ajax({
            url: 'https://api.exline.systems/public/v1/regions/origin?title=' + origin,
            dataType: 'json',
            success: function(data){
                $.each(data, function(key, value) {
                    $.each(value, function(k, city) {
                        $('#origin-list').append('<option city-id="'+ city.id +'" value="' + city.title + ' | ' + city.cached_parent + '">');
                    })
                })
                $('#origin-input').change(function() {
                    // console.log($('#origin-input').val());
                    // console.log(origin);
                    origin_id = $('#origin-list option[value="' + $('#origin-input').val() + '"]').attr('city-id');
                })
                console.log(origin_id);
            }
        });
    })
    $('#destination-input').keyup(function() { // когда кнопка отпускается
        $('#destination-list').html(''); // innerHTML = html
        let destination = $('#destination-input').val();
        $.ajax({
            url: 'https://api.exline.systems/public/v1/regions/destination?title=' + destination,
            dataType: 'json',
            success: function(data){
                $.each(data, function(key, value) {
                    $.each(value, function(k, city) {
                        $('#destination-list').append('<option city-id="'+ city.id +'" value="' + city.title + ' | ' + city.cached_parent + '">');
                    })
                })
                $('#destination-input').change(function() {
                    // console.log($('#origin-input').val());
                    // console.log(origin);
                    destination_id = $('#destination-list option[value="' + $('#destination-input').val() + '"]').attr('city-id');
                })
                console.log(destination_id);
            }
        });
    })
    $('#btn').on('click', function() {
        // event.preventDefault();
        let baseUrl = 'https://api.exline.systems/public/v1/calculate';
        let service = $('#service-select').val();
        let weigth = $('#weight-input').val();
        let fee = $('#fee-input').val()/100;
        // let url = baseUrl + `?origin_id=${origin_id}&destination_id=${destination_id}&weight=${weigth}&service=${service}`;
        $.ajax({
            url: baseUrl + `?origin_id=${origin_id}&destination_id=${destination_id}&weight=${weigth}&service=${service}`,
            dataType: 'json',
            success: function(data){
                $('#price').html(data.calculation.price);
                $('#fuel').html(data.calculation.fuel_surplus);
                $('#fee').html(fee);
                total = data.calculation.price + data.calculation.fuel_surplus + fee;
                $('#total-price').html(total);
            }
        });
    })
})