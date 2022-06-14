

$(document).on('click', ".divButton", function (e) {

    var beklemeSuresi = $("#updateSecond").val();   

    var tarih = new Date();
    $(this).data("tick", tarih);

    var tarih2 = new Date();
    tarih2.setSeconds(tarih2.getSeconds() + Number(beklemeSuresi));
    $(this).data("endtick", tarih2);

    $(this).removeAttr('class');
    $(this).attr('class', 'btn btn-secondary btn-lg rounded-0 divButton disabled');

    var minikButtonID = $(this)[0].id.toUpperCase();;
    $("#minikButtonMain").prepend(`<div type="button" class="btn btn-light btn-xs rounded-0 text-center" style="margin-left: 0.5em;cursor: auto;" ><div class="minikButtonNumber">` + minikButtonID + `</div></div>`);
});


setInterval(() => {

    var checkeredFlagStatus = $("#checkeredFlagStatus").val();
    var timerStatus = $("#timerStatus").val();

    if (checkeredFlagStatus == 0 && timerStatus == 1) {

        $(".btn").each(function (btn) {

            var end = $(this).data("endtick");
            var current = new Date();

            if (current > end) {
                $(this).removeAttr('class');
                $(this).attr('class', 'btn btn-success btn-lg rounded-0 divButton');
                $(this).prop('disabled', false);
            }

        })

    }

}, 1000);




const app = document.querySelector('#app')
const appSwitch = document.querySelector('#switch')
const switchSlider = document.querySelector('.Switch__Slider')

$(document).on('change', "#switch", function () {
    app.classList.toggle('App--Day')
    app.classList.toggle('App--Night')

    if ($("#timerStatus").val()==1) {        
        $("#timerStatus").val(0)
    }    
    else{
        $("#timerStatus").val(1)
        
    }

    ZamanBayrak();     

});

function ZamanBayrak() {
    if ($("#timerStatus").val() == 1) {
        BayraklarEnableSaatHaric();
        $(".divButton").each(function (btn) {
            $(this).removeAttr('class');
            $(this).attr('class', 'btn btn-success btn-lg rounded-0 divButton');
            $(this).prop('disabled', false);
        })

        var fiveMinutes = 60 * 2,
        display = document.querySelector('#time'),
        display2 = document.querySelector('#time2');

        startTimer2(fiveMinutes, display2);
        startTimer(0, display);

    }
    else {
        $(this).attr("disabled", true);
        $(".divButton").each(function (btn) {
            $(this).removeAttr('class');
            $(this).attr('class', 'btn btn-secondary btn-lg rounded-0 divButton disabled');            
            BayraklarKapat();
        })
    }

   
}



const app2 = document.querySelector('#app2')
const appSwitch2 = document.querySelector('#switch2')
const switchSlider2 = document.querySelector('.Switch__Slider2')

$(document).on('change', "#switch2", function () {
    app2.classList.toggle('App--Day2')
    app2.classList.toggle('App--Night2')
    
    
    if ($("#greenFlagStatus").val()==1) {        
        $("#greenFlagStatus").val(0)
    }    
    else{
        $("#greenFlagStatus").val(1)
    }
    Bayrak1();  
})

function Bayrak1() {
    if ($("#greenFlagStatus").val()==1) {        
        $("#switch3").prop("disabled", true);
        $("#switch4").prop("disabled", true);
        $("#switch5").prop("disabled", true);
        $("#switch6").prop("disabled", true);
    }
    else {
        
        $("#switch3").prop("disabled", false);
        $("#switch4").prop("disabled", false);
        $("#switch5").prop("disabled", false);
        $("#switch6").prop("disabled", false);
    }   
}


const app3 = document.querySelector('#app3')
const appSwitch3 = document.querySelector('#switch3')
const switchSlider3 = document.querySelector('.Switch__Slider3')

$(document).on('change', "#switch3", function () {
    app3.classList.toggle('App--Day3')
    app3.classList.toggle('App--Night3')
    
    if ($("#yellowFlagStatus").val()==1) {
        $("#yellowFlagStatus").val(0)
    }    
    else{
        $("#yellowFlagStatus").val(1)
    }
    Bayrak2();   
})

