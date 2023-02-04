$(() => {
    const autoCompleteArray = [];
    const dictKolegij = {};
    $.ajax({
        url: 'https://www.fulek.com/data/api/supit/curriculum-list/hr',
        type: 'GET',
        dataType: 'json',
        success: data => {
            data.data.forEach((item, i) => {
                autoCompleteArray.push(item.kolegij);
                dictKolegij[item.kolegij] = i + 1;
            });
        },
        headers: {
            Authorization: 'Bearer ' + sessionStorage.token
        }
    });
    $('#naziv').autocomplete({
        maxShowItems: 5,
        source: autoCompleteArray,
        select: function (event, ui) {
            console.log(dictKolegij[ui.item.label])
            details = $.ajax({
                url: 'https://www.fulek.com/data/api/supit/get-curriculum/' + dictKolegij[ui.item.label],
                type: 'GET',
                dataType: 'json',
                success: function (datas) {
                    console.log(datas);
                    $("table")
                        .find("tbody")
                        .prepend(
                            $("<tr>")
                                .append($("<td>").text(datas.data.kolegij)) 
                                .append($("<td>").text(datas.data.ects)) 
                                .append($("<td>").text(datas.data.sati))
                                .append($("<td>").text(datas.data.predavanja))
                                .append($("<td>").text(datas.data.vjezbe))
                                .append($("<td>").text(datas.data.tip))
                                .append(
                                    $("<td>").append(
                                        $(`<button id="deleteRow" class="btn btn-danger">`).text("Obrisi")
                                    )
                                )
                        );
                    $('#sumaECTS').text(Number($('#sumaECTS').text()) + datas.data.ects);
                    $('#sumaHours').text(Number($('#sumaHours').text()) + datas.data.sati);
                    $('#sumaClass').text(Number($('#sumaClass').text()) + datas.data.predavanja);
                    $('#sumaPrac').text(Number($('#sumaPrac').text()) + datas.data.vjezbe);
                },
                headers: {
                    Authorization: 'Bearer ' + sessionStorage.token
                }
            });
        }
    });
    $('table').on('click', '#deleteRow', function () {
        var currentRow = $(this).closest("tr");
        $('#sumaECTS').text(Number($('#sumaECTS').text()) - Number(currentRow.find("td:eq(1)").text()));
        $('#sumaHours').text(Number($('#sumaHours').text()) - Number(currentRow.find("td:eq(2)").text()));
        $('#sumaClass').text(Number($('#sumaClass').text()) - Number(currentRow.find("td:eq(3)").text()));
        $('#sumaPrac').text(Number($('#sumaPrac').text()) - Number(currentRow.find("td:eq(4)").text()));
        $(this).closest('tr').remove();
    });
});