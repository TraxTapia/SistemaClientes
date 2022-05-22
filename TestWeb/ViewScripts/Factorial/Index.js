let txtNumber = $('#txtNumber').val();
$(document).ready(function () {

    $('#frmFactorizacion').on('submit', function (e) {
        e.preventDefault();

        if ($('#txtNumber').val() === '') {
            swal({
                text: 'Ingresa un número',
                icon: "warning",
            });
            return false;

        } else {
            let request = {
                numero: $('#txtNumber').val()
            }
            $.ajax({
                url: '/Factorial/CalcularNumeroFactorial',
                type: 'POST',
                data: request,
                success: function (data) {
                    if (data != null) {
                        let list = '<div class="alert alert-success  col-md-12 col-sm-12 col-md-12" role="alert"> <label> lista numeros para calcular factorial :</label>' + $('#txtNumber').val() + '!= ' + data.ListCombinacion.reverse().join("*") + '<br/><label>Resultado factorial : </lable> <spam class"alert alert-danger">' + data.resultFactorial + '</spam> </div >'
                        $('#list').html(list);
                    }
                },
                error: function (jqXHR, status, error) {
                    swal({
                        title: "¡Error!",
                        text: 'Surgio un error inesperado. \n' + jqXHR.status + ' ' + jqXHR.statusText,
                        icon: "warning",
                    });
                }
            });
        }


    });
    $('#frmNumeroMayor').on('submit', function (e) {
        e.preventDefault();

        if ($('#txtNumber1').val() === '' || $('#txtNumber2').val() === '' || $('#txtNumber3').val() === '') {
            swal({
                text: 'Ingresa un número',
                icon: "warning",
            });
            return false;

        } else {
            let request = {
                numero1: $('#txtNumber1').val(),
                numero2: $('#txtNumber2').val(),
                numero3: $('#txtNumber3').val()

            }
            $.ajax({
                url: '/NumeroMayor/CalcularNumeroMayor',
                type: 'POST',
                data: request,
                success: function (data) {
                    if (data != null) {
                        let list = '<div class="alert alert-success  col-md-12 col-sm-12 col-md-12" role="alert"> <label>El número mayor es :</label> ' + data.NumeroMayor + '</div >'
                        $('#list').html(list);
                    }
                },
                error: function (jqXHR, status, error) {
                    swal({
                        title: "¡Error!",
                        text: 'Surgio un error inesperado. \n' + jqXHR.status + ' ' + jqXHR.statusText,
                        icon: "warning",
                    });
                }
            });
        }


    });
    $('#frmArea').on('submit', function (e) {
        e.preventDefault();

        if ($('#txtArea').val() === '' || $('#txtBase').val() === '' ) {
            swal({
                text: 'Ingresa un número',
                icon: "warning",
            });
            return false;

        } else {
            let request = {
                _base: $('#txtArea').val(),
                altura: $('#txtBase').val()

            }
            $.ajax({
                url: '/AreaTriangulo/CalcularAreaTriangulo',
                type: 'POST',
                data: request,
                success: function (data) {
                    if (data != null) {
                        let list = '<div class="alert alert-success  col-md-12 col-sm-12 col-md-12" role="alert"> <label>El área del triangulo es:</label> ' + data.Area + '</div >'
                        $('#list').html(list);
                    }
                },
                error: function (jqXHR, status, error) {
                    swal({
                        title: "¡Error!",
                        text: 'Surgio un error inesperado. \n' + jqXHR.status + ' ' + jqXHR.statusText,
                        icon: "warning",
                    });
                }
            });
        }


    })
})
function limpiar() {
    $('#frmFactorizacion').find('input').val('');
    $('#frmNumeroMayor').find('input').val('');
}
function aceptarNumeros(obj) {
    obj.value = obj.value.replace(/\D/g, '');
}
