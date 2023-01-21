$(() => {
    const autoCompleteArray = [];
    const dictKolegij = {};
    var sum = [];
    const response = $.ajax({
        url: 'https://www.fulek.com/data/api/supit/curriculum-list/hr',
        type: 'GET',
        dataType: 'json',
        success: function (datas) {
            for (let index = 0; index < datas.data.length; index++) {
                autoCompleteArray.push(datas.data[index]['kolegij']);
                dictKolegij[datas.data[index]['kolegij']] = index + 1;
            }
        },
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    });
    $('#naziv').autocomplete({
        maxShowItems: 5,
        source: autoCompleteArray,
        select: function (event, ui) {
            details = $.ajax({
                url: 'https://www.fulek.com/data/api/supit/get-curriculum/' + dictKolegij[ui.item.label],
                type: 'GET',
                dataType: 'json',
                success: function (datas) {
                    $('table tbody tr:last-child').before(`<tr>
                    <td>${datas.data.kolegij}</td>
                    <td>${datas.data.ects}</td>
                    <td>${datas.data.sati}</td>
                    <td>${datas.data.predavanja}</td>
                    <td>${datas.data.vjezbe}</td>
                    <td>${datas.data.tip}</td>
                    <td><button id="deleteRow" class='btn btn-danger'>Obriši</button></td>
                    </tr>`)
                },
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            });
        }
    });
    $('table').on('click', '#deleteRow', function () {
        $(this).closest('tr').remove();
    });
});