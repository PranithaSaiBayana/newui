function getvendornamedropdown() {
    vendorratingdrop = '';
    var url = "http://localhost:2000/vendornamedropdown";
    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {
            for (var i = 0; i < result[0].length; i++) {
                vendorratingdrop = vendorratingdrop +
                    '<option value="' + result[0][i].vendorid + '">' + result[0][i].vendorname + '</option>';
            }
            $("#vratingdrop").html(vendorratingdrop);
            //	$("#vendorrating").html(vendorratingdrop);
            //$("#editvendorrating").html(vendorratingdrop);
        }
    });
}

//  Filer based dropdown 
function vendorfilterText() {
    var vendordrp = new RegExp($('#vratingdrop').children("option:selected").text());
    $('.content').hide();
    $('.content').filter(function () {
        return vendordrp.test($(this).text());
    }).show();
}

function addvendor() {
    var Vendorid = $('[name="vendor_id"]').val();
    var Vendorname = $('[name="vendor_name"]').val();
    var Vendorpriloc = $('[name="vendor_priloc"]').val();
    var Vendorspec = $('[name="vendor_spec"]').val();
    var Vendoremail = $('[name="vendor_email"]').val();
 //   var Recruiterid = $('[name="recruiter_id"]').val();
    var Recruitername = $('[name="recruiter_name"]').val();
    var Recruitercontno = $('[name="recruiter_contno"]').val();
    var Recruiteremail = $('[name="recruiter_email"]').val();
    var Accountmanager = $('[name="account_manager"]').val();
    var Accmanageremail = $('[name="accmanager_email"]').val();
    var Accmanagercontno = $('[name="accmanager_contno"]').val();
    var Vendorcomments = $('[name="vendor_comments"]').val();
    var Createdby = 'Admin';
    var isactive = 'Y';
    
    var data = {
        "Vendorid": Vendorid,
        "Vendorname": Vendorname,
        "Vendorpriloc": Vendorpriloc,
        "Vendorspec": Vendorspec,
        "Vendoremail": Vendoremail,
      //  "Recruiterid": Recruiterid,
        "Recruitername": Recruitername,
        "Recruitercontno": Recruitercontno,
        "Recruiteremail": Recruiteremail,
        "Accountmanager" : Accountmanager,
        "Accmanageremail" : Accmanageremail,
        "Accmanagercontno" : Accmanagercontno,
        "Vendorcomments": Vendorcomments,
        "Createdby": Createdby,
        "isactive": isactive
    }
    data = JSON.stringify(data);
    console.log(data);
    var url = "http://localhost:2000/addvendor";
    if (Vendorid != "" && Vendorname != "" && Vendorpriloc != "" && Vendoremail != "" && Recruitername != "" && Recruitercontno != "" && 
    Recruiteremail !="" && Accountmanager !="" && Accmanageremail !="" && Accmanagercontno != "") {
        $.ajax({
            url: url,
            type: "post",
            async: false,
            data: data,
            contentType: "application/json",
            dataType: "json",
            success: function (result) {
                console.log(result);
                var duplicatemsg=result[0].outputmsg;

                if (duplicatemsg=='Duplicate vendorid'){
                    alert("This is an duplicate Record");
                }
              else {
                $('#vendorsuccessmodal').modal('show');
              }
                
            },
            error: function () {
                console.log("working");  
            }
        });
        clearFormVendor();
        
    }
    else{
        alert("Please fill all the mandatory fields");
    }
   
}

