
function avanirequirementlistingdetails() { 
    
    var vendorhiddenid=$("#afterloginvendorid").val();
    var tableData ;
    
    // $("#screenloading").css('display', 'block');

    var url = "http://localhost:2000/avanirequirementisting/" +vendorhiddenid;
    console.log(url);
    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {

            // $("#screenloading").css('display', 'none');
console.log(result);
            for (var i = 0; i < result[0].length; i++) {    
                var date=result[0][i].createddate;
                var converteddate=new Date(date);
                
                var formattedddate = converteddate.getDate() + "-" + (converteddate.getMonth() + 1) + "-" + converteddate.getFullYear();
                console.log(formattedddate);
                var formatedtime=converteddate.getHours()+":"+converteddate.getMinutes()+":"+converteddate.getSeconds();
                console.log(formatedtime);
                var requirementdatetime=formattedddate+" "+formatedtime;           
                var jobdescriptionID = "\"" + result[0][i].jobdescriptionid + "\"";
                tableData = tableData + "  <tr class='content'  style='white-space:nowrap'> " +
                    //"<td id='' hidden>" + result[0][i].contactid + "</td>" +
                    "<td >" + result[0][i].requirmentid + "</td>" +
                    "<td >" + result[0][i].customers + "</td>" +
                    "<td >" + result[0][i].role + "</td>" +
                    "<td >" + result[0][i].jdtitle + "</td>" +
                    "<td >" + result[0][i].noofpositions + "</td>" +
                    "<td >" + result[0][i].experience + "</td>" +                  
                    "<td >" + result[0][i].duration + "</td>" +
                    "<td >" + result[0][i].primaryskills + "</td>" +
                    "<td >" + result[0][i].secondaryskills + "</td>" +
                    "<td >" + result[0][i].jobstatus + "</td>" +
                    "<td >" + result[0][i].dateofreq.slice(0, 10) + "</td>" +
                    "<td >" + result[0][i].closedate.slice(0, 10) + "</td>" +                  
                    "<td >" + result[0][i].bussinessunit + "</td>" +
                    "<td >" + result[0][i].salesregions + "</td>" +
                    "<td >" + result[0][i].salesrep + "</td>" +
                    "<td >" + result[0][i].joblocation + "</td>" +
                    "<td >" + result[0][i].locationflexibility + "</td>" +
                    "<td >" + result[0][i].jobdescription + "</td>" +
                    "<td >" + result[0][i].createdby + "</td>" +
                    "<td >" + requirementdatetime + "</td>" +
                    // "<td >" + result[0][i].updateby + "</td>" +
                    // "<td >" + result[0][i].updatedtime+ "</td>" +
                    // "<td >" + "<a>" + "<i class='far fa-edit' data-target='#jobModal' data-toggle='modal' data-backdrop='static' data-keyboard='false'  onclick='jobdisplay(" + jobdescriptionID + ")' style='font-size: 20px;color:black;position:relative;left:37%;'></i>" + "</a>" + "</td>" +
                    "</tr>";
                    $.fn.dataTable.ext.errMode = 'none';
            }
            $("#jobtable tbody").html(tableData);
            
            $("#jobtable").DataTable({
               // "destroy": "true",
                "lengthMenu": [[10, 25, 100, -1], [10, 25, 100, "All"]],
            });
            jQuery('.dataTable').wrap('<div class="dataTables_scroll" />'); 
        }
    });
}
function budropdown() {
    var budropdown = "";
    var url = "http://localhost:2000/bu";
    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {
            for (var i = 0; i < result[0].length; i++) {
                budropdown = budropdown +
                    '<option value="' + result[0][i].bussinessunitid + '">' + result[0][i].bussinessunit + '</option>';
            }
            $("#bunit").html(budropdown);
            $("#buedit").html(budropdown);
            $("#tempbunit").html(budropdown);
        }
    });
}

function salesdropdown() {
    var salesdropdown = "";
    var url = "http://localhost:2000/sales";
    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {
            for (var i = 0; i < result[0].length; i++) {
                salesdropdown = salesdropdown +
                    '<option value="' + result[0][i].salesregionsid + '">' + result[0][i].salesregions + '</option>';
            }
            $("#salesregion").html(salesdropdown);
            $("#sregionedit").html(salesdropdown);
            $("#tempsalesregion").html(salesdropdown);
        }
    });
}

