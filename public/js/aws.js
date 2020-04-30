// var bucketName = "jobtrackerbucket";
// var bucketRegion = "ap-south-1";
// var IdentityPoolId = "ap-south-1:5f464456-9488-4b46-be6f-88d9c844b0a8";

// AWS.config.update({
//     region: bucketRegion,
//     credentials: new AWS.CognitoIdentityCredentials({
//         IdentityPoolId: IdentityPoolId
//     })
// });

// var s3 = new AWS.S3({
//     apiVersion: '2006-03-01',
//     params: { Bucket: bucketName }
// });

// function s3upload() {
//     console.log("s3upload");
//     var files = document.getElementById('fileUpload').files;
//     if (files) {
//         var file = files[0];
//         var fileName = file.name;
//         console.log(fileName);
//         var filePath = 'my-first-bucket-path/' + fileName;
//         console.log(filePath);
//         var fileUrl = 'https://' + bucketRegion + '.amazonaws.com/my-first-bucket/' + filePath;
//         console.log(fileUrl);
//         s3.upload({
//             Key: filePath,
//             Body: file,
//             ACL: 'public-read'
//         }, function (err, data) {
//             if (err) {
//                 console.log(err);
//                 reject('error');
//             }

//             alert('Successfully Uploaded!');
//         })
//     }
// };



function s3upload() {  
    //console.log("s3upload");
              var files = document.getElementById('profileresume').files;
              if (files) 
              {
                  var file = files[0];
                  var fileName = file.name;
                  var filePath = 'my-first-bucket-path/' + fileName;
                 // console.log(filePath);
                  var fileUrl = 'https://' + bucketRegion + '.amazonaws.com/my-first-bucket/' +  filePath;
            //console.log(fileUrl);
          //console.log("TYPE "+file.contentType+" "+file.type)
                  s3.upload({
                                  Key: filePath,
                                  Body: file,
                                  ACL: 'public-read',
                                  ContentType : file.type
                              }, 
                              function(err, data) {
                              //console.log(err);
                                  if(err) {
                                 // console.log(err);
                                      reject('error');
                                  }else{
                                      console.log(JSON.stringify(data));
                                      console.log(data.Location);
                                      let url = 'http://view.officeapps.live.com/op/embed.aspx?url='+data.Location+'&embedded=true'
                                     // https://docs.google.com/viewer?url='+data.Location+'&embedded=true
                                      //    document.getElementById('fileContent').src = url;
                                       $("#resumehiddenId").val(data.Location);         
                                  }
                                  
                                  
                                //   alert('Successfully Uploaded!');
                                $('#filesuccessmodal').modal('show');
                                 // alert('Successfully Uploaded!');
                                  //alert('Successfully Uploaded!');
                                    //console.log(data);    
                                  }).on('httpUploadProgress', function (progress) {
                                 // var uploaded = parseInt((progress.loaded * 100) / progress.total);
                                  //$("progress").attr('value', uploaded);
                              });
              }
    };




    // <a href="https://docs.google.com/viewer?url='+data.Location+'&embedded=true'" target="" id="fileContent" frameborder='0'></a>