function vendorlistingdetails() {
    console.log("vendors");
    var tableData;
    var url = "http://localhost:2000/vendorlistingdetails";
 console.log(url);
    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {
            console.log(result);

            for (var i = 0; i < result[0].length; i++) {
                var date=result[0][i].createddate;
                var converteddate=new Date(date);
                
                var formattedddate = converteddate.getDate() + "-" + (converteddate.getMonth() + 1) + "-" + converteddate.getFullYear();
                console.log(formattedddate);
                var formatedtime=converteddate.getHours()+":"+converteddate.getMinutes()+":"+converteddate.getSeconds();
                console.log(formatedtime);
                var vendordatetime=formattedddate+" "+formatedtime;
                var Vendorid = "\"" + result[0][i].vendorid + "\"";
                tableData = tableData + "  <tr class='content'  style='white-space:nowrap' ondblclick='vendordisplay(" + Vendorid + ")' > " +
                    "<td >" + result[0][i].vendorcode + "</td>" +
                    "<td >" + result[0][i].vendorname + "</td>" +
                    "<td >" + result[0][i].vendorspecification + "</td>" +
                    "<td >" + result[0][i].vendoremail + "</td>" +
                    // "<td >" + result[0][i].recruiterid + "</td>" +
                    "<td >" + result[0][i].recruitername + "</td>" +
                    "<td >" + result[0][i].recruitercontactno + "</td>" +
                    "<td >" + result[0][i].createdby + "</td>" +
                    "<td >" + vendordatetime + "</td>" +
                    // "<td >" + result[0][i].updatedby + "</td>" +
                    // "<td >" + result[0][i].updateddate + "</td>" +
                    "</tr>";
                    $.fn.dataTable.ext.errMode = 'none';
            }
             $("#vendortable tbody").html(tableData);
             $("#vendortable").DataTable({
               // scrollX:        'true',
               // scrollY:        '50vh',
                scrollCollapse: true,
                paging:         true,
                // "destroy": "true",
                 //  "retrieve": "true",
                 "lengthMenu": [[10, 25, 100, -1], [10, 25, 100, "All"]],
                 
            });
             jQuery('.dataTable').wrap('<div class="dataTables_scroll" />'); 
          //   $("#vendortable thead").remove(); 
        }
    });
    
}
function vendordisplay(i) {

    $("#vendoreditmodal").modal({
        backdrop: 'static',
        keyboard: true,
        show: true
    });

    var url = "http://localhost:2000/vendorlisting/" + i;
    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {
            $("#vendoridhidden").text(result[0][0].vendorid);
            $("#editvendorid").val(result[0][0].vendorcode);
            $("#editvendorname").val(result[0][0].vendorname);
            $("#editvendorpriloc").val(result[0][0].locationid).attr('selected', 'selected');
            $("#editvendorspec").val(result[0][0].vendorspecification);
            $("#editvendoremail").val(result[0][0].vendoremail);
          //  $("#editrecruiterid").val(result[0][0].recruiterid);
            $("#editrecruitername").val(result[0][0].recruitername);
            $("#editrecruitercontno").val(result[0][0].recruitercontactno);
            $("#editrecruiteremail").val(result[0][0].recruiteremail);
            $("#editaccountmanager").val(result[0][0].accountmanager);
            $("#editaccmanageremail").val(result[0][0].accountmanageremail);
            $("#editaccmanagercontno").val(result[0][0].accountmanagercontno);
            $("#editvendorcomments").val(result[0][0].vendorcomments);
        }
    });
    vendorlistingdetails();
}

function enablevendorlist() {
    $("#updatevendor").show();
    $("#editvendorid").attr('disabled', false);
    $("#editvendorname").attr('disabled', false);
    $("#editvendorpriloc").attr('disabled', false);
    $("#editvendorspec").attr('disabled', false);
    $("#editvendoremail").attr('disabled', false);
    $("#editrecruiterid").attr('disabled', false);
    $("#editrecruitername").attr('disabled', false);
    $("#editrecruitercontno").attr('disabled', false);
    $("#editaccountmanager").attr('disabled', false);
    $("#editaccmanageremail").attr('disabled', false);
    $("#editaccmanagercontno").attr('disabled', false);
    $("#editvendorcomments").attr('disabled', false);
}