function customerdropdown() {
    var customerdropdown = "";
    var url = "http://localhost:2000/customer";
    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {
            for (var i = 0; i < result[0].length; i++) {
                customerdropdown = customerdropdown +
                    '<option value="' + result[0][i].customersid + '">' + result[0][i].customers + '</option>';
            }
            $("#cus").html(customerdropdown);
            $("#custedit").html(customerdropdown);
            $("#jobaccount").html(customerdropdown);
            $("#intcustomer").html(customerdropdown);
            $("#customerintname").html(customerdropdown); 
            $("#editintcustomername").html(customerdropdown); 
            $("#tempcustomer").html(customerdropdown);

        }
    });
}

function salesrepdropdown() {
    var salesrepdropdown = "";
    var url = "http://localhost:2000/salesrep";
    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {
            for (var i = 0; i < result[0].length; i++) {
                salesrepdropdown = salesrepdropdown +
                '<option value="' + result[0][i].salesrepid + '">' + result[0][i].salesrep + '</option>';
            }
            $("#salesrepresent").html(salesrepdropdown);
            $("#srepedit").html(salesrepdropdown);
            $("#tempsalesrepresent").html(salesrepdropdown);
        }
    });
}

function jobstatusdropdown() {
    jobstatus = '';
    var url = "http://localhost:2000/jobstatusnew";
    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {
            for (var i = 0; i < result[0].length; i++) {
                jobstatus = jobstatus +
                '<option value="' + result[0][i].jobstatusid + '">' + result[0][i].jobstatus + '</option>';
            }
            $("#jstatus").html(jobstatus);
            $("#jstatusedit").html(jobstatus);
            $("#tempjstatus").html(jobstatus);
            //$("#statuspedit").html(jobstatusdrop);
        }
    });
}

function techleveldropdown() {
    var techlevel = "";
    var url = "http://localhost:2000/techlevel";
    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {
            for (var i = 0; i < result[0].length; i++) {
                techlevel = techlevel +
                    '<option value="' + result[0][i].techlevelid + '">' + result[0][i].techlevel + '</option>';
            }
            $("#rolelevel").html(techlevel);
            $("#techleveledit").html(techlevel);
            $("#temptechlevel").html(techlevel); 
        }
    });
}

function currentlocationdropdown() {
    var currentlocation = "";
    var url = "http://localhost:2000/curentlocation";
    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {

            //            currentlocation = currentlocation+"<option>--Select--</option>";
            //	currentlocation = currentlocation + "<option style='display:none;'></option>";

            for (var i = 0; i < result[0].length; i++) {
                currentlocation = currentlocation +
                    '<option value="' + result[0][i].locationid + '">' + result[0][i].location + '</option>';
            }
            $("#currentlocation").html(currentlocation);
            $("#desiredlocation").html(currentlocation);
            $("#vendorpriloc").html(currentlocation);
            $("#editvendorpriloc").html(currentlocation);
            $("#peditcurrentlocation").html(currentlocation);
            $("#peditdesiredlocation").html(currentlocation);
            $("#jlocation").html(currentlocation);
            $("#lttsintlocation").html(currentlocation);
            $("#jloc").html(currentlocation);
            $("#jlidedit").html(currentlocation);
            $("#editlttsintlocation").html(currentlocation);
            $("#tempjobloc").html(currentlocation);
        }
    });
}

