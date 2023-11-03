//Declaro los elementos que necesito usar del HTML
const campoSeguro = document.getElementById("campoSeguro");
const valorPlan = document.getElementById("valorPlan");
const formContacto = document.getElementById("formContacto");
const notificacion = document.getElementById("notificacion");

//Reemplazo el contenido del div "valorPlan" con el valor asignado a cada tipo de plan
let mostrarValorPlan = () => {
    valorPlan.innerHTML = `<b>Valor:</b> ${campoSeguro.value}`;
}

//Ejecuto la funcion mostrarValorPlan() al seleccionar un tipo de plan
campoSeguro.addEventListener("click", mostrarValorPlan);

//Creo un aviso de solicitud enviada que se muestra por 3seg y luego recarga la pagina para poder volver a usar el formulario
let notificar = () => {
    notificacion.innerHTML = `  <div class="cuadroNotificacion">
                                    <label class="contenedorCheck">
                                        <input type="checkbox" checked="checked" disabled>
                                        <div class="checkeado"></div>
                                    </label>
                                    <div class="info">
                                        <p>Solicitud</p>
                                        <span>Enviada</span>
                                    </div>
                                </div>`;
    setTimeout(function() {
        location.reload();
    }, 2000);  
}

//Al enviar el formulario muestro el aviso de "Solicitud enviada"
formContacto.addEventListener("submit", notificar);