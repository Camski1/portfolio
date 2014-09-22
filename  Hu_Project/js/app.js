
$(function(){
  $('#world-map').vectorMap({
    map: 'world_mill_en',
    zoomOnScroll: false,
    scaleColors: ['#6C597F', '#6C597F'],
    normalizeFunction: 'polynomial',
    hoverOpacity: 0.7,
    hoverColor: false,
    markerStyle: {
      initial: {
      fill: '#B1D873',
      stroke: '#383f47'
      }
    },
    backgroundColor: '#6C597F',
    markers: [
      {latLng: [46.02, 33.55], name: 'Crimea'},
      {latLng: [1.3, 103.8], name: 'Singapore'},
      {latLng: [31.3, -99.38], name: 'Dallas'},
      {latLng: [7.3, -63.38], name: 'Maripa'},
      {latLng: [26.02, 50.55], name: 'Bahrain'},
      {latLng: [0.03, 22.73], name: 'Liebo'}
    ]
  });
});

$("#btn1, #PopB2, #PopB1").click(function () {
  if ( $( "#popUp" ).is( ":hidden" ) ) {
    $( "#popUp" ).show("slow");
  }else{
    $( "#popUp" ).hide("slow");
  }
});

$('#btn2').on('click', function(e){
  e.preventDefault();
  window.location.assign('#letter');
});

window.onload = function() {
  if (Modernizr.canvas) {
     var Canvas1 = document.getElementById('Canvas1');
        var ctx1 = Canvas1.getContext("2d");

        var textStr = "Created by: Cameron Kozinski";

        
        ctx1.font = "16pt";
        ctx1.fillStyle = "black";
        ctx1.strokeStyle = "black";
        ctx1.fillText(textStr, 30, 15);
        ctx1.strokeText(textStr, 30, 15); 

     
  };//end Modernizr (if)
}// end onload function