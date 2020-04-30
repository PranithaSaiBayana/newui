function vendoridselectedoption(){

    var addreqbyvendorid = $("#afterloginvendorid").val();1
		if(addreqbyvendorid== 'dee6460c-8488-11ea-a6d9-c4346b593c25'){

			$("#profilevendorid option[value='dee6460c-8488-11ea-a6d9-c4346b593c25']").attr("selected", "selected");

		}else if(addreqbyvendorid=='1dda3c79-757f-11ea-bea3-c4346b593c25'){
		//	$("#profilevendorid").val('1dda3c79-757f-11ea-bea3-c4346b593c25' :selected);
			$("#profilevendorid option[value='1dda3c79-757f-11ea-bea3-c4346b593c25']").attr("selected", "selected");	
		}
		else if(addreqbyvendorid=='1dda3d4a-757f-11ea-bea3-c4346b593c25'){
            $("#profilevendorid option[value='1dda3d4a-757f-11ea-bea3-c4346b593c25']").attr("selected", "selected");
		}
		else{
            $("#profilevendorid option[value='1dda3d7c-757f-11ea-bea3-c4346b593c25']").attr("selected", "selected"); 
        }
}



function jobreqiddropdown() {

    jobreqID = '';
    var url = "http://localhost:2000/jobreqid";
    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {

            //jobstatusdrop = jobstatusdrop+"<option>--Select--</option>";
            for (var i = 0; i < result[0].length; i++) {
                jobreqID = jobreqID +
                    '<option value="' + result[0][i].jobdescriptionid + '" >' + result[0][i].requirmentid + '</option>';
            }
            $("#jobrecid").html(jobreqID);
            $("#reqiddrop").html(jobreqID);
            //$("#statuspedit").html(jobstatusdrop);
        }
    });
}

function vendorjobreqiddropdown() {
console.log("working");
    vendorreqID = '';
    var addreqbyvendorid = $("#afterloginvendorid").val();
    console.log(addreqbyvendorid);
    var url = "http://localhost:2000/vendorjobreqid/"+ addreqbyvendorid;
    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {

            //jobstatusdrop = jobstatusdrop+"<option>--Select--</option>";
            for (var i = 0; i < result[0].length; i++) {
                vendorreqID = vendorreqID +
                    '<option value="' + result[0][i].jobdescriptionid + '" >' + result[0][i].requirmentid + '</option>';
            }
            $("#jobrecid").html(vendorreqID);
            $("#reqiddrop").html(vendorreqID);
            //$("#statuspedit").html(jobstatusdrop);
        }
    });
}

function profileonloaddropdown() {

    profileonloaddropdown = '';
    var url = "http://localhost:2000/profileonloaddropdown";
    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {

            //jobstatusdrop = jobstatusdrop+"<option>--Select--</option>";
            for (var i = 0; i < result[0].length; i++) {
                profileonloaddropdown = profileonloaddropdown +
                    '<option value="' + result[0][i].stateid + '" >' + result[0][i].state + '</option>';
            }
            $("#state").html(profileonloaddropdown);
            $("#peditstate").html(profileonloaddropdown);
            //$("#statuspedit").html(jobstatusdrop);
        }
    });
}

function editjobtitilebyreqid() {

    var reqId = $('[name="pjob_recid"]').find(":selected").val();
    var jobtitilebyreqid = "";

    var url = "http://localhost:2000/jobtitlebyreqid/" + reqId;
    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {

            //profilestatebycountry = profilestatebycountry+"<option>--Select--</option>";
            for (var i = 0; i < result[0].length; i++) {
                jobtitilebyreqid = jobtitilebyreqid +
                    '<option value="' + result[0][i].jdtitle + '">' + result[0][i].jdtitle + '</option>';
            }
            $("#profilejobtitle").html(jobtitilebyreqid);
        }
    });
}

function editprofilestatedropdown() {


    var profilecountry = $('[name="pedit_country"]').find(":selected").val();

    var profilestatebycountry = "";
    var url = "http://localhost:2000/statebycountry/" + profilecountry;

    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {

            //profilestatebycountry = profilestatebycountry+"<option>--Select--</option>";

            for (var i = 0; i < result[0].length; i++) {
                profilestatebycountry = profilestatebycountry +
                    '<option value="' + result[0][i].stateid + '">' + result[0][i].state + '</option>';
            }

            $("#peditstate").html(profilestatebycountry);
        }
    });
}

function profiletabcountrydropdown() {
    var profilecountry = "";
    var url = "http://localhost:2000/profilecountry";
    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {
            //profilecountry = profilecountry+"<option>--Select--</option>";
            for (var i = 0; i < result[0].length; i++) {
                profilecountry = profilecountry +
                    '<option value="' + result[0][i].countryid + '">' + result[0][i].country + '</option>';
            }
            $("#country").html(profilecountry);
            $("#peditcountry").html(profilecountry);
        }
    });
}

function profiletabstatedropdown() {
    console.log("profiletab");
    let profilecountry = $('[name="p_country"]').find(":selected").val();
    console.log(profilecountry);
    var profilestatebycountry = "";
    var url = "http://localhost:2000/statebycountry/" + profilecountry;
    console.log(url);
    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {
            //profilestatebycountry = profilestatebycountry+"<option>--Select--</option>";
            for (var i = 0; i < result[0].length; i++) {
                profilestatebycountry = profilestatebycountry +
                    '<option value="' + result[0][i].stateid + '">' + result[0][i].state + '</option>';
            }
            $("#state").html(profilestatebycountry);
            //$("#srepedit").html(salesrepdropdown);
        }
    });
}

