var Stack = Contentstack.Stack({
    'api_key': 'bltab3edf4a381a00f5',
    'access_token': "bltd1ca51fba0924a29302714a4",
    'environment': 'development'
});
function show() {
    var Query = Stack.ContentType("form").Query();
    Query
        .toJSON()
        .find()
        .spread(function success(result) {
            //console.log(result[0].get(title));
            console.log(Query.lessThanOrEqualTo('created_at','2016-06-29'))
            var data ="";
            for(var i in result){
                data+="<div class='name'><h3>Name :"+result[i].title+"</h3></div>";
                data+="<div class='email'><h3> Email :"+result[i].email+"</h3></div>";
                data+="<div class='password'><h3> Password :"+result[i].password+"</h3></div>";
                data+="<div class='contact'><h3> Contact No :"+result[i].contact_no+"</h3></div>";
            }
            document.getElementById('demo').innerHTML = data;
        }, function error(err) {
                console.log(err);
        })


}