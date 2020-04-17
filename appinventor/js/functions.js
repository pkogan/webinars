// leadpages_input_data variables come from the template.json "variables" section
var leadpages_input_data = {"variables": {
		"facebookShareURL": {
		  "variable": "facebookShareURL",
		  "dafault": "http://incuba.fi.uncoma.edu.ar/webinar/teletrabajo",
		  "name": "The URL to share on Facebook. Leave blank to share the current page."
		},
		"twitterShareURL": {
		  "variable": "twitterShareURL",
		  "dafault": "http://incuba.fi.uncoma.edu.ar/webinar/teletrabajo",
		  "name": "The URL to share on Twitter. Leave blank to share the current page."
		},
		"googleShareURL": {
		  "variable": "googleShareURL",
		  "dafault": "http://incuba.fi.uncoma.edu.ar/webinar/teletrabajo",
		  "name": "The URL to share on Google+. Leave blank to share the current page."
		},
		"linkedInShareURL": {
		  "variable": "linkedInShareURL",
		  "dafault": "http://incuba.fi.uncoma.edu.ar/webinar/teletrabajo",
		  "name": "The URL to share on LinkedIn. Leave blank to share the current page."
		}
	}
    };

// CUSTOM JQUERY FUNCTIONALITY
$(function () {

    // LETS RUN THE BACKGROUND CODE RIGHT AWAY TO BE SAFE THEN WE WILL
    // RE RUN THIS AGAIN EITHER ONCE OR ELSE IN THE BUILDER
        $('header').css('background-image', 'url('+$("#header-bg-image").attr("src")+')').css('background-size' , 'cover').css('background-position' , 'top center');
    function updatePageForBgImg(){
        // this is for setting the background image using size cover
        // top background image
        $('header').css('background-image', 'url('+$("#header-bg-image").attr("src")+')').css('background-size' , 'cover').css('background-position' , 'top center');
    }
    function calendarCenter() {
		hoy=new Date();
		//webinar=new Date(2020,3,17,15,0);
                webinar=new Date(2020,3,24,15,0);
		tiempo=webinar - hoy;
		
		dias=Math.floor(tiempo/(3600*1000*24));
		horas=Math.floor((tiempo-dias*(3600*1000*24))/3600000);
		minutos=Math.floor((tiempo-dias*(3600*1000*24)-horas*(3600000))/60000);
		segundos=Math.floor((tiempo-dias*(3600*1000*24)-horas*(3600000)-minutos*60000)/1000);

		document.getElementById('days').innerHTML=dias;
		document.getElementById('hours').innerHTML=horas;
		document.getElementById('minutes').innerHTML=minutos;
		document.getElementById('seconds').innerHTML=segundos;
        if ( $( '.main_left' ).is( ':hidden' ) ) {
                $( '.main_right' ).css('text-align', 'center').removeClass('border-left');
        }
        else {
            if ( $( '.main_left' ).length > 0 || $('.main_left').is(':visible') ) {
                $( '.main_right' ).css( 'text-align', '' ).addClass('border-left');
            } 
            else {
                $( '.main_right' ).css('text-align', 'center').removeClass('border-left');
            }
        }
    }
    function mediaAlignment() {
        if ( $( '.media__body' ).is( ':hidden' ) ) {
                $( '.media__img' ).removeClass('floatL').addClass('floatR');
        }
        else if ( $( '.media__body' ).is( ':visible' ) ) {
                $( '.media__img' ).removeClass('floatR').addClass('floatL');
        }
        else {
            if ( $( '.media__body' ).length < 1 ) {
                $( '.media__img' ).removeClass('floatL').addClass('floatR');
            }
        }
    }
    // for testing remove me after
    setInterval(function() {
        mediaAlignment();
        calendarCenter();
        console.log('am i runnning');
    }, 1000);

    /*$('.share__btn').click(function(event){
        event.preventDefault();
        var service = $(this).data('service');
        switch(service) {
            case 'facebook':
                url = ( LeadPageData['facebookShareURL']['value'] ? LeadPageData['facebookShareURL']['value'] : document.URL);
                window_size = "width=585,height=368";
                go = 'http://www.facebook.com/sharer/sharer.php?u=' + url;
                break;
            case 'twitter':
                url = ( LeadPageData['twitterShareURL']['value'] ? LeadPageData['twitterShareURL']['value'] : document.URL);
                window_size = "width=585,height=261";
                go = 'http://www.twitter.com/intent/tweet?url=' + url;
                break;
            case 'google':
                url = ( LeadPageData['googleShareURL']['value'] ? LeadPageData['googleShareURL']['value'] : document.URL);
                window_size = "width=517,height=511";
                go = 'http://plus.google.com/share?url=' + url;
                break;
            case 'linkedin':
                url = ( LeadPageData['linkedInShareURL']['value'] ? LeadPageData['linkedInShareURL']['value'] : document.URL);
                window_size = "width=520,height=570";
                go = 'http://www.linkedin.com/shareArticle?mini=true&url=' + url;
                break;
            default:
                return false;
        }
        window.open(go, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,' + window_size);
    });*/


    // Either run the DOM update functions once for a published page or continuously for within the builder. 
    if ( typeof window.top.App === 'undefined' ) {
        // Published page
        $(window).on('load', function(){
            updatePageForBgImg();
            calendarCenter();
            mediaAlignment();
        });
    } else {
        // within the builder
        setInterval( function(){
            if ( $( '#header-bg-image' ).css( 'display' ) == "none" ) {
                $( 'header' ).css( 'background-image' , 'none' );
            }
            else {
                updatePageForBgImg();
                calendarCenterr();
                mediaAlignment();
            }
        }, 1000);
    }

});