function highestqualdropdown() {
    var highestqual = "";
    var url = "http://localhost:2000/highestqual";
    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {

            //highestqual = highestqual + "<option>--Select--</option>";
            for (var i = 0; i < result[0].length; i++) {
                highestqual = highestqual +
                    '<option value="' + result[0][i].highestqualificationid + '">' + result[0][i].highestqualification + '</option>';
            }
            $("#highestquali").html(highestqual);
            //$("#srepedit").html(salesrepdropdown);
            $("#pedithighestquali").html(highestqual);
        }
    });
}

function profilestatusdropdown() {
    var profilestatus = "";
    var url = "http://localhost:2000/profilestatus";
    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {

            //profilestatus = profilestatus + "<option>--Select--</option>";

            for (var i = 0; i < result[0].length; i++) {
                profilestatus = profilestatus +
                    '<option value="' + result[0][i].statusid + '">' + result[0][i].status + '</option>';
            }
            $("#status").html(profilestatus);
            //$("#srepedit").html(salesrepdropdown);
            $("#peditstatus").html(profilestatus);
        }
    });
}

function profilestatusforvendordropdown() {
    var profilestatusforvendor = "";
    var url = "http://localhost:2000/profilestatusforvendor";
    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {


            for (var i = 0; i < result[0].length; i++) {
                profilestatusforvendor = profilestatusforvendor +
                    '<option value="' + result[0][i].profilestatusid + '">' + result[0][i].profilestatus + '</option>';
            }
            $("#status").html(profilestatusforvendor);
            //$("#srepedit").html(salesrepdropdown);
            $("#peditstatus").html(profilestatusforvendor);
        }
    });
}


function profilevendordropdown() {

    profilevendor = '';
    var url = "http://localhost:2000/profilevendor";
    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {

            for (var i = 0; i < result[0].length; i++) {
                profilevendor = profilevendor +
                    '<option value="' + result[0][i].vendorid + '">' + result[0][i].vendorname + '</option>';
            }
            $("#profilevendorid").html(profilevendor);
            $("#peditvendorid").html(profilevendor);
            //$("#statuspedit").html(jobstatusdrop);
        }
    });
}