function addjd() {
    var Requirement = $('[name="Requirementid"]').val();
    var Role = $('[name="role"]').val();
    var rolelevel = $('[name="role_level"]').val();
    var jobtitle = $('[name="jobtitle"]').val();
    var Position = $('[name="positions"]').val();
    var closedate = $('[name="ex_date"]').val();
    var dateofreq = $('[name="req_date"]').val();
        if ((Date.parse(dateofreq) >= Date.parse(closedate))) {
            alert("End date should be greater than Start date");    
        }   
    var jdduration = $('[name="jduration"]').val();
    var Exp = $('[name="experience"]').val();
    var PSkill = $('[name="primary_skill"]').val();
    var SSkill = $('[name="secondry_skill"]').val();
    var locationflex = $('input[name=loc_flex]:checked').val();
    var customerid = $('[name="customer"]').val();
    var jdstatus = $('[name="j_status"]').val();
    var buid = $('[name="bu_unit"]').val();
    var salesregionid = $('[name="sales_region"]').val();
    var salesrepid = $('[name="sale_rep"]').val();
    var joblocation = $('#jloc option:selected').text();
    var joblocationid = $('[name="job_location"]').val();
    var jDescription = $('[name="job_description"]').val();
    var industry = $('[name="industry"]').val();
    var domain = $('[name="domain"]').val();
    var onsite = $('[name="site"]').val();
    var information = $('[name="addinf"]').val();
    var buComments = $('[name="bu_comments"]').val();
    var jdComments = $('[name="jd_comments"]').val();
    var createdby = 'Admin';
    var isactive='Y';
    
    var data = {
        "Requirement": Requirement,
        "Role": Role,
        "rolelevel": rolelevel,
        "jobtitle": jobtitle,
        "Position": Position,
        "closedate": closedate,
        "dateofreq": dateofreq,
        "jdduration": jdduration,
        "Exp": Exp,
        "PSkill": PSkill,
        "SSkill": SSkill,
        "locationflex": locationflex,
        "customerid": customerid,
        "jdstatus": jdstatus,
        "buid": buid,
        "salesregionid": salesregionid,
        "salesrepid": salesrepid,
        "joblocationid": joblocationid,
        "joblocation": joblocation,
        "jDescription": jDescription,
        "industry":industry,
        "domain":domain,
        "onsite":onsite,
        "information":information,
        "buComments": buComments,
        "jdComments": jdComments,
        "createdby": createdby,
        "isactive":isactive
    }

    data = JSON.stringify(data);
    console.log(data);
    var url = "http://localhost:2000/jdescription";
    
if(Requirement!="" &&Position!="" && jobtitle!="" &&  dateofreq!="" && PSkill!=""&&joblocationid!=""&& locationflex!=""&& jdstatus!=""&&
     jdduration!="" && Exp!=""&& Role!="" && industry!=""&& domain!=""&& onsite!=""&& jDescription!="" && customerid!=""&&  
     buid!=""&& salesregionid!=""&& salesrepid!="" )
      {
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
            
                if (duplicatemsg=='Duplicate requirementid'){
                    console.log("addjd");
                    alert("This is an duplicate Record");
                }
              else {
                $('#reqsuccessmodal').modal('show');
              }

            },
       
        error: function (result) {

            console.log (result);

            if (result.responseText!=""){
                alert(result.responseText);
            }
        }
        
    }); 
    clearFormJob();  

    }	  
    else{
        alert("Please fill all the mandatory fields");
    }
           
}

function joblistingdetails() {
   
    var tableData ;
    
    // $("#screenloading").css('display', 'block');

    var url = "http://localhost:2000/joblistingdetails";
    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {
console.log(result);
            // $("#screenloading").css('display', 'none');

            for (var i = 0; i < result[0].length; i++) {    
                var opendate=result[0][i].dateofreq;
                var converteddate=new Date(opendate);
        
                var formattedopendate =  converteddate.getFullYear()+ "-" + ((converteddate.getMonth() + 1<10)?"0"+ (converteddate.getMonth()+1): (converteddate.getMonth()+1)) + "-" + converteddate.getDate();


                var closedate=result[0][i].closedate;
                var converteddate=new Date(closedate);
                var formattedclosedate = converteddate.getFullYear()+ "-" + ((converteddate.getMonth() + 1<10)?"0"+ (converteddate.getMonth()+1): (converteddate.getMonth()+1)) + "-" + converteddate.getDate();
                
                var date=result[0][i].createddate;
                var converteddate=new Date(date);
                var formattedddate = converteddate.getFullYear()+ "-" + ((converteddate.getMonth() + 1<10)?"0"+ (converteddate.getMonth()+1): (converteddate.getMonth()+1)) + "-" + converteddate.getDate();
               
                var formatedtime=converteddate.getHours()+":"+converteddate.getMinutes()+":"+converteddate.getSeconds();
               // console.log(formatedtime);
                var requirementdatetime=formattedddate+" "+formatedtime;           
                var jobdescriptionID = "\"" + result[0][i].jobdescriptionid + "\"";
                tableData = tableData + "  <tr class='content'  style='white-space:nowrap' ondblclick='jobdisplay(" + jobdescriptionID + ")'> " +
                    //"<td id='' hidden>" + result[0][i].contactid + "</td>" +
                    "<td >" + result[0][i].requirmentid + "</td>" +
                    "<td >" + result[0][i].customers + "</td>" +
                    "<td >" + result[0][i].role + "</td>" +
                    "<td >" + result[0][i].jdtitle + "</td>" +
                    "<td >" + result[0][i].noofpositions + "</td>" +
                    "<td >" + result[0][i].experience + "</td>" +                  
                    "<td >" + result[0][i].duration + "</td>" +
                    "<td >" + result[0][i].primaryskills + "</td>" +
                    "<td >" + result[0][i].secondaryskills + "</td>" +
                    "<td >" + result[0][i].jobstatus + "</td>" +
                    "<td >" + formattedopendate + "</td>" +
                    "<td >" + formattedclosedate + "</td>" +                  
                    "<td >" + result[0][i].bussinessunit + "</td>" +
                    "<td >" + result[0][i].salesregions + "</td>" +
                    "<td >" + result[0][i].salesrep + "</td>" +
                    "<td >" + result[0][i].joblocation + "</td>" +
                    "<td >" + result[0][i].locationflexibility + "</td>" +
                    "<td >" + result[0][i].jobdescription + "</td>" +
                    "<td >" + result[0][i].createdby + "</td>" +
                    "<td >" + requirementdatetime + "</td>" +
                    // "<td >" + result[0][i].updateby + "</td>" +
                    // "<td >" + result[0][i].updatedtime+ "</td>" +
                    // "<td >" + "<a>" + "<i class='far fa-edit' data-target='#jobModal' data-toggle='modal' data-backdrop='static' data-keyboard='false'  onclick='jobdisplay(" + jobdescriptionID + ")' style='font-size: 20px;color:black;position:relative;left:37%;'></i>" + "</a>" + "</td>" +
                    "</tr>";
                    $.fn.dataTable.ext.errMode = 'none';
            }
            $("#jobtable tbody").html(tableData);
            
            $("#jobtable").DataTable({
               // "destroy": "true",
                "lengthMenu": [[10, 25, 100, -1], [10, 25, 100, "All"]],
            });
            jQuery('.dataTable').wrap('<div class="dataTables_scroll" />'); 
        }
    });
}

