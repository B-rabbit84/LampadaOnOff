const turnOnturnOff = document.getElementById ( 'turnOn', 'turnOff' );
const lamp = document.getElementById ( 'lamp' );

function islampBroken () {
    return lamp.src.indexOf ( 'quebrada' ) > -1
}
function lampOn () {
    if ( !islampBroken () ) {
    lamp.src = "./imgs/ligada.jpg" ;
    }
}
function lampOff () {
    if ( !islampBroken () ) {
    lamp.src = "./imgs/desligada.jpg";
    }
}
function lampBroken () {
    lamp.src = "./imgs/quebrada.jpg";
}

turnOn.addEventListener ( 'click', lampOn );
turnOff.addEventListener ( 'click', lampOff );
lamp.addEventListener ( 'mouseover', lampOn );
lamp.addEventListener ( 'mouseleave', lampOff );
lamp.addEventListener ( 'dblclick', lampBroken );