function statuschange(pstatusid) {
    if (pstatusid == "Submitted For LTTS Screening") {
        enableprofileedit();
        $("#InterviewBtn").css("display", "none");
        $("#ltts").removeClass("is-reject active").addClass("submitted");
        $("#LttsScreening").removeClass("is-reject active").addClass("submitted");
        $("#LttsInterview").removeClass("active is-reject submitted");
        $("#customer").removeClass("is-reject active submitted");
        $("#customerScreening").removeClass("active is-reject submitted");
        $("#customerInterview").removeClass("active is-reject submitted");
        $("#onboarded").removeClass("active is-reject submitted");
    }
    else if (pstatusid == "LTTS Screening Reject") {
        clearformprofilereject();
        $("#InterviewBtn").css("display", "none");
        $("#ltts").removeClass("active submitted").addClass("is-reject");
        $("#LttsScreening").removeClass("active submitted").addClass("is-reject");
        $("#LttsInterview").removeClass("active submitted is-reject");
        $("#customer").removeClass("is-reject active submitted");
        $("#customerScreening").removeClass("active submitted is-reject");
        $("#customerInterview").removeClass("active submitted is-reject");
        $("#onboarded").removeClass("active submitted is-reject");
    }
    else if (pstatusid == "Shortlist For LTTS Interview") {
        enableprofileedit();
        $("#InterviewBtn").css("display", "block");
        $("#ltts").removeClass("is-reject active").addClass("submitted");
        $("#LttsScreening").removeClass("is-reject submitted").addClass("active");
        $("#LttsInterview").removeClass("active is-reject").addClass("submitted");
        $("#customer").removeClass("is-reject active submitted");
        $("#customerScreening").removeClass("active is-reject submitted");
        $("#customerInterview").removeClass("active is-reject submitted");
        $("#onboarded").removeClass("active is-reject submitted");
    }
    else if (pstatusid == "LTTS Interview Reject") {
        clearformprofilereject();

        $("#InterviewBtn").css("display", "none");
        $("#ltts").removeClass("active submitted").addClass("is-reject");
        $("#LttsScreening").removeClass("is-reject submitted").addClass("active");
        $("#LttsInterview").removeClass("active submitted").addClass("is-reject");
        $("#customer").removeClass("is-reject active submitted");
        $("#customerScreening").removeClass("active is-reject submitted");
        $("#customerInterview").removeClass("active is-reject submitted");
        $("#onboarded").removeClass("active is-reject submitted");
    }
    else if (pstatusid == "LTTS Interview Select") {
        enableprofileedit();
        $("#InterviewBtn").css("display", "none");
        $("#ltts").removeClass("is-reject submitted").addClass("active");
        $("#LttsScreening").removeClass("is-reject submitted").addClass("active");
        $("#LttsInterview").removeClass("is-reject submitted").addClass("active");
        $("#customer").removeClass("is-reject active submitted");
        $("#customerScreening").removeClass("is-reject active submitted");
        $("#customerInterview").removeClass("active is-reject submitted");
        $("#onboarded").removeClass("active is-reject submitted");
    }
    else if (pstatusid == "Submitted For Customer Screening") {
        enableprofileedit();
        $("#InterviewBtn").css("display", "none");
        $("#ltts").removeClass("is-reject submitted").addClass("active");
        $("#LttsScreening").removeClass("is-reject submitted").addClass("active");
        $("#LttsInterview").removeClass("is-reject submitted").addClass("active");
        $("#customer").removeClass("is-reject active").addClass("submitted");
        $("#customerScreening").removeClass("is-reject active").addClass("submitted");
        $("#customerInterview").removeClass("active is-reject submitted");
        $("#onboarded").removeClass("active is-reject submitted");
    }
    else if (pstatusid == "Customer Screening Reject") {
        clearformprofilereject();
        $("#InterviewBtn").css("display", "none");
        $("#ltts").removeClass("is-reject submitted").addClass("active");
        $("#LttsScreening").removeClass("is-reject submitted").addClass("active");
        $("#LttsInterview").removeClass("is-reject submitted").addClass("active");
        $("#customer").removeClass("submitted active").addClass("is-reject");
        $("#customerScreening").removeClass("submitted active").addClass("is-reject");
        $("#customerInterview").removeClass("active is-reject submitted");
        $("#onboarded").removeClass("active is-reject submitted");
    }
    else if (pstatusid == "Shortlist For Customer Interview") {
        enableprofileedit();
        $("#InterviewBtn").css("display", "block");
        $("#ltts").removeClass("is-reject submitted").addClass("active");
        $("#LttsScreening").removeClass("is-reject submitted").addClass("active");
        $("#LttsInterview").removeClass("is-reject submitted").addClass("active");
        $("#customer").removeClass("is-reject active").addClass("submitted");
        $("#customerScreening").removeClass("is-reject submitted").addClass("active");
        $("#customerInterview").removeClass("is-reject active").addClass("submitted");
        $("#onboarded").removeClass("active is-reject submitted");
    }
    else if (pstatusid == "Customer Interview Reject") {
        clearformprofilereject();
        $("#InterviewBtn").css("display", "none");
        $("#ltts").removeClass("is-reject submitted").addClass("active");
        $("#LttsScreening").removeClass("is-reject submitted").addClass("active");
        $("#LttsInterview").removeClass("is-reject submitted").addClass("active");
        $("#customer").removeClass("submitted active").addClass("is-reject");
        $("#customerScreening").removeClass("is-reject submitted").addClass("active");
        $("#customerInterview").removeClass("submitted active").addClass("is-reject");
        $("#onboarded").removeClass("active is-reject submitted");
    }
    else if (pstatusid == "Customer Interview Select") {
        enableprofileedit();
        $("#InterviewBtn").css("display", "none");
        $("#ltts").removeClass("is-reject submitted").addClass("active");
        $("#LttsScreening").removeClass("is-reject submitted").addClass("active");
        $("#LttsInterview").removeClass("is-reject submitted").addClass("active");
        $("#customer").removeClass("is-reject submitted").addClass("active");
        $("#customerScreening").removeClass("is-reject submitted").addClass("active");
        $("#customerInterview").removeClass("is-reject submitted").addClass("active");
        $("#onboarded").removeClass("active is-reject submitted");
    }
    else if (pstatusid == "On-Boarded") {
        enableprofileedit();
        $("#InterviewBtn").css("display", "none");
        $("#ltts").removeClass("is-reject submitted").addClass("active");
        $("#LttsScreening").removeClass("is-reject submitted").addClass("active");
        $("#LttsInterview").removeClass("is-reject submitted").addClass("active");
        $("#customer").removeClass("is-reject submitted").addClass("active");
        $("#customerScreening").removeClass("is-reject submitted").addClass("active");
        $("#customerInterview").removeClass("is-reject submitted").addClass("active");
        $("#onboarded").removeClass("is-reject submitted").addClass("active");
    }
}

