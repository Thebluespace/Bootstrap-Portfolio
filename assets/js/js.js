var config = {
    apiKey: "AIzaSyDjAFYRRbN4qVVNQhR6LJu4W8VK-jlu6FI",
    authDomain: "portfolio-info.firebaseapp.com",
    databaseURL: "https://portfolio-info.firebaseio.com",
    projectId: "portfolio-info",
    storageBucket: "",
    messagingSenderId: "780137555178"
  };
  firebase.initializeApp(config);
  var database = firebase.database();

  function load() {
      $("#submit").on("click",function(){
          if($("#userName").val() != "" && $("#userEmail").val() != "" && $("#userPhone").val() != "" && $("#userDeets").val() != "" ){
                var name = $("#userName").val();
                var email = $("#userEmail").val();
                var phone = $("#userPhone").val();
                var deets = $("#userDeets").val();
                database.ref("dbo_contact_table/" + phone).update({
                    userName: name,
                    userEmail: email,
                    userPhone: phone,
                    userDeets: deets
                });
            } else {
                console.log("fail");
                $("#privateInfo").text("Please fill out all fields!");
                $("#userName").attr("id","empty");
                $("#userEmail").attr("id","empty");
                $("#userPhone").attr("id","empty");
                $("#userDeets").attr("id","empty");
            }
      })
  }
  function portLoad(){
      $("img").on("click", function(event){
            var url = $(event.target).attr("data");
            console.log(url);
            if(url != "undefined"){
                window.open(url,"_blank");
            }
      });
  }