function jobdisplay(i) {
    // $("#updatehide").hide();

    $("#jobModal").modal({

        backdrop: 'static',
        keyboard: true,
        show: true
    });

    var url = "http://localhost:2000/joblisting/" + i;

    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {

            if (result[0][0].bucomments == undefined) {
            //	console.log(result[0][0].bucomments);
                result[0][0].bucomments == ""
            }

            if (result[0][0].locationflexibility == 'Y') {
                $("#lfedity").prop('checked', true);

            }
            else if (result[0][0].locationflexibility == 'N') {
                $("#lfeditn").prop('checked', true);
            }
            $("#vendorjobrequirementid").val(result[0][0].jobdescriptionid);
            $("#jobrequirementid").text(result[0][0].jobdescriptionid);
            console.log(result[0][0].jobdescriptionid);
            $("#jdiddisplayhidden").text(result[0][0].jobdescriptionid);
            $("#reqiddisplay").text(result[0][0].requirmentid);
            $("#modalreqid").text(result[0][0].requirmentid);
            
            $("#jobtitleedit").val(result[0][0].jdtitle);
            $("#techleveledit").val(result[0][0].techlevelid).attr('selected', 'selected');
            $("#jlidedit").val(result[0][0].joblocationid).attr('selected', 'selected');
            $("#psedit").val(result[0][0].primaryskills);
            $("#ssedit").val(result[0][0].secondaryskills);
            $("#nposedit").val(result[0][0].noofpositions);
            $("#roleedit").val(result[0][0].role);
            $("#jdurationedit").val(result[0][0].duration);
            $("#jstatusedit").val(result[0][0].jobstatusid).attr('selected', 'selected');
            console.log(result[0][0].jobstatusid);
            $("#datereqedit").val(result[0][0].dateofreq.slice(0, 10));
            $("#closedateedit").val(result[0][0].closedate.slice(0, 10));
            $("#expedit").val(result[0][0].experience);
            $("#industryedit").val(result[0][0].industry);
           // console.log(result[0][0].industry);
            $("#domainedit").val(result[0][0].domain);
           // console.log(result[0][0].domain);
            $("#siteedit").val(result[0][0].onsite); 
           // $("#expedit").val(result[0][0].experience);
            $("#buedit").val(result[0][0].bussinessunitid).attr('selected', 'selected');
            $("#sregionedit").val(result[0][0].salesregionsid).attr('selected', 'selected');
            $("#srepedit").val(result[0][0].salesrepid).attr('selected', 'selected');
            $("#custedit").val(result[0][0].customersid).attr('selected', 'selected');
            $("#cbyedit").val(result[0][0].createdby);
            $("#cbydateedit").val(result[0][0].createddate.slice(0, 10));
            //  $("#ubyedit").val(result[0][0].updateby);
           // $("#ubydateedit").val(result[0][0].updatedtime.slice(0, 10));
        //	$("#lfedit").val(result[0][0].locationflexibility);
            $("#jdedit").val(result[0][0].jobdescription);					
            $("#jdcomment").val(result[0][0].jdcomments);
            $("#bucomment").val(result[0][0].bucomments);

        }

    });

}