function addprofile() {
    //var Profileid = $('[name="profileid"]').val();
    var Jobrecid = $('[name="pjob_recid"]').val();
    var jobreqcode = $("#jobrecid option:selected").text();
    var Firstname = $('[name="pfirst_name"]').val();
    var Lastname = $('[name="plast_name"]').val();
    var Email = $('[name="p_email"]').val();
    var Mobile = $('[name="p_mobile"]').val();
    var Dob = $('[name="p_dob"]').val();
    var City = $('[name="p_city"]').val();
    var State = $('[name="p_state"]').val();
    var Country = $('[name="p_country"]').val();
    var Experience = $('[name="p_experience"]').val();
    var Highestquali = $('[name="p_highestquali"]').val();
    var Currentjobtitle = $('[name="pcurrent_jobtitle"]').val();
    var Currentsalary = $('[name="pcurrent_salary"]').val();
    var Expectedsalary = $('[name="pexpected_salary"]').val();
    var Skillset = $('[name="pskill_set"]').val();
    var Skypeid = $('[name="pskype_id"]').val();
    var Noticeperiod = $('[name="pnotice_period"]').val();
    var Currentlocation = $('[name="pcurrent_location"]').val();
    var Desiredlocation = $('[name="pdesired_location"]').val();
    var Status = $('[name="p_status"]').val();

    var Resume = $('[name="resume_hiddenId"]').val();
    console.log(["resume_hiddenId"]);


    var Vendorid = $("#profilevendorid option:selected").val();
    var Createdby = 'Admin';
    var Pjobtitle = $('[name="pjob_title"]').val();
    var Psecondskill = $('[name="sskill_set"]').val();
    var Resigned = $('input[name=resigned]:checked').val();
    var Vendorname = $("#profilevendorid option:selected").text();
    var isactive = 'Y'

    var data = {

        //"Profileid": Profileid,
        "Jobrecid": Jobrecid,
        "jobreqcode": jobreqcode,
        "Firstname": Firstname,
        "Lastname": Lastname,
        "Email": Email,
        "Mobile": Mobile,
        "Dob": Dob,
        "City": City,
        "State": State,
        "Country": Country,
        "Experience": Experience,
        "Highestquali": Highestquali,
        "Currentjobtitle": Currentjobtitle,
        "Currentsalary": Currentsalary,
        "Expectedsalary": Expectedsalary,
        "Skillset": Skillset,
        "Skypeid": Skypeid,
        "Noticeperiod": Noticeperiod,
        "Currentlocation": Currentlocation,
        "Desiredlocation": Desiredlocation,
        "Status": Status,
        "Resume": Resume,
        "Vendorid": Vendorid,
        "Createdby": Createdby,
        "Pjobtitle": Pjobtitle,
        "Psecondskill": Psecondskill,
        "Resigned": Resigned,
        "Vendorname": Vendorname,
        "isactive": isactive
    }

    data = JSON.stringify(data);


    var url = "http://localhost:2000/addprofiles";

    if (Jobrecid != "" && jobreqcode != "" && Firstname != "" && Lastname != "" && Email != "" && Mobile != ""
        && Experience != "" && Highestquali != "" && Currentjobtitle != "" && Currentsalary != ""
        && Expectedsalary != "" && Skillset != "" && Noticeperiod != "" && Currentlocation != "" && Desiredlocation != ""
        && Status != "" && Experience != "" && Resigned != "" && Vendorid != "" && Pjobtitle != "" && Vendorname != "") {
        $.ajax({
            url: url,
            type: "post",
            async: false,
            data: data,
            contentType: "application/json",
            dataType: "json",
            success: function (result) {

                $('#profilesuccessmodal').modal('show');

            },
            error: function () {
            }
        });
        clearFormProfile();
    }
    else {
        alert("Please fill all the mandatory fields");
    }

}
function profileslistingbyvendorrole() {
    var profilevendorroleid=$("#afterloginvendorid").val();

    var tableData = "";

    var url = "http://localhost:2000/profileslistingbyvendorrole/"+profilevendorroleid;

    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {

            for (var i = 0; i < result[0].length; i++) {


                var date = result[0][i].createddate;
                var converteddate = new Date(date);

                var formattedddate = converteddate.getDate() + "-" + (converteddate.getMonth() + 1) + "-" + converteddate.getFullYear();
                console.log(formattedddate);
                var formatedtime = converteddate.getHours() + ":" + converteddate.getMinutes() + ":" + converteddate.getSeconds();
                console.log(formatedtime);
                var profiledatetime = formattedddate + " " + formatedtime;

                var profileID = "\"" + result[0][i].profileid + "\"";
                var statusId = "\"" + result[0][i].status + "\"";

                if (result[0][i].psecondaryskill == "undefined") {

                    result[0][i].psecondaryskill = ""
                }


                tableData = tableData + "  <tr class='content' style='white-space:nowrap' ondblclick='profilesdisplay(" + profileID + ")' onclick='statuschange(" + statusId + ") ' > " +

                    "<td >" + result[0][i].jobreqcode + "</td>" +
                    "<td >" + result[0][i].pvendorname + "</td>" +
                    "<td >" + result[0][i].pjobtitle + "</td>" +
                    "<td >" + result[0][i].firstname + "&nbsp" + result[0][i].lastname + "</td>" +
                    "<td >" + result[0][i].experince + "</td>" +
                    "<td >" + result[0][i].skillset + "</td>" +
                    "<td >" + result[0][i].psecondaryskill + "</td>" +
                    "<td >" + result[0][i].status + "</td>" +
                    "<td >" + result[0][i].noticeperiod + "</td>" +
                    "<td >" + result[0][i].email + "</td>" +
                    "<td >" + result[0][i].mobile + "</td>" +
                    "<td >" + result[0][i].dob.slice(0, 10) + "</td>" +
                    "<td >" + result[0][i].city + "</td>" +
                    "<td >" + result[0][i].currentjobtitle + "</td>" +
                    "<td >" + result[0][i].currentsalary + "</td>" +
                    "<td >" + result[0][i].expectedsalary + "</td>" +
                    "<td >" + result[0][i].createdby + "</td>" +
                    "<td >" + profiledatetime + "</td>" +
                    // "<td >" + result[0][i].updatedby + "</td>" +
                    // "<td >" + result[0][i].updateddate + "</td>" +
                    "</tr>";
                $.fn.dataTable.ext.errMode = 'none';
            }

            // $("#profileslistingbody").html(tableData);
            $("#profiletable tbody").html(tableData);
            $("#profiletable").DataTable({
                //  "destroy": "true",
                // scrollX:        '50vh',
                //scrollY:        '50vh',
                scrollCollapse: true,
                paging: true,

                "lengthMenu": [[10, 25, 100, -1], [10, 25, 100, "All"]],

            });
            jQuery('.dataTable').wrap('<div class="dataTables_scroll" />');

            //$("#profiletable thead").remove(); 
        }
    });
}

