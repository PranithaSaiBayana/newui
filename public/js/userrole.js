function userroledropdown(){
   
        var userrole = "";
        var url = "http://localhost:2000/userrole";
        $.ajax({
            url: url,
            type: "GET",
            success: function (result) {
               
                for (var i = 0; i < result[0].length; i++) {
                    userrole = userrole +
                        '<option value="' + result[0][i].roleid + '">' + result[0][i].role + '</option>';
                }
                $("#userrole").html(userrole);
                
            }
        });
    
    
        }

        
        var assignvendorid='';
        function loginvalidation(){

            var username = $('[name="psno"]').val();
            
            var password=$('[name="pwd"]').val();
            var role=$('[name="user_role"]').val();
    
            var data = {
            "username": username,
            "password": password,
            "role": role,
            
        }
    
        data = JSON.stringify(data);
        console.log(data);
        var url = "http://localhost:2000/validatelogin";
        
    if(username!="" &&password!="" && role!=""  )
          {
        $.ajax({
            url: url,
            type: "post",
            async: false,
            data: data,
            contentType: "application/json",
            dataType: "json",
            success: function (result) {
                //alert(result[0][1].outputmsg);
               // console.log(result[0].vendoridoutmsg);
               var loginmsg=result[0].outputmsg;
             //  var vendorid=result[0].vendoridoutmsg;
             
            
              window.sessionStorage.setItem("vendorid",result[0].vendoridoutmsg);

              if(loginmsg==' '){
                var roleid=$('[name="user_role"]').val();
    
                        if(roleid=='1abbf93f-7ee1-11ea-8a65-c4346b593c25'){

                         // redirecttohomepage();
                            location.replace("http://localhost:2000/home");

                       }else if(roleid=='1abf5395-7ee1-11ea-8a65-c4346b593c25'){
                      // redirecttovendorpage();  
                       
                              location.replace("http://localhost:2000/viewrequirments");

                              
                         //  $("#afterloginvendorid") .val(localStorage.getItem("storageName"));
                           
                       }else{
                        location.replace("http://localhost:2000/viewinterviews");
                       }
                       
                //window.location.href = "http://localhost:2000/home"
              }
              
              else{
                alert("Invalid Credentials!");
              }
             
            },
           
            error: function (result) {
    
               
            }
            
        }); 
          
    
        }	  
        else{
            alert("Please fill all the fields");
        }
        }
    
        // function showvendortab(){
    
        // var roleid=$('[name="user_role"]').val();
    
        // if(roleid=='1abbf93f-7ee1-11ea-8a65-c4346b593c25'){
    
        // }else{
    
        // }
        // }

        function redirecttohomepage() {
           
        console.log("redirecttohomepage");
           
            var url = "/home" ;
        
            $.ajax({
                url: url,
                type: "GET",
                success: function (result) {
        
                   
                 
                },
                error: function (data) {
                    console.log(data);
                },
                
            });
        
        }
        function redirecttovendorpage() {
           
            console.log("redirecttovendorpage");
               
                var url = "http://localhost:2000/viewrequirments" ;
            
                $.ajax({
                    url: url,
                    type: "GET",
                    success: function (result) {
            
                       
                     
                    }
            
                });
            
            }