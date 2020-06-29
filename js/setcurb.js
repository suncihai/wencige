var hexaDemo5,
    set = [
        {
            value: '0',
            style: {
                backgroundColor: '#C83935'
            }
        },
        {
            value: '1',
            style: {
                backgroundColor: '#f95550'
            }
        },
        {
            value: '2',
            style: {
                backgroundColor: '#C83935'
            }
        },
        {
            value: '5',
            style: {
                backgroundColor: '#f95550'
            }
        },
        {
            value: '7',
            style: {
                backgroundColor: '#C83935'
            }
        },
        {
            value: '8',
            style: {
                backgroundColor: '#f95550'
            }
        }
    ];
document.addEventListener('DOMContentLoaded', function(){
    var submit = document.getElementById('submit'),
        output = document.getElementById('output');
    hexaDemo5 = new HexaFlip(document.getElementById('hexaflip-demo5'),
        {set1: set, set2: set, set3: set, set4: set},
        {fontSize: 50, margin: 4, perspective: 1000}
    );
}, false);

function checkPassowrd(){
   if(hexaDemo5.getValue().join(' ') === '2 7 1 8'){
        $("#login_panel").fadeOut(function(){
           setTimeout(function(){
              $("#choose_character").fadeIn();
              $("#cihai").addClass("boxmove1");
              $("#xueying").addClass("boxmove2");
           },300);
        });
    }
}