function profileslistingdetails() {

    var tableData = "";

    var url = "http://localhost:2000/profileslistingdetails";

    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {

            for (var i = 0; i < result[0].length; i++) {


                var date = result[0][i].createddate;
                var converteddate = new Date(date);

                var formattedddate = converteddate.getDate() + "-" + (converteddate.getMonth() + 1) + "-" + converteddate.getFullYear();
                console.log(formattedddate);
                var formatedtime = converteddate.getHours() + ":" + converteddate.getMinutes() + ":" + converteddate.getSeconds();
                console.log(formatedtime);
                var profiledatetime = formattedddate + " " + formatedtime;

                var profileID = "\"" + result[0][i].profileid + "\"";
                var statusId = "\"" + result[0][i].status + "\"";

                if (result[0][i].psecondaryskill == "undefined") {

                    result[0][i].psecondaryskill = ""
                }


                tableData = tableData + "  <tr class='content' style='white-space:nowrap' ondblclick='profilesdisplay(" + profileID + ")' onclick='statuschange(" + statusId + ") ' > " +

                    "<td >" + result[0][i].jobreqcode + "</td>" +
                    "<td >" + result[0][i].pvendorname + "</td>" +
                    "<td >" + result[0][i].pjobtitle + "</td>" +
                    "<td >" + result[0][i].firstname + "&nbsp" + result[0][i].lastname + "</td>" +
                    "<td >" + result[0][i].experince + "</td>" +
                    "<td >" + result[0][i].skillset + "</td>" +
                    "<td >" + result[0][i].psecondaryskill + "</td>" +
                    "<td >" + result[0][i].status + "</td>" +
                    "<td >" + result[0][i].noticeperiod + "</td>" +
                    "<td >" + result[0][i].email + "</td>" +
                    "<td >" + result[0][i].mobile + "</td>" +
                    "<td >" + result[0][i].dob.slice(0, 10) + "</td>" +
                    "<td >" + result[0][i].city + "</td>" +
                    "<td >" + result[0][i].currentjobtitle + "</td>" +
                    "<td >" + result[0][i].currentsalary + "</td>" +
                    "<td >" + result[0][i].expectedsalary + "</td>" +
                    "<td >" + result[0][i].createdby + "</td>" +
                    "<td >" + profiledatetime + "</td>" +
                    // "<td >" + result[0][i].resumename + "</td>" +

                    "<td >" + "<a href='https://docs.google.com/viewer?url='+data.Location+'&embedded=true'>" + result[0][i].resumename.slice(74) + "</a>" + "</td>" +
        //   "<td >" + "<a href='window.open('https://docs.google.com/viewer?url='+data.Location+'&embedded=true')'>" + result[0][i].resumename.slice(74) + "</a>" + "</td>" +

                  
                 // window.open('https://docs.google.com/viewer?url='+data.Location+'&embedded=true')
                    // "<td >" + result[0][i].updatedby + "</td>" +
                    // "<td >" + result[0][i].updateddate + "</td>" +
                    "</tr>";
                $.fn.dataTable.ext.errMode = 'none';
            }

            // $("#profileslistingbody").html(tableData);
            $("#profiletable tbody").html(tableData);
            $("#profiletable").DataTable({
                //  "destroy": "true",
                // scrollX:        '50vh',
                //scrollY:        '50vh',
                scrollCollapse: true,
                paging: true,

                "lengthMenu": [[10, 25, 100, -1], [10, 25, 100, "All"]],

            });
            jQuery('.dataTable').wrap('<div class="dataTables_scroll" />');

            //$("#profiletable thead").remove(); 
        }
    });
}

function profilesdisplay(i) {

    $("#profileEditModal").modal({

        backdrop: 'static',
        keyboard: true,
        show: true
    });
    // $("#updateeditprofile").hide();
    var url = "http://localhost:2000/profilelisting/" + i;

    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {

            console.log(result);
            if (result[0][0].psecondaryskill == "undefined") {
                //console.log(result[0][0].psecondaryskill);
                result[0][0].psecondaryskill = ""
            }


            if (result[0][0].Resignation == 'Y') {
                $("#editresignedy").prop('checked', true);

            }
            else if (result[0][0].Resignation == 'N') {
                $("#editresignedn").prop('checked', true);
            }

            //console.log(result);
            $("#editprofilehiddenId").text(result[0][0].profileid);
            $("#peditjobrecuuid").text(result[0][0].jobrecid);
            $("#pprofileid").text(result[0][0].profileid);
            $("#peditjobrecid").text(result[0][0].jobreqcode);
            $("#peditfirstname").val(result[0][0].firstname);
            $("#peditlastname").val(result[0][0].lastname);
            $("#peditemail").val(result[0][0].email);
            $("#peditmobile").val(result[0][0].mobile);
            $("#peditdob").val(result[0][0].dob.slice(0, 10));
            $("#peditcity").val(result[0][0].city);
            $("#peditstate").val(result[0][0].stateid).attr('selected', 'selected');
           // console.log(result[0][0].stateid);
            $("#peditcountry").val(result[0][0].countryid).attr('selected', 'selected');
            $("#peditexperience").val(result[0][0].experince);
            $("#pedithighestquali").val(result[0][0].highestqualificationid).attr('selected', 'selected');
            $("#peditcurrentjobtitle").val(result[0][0].currentjobtitle);
            $("#peditcurrentsalary").val(result[0][0].currentsalary);
            $("#peditexpectedsalary").val(result[0][0].expectedsalary);
            $("#peditskillset").val(result[0][0].skillset);
            $("#peditskypeid").val(result[0][0].skypeid);
            $("#peditnoticeperiod").val(result[0][0].noticeperiod);
            $("#peditcurrentlocation").val(result[0][0].currentlocationid).attr('selected', 'selected');
            $("#peditdesiredlocation").val(result[0][0].desiredlocationid).attr('selected', 'selected');
            $("#peditstatus").val(result[0][0].statusid).attr('selected', 'selected');
            $("#peditvendorid").val(result[0][0].vendorid);
            $("#peditfilename").val(result[0][0].resumename);
            $("#peditjobtitle").text(result[0][0].pjobtitle);
            $("#seditskillset").val(result[0][0].psecondaryskill);

            // interviewfields

            $("#resumehiddenId").text(result[0][1].Location);
            console.log(result[0][1].Location);

            console.log(result[0][0].jobrecid);
            $("#profileinterviewhiddenId").text(result[0][0].profileid);
            $("#jobinterviewhiddenId").text(result[0][0].jobrecid);
            $("#interviewreqid").val(result[0][0].jobreqcode);
            $("#lttsjobtitle").val(result[0][0].pjobtitle);
            $("#lttscandname").val(result[0][0].firstname + " " + result[0][0].lastname);

        }

    });

}