function enablejoblist() {

    $("#updatehide").show();
    // $("#edithide").hide();
    $("#jlidedit").attr('disabled', false);
    $("#expedit").attr('disabled', false);
    $("#lfedit").attr('disabled', false);
    $("#jdedit").attr('disabled', false);
    $("#buedit").attr('disabled', false);
    $("#sregionedit").attr('disabled', false);
    $("#srepedit").attr('disabled', false);
    $("#statuspedit").attr('disabled', false);
    $("#psedit").attr('disabled', false);
    $("#ssedit").attr('disabled', false);
    $("#cbyedit").attr('disabled', false);
    $("#ubyedit").attr('disabled', false);
    $("#nposedit").attr('disabled', false);
    $("#roleedit").attr('disabled', false);
    $("#cbydateedit").attr('disabled', false);
    $("#ubydateedit").attr('disabled', false);
    $("#datereqedit").attr('disabled', false);
    $("#closedateedit").attr('disabled', false);
    $("#custedit").attr('disabled', false);
    $("#jdcomment").attr('disabled', false);
    $("#bucomment").attr('disabled', false);
    $("#techleveledit").attr('disabled', false);
    $("#jdurationedit").attr('disabled', false);
    $("#reqclosedateedit").attr('disabled', false);
    $("#jstatusedit").attr('disabled', false);
    $("#jobtitleedit").attr('disabled', false);

}


function updatejd() {
    // $("#edithide").show();
    $("#updatehide").show();
    var jobdescriptionId = $('[name="jdiddisplay_hidden"]').text();
    var bussinessunit = $('[name="bu_edit"]').val();
    var salesregion = $('[name="sregion_edit"]').val();
    var salerep = $('[name="srep_edit"]').val();
    var reqid = $('[name="reqid_display"]').text();
    var jdtitle=$('[name="jobtitle_edit"]').val();
    var joblocationid = $('[name="jlid_edit"]').val();
    var joblocation = $("#jlidedit option:selected").text();
    var experience = $('[name="exp_edit"]').val();
    var dateofreq = $('[name="datereq_edit"]').val();
    var closedate = $('[name="closedate_edit"]').val();
    var locaflex = $('input[name=lf_edit]:checked').val();
    var noofpos = $('[name="npos_edit"]').val();
    var industry = $('[name="industry_edit"]').val();
    var domain = $('[name="domain_edit"]').val();
    var site = $('[name="site_edit"]').val();
    var duration = $('[name="jduration_edit"]').val();
    var role = $('[name="role_edit"]').val();
    var rolelevel = $('[name="tech_leveledit"]').val();
    var customer = $('[name="cust_edit"]').val();
    var status = $('[name="jstatus_edit"]').val();
    var primaryskill = $('[name="ps_edit"]').val();
    var secondaryskill = $('[name="ss_edit"]').val();
    var jobdescription = $('[name="jd_edit"]').val();
    var createdby= 'Admin';
    var updateby = 'Admin';
    var updatedate = $('[name="ubydate_edit"]').val();
    var jdcomments = $('[name="jd_comments"]').val();
    var bucomments = $('[name="bu_comments"]').val();
    var isactive='Y'

    var data = {

        "jobdescriptionId": jobdescriptionId,
        "reqid": reqid,
        "jdtitle":jdtitle,
        "joblocationid": joblocationid,
        "joblocation": joblocation,
        "experince": experience,
        "dateofreq": dateofreq,
        "closedate": closedate,
        "locaflex": locaflex,
        "noofpos": noofpos,
        "industry": industry,
        "domain": domain,
        "site": site,
        "role": role,
        "rolelevel": rolelevel,
        "duration": duration,
        "customer": customer,
        "bussinessunit": bussinessunit,
        "salesregion": salesregion,
        "salerep": salerep,
        "status": status,
        "primaryskill": primaryskill,
        "secondaryskill": secondaryskill,
        "jobdescription": jobdescription,
        "updateby": updateby,
        "updatedate": updatedate,
        "jdcomments": jdcomments,
        "bucomments": bucomments,
        "createdby":createdby,
        "isactive":isactive
    }
    data = JSON.stringify(data);
    console.log(data);
    $.ajax({
        url: "http://localhost:2000/updatejoblisting/" + jobdescriptionId,
        type: "post",
        async: false,
        data: data,
        contentType: "application/json",
        dataType: "json",
        success: function (result) {
           
            $('#jobModal').modal('hide');
            $('#requpdatemodal').modal('show');
            $.fn.dataTable.ext.errMode = 'none';
        },
        error: function () {
        },
        
    });
  
    joblistingdetails();
}	

