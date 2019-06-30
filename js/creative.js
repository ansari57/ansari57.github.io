        $(document).ready(function(){
           $(window).scroll(function(){
              var positiontop = $(document).scrollTop();
              console.log(positiontop);

              if((positiontop > 241) && (positiontop < 284))
              {
                $('#header').addClass('animated bounceInLeft');
              }
              if((positiontop > 9) && (positiontop < 20))
              {
                $('#bannerId').addClass('animated flip');
              }
           });
        });