function updateprofile() {

    var peditprofileId = $('[name="editprofile_hiddenId"]').text();
    var peditjobrecid = $('[name="peditjob_recuuid"]').text();
    console.log()
    var peditjobreqcode = $('[name="peditjob_recid"]').text();
    var peditfirstname = $('[name="peditfirst_name"]').val();
    var peditlastname = $('[name="peditlast_name"]').val();
    var peditemail = $('[name="pedit_email"]').val();
    var peditmobile = $('[name="pedit_mobile"]').val();
    var peditdob = $('[name="pedit_dob"]').val();
    var peditcity = $('[name="pedit_city"]').val();
    var peditstate = $('[name="pedit_state"]').val();
    var peditcountry = $('[name="pedit_country"]').val();
    var peditexperience = $('[name="pedit_experience"]').val();
    var pedithighestquali = $('[name="pedit_highestquali"]').val();
    var peditcurrentjobtitle = $('[name="peditcurrent_jobtitle"]').val();
    var peditcurrentsalary = $('[name="peditcurrent_salary"]').val();
    var peditexpectedsalary = $('[name="peditexpected_salary"]').val();
    //	var peditresigned = $('[name="editresigned"]').val();
    var peditskillset = $('[name="peditskill_set"]').val();
    var seditskillset = $('[name="seditskill_set"]').val();
    var peditskypeid = $('[name="peditskype_id"]').val();
    var peditnoticeperiod = $('[name="peditnotice_period"]').val();
    var peditcurrentlocation = $('[name="peditcurrent_location"]').val();
    var peditdesiredlocation = $('[name="peditdesired_location"]').val();
    var peditstatus = $('[name="pedit_status"]').val();
    var peditresumename = $('[name="peditresume_name"]').val();
    var peditvendorid = $('[name="pedit_vendorid"]').val();
    var editresigned = $('input[name=editresigned]:checked').val();
    var peditvendorname = $("#peditvendorid option:selected").text();
    var peditpjobtitle = $('[name="peditjob_title"]').text();
    var Updateby = 'Admin';
    var Createdby = 'Admin';
    var isactive = 'Y'


    var data = {

        "peditprofileId": peditprofileId,
        "peditjobrecid": peditjobrecid,
        "peditjobreqcode": peditjobreqcode,
        "peditfirstname": peditfirstname,
        "peditlastname": peditlastname,
        "peditemail": peditemail,
        "peditmobile": peditmobile,
        "peditdob": peditdob,
        "peditcity": peditcity,
        "peditstate": peditstate,
        "peditcountry": peditcountry,
        "peditexperience": peditexperience,
        "pedithighestquali": pedithighestquali,
        "peditcurrentjobtitle": peditcurrentjobtitle,
        "peditcurrentsalary": peditcurrentsalary,
        "peditexpectedsalary": peditexpectedsalary,
        "peditskillset": peditskillset,
        "seditskillset": seditskillset,
        "peditskypeid": peditskypeid,
        "peditnoticeperiod": peditnoticeperiod,
        "peditcurrentlocation": peditcurrentlocation,
        "peditdesiredlocation": peditdesiredlocation,
        //"peditresigned": peditresigned,
        "peditstatus": peditstatus,
        "peditresumename": peditresumename,
        "peditvendorid": peditvendorid,
        "peditupdatedby": 'Admin',
        "peditresignation": editresigned,
        "peditvendorname": peditvendorname,
        "peditpjobtitle": peditpjobtitle,
        "Updateby": Updateby,
        "Createdby": Createdby,
        "isactive": isactive
    }

    data = JSON.stringify(data);
    console.log(data);

    url = "http://localhost:2000/updateprofile/" + peditprofileId,

        console.log(url);

    $.ajax({
        url: url,
        type: "post",
        async: false,
        data: data,
        contentType: "application/json",
        dataType: "json",
        success: function (result) {

            $('#profileEditModal').modal('hide');
            $('#profileupdatemodal').modal('show');
            $.fn.dataTable.ext.errMode = 'none';
        },
        error: function () {
        }
    });

    profileslistingdetails();

}
function enableprofileedit() {

    $("#peditsalutation").attr('disabled', false);
    $("#peditfirstname").attr('disabled', false);
    $("#peditlastname").attr('disabled', false);
    $("#peditemail").attr('disabled', false);
    $("#peditmobile").attr('disabled', false);
    $("#peditdob").attr('disabled', false);
    $("#peditcity").attr('disabled', false);
    $("#peditstate").attr('disabled', false);
    $("#peditcountry").attr('disabled', false);
    $("#peditpostalcode").attr('disabled', false);
    $("#peditexperience").attr('disabled', false);
    $("#pedithighestquali").attr('disabled', false);
    $("#peditcurrentjobtitle").attr('disabled', false);
    $("#peditcurrentsalary").attr('disabled', false);
    $("#peditexpectedsalary").attr('disabled', false);
    $("#peditskillset").attr('disabled', false);
    $("#peditskypeid").attr('disabled', false);
    $("#peditnoticeperiod").attr('disabled', false);
    $("#peditcurrentlocation").attr('disabled', false);
    $("#peditdesiredlocation").attr('disabled', false);
    $("#peditresigned").attr('disabled', false);
    $("#peditevaldate").attr('disabled', false);
    $("#peditinternaltd").attr('disabled', false);
    $("#peditpanel").attr('disabled', false);
    $("#peditscreening").attr('disabled', false);
    $("#peditstatus").attr('disabled', false);
    $("#peditvendorid").attr('disabled', false);
    $("#peditfilename").attr('disabled', false);
    $("#seditskillset").attr('disabled', false);
}

