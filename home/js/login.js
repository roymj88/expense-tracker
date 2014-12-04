$(document).on("ready", function(e){
    var loggedIn = localStorage.getItem("loggedIn");
    if(loggedIn){
        window.location.href = "home/";
    }else{
        $(".container").removeClass("hide");
    }
});


$(document).on("click", ".login", function(e){
    var login_username  = $(".login_username").val();
    var login_password  = $(".login_password").val();
    if(!login_username){
        $(".login_username").addClass("login_required");
    }
    if(!login_password){
        $(".login_password").addClass("login_required");
    }
    if(login_username && login_password){
        $(".login_username, .login_password").removeClass("login_required");

        if(login_username == 'divyaroy' && login_password == 'divyaroy'){
            window.location.href = "home/";
            localStorage.setItem("loggedIn", true);
        }
        /*var apiData = {
            login_username: login_username,
            login_password: login_password
        };

        $.ajax({
            url: "service/login.php",
            data: apiData,
            type: "POST",
            success:function(result){
                console.log(result);
            },
            error:function(error){
                console.log(error);
            }
        });*/

    }

});


$(document).on("keyup", ".login_username,.login_password", function(e){
    $(this).removeClass("login_required");
    e.preventDefault();

});