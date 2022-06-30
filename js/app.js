$(document).ready(function(){
    
    //Start Header
        //Start nav

            //for bugger
            $(".navbuttons").click(function(){
                $(this).toggleClass("crossxs");
            });

            //for nav
            $(window).scroll(function(){
                let getscrolltop = $(this).scrollTop();
                console.log(getscrolltop);

                if(getscrolltop >= 200){
                    $(".navbar").addClass("navmenus");
                }else{
                    $(".navbar").removeClass("navmenus");
                }
            })

        //End nav

        //Start Properties
            $(".propertylists").click(function(){

                //for active item

                // $(this).addClass("activeitems");
                // $(this).siblings().removeClass("activeitems");
                
                $(this).addClass("activeitems").siblings().removeClass("activeitems");

               
                //for filter

                let getattvalue = $(this).attr("data-filter");
                // console.log(getattvalue);

                if(getattvalue === "all"){
                    $(".filters").show("explode",1000);
                }else{

                    $(".filters").hide();
                    $(".filters").not("."+getattvalue).hide("explode",1000);

                    $(".filters").filter("."+getattvalue).show("explode",1000);
                }
            });

            //For image overlay or  lightbox2
            lightbox.option({
                showImageNumberLabel: false
              });

        //End Properties

    //End Header
})