function updatevendorbyid() {
    var vendorid = $('[name="vendorid_hidden"]').text();
    var Vendorcode = $('[name="editvendor_id"]').val();
    var Vendorname = $('[name="editvendor_name"]').val();
    var Vendorpriloc = $('[name="editvendor_priloc"]').val();
    var Vendorspec = $('[name="editvendor_spec"]').val();
    var Vendoremail = $('[name="editvendor_email"]').val();
   // var Recruiterid = $('[name="editrecruiter_id"]').val();
    var Recruitername = $('[name="editrecruiter_name"]').val();
    var Recruitercontno = $('[name="editrecruiter_contno"]').val();
    var Recruiteremail = $('[name="editrecruiter_email"]').val();
    var Accountmanager = $('[name="editaccount_manager"]').val();
    var Accmanageremail = $('[name="editaccmanager_email"]').val();
    var Accmanagercontno = $('[name="editaccmanager_contno"]').val();
    var Vendorcomments = $('[name="editvendor_comments"]').val();
    var Updateby = 'Admin';
    var Createdby = 'Admin';
    var isactive = 'Y'
    var data = {
        "vendorid": vendorid,
        "Vendorcode": Vendorcode,
        "Vendorname": Vendorname,
        "Vendorpriloc": Vendorpriloc,
        "Vendorspec": Vendorspec,
        "Vendoremail": Vendoremail,
       // "Recruiterid": Recruiterid,
        "Recruitername": Recruitername,
        "Recruitercontno": Recruitercontno,
        "Recruiteremail": Recruiteremail,
        "Accountmanager" : Accountmanager,
        "Accmanageremail" : Accmanageremail,
        "Accmanagercontno" : Accmanagercontno,
        "Vendorcomments": Vendorcomments,
        "Updateby": Updateby,
        "Createdby": Createdby,
        "isactive": isactive
    }
    data = JSON.stringify(data);  
    var url = "http://localhost:2000/updatevendor/" + vendorid;  

    $.ajax({
        url: url,
        type: "post",
        async: false,
        data: data,
        contentType: "application/json",
        dataType: "json",
        success: function (result) {
            
            $('#vendoreditmodal').modal('hide');
            $('#vendorupdatemodal').modal('show');
            $.fn.dataTable.ext.errMode = 'none';
          
        },
        error: function () {
        }
        
    });
    
    vendorlistingdetails();
    
}

function clearFormVendor() {

    
    $("#vendorid").val('');
    $("#vendorname").val('');
    $("#vendorpriloc").val('');
    $("#vendorspec").val('');
    $("#vendoremail").val('');
    $("#recruiterid").val('');
    $("#recruitername").val('');
    $("#recruitercontno").val('');
    $("#recruiteremail").val('');
    //	$("#vendorrating").val('');
    $("#accountmanager").val('');
    $("#accmanageremail").val('');
    $("#accmanagercontno").val('');
    $("#vendorcomments").val('');

}


function adsearchvendor() {
//console.log("in adsearch js");
    var Vendoridsearch = $('[name="search_vendorid"]').val();
    var Vendornamesearch = $('[name="search_vendorname"]').val();
  //  var Vendorpriloc = $('[name=""]').val();
    var Vendorspecsearch = $('[name="search_vendorspecifi"]').val();
    var Vendoremailsearch = $('[name="search_vendoremail"]').val();
   // var Recruiteridsearch = $('[name="search_recruiteridvendor"]').val();
    var Recruiternamesearch = $('[name="search_recruiternamevendor"]').val();
    var Recruitercontnosearch = $('[name="search_recruitercontnovendor"]').val();
    var isactivesearch = 'Y';
    var data = {
        "Vendoridsearch": Vendoridsearch,
        "Vendornamesearch": Vendornamesearch,
        // "Vendorpriloc": Vendorpriloc,
        "Vendorspecsearch": Vendorspecsearch,
        "Vendoremailsearch": Vendoremailsearch,
     //   "Recruiteridsearch": Recruiteridsearch,
        "Recruiternamesearch": Recruiternamesearch,
        "Recruitercontnosearch": Recruitercontnosearch,
       
        "isactivesearch": isactivesearch
    }
    data = JSON.stringify(data);
    var tableData = "";
    var url = "http://localhost:2000/adsearchvendor";
    {   
     $.ajax({
            url: url,
            type: "post",
            async: false,
            data: data,
            contentType: "application/json",
            dataType: "json",
            success: function (result) {
                
                if (result==''){
                    tableData = "<td></td><td></td><td></td><td><center>No Records Found</center></td><td></td><td></td><td></td><td></td></tr>"; 
                    $("#vendorlistingbody").html(tableData);
                }
                else{

                for (var i = 0; i < result.length; i++) {
 
                var Vendorid = "\"" + result[i].vendorid + "\"";
                tableData = tableData + "  <tr class='content'  style='white-space:nowrap' ondblclick='vendordisplay(" + Vendorid + ")' > " +
                    "<td >" + result[i].vendorcode + "</td>" +
                    "<td >" + result[i].vendorname + "</td>" +
                    "<td >" + result[i].vendorspecification + "</td>" +
                    "<td >" + result[i].vendoremail + "</td>" +
                   // "<td >" + result[i].recruiterid + "</td>" +
                    "<td >" + result[i].recruitername + "</td>" +
                    "<td >" + result[i].recruitercontactno + "</td>" +
                    "<td >" + result[i].createdby + "</td>" +
                    "<td >" + result[i].createddate + "</td>" +
                    // "<td >" + result[0][i].updatedby + "</td>" +
                    // "<td >" + result[0][i].updateddate + "</td>" +
                    "</tr>";
            }
            $("#vendorlistingbody").html(tableData);
          //  console.log(tableData);
           // console.log(result);
            }
        },
            error: function () {
            }

        });
        clearFormvendorsearch();
    }
    //vendorlistingdetails();
}