function clearFormJob() {

    $("#filename").val('');
    $("#requirement").val('');
    $("#role").val('');
    $("#edate").val('');
    $("#positions").val('');
    $("#experience").val('');
    $("#jobtitle").val('');
    $("#reqdate").val('');
    $("#jduration").val('');
    $("#locflexy").val('');
    $("#locflexn").val('');
    $("#jobstatus").val('');
    $("#piskills").val('');
    $("#seskills").val('');
    $("#locflexy").prop('checked', false);
    $("#locflexn").prop('checked', false);
    $("#industry").val(''); 
    $("#domain").val('');
    $("#site").val('');
     $("#jdesp").val('');
    $("#comm").val('');

}

function jobreqidbyProfiles(i) {

    var url = "http://localhost:2000/jobreqidbyprofiles/" + i;
    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {
        
        },
        error: function () {
        }
    });
}

function template(){
   
    $("#temprequirement").val('20');
    $("#temppositions").val('4');
    $("#tempjobtitle").val('Developer');
    $("#tempreqopen").val(Date());
    $("#tempreqclose").val(Date());
    $("#temppriskill").val('Java');
    $("#tempsecskill").val('.Net');
    $("#templocflexy").prop('checked', true);
    $("#tempjduration").val('12');
    $("#tempexperience").val('36');
    $("#temprole").val('Java Developer');
    $("#tempindustry").val('IT');
    $("#tempdomain").val('Business Applications');
    $("#tempsite").val('Offsite');
    $("#tempjobdes").val('Full stack Engineer');
   
}

function addtemplatejd() {
    
    
    var buid = $('[name="tempbu_unit"]').val();
    var salesregionid = $('[name="tempsales_region"]').val();
    var salesrepid = $('[name="tempsales_rep"]').val();
    var customerid = $('[name="temp_customer"]').val();
    var Requirement = $('[name="temp_requirementid"]').val();
    var Position = $('[name="temp_positions"]').val();
    var rolelevel = $('[name="temptech_level"]').val();
    var jobtitle = $('[name="tempjob_title"]').val();
    var dateofreq = $('[name="tempreq_open"]').val();
    var closedate = $('[name="tempreq_close"]').val();
    var PSkill = $('[name="temppri_skill"]').val();
    var SSkill = $('[name="tempsec_skill"]').val();
    var joblocationid = $('[name="tempjob_location"]').val();
    var joblocation = $('#jloc option:selected').text();
    var locationflex = $('input[name=temploc_flex]:checked').val();
    var jdstatus = $('[name="tempj_status"]').val();
    var jdduration = $('[name="tempj_duration"]').val();
    var Exp = $('[name="temp_experience"]').val();
    var Role = $('[name="temp_role"]').val();
    var industry = $('[name="temp_industry"]').val();
    var domain = $('[name="temp_domain"]').val();
    var onsite = $('[name="temp_site"]').val();
    var jDescription = $('[name="tempjob_des"]').val(); 
    var buComments = $('[name="bu_comments"]').val();
    var jdComments = $('[name="tempjd_comments"]').val();
    var createdby = 'Admin';
    var isactive='Y';
    
    var data = {
        
        "buid": buid,
        "salesregionid": salesregionid,
        "salesrepid": salesrepid,
        "customerid": customerid,
        "Requirement": Requirement,
        "Position": Position,
        "rolelevel": rolelevel,
        "jobtitle": jobtitle,
        "dateofreq": dateofreq,
        "closedate": closedate,
        "PSkill": PSkill,
        "SSkill": SSkill,
        "joblocationid": joblocationid,
        "joblocation": joblocation,
        "locationflex": locationflex,  
        "jdstatus": jdstatus,
        "jdduration": jdduration,
        "Exp": Exp,
        "Role": Role,
        "industry":industry,
        "domain": domain,
        "onsite": onsite,
        "jDescription": jDescription,
        "buComments": buComments,
        "jdComments": jdComments,
        "createdby": createdby,
        "isactive":isactive
    }

    data = JSON.stringify(data);
    var url = "http://localhost:2000/jdescription";
    
if(Requirement!="" && Role!="" && jobtitle!="" && Position!="" && dateofreq!="" &&
     jdduration!="" && PSkill!=""&& SSkill!=""&& locationflex!=""&& customerid!=""&& jdstatus!=""&& 
     buid!=""&& salesregionid!=""&& salesrepid!="" && joblocationid!="" && joblocation!=""&& jDescription!="")
      {
    $.ajax({
        url: url,
        type: "post",
        async: false,
        data: data,
        contentType: "application/json",
        dataType: "json",
        success: function (result) {
            $('#reqsuccessmodal').modal('show');
            
        },
        error: function () {
        }
        
    });

    }	
    
}

