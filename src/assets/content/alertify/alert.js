// <!--  alertify JS --> 
function alertResult(_title, _message, _success) {
    if (_success) {
        alertSuccess(_title, _message);
    } else {
        alertWarning(_title, _message);
    }
}

var alertObject = (function(titulo, msj) {

    return {
      funcOk: function(titulo, msj) {
        alertSuccess(titulo, msj);
      },
      funcError: function(titulo, msj) {
        alertWarning(titulo, msj);
      }
    }
  
  })(alertObject||{})


function alertSuccess(_title, _message, _icon, _time) {
    if (!_icon) {
        _icon = 'fas fa-check';
    }
    if (!_time) {
        _time = 5;
    } else {
        if (_time > 10) {
            _icon = 'fas fa-clock';
        }
    }
    alertify.notify(
        `<div class="classAlerta alert-success alert alert-dismissible fade show" role="alert"> <button type="button" class="close"
          data-dismiss="alert" aria-label="Close"> <i class="fas fa-times"></i> </button>
        <div class="content">
          <h3><i class="`+ _icon + `"></i> ` + _title + ` </h3>
          <p>`+ _message + `</p>
        </div>
        <?xml version="1.0" encoding="utf-8"?> <svg version="1.1" id="Capa_3" xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 85.7 50.8" style="enable-background:new 0 0 85.7 50.8;"
          xml:space="preserve">
          <path d="M0,0h68.3c0,0,3,26.8,17.3,50.8C85.7,50.8,31.7,33,0,0z" /> </svg>
      </div>`,
        'success', _time,
        function () { }
    );
}

function alertSecondary(_title, _message, _icon) {
    if (!_icon) {
        _icon = 'fas fa-exclamation-triangle';
    }
    alertify.notify(
        ` <div class="classAlerta alert-error alert alert-dismissible fade show" role="alert"> <button type="button" class="close"
            data-dismiss="alert" aria-label="Close"> <i class="fas fa-times"></i> </button>
          <div class="content">
          <h3><i class="`+ _icon + `"></i> ` + _title + ` </h3>
          <p>`+ _message + `</p>
          </div>
          <?xml version="1.0" encoding="utf-8"?> <svg version="1.1" id="Capa_3" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 85.7 50.8" style="enable-background:new 0 0 85.7 50.8;"
            xml:space="preserve">
            <path d="M0,0h68.3c0,0,3,26.8,17.3,50.8C85.7,50.8,31.7,33,0,0z" /> </svg>
        </div>  `,
        'success', 5,
        function () { }
    );
}

function alertSecondaryMultiMessage(_title, data, _icon) {
    if (!_icon) {
        _icon = 'fas fa-exclamation-triangle';
    }

    if (data.errores.length > 0) {
        data.mensaje = "<ul>";
        $(data.errores).each(function (i, item) {
            $('[id="' + item.FieldKey + '"]').addClass("borde_error");
            //$('[id="' + item.FieldKey + '"]').attr("data-original-title", item.ErrorMessage);
            if (sp_form_validations[item.FieldKey] != undefined) {
                data.mensaje = data.mensaje + "<li>" + sp_form_validations[item.FieldKey].observacion + "</li>";
            }

        });
        data.mensaje = data.mensaje + "</ul>";

        alertify.notify(
            ` <div class="classAlerta alert-error alert alert-dismissible fade show" role="alert"> <button type="button" class="close"
            data-dismiss="alert" aria-label="Close"> <i class="fas fa-times"></i> </button>
          <div class="content">
          <h3><i class="`+ _icon + `"></i> ` + _title + ` </h3>
          <p>`+ data.mensaje + `</p>
          </div>
          <?xml version="1.0" encoding="utf-8"?> <svg version="1.1" id="Capa_3" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 85.7 50.8" style="enable-background:new 0 0 85.7 50.8;"
            xml:space="preserve">
            <path d="M0,0h68.3c0,0,3,26.8,17.3,50.8C85.7,50.8,31.7,33,0,0z" /> </svg>
        </div>  `,
            'success', 5,
            function () { }
        );
    }

}


function alertWarning(_title, _message, _icon) {
    if (!_icon) {
        _icon = 'fas fa-exclamation-circle';
    }
    alertify.notify(
        ` <div class="classAlerta alert-warning alert alert-dismissible fade show" role="alert"> <button type="button" class="close"
                  data-dismiss="alert" aria-label="Close"> <i class="fas fa-times"></i> </button>
                <div class="content">
                  <h3><i class="`+ _icon + `"></i> ` + _title + ` </h3>
                  <p>`+ _message + `</p>
                </div>
                <?xml version="1.0" encoding="utf-8"?> <svg version="1.1" id="Capa_3" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 85.7 50.8" style="enable-background:new 0 0 85.7 50.8;"
                  xml:space="preserve">
                  <path d="M0,0h68.3c0,0,3,26.8,17.3,50.8C85.7,50.8,31.7,33,0,0z" /> </svg>
              </div> `,
        'success', 5,
        function () { }
    );
}



/*  MODAL ALERTIFY JS */

//override defaults
// alertify.defaults.transition = "slide";
alertify.defaults.theme.ok = "btn btn-ok btn-icon";
alertify.defaults.theme.cancel = "btn btn-cancel btn-icon";
alertify.defaults.theme.input = "form-control";

// 
//works with modeless too
// alertify.alert().setting('modal', false);
alertify.confirm().setting('modal', true);

// window.showAlert();
window.alertMessage = function (_title, _html_message,
    _callback, _icon) {

    if (!_icon) {
        _icon = 'fas fa-exclamation-circle';
    }
    var titleModal =
        `<h5 class="modal-title f-quicksand">
    <i class="`+ _icon + `"></i>
        `+ _title + `</h5>`;

    alertify.alert(_html_message, _callback)
        .setHeader(titleModal)
        .set('movable', false)
        .set('label', 'Entendido');
}
window.confirmMessage = function (_title, _html_message,
    _callback, _error, _icon) {

    if (!_icon) {
        _icon = 'fas fa-exclamation-circle';
    }
    var titleModal =
        `<h5 class="modal-title f-quicksand">
    <i class="`+ _icon + `"></i>
        `+ _title + `</h5>`;

    alertify.confirm(_html_message, _callback, _error)
        .setHeader(titleModal)
        .set('movable', false)
        .set('labels', { ok: 'Confirmar', cancel: 'Cancelar' });
}
window.formMessage = function (title, data, _callback, _icon) {

    if (!_icon) {
        _icon = 'fas fa-exclamation-circle';
    }
    if (data.errores.length > 0) {
        data.mensaje = "<ul>";
        $(data.errores).each(function (i, item) {
            $('[id="' + item.FieldKey + '"]').addClass("borde_error");
            //$('[id="' + item.FieldKey + '"]').attr("data-original-title", item.ErrorMessage);
            if (sp_form_validations[item.FieldKey] != undefined) {
                data.mensaje = data.mensaje + "<li>" + sp_form_validations[item.FieldKey].observacion + "</li>";
            }

        });
        data.mensaje = data.mensaje + "</ul>";


        var titleModal =
            `<h5 class="modal-title f-quicksand">
    <i class="`+ _icon + `"></i>
        `+ title + `</h5>`;

        alertify.alert(data.mensaje, _callback)
            .setHeader(titleModal)
            .set('movable', false)
            .set('label', 'Entendido');

    } else {
        //alertify.set('notifier', 'position', 'top-center');
        alertWarning("Atenci�n", data.mensaje);
    }
}