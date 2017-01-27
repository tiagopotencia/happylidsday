$(document).ready(function(){

    ion.sound({
    sounds: [
        {
            name: "lids",
            preload: true
        },
    ],
    // main config
    path: "sounds/",
    preload: true,
    multiplay: false,
    volume: 0.9,
    
    ready_callback: hey
});

});

function hey(){
     $('#loading').hide();
     $('#btn-yeyee').show();
}
// play sound
function play(){
    ion.sound.play("lids");
    party();
}