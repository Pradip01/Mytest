// add your code here
function loadDoc(){
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var contact = document.getElementById("contact").value;

        var dataString = 'name1=' + name + '&email1=' + email + '&password1=' + password + '&contact1=' + contact;

        var data = {
            entry:{
                'title' :name,
                'email' :email,
                'password' :password,
                'contact_no':contact
            }
        }
        if (name == '' || email == '' || password == '' || contact == '')
        {
            alert("Please Fill All Fields");
        }
        else
        {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (xhttp.readyState == 4 && xhttp.status == 200) {
                    document.getElementById("demo").innerHTML = xhttp.responseText;
                }
            };
            xhttp.open("POST", "https://api.contentstack.io/v2/content_types/form/entries", true);
            xhttp.setRequestHeader("api_key", "bltab3edf4a381a00f5");
            xhttp.setRequestHeader("authtoken", "bltd1ca51fba0924a29302714a4");
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(JSON.stringify(data));


        }
        return false;

}


