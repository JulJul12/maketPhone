new Choices('#model', {
    searchEnabled: false,
    itemSelectText: ''
});
new Choices('#color', {
    searchEnabled: false,
    itemSelectText: ''
});

$('#form-order').on('submit', function(event){
    event.preventDefault();
});

$('#form-order').on('submit', function(event){
    event.preventDefault();

    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'POST',
        dateType: 'html',
        date: $('#form-order').serialize(),
        success:function(date){
            console.log(date);
            $('#form-order').html('Спасибо! Ваша заявка успешно отравлена!');
            $('#form-order').hide();
        }
    })
});