function Bayrak2() {
    if ($("#yellowFlagStatus").val() == 1) {
        $("#switch2").prop("disabled", true);
        $("#switch4").prop("disabled", true);
        $("#switch5").prop("disabled", true);
        $("#switch6").prop("disabled", true);
    }
    else {
        $("#switch2").prop("disabled", false);
        $("#switch4").prop("disabled", false);
        $("#switch5").prop("disabled", false);
        $("#switch6").prop("disabled", false);
    }
}

const app4 = document.querySelector('#app4')
const appSwitch4 = document.querySelector('#switch4')
const switchSlider4 = document.querySelector('.Switch__Slider4')

$(document).on('change', "#switch4", function () {
    app4.classList.toggle('App--Day4')
    app4.classList.toggle('App--Night4')
    

    if ($("#redFlagStatus").val()==1) {
        $("#redFlagStatus").val(0)
    }    
    else{
        $("#redFlagStatus").val(1)
    }
    Bayrak3();   
})

function Bayrak3() {
    if ($("#redFlagStatus").val() == 1) {
        $("#switch2").prop("disabled", true);
        $("#switch3").prop("disabled", true);
        $("#switch5").prop("disabled", true);
        $("#switch6").prop("disabled", true);
    }
    else {
        $("#switch2").prop("disabled", false);
        $("#switch3").prop("disabled", false);
        $("#switch5").prop("disabled", false);
        $("#switch6").prop("disabled", false);
    }
}

const app5 = document.querySelector('#app5')
const appSwitch5 = document.querySelector('#switch5')
const switchSlider5 = document.querySelector('.Switch__Slider5')

$(document).on('change', "#switch5", function () {
    app5.classList.toggle('App--Day5')
    app5.classList.toggle('App--Night5')
    
    if ($("#whiteFlagStatus").val()==1) {
        $("#whiteFlagStatus").val(0)
    }    
    else{
        $("#whiteFlagStatus").val(1)
    }

    Bayrak4();   
})

function Bayrak4() {
    if ($("#whiteFlagStatus").val() == 1) {
        //db sunucu
        $("#switch2").prop("disabled", true);
        $("#switch3").prop("disabled", true);
        $("#switch4").prop("disabled", true);
        $("#switch6").prop("disabled", true);
    }
    else {

        $("#switch2").prop("disabled", false);
        $("#switch3").prop("disabled", false);
        $("#switch4").prop("disabled", false);
        $("#switch6").prop("disabled", false);
    }
}

const app6 = document.querySelector('#app6')
const appSwitch6 = document.querySelector('#switch6')
const switchSlider6 = document.querySelector('.Switch__Slider6')

$(document).on('change', "#switch6", function () {
    app6.classList.toggle('App--Day6')
    app6.classList.toggle('App--Night6')  


    if ($("#checkeredFlagStatus").val()==1) {
        $("#checkeredFlagStatus").val(0)
    }    
    else{
        $("#checkeredFlagStatus").val(1)
    }    
    Bayrak5();   
   
})

function Bayrak5() {
    if ($("#checkeredFlagStatus").val() == 1) {
        //$("#checkeredFlagStatus").val(1);
        //db sunucu
        //$("#timerStatus").val(0);
        $("#switch2").prop("disabled", true);
        $("#switch3").prop("disabled", true);
        $("#switch4").prop("disabled", true);
        $("#switch5").prop("disabled", true);
    }
    else {
        //$("#checkeredFlagStatus").val(0);
        //db sunucu
        $("#switch2").prop("disabled", false);
        $("#switch3").prop("disabled", false);
        $("#switch4").prop("disabled", false);
        $("#switch5").prop("disabled", false);
    }
}




function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        var timerStatus = $("#timerStatus").val();
        if (timerStatus == 1) {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            display.textContent = minutes + ":" + seconds;
            if (minutes == "02" && seconds == "00") {                 //süreye göre düzenlecek
                display.textContent = minutes + ":" + seconds;
                $("#timerStatus").val(0);
                BayraklarKapat();
                BayraklarDisable();
                BayraklarDegerleriSifirla();
                //end yazılacak
                $(".divButton").each(function (btn) {
                    $(this).removeAttr('class');
                    $(this).attr('class', 'btn btn-secondary btn-lg rounded-0 divButton disabled');            
                    
                })
            }
            else {
                ++timer
                if (timer < 0) {
                    timer = duration;
                }
            }

        }
        else{
            $("#switch").prop("checked", false);  
                BayraklarDegerleriSifirla();
                BayraklarDisable();   
        }
    }, 200);
}