function clearFormvendorsearch() {

    $("#searchvendorid").val('');
    $("#searchvendorname").val('');
    $("#searchvendorspecifi").val('');
    $("#searchvendoremail").val('');
    $("#searchrecruiteridvendor").val('');
    $("#searchrecruiternamevendor").val('');
    $("#searchrecruitercontnovendor").val('');
   
}

function disablevendor() {
   
    var jobreqid=$("#jdiddisplayhidden").text();
    var url = "http://localhost:2000/disablevendor/"+jobreqid;
    console.log(url);
    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {
         
            
            for (var i = 0; i < result[0].length; i++) {

                $("#assignreqvendortable").find('tr').each(function () {
                  
                    // do something with productId, product, Quantity
                   if(result[0][i].vendorid==$(this).find('td:first').html()){
                   $(this).closest('tr').find('td:nth-child(2)').find('input:checkbox').attr('disabled','true');
                  
                   
                    
                   }
                   
                });
            
                
            }
         
        }
    });
}
function assignreqvendorlisting() {
    var tableData;
    var url = "http://localhost:2000/vendorlistingdetails";
 console.log(url);
    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {

            console.log(result);
            for (var i = 0; i < result[0].length; i++) {
                var Vendorid = "\"" + result[0][i].vendorid + "\"";
                console.log(Vendorid);
                tableData = tableData + "  <tr class='content'  style='white-space:nowrap'> " +  
                   
                   "<td hidden>" +result[0][i].vendorid + "</td>" +
                    "<td >" + "<input type='checkbox' id='dynamiccheck'></input>" + "</td>" +
                    "<td >" + result[0][i].vendorname + "</td>" +
                    "<td >" + result[0][i].recruitername + "</td>" +
                    "<td >" + result[0][i].recruitercontactno + "</td>" +
                    "<td >" + result[0][i].recruiteremail + "</td>" +
                
                    "</tr>";
                    $.fn.dataTable.ext.errMode = 'none';
            }
             $("#assignreqvendortable tbody").html(tableData);
             $("#assignreqvendortable").DataTable({
                // "columnDefs": [
                //     {
                //         "targets": [0],
                //         "visible": false,
                //         "searchable": false
                //     },
                    // {
                    //     "targets": [0],
                    //     "visible": false
                    // }
               // ],
                // "destroy": "true",
                 //  "retrieve": "true",
                // 'ajax': '/lab/jquery-datatables-checkboxes/ids-arrays.txt',
        //    'columnDefs': [
        //       {
        //          'targets': 0,
        //          'checkboxes': {
        //             'selectRow': true
        //          }
        //       }
        //    ],
        //    'select': {
        //       'style': 'multi'
        //    },
        //    'order': [[0, 'asc']],

                 "lengthMenu": [[10, 25, 100, -1], [10, 25, 100, "All"]],
               
            });
            jQuery('.dataTable').wrap('<div class="dataTables_scroll" />'); 
        }
    });
}
    // $(document).ready(function (){
    //     var table = $('#assignreqvendortable').DataTable({
    //        'ajax': '/lab/jquery-datatables-checkboxes/ids-arrays.txt',
    //        'columnDefs': [
    //           {
    //              'targets': 0,
    //              'checkboxes': {
    //                 'selectRow': true
    //              }
    //           }
    //        ],
    //        'select': {
    //           'style': 'multi'
    //        },
    //        'order': [[1, 'asc']]
    //     });
     
     
        // Handle form submission event
        function assignrequirementtovendor() {
            
        //$('#sendemailbtn-assignreqvendortable').on('submit', function(e){
           var form = this;
     console.log("assignreqvendor");
     //var table=$(assignreqvendortable);
     var table = $('#assignreqvendortable').DataTable();
           var rows_selected = table.column(0).checkboxes.selected();
     
           // Iterate over all selected checkboxes
           $.each(rows_selected, function(index, rowId){
              // Create a hidden element
              console.log("assignvendor");
              $(form).append(
                  $('<input>')
                     .attr('type', 'hidden')
                     .attr('name', 'id[]')
                     .val(rowId)
              );
           });
//});
        }
        
     
     
