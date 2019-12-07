$(document).ready(function(){
        
        $('#light_switch').click(function(){
            $('body').toggleClass('dark');
        });

        $(".chosePlayer").click(function(){
            $("#chose-player").hide();
            $("#choice").show();
        })
        $(".player").click(function(){
            $("#choice").hide();
            $(".div2").toggleClass("show animated bounceInDown");
        })



      var player , player2;
      var count = 0;
     $('#buttonx').click(function(){
      player = "X";
      player2 = "O";
   })

     $('#buttono').click(function(){
      player = "O";
      player2 = "X";
   })

    $('#1Player').click(function(){
        $('.box').click(function(){
            if($(this).text()=="")
             $(this).text(player);
             console.log("user",player);

             count ++;
             if (count < 5 ){
             random();
             }

           getWinner()
        })
      
    })

    function random(){
      var r = Math.floor(Math.random ()*9)+1;
      var j ='#box'+r;
      console.log(j);
      console.log("player random",player2)
    
     if($(j).text()==""){
       $(j).text(player2);
     }
     else 
        random();
  }

    $('#2Players').click(function(){
        $('.box').click(function() {
            if($(this).text()== "") {
          if (player =="X"){
              $(this).text("X");
              player = "O";    
          }
          else if(player == "O"){
            $(this).text("O");
            player = "X";
          }
             getWinner()
        }
         //getWinner()
        }
        )
    })

       

        function getWinner(){
            var box1 = $('#box1').text();
            var box2 = $('#box2').text();
            var box3 = $('#box3').text();
            var box4 = $('#box4').text();
            var box5 = $('#box5').text();
            var box6 = $('#box6').text();
            var box7 = $('#box7').text();
            var box8 = $('#box8').text();
            var box9 = $('#box9').text();


            if((box1 == box2) && (box2 == box3)){ 
                if(box3 != ""){
                    alertThis(box3);
                    count=0;
                  $('.box').text('');
            }}
           
             else if((box4 == box5) && (box5 == box6)){
                if(box6 != ""){
                    alertThis(box6);
                    count=0;
                  $('.box').text('');
                }
             }
                  
             else if((box7 == box8) && (box8 == box9)){
                if(box9 !=""){
                    alertThis(box9);
                    count=0;
                   $('.box').text('');
                }
                }

            else if((box1 == box4) && (box4 == box7)){
               if(box7 !=""){
                  alertThis(box7);
                  count=0;
                  $('.box').text('');
               }
                }

             else if((box2 == box5) && (box5 == box8)){
                if(box8 !=""){
                    alertThis(box8);
                    count=0;
                  $('.box').text('');}
            }
        
                                
             else if((box3 == box6) && (box6 == box9)){
                if(box9 !=""){
                    alertThis(box9);
                    count=0;
                  $('.box').text('');}
                }
            
            else if((box3 == box5) && (box5 == box7)){
                if(box7 !=""){
                    alertThis(box7);
                    count=0;
                  $('.box').text('');}
                }

               
            else if((box1 == box5) && (box5 == box9)){
                if(box9 !=""){
                    alertThis(box9);
                    count=0;
                  $('.box').text('');}
            }
        } 

        $('.retry').click(function(){
            $('.box').text('');
            count=0;
            
        })
        
       function alertThis(player){
           swal({
               title:player,
               text: "IS THE WINNER!",
              closeOnClickOutside:true
        
           })

       } 
}
)