function clearFormProfile() {

    $("#jobrecid").val('');
    $("#profilejobtitle").val('');
    $("#firstname").val('');
    $("#lastname").val('');
    $("#mobile").val('');
    $("#email").val('');
    $("#dob").val('');
    $("#country").val('');
    $("#state").val('');
    $("#city").val('');
    $("#highestquali").val('');
    $("#currentjobtitle").val('');
    $("#currentsalary").val('');
    $("#expectedsalary").val('');
    $("#pskillset").val('');
    $("#sskillset").val('');
    $("#skypeid").val('');
    $("#noticeperiod").val('');
    $("#currentlocation").val('');
    $("#desiredlocation").val('');
    $("#profileexperience").val('');
    $("#resignedy").prop('checked', false);
    $("#resignedn").prop('checked', false);
    $("#status").val('');
    $("#profilevendorid").val('');
    $("#pfilename").val('');

}

function adsearchprofile() {

    //var Profileid = $('[name="profileid"]').val();
    // var Jobrecidproserach =$("#searchreqidpro option:selected").text();
    var jobreqcodeproserach = $('[name="search_reqidpro"]').val();
    var Firstnameproserach = $('[name="search_candidatenaempro"]').val();
    var Lastnameproserach = $('[name="search_candidatenaempro"]').val();
    var Emailproserach = $('[name="search_emailpro"]').val();
    //alert(Emailproserach);
    var Mobileproserach = $('[name="search_mobilepro"]').val();
    var Dobproserach = $('[name="search_dobpro"]').val();
    // alert(Dobproserach);
    var Cityproserach = $('[name="search_citypro"]').val();
    //  var Stateproserach = $('[name="p_state"]').val();
    // var Countryproserach = $('[name="p_country"]').val();
    var Experienceproserach = $('[name="search_experiencepro"]').val();
    //  var Highestqualiproserach = $('[name="p_highestquali"]').val();
    var Currentjobtitleproserach = $('[name="search_currjobtitlepro"]').val();
    var Currentsalaryproserach = $('[name="search_currsalarypro"]').val();
    var Expectedsalaryproserach = $('[name="search_expectedsalarypro"]').val();
    var Skillsetproserach = $('[name="search_priskillspro"]').val();
    // var Skypeidproserach = $('[name="pskype_id"]').val();
    var Noticeperiodproserach = $('[name="search_noticeperiodpro"]').val();
    //  var Currentlocationproserach = $('[name="search_currsalarypro"]').val();
    // var Desiredlocationproserach = $('[name="pdesired_location"]').val();
    var Statusproserach = $('[name="search_statuspro"]').val();
    console.log(Statusproserach);
    //var Resumeproserach = $('[name="presume_name"]').val();
    //  var Vendoridproserach = $("#searchvendorpro option:selected").val();
    // var Createdbyproserach = 'Admin';
    var Pjobtitleproserach = $('[name="search_jobtitlepro"]').val();
    var Psecondskillproserach = $('[name="search_secondskillspro"]').val();
    // var Resignedproserach = $('input[name=resigned]:checked').val();
    var Vendornameproserach = $('[name="search_vendorpro"]').val();
    // $("#searchvendorpro option:selected").text();

    var isactiveproserach = 'Y'

    var data = {

        //"Profileid": Profileid,
        // "Jobrecidproserach": Jobrecidproserach,
        "jobreqcodeproserach": jobreqcodeproserach,
        "Vendornameproserach": Vendornameproserach,
        "Firstnameproserach": Firstnameproserach,
        "Lastnameproserach": Lastnameproserach,
        "Emailproserach": Emailproserach,
        "Mobileproserach": Mobileproserach,
        "Dobproserach": Dobproserach,
        "Cityproserach": Cityproserach,
        //  "Stateproserach": Stateproserach,
        //  "Countryproserach": Countryproserach,
        "Experienceproserach": Experienceproserach,
        // "Highestqualiproserach": Highestqualiproserach,
        "Currentjobtitleproserach": Currentjobtitleproserach,
        "Currentsalaryproserach": Currentsalaryproserach,
        "Expectedsalaryproserach": Expectedsalaryproserach,
        "Skillsetproserach": Skillsetproserach,
        // "Skypeidproserach": Skypeidproserach,
        "Noticeperiodproserach": Noticeperiodproserach,
        // "Currentlocationproserach": Currentlocationproserach,
        // "Desiredlocationproserach": Desiredlocationproserach,
        "Statusproserach": Statusproserach,
        // "Resumeproserach": Resumeproserach,
        // "Vendoridproserach": Vendoridproserach,
        //  "Createdbyproserach": Createdbyproserach,
        "Pjobtitleproserach": Pjobtitleproserach,
        "Psecondskillproserach": Psecondskillproserach,
        //  "Resignedproserach": Resignedproserach,

        "isactiveproserach": isactiveproserach
    }

    data = JSON.stringify(data);

    var tableData = " ";
    var url = "http://localhost:2000/adsearchprofile";
    {

        $.ajax({
            url: url,
            type: "post",
            async: false,
            data: data,
            contentType: "application/json",
            dataType: "json",
            success: function (result) {

                if (result == '') {
                    tableData = "<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td><center>No Records Found</center></td><td></td><td></td><td></td><td></td><td></td></td><td></td><td></td><td></tr>";
                    $("#profilelistingbody").html(tableData);
                }
                else {


                    console.log(result);
                    for (var i = 0; i < result.length; i++) {
                        console.log(result[0].length);
                        var profileID = "\"" + result[i].profileid + "\"";
                        var statusId = "\"" + result[i].status + "\"";

                        if (result[i].psecondaryskill == "undefined") {

                            result[i].psecondaryskill = ""
                        }

                        tableData = tableData + "  <tr class='content' style='white-space:nowrap' ondblclick='profilesdisplay(" + profileID + ")' onclick='statuschange(" + statusId + "),clearformprofiledropdown() ' > " +
                            "<td >" + result[i].jobreqcode + "</td>" +
                            "<td >" + result[i].pvendorname + "</td>" +
                            "<td >" + result[i].pjobtitle + "</td>" +
                            "<td >" + result[i].firstname + "&nbsp" + result[i].lastname + "</td>" +
                            "<td >" + result[i].experince + "</td>" +
                            "<td >" + result[i].skillset + "</td>" +
                            "<td >" + result[i].psecondaryskill + "</td>" +
                            "<td >" + result[i].status + "</td>" +
                            "<td >" + result[i].noticeperiod + "</td>" +
                            "<td >" + result[i].email + "</td>" +
                            "<td >" + result[i].mobile + "</td>" +
                            "<td >" + result[i].dob.slice(0, 10) + "</td>" +
                            "<td >" + result[i].city + "</td>" +
                            "<td >" + result[i].currentjobtitle + "</td>" +
                            "<td >" + result[i].currentsalary + "</td>" +
                            "<td >" + result[i].expectedsalary + "</td>" +
                            "<td >" + result[i].createdby + "</td>" +
                            "<td >" + result[i].createddate + "</td>" +

                            // "<td >" + result[i].updatedby + "</td>" +
                            // "<td >" + result[i].updateddate + "</td>" +
                            "</tr>";
                    }
                    // console.log(result);


                    $("#profilelistingbody").html(tableData);
                }
                console.log(tableData);


            },
            error: function () {
            }
        });
        clearFormProfilesearch();
        //$('#profilesuccessmodal').modal('show');


        //  profileslistingdetails();
    }
}