function myFunction() {
    console.log("search");
    var input, filter, table, tr, td, i;
    input = document.getElementById("searchreqid");
    console.log(input);
    input = document.getElementById("searchaccount");
    // console.log(input);
    // input = document.getElementById("searchrole");
    filter = input.value.toUpperCase();
    console.log(filter);
    table = document.getElementById("jobtable");
    console.log(table);
    tr = table.getElementsByTagName("tr");
    console.log(tr);
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
    //   td = tr[i].getElementsByTagName("td")[1];
    //   td = tr[i].getElementsByTagName("td")[2];  
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

  function Adserachjobs() {
      console.log("In ADSearchjobs");
    var Requirementsearch = $('[name="search_reqid"]').val();
    var Accountsearch = $('[name="search_account"]').val();
    var Rolesearch = $('[name="search_role"]').val();
   // var rolelevel = $('[name="role_level"]').val();
    var jobtitlesearch = $('[name="search_jobtitle"]').val();
    var Positionsearch = $('[name="search_nopositions"]').val();
    var Expsearch = $('[name="search_experience"]').val();
    var jddurationsearch = $('[name="search_duration"]').val();
    var PSkillsearch = $('[name="search_primaryskills"]').val();
    var SSkillsearch = $('[name="search_secondaryskills"]').val();
    var jdstatussearch = $('[name="search_status"]').val();
//    if ((Date.parse(dateofreqsearch) >= Date.parse(closedatesearch))) {
//             alert("End date should be greater than Start date");    
//         }
        var closedatesearch = $('[name="search_reqclose"]').val();
        var dateofreqsearch = $('[name="search_reqopen"]').val();
    var locationflexsearch = $('input[name=search_locationflex]:checked').val();
   if (locationflexsearch==undefined){

    locationflexsearch='';
   }
   
    var buidsearch = $('[name="search_businessunit"]').val();
    var salesregionsearch = $('[name="search_salesregion"]').val();
    var salesrepidsearch = $('[name="search_salesrep"]').val();
    var joblocationsearch = $('[name="search_joblocation"]').val(); 
    console.log(joblocationsearch);
    var joblocationidsearch = $('[name="job_location"]').val();
    var jDescriptionsearch = $('[name="search_jobdescription"]').val();
  //  var buComments = $('[name="bu_comments"]').val();
   // var jdComments = $('[name="jd_comments"]').val();
   // var createdby = 'Admin';
    var isactivesearch='Y';
    
    var data = {
        "Requirementsearch": Requirementsearch,
       "Accountsearch":Accountsearch,
        "Rolesearch": Rolesearch,
      //  "rolelevel": rolelevel,
        "jobtitlesearch": jobtitlesearch,
        "Positionsearch": Positionsearch,
        "closedatesearch": closedatesearch,
        "dateofreqsearch": dateofreqsearch,
        "jddurationsearch": jddurationsearch,
        "Expsearch": Expsearch,
        "PSkillsearch": PSkillsearch,
        "SSkillsearch": SSkillsearch,
        "locationflexsearch": locationflexsearch,
        //"customerid": customerid,
        "jdstatussearch": jdstatussearch,
        "buidsearch": buidsearch,
        "salesregionsearch": salesregionsearch,
        "salesrepidsearch": salesrepidsearch,
        "joblocationidsearch": joblocationidsearch,
        "joblocationsearch": joblocationsearch,
        "jDescriptionsearch": jDescriptionsearch,
        //"buComments": buComments,
       // "jdComments": jdComments,
        //"createdbysearch": createdbysearch,
        "isactivesearch":isactivesearch
    }

    data = JSON.stringify(data);
    var tableData = "";
    var url = "http://localhost:2000/Adserachjobs";
    
      {
    $.ajax({
        url: url,
        type: "post",
        async: false,
        data: data,
        contentType: "application/json",
        dataType: "json",
        success: function (result) {
          console.log(result);
          if (result==''){
            tableData = "<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td><center>No Records Found</center></td><td></td><td></td><td></td><td></td><td></td></td><td></td><td></td><td></tr>"; 
            $("#joblistingbody").html(tableData);
        }
        else{

            for (var i = 0; i < result.length; i++) {    
                var opendate=result[i].dateofreq;
                var converteddate=new Date(opendate);
        
                var formattedopendate =  converteddate.getFullYear()+ "-" + ((converteddate.getMonth() + 1<10)?"0"+ (converteddate.getMonth()+1): (converteddate.getMonth()+1)) + "-" + converteddate.getDate();


                var closedate=result[i].closedate;
                var converteddate=new Date(closedate);
                var formattedclosedate = converteddate.getFullYear()+ "-" + ((converteddate.getMonth() + 1<10)?"0"+ (converteddate.getMonth()+1): (converteddate.getMonth()+1)) + "-" + converteddate.getDate();
                
                var date=result[i].createddate;
                var converteddate=new Date(date);
                var formattedddate = converteddate.getFullYear()+ "-" + ((converteddate.getMonth() + 1<10)?"0"+ (converteddate.getMonth()+1): (converteddate.getMonth()+1)) + "-" + converteddate.getDate();
               
                var formatedtime=converteddate.getHours()+":"+converteddate.getMinutes()+":"+converteddate.getSeconds();
               // console.log(formatedtime);
                var requirementdatetime=formattedddate+" "+formatedtime;          
                var jobdescriptionID = "\"" + result[i].jobdescriptionid + "\"";
                tableData = tableData + "  <tr class='content'  style='white-space:nowrap' ondblclick='jobdisplay(" + jobdescriptionID + ")'> " +
                    //"<td id='' hidden>" + result[0][i].contactid + "</td>" +
                    "<td >" + result[i].requirmentid + "</td>" +
                    "<td >" + result[i].customers + "</td>" +
                    "<td >" + result[i].role + "</td>" +
                    "<td >" + result[i].jdtitle + "</td>" +
                    "<td >" + result[i].noofpositions + "</td>" +
                    "<td >" + result[i].experience + "</td>" +                  
                    "<td >" + result[i].duration + "</td>" +
                    "<td >" + result[i].primaryskills + "</td>" +
                    "<td >" + result[i].secondaryskills + "</td>" +
                    "<td >" + result[i].jobstatus + "</td>" +
                    "<td >" + formattedopendate + "</td>" +
                    "<td >" + formattedclosedate + "</td>" +                  
                    "<td >" + result[i].bussinessunit + "</td>" +
                    "<td >" + result[i].salesregions + "</td>" +
                    "<td >" + result[i].salesrep + "</td>" +
                    "<td >" + result[i].joblocation + "</td>" +
                    "<td >" + result[i].locationflexibility + "</td>" +
                    "<td >" + result[i].jobdescription + "</td>" +
                    "<td >" + result[i].createdby + "</td>" +
                    "<td >" + requirementdatetime + "</td>" +
                    // "<td >" + result[0][i].updateby + "</td>" +
                    // "<td >" + result[0][i].updatedtime+ "</td>" +
                    // "<td >" + "<a>" + "<i class='far fa-edit' data-target='#jobModal' data-toggle='modal' data-backdrop='static' data-keyboard='false'  onclick='jobdisplay(" + jobdescriptionID + ")' style='font-size: 20px;color:black;position:relative;left:37%;'></i>" + "</a>" + "</td>" +
                    "</tr>";
                    $.fn.dataTable.ext.errMode = 'none';
            }
            $("#joblistingbody").html(tableData);
//console.log(tableData);
           // console.log(result);
        }
    },
        error: function () {
        }
        
    });
  
    clearFormJobsearch();
    }		
    
}

function clearFormJobsearch() {

    $("#searchreqid").val('');
    $("#searchaccount").val('');
    $("#searchrole").val('');
    $("#searchjobtitle").val('');
    $("#searchnopositions").val('');
    $("#searchexperience").val('');
    $("#searchduration").val('');
    $("#searchprimaryskills").val('');
    $("#searchsecondaryskills").val('');
    $("#searchstatus").val('');
    $("#searchreqopen").val('');
    $("#searchreqclose").val('');
    $("#searchbusinessunit").val('');
    $("#searchsalesregion").val('');
    $("#searchsalesrep").val('');
    $("#searchjoblocation").val('');
    $("#searchlocationflex").prop('checked', false);
    $("#searchlocationflex").prop('checked', false);
    $("#searchjobdescription").val('');
    

}


function sendemail(){
    console.log("coming");
    // let emailid='indranikaikala@gmail.com';
    // let password='zac5gia45';
    // let from ='indranikaikala@gmail.com';
     let  to = 'indranikaikala@gmail.com';
           let subject='Sending Email using Node.js';
            let text= 'That was easy!';
            var data = {

//"Profileid": Profileid,
"to": to,
"subject": subject,
"text": text,

}
data = JSON.stringify(data);
    var url = "http://localhost:2000/sendemail";

    $.ajax({
        url: url,
        type: "post",
        async: false,
        data: data,
        contentType: "application/json",
        dataType: "json",
        success: function (result) {

            //$('#profilesuccessmodal').modal('show');

        },
        error: function () {
        }
    });
    
    
}