function startTimer2(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        var timerStatus = $("#timerStatus").val();
        if (timerStatus == 1) {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            display.textContent = minutes + ":" + seconds;
            if (minutes == "00" && seconds == "00") {
                display.textContent = minutes + ":" + seconds;
                $("#timerStatus").val(0);
                BayraklarKapat();
                BayraklarDisable();
                BayraklarDegerleriSifirla();
                //end yazılacak
                $(".divButton").each(function (btn) {
                    $(this).removeAttr('class');
                    $(this).attr('class', 'btn btn-secondary btn-lg rounded-0 divButton disabled');                                
                })
            }
            else {
                if (--timer < 0) {
                    timer = duration;
                }
            }            
        }
        else{
            $("#switch").prop("checked", false);  
                BayraklarDegerleriSifirla();
                BayraklarDisable();   
        }
    }, 200);
}

function BayraklarDisable() {
    $("#switch").prop("disabled", true);
    $("#switch2").prop("disabled", true);
    $("#switch3").prop("disabled", true);
    $("#switch4").prop("disabled", true);
    $("#switch5").prop("disabled", true);
    $("#switch6").prop("disabled", true);
}

function BayraklarDisableSaatHaric() {    
    $("#switch2").prop("disabled", true);
    $("#switch3").prop("disabled", true);
    $("#switch4").prop("disabled", true);
    $("#switch5").prop("disabled", true);
    $("#switch6").prop("disabled", true);
}

function BayraklarEnableSaatHaric() {    
    $("#switch2").prop("disabled", false);
    $("#switch3").prop("disabled", false);
    $("#switch4").prop("disabled", false);
    $("#switch5").prop("disabled", false);
    $("#switch6").prop("disabled", false);
}

function BayraklarKapat() {
    $("#switch").prop("checked", false);
    $("#switch2").prop("checked", false);
    $("#switch3").prop("checked", false);
    $("#switch4").prop("checked", false);
    $("#switch5").prop("checked", false);
    $("#switch6").prop("checked", false);
}

function BayraklarDegerleriSifirla() {
    $("#timerStatus").val(0);

    $("#greenFlagStatus").val(0);
    $("#yellowFlagStatus").val(0);
    $("#redFlagStatus").val(0);
    $("#whiteFlagStatus").val(0);
    $("#checkeredFlagStatus").val(0);
}


setInterval(function () {   

    if ($("#raceStatus").val()==1) {
        
        if(!$('#switch').is(':checked'))
        {            
            if ($("#timerStatus").val()==1) {        
                $("#switch").prop("checked", true); 
                ZamanBayrak();  
            } 
            else{
                $("#switch").prop("checked", false);  
                BayraklarDegerleriSifirla();
                BayraklarDisableSaatHaric();    
            }
        }        

        if ($("#greenFlagStatus").val()==1) {
            $("#switch2").prop("checked", true);
            Bayrak1();
        } 
        else{
            $("#switch2").prop("checked", false);   
        }
    
        if ($("#yellowFlagStatus").val()==1) {
            $("#switch3").prop("checked", true);
            Bayrak2();
        } 
        else{
            $("#switch3").prop("checked", false);
        }
    
        if ($("#redFlagStatus").val()==1) {
            $("#switch4").prop("checked", true);
            Bayrak3();
        } 
        else{
            $("#switch4").prop("checked", false);
        }
    
        if ($("#whiteFlagStatus").val()==1) {
            $("#switch5").prop("checked", true);
            Bayrak4();
        } 
        else{
            $("#switch5").prop("checked", false);
        }
    
        if ($("#checkeredFlagStatus").val()==1) {
            $("#switch6").prop("checked", true);
            Bayrak5();
        } 
        else{
            $("#switch6").prop("checked", false);
        }
    } else {
        BayraklarDegerleriSifirla();
        BayraklarDisable();
        BayraklarKapat();
    }
  
}, 200);