function clearFormProfilesearch() {

    $("#searchreqidpro").val('');
    $("#searchvendorpro").val('');
    $("#searchjobtitlepro").val('');
    $("#searchcandidatenaempro").val('');
    $("#searchexperiencepro").val('');
    $("#searchpriskillspro").val('');
    $("#searchsecondskillspro").val('');
    $("#searchstatuspro").val('');
    $("#searchnoticeperiodpro").val('');
    $("#searchemailpro").val('');
    $("#searchmobilepro").val('');
    $("#searchdobpro").val('');
    $("#searchcitypro").val('');
    $("#searchcurrjobtitlepro").val('');
    $("#searchcurrsalarypro").val('');
    $("#searchexpectedsalarypro").val('');


}


function clearformprofilereject() {

    console.log("clearformprofilereject");

    $("#peditfirstname").prop("disabled", true);
    $("#peditlastname").prop("disabled", true);
    $("#peditmobile").prop("disabled", true);
    $("#peditemail").prop("disabled", true);
    $("#peditdob").prop("disabled", true);
    $("#peditcountry").prop("disabled", true);
    $("#peditnoticeperiod").prop("disabled", true);
    $("#peditstate").prop("disabled", true);
    $("#peditcity").prop("disabled", true);
    $("#pedithighestquali").prop("disabled", true);
    $("#peditcurrentjobtitle").prop("disabled", true);
    $("#peditcurrentsalary").prop("disabled", true);
    $("#peditexpectedsalary").prop("disabled", true);
    $("#peditskillset").prop("disabled", true);
    $("#seditskillset").prop("disabled", true);
    $("#peditskypeid").prop("disabled", true);
    $("#peditcurrentlocation").prop("disabled", true);
    $("#peditdesiredlocation").prop("disabled", true);
    $("#peditexperience").prop("disabled", true);
    $("#peditstatus").prop("disabled", true);
    $("#peditvendorid").prop("disabled", true);
    $("#resume").prop("disabled", true);
}