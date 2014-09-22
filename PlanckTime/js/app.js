(function($){

  /*login*/
  $('#signinButton').click(function(){
    var user = $('#user').val();
    var pass = $('#pass').val();
    console.log("is it working?");
    $.ajax({
        url:'xhr/login.php',
        type: 'post',
        dataType: 'json',
        data: {
          username: user,
          password: pass
        },
        success:function(response){
          console.log("test user");
          if(response.error){
            alert(response.error);
        }else{
          window.location.assign('home.html');
        };
      }
    });
  });


   /*logout*/
$('#logOut').click(function(e){
  e.preventDefault;
  $.get('xhr/logout.php', function(){
    window.location.assign('index.html');
  })
});


 /*register*/
$('#register').on('click', function(){
  var username = $('#username').val(),
      password = $('#password').val(),
      repass = $('#re-password').val(),
      email = $('#email').val();
  console.log(username+''+password+''+email);

  $.ajax({
    url:'xhr/register.php',
    type:'post',
    dataType:'json',
    data:{
      username: username,
      password: password,
      email: email
    },
    success: function(response){
      if(response.error){
        alert(response.error);
      }else{
        window.location.assign('home.html');
      }
    }
  });
});

/*buttons*/
  $('.home').on('click', function(e) {
  e.preventDefault();
  window.location.assign('home.html');
});

$('.task').on('click', function(e){
  e.preventDefault();
  window.location.assign('task.html');
});

$('.account').on('click', function(e){
  e.preventDefault();
  window.location.assign('account.html');
});

$('.about').on('click', function(e){
  e.preventDefault();
  window.location.assign('about.html');
});

$('.tipps').on('click', function(e){
  e.preventDefault();
  window.location.assign('tips.html');
});

/*username display*/

$.getJSON('xhr/check_login.php', function(data){
  $.each(data, function(key, val){
    $('#userDisplay').html('Welcome: ' +val.user_n);
  })
});

/*Add New Project*/
$('#addButton').on('click', function(e){
  e.preventDefault();
  var projName = $('#projectName').val(),
  projDesc = $('#projectDescription').val(),
  projDue = $('#projectDueDate').val(),
  status = $('input[name = "status"]:checked').prop("id");

  $.ajax({
    url: "xhr/new_project.php",
    type: "post",
    dataType: "json",
    data:{
      projectName: projName,
      projectDescription: projDesc,
      dueDate: projDue,
      status: status
    },
    success: function (response){
      console.log(projName+" "+projDesc+" "+projDue+" "+status);
      if(response.error){
        alert(response.error);
      }else{
        window.location.assign("task.html");
      };
    }
  });
});

/*Get Project*/

var projects = function(){
  $.ajax({
    url:'xhr/get_projects.php',
    type:'get',
    dataType:'json',
    success: function(response){
      if(response.error){
        console.log(response.error);
      }else{
        console.log("this is the"+response);
        for(var i = 0, j = response.projects.length; i < j; i++){
          var result = response.projects[i];

          $(".projects").append(
            '<div class="work">' +
              '<div class="add_task"><p>' +  result.id + '<br>' + result.projectName + "</p></div>" +
              "Project Description: " + result.projectDescription + "<br>" +
              '<button class="delete deletebtn">Delete</button>' +
              '</div>'
            );
        };
        $('.deletebtn').on('click', function(e){
          console.log("test delete");
          $.ajax({
            url:'xhr/delete_project.php',
            data:{
              projectID: result.id
            },
            type:'POST',
            dataType:'json',
            success: function(response){
              console.log("test success");

              if(response.error){
                alert(response.error);
              }else{
                window.location.assign("task.html");
              };
            }
          });
        });
      }
    }
  });
};
projects()


/*tooltips*/
$(".masterTootip").hover(function(){
    var title= $(this).attr("title");
    $(this).data("tipText", title).removeAttr("title");
    $("<p class='tooltip'></p>")
    .text(title)
    .appendTo("body")
    .fadeIn("slow");
}, function() {
    $(this).attr("title", $(this).data("tipText"));
    $(".tooltip").remove();  
}) .mousemove(function(e){
      var mousex = e.pageX +20;
      var mousey = e.pageY +10;
      $(".tooltip")
      .css({ top: mousey, left: mousex})
});



/*home page einstien head move*/
$(".eihome").hide() .show("slow");
/*accordion*/
$(".tabs2").click(function () {
  if ( $( ".hide2" ).is( ":hidden" ) ) {
    $( ".hide2" ).slideDown( "slow" );
  }else{
  	 $( ".hide2" ).hide();
  }
});

$(".tabs3").click(function () {
  if ( $( ".hide3" ).is( ":hidden" ) ) {
    $( ".hide3" ).slideDown( "slow" );
  }else{
  	 $( ".hide3" ).hide();
  }
});

$(".tabs1").click(function () {
  if ( $( ".hide1" ).is( ":hidden" ) ) {
    $( ".hide1" ).slideDown( "slow" );
  }else{
  	 $( ".hide1" ).hide();
  }
});
/*Popup modal*/
$("a .plus").click(function () {
  if ( $( "#popup" ).is( ":hidden" ) ) {
    $( "#popup, .overlay" ).show();
  }else{
  	 $( "#popup" ).hide();
  }
});

$("a .thisOne").click(function () {
  if ( $( "#popup" ).is( ":hidden" ) ) {
    $( "#popup" ).show();
  }else{
  	 $( "#popup" ).hide();
  }
});

})(jQuery);


