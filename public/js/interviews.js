function createlttsinterview() {
    var interviewID = '';
    var interviewprofileID = $('[name="interviewprofile_hiddenId"]').text();
    var interviewjobId = $('[name="interviewjob_hiddenId"]').text();

    var interviewjobcode = $('[name="interview_reqid"]').val();
    var interviewjobtitle = $('[name="lttsjob_title"]').val();
    var interviewername = $('[name="lttsint_name"]').val();
    var candidatename = $('[name="lttscand_name"]').val();
    var interviewtypeId = $('[name="lttsint_type"]').val();
    var interviewmodeId = $('[name="lttsint_mode"]').val();
    var interviewlocationid = $('[name="lttsint_location"]').val();
    var interviewdatetime = $('[name="lttsint_time"]').val();
    var noofrounds = '0';
    var interviewstatus = '929c43cd-677a-11ea-91b1-c4346b593c25';
    //var editReasonforrescheduling=$('[name="edit_reason_reschedule"]').val();
    var editintcustomerid = $('[name="customerint_name"]').val();
    var skypeid = $('[name="int_skypeid_txt"]').val();
    var contactnum = $('[name="int_contactnum_txt"]').val();
    var createdby = 'Admin';
    var isactive = 'Y';



    var data = {
        "interviewID": interviewID,
        "interviewprofileID": interviewprofileID,
        "interviewjobId": interviewjobId,
        "interviewjobcode": interviewjobcode,
        "interviewjobtitle": interviewjobtitle,
        "interviewername": interviewername,
        "candidatename": candidatename,
        "interviewtypeId": interviewtypeId,
        "interviewmodeId": interviewmodeId,
        "interviewlocationid": interviewlocationid,
        "interviewdatetime": interviewdatetime,
        "noofrounds": noofrounds,
        "interviewstatus": interviewstatus,
        "createdby": createdby,
        "isactive": isactive,
        "editintcustomerid": editintcustomerid,
        "skypeid": skypeid,
        "contactnum": contactnum

    }

    data = JSON.stringify(data);



    var url = "http://localhost:2000/createinterview";


    if (interviewjobcode != "" && interviewjobtitle != "" && interviewername != "" && candidatename != "" && interviewtypeId != "" && interviewmodeId != "" &&
        interviewlocationid != "" && interviewdatetime != "") {

        $.ajax({
            url: url,
            type: "post",
            async: false,
            data: data,
            contentType: "application/json",
            dataType: "json",
            success: function (result) {


                var errormsg = result[0].outputmsg;

                if (errormsg == null) {
                    $('#interviewsuccessmodal').modal('show');
                    $('#interviewModal').modal('hide');
                }
                else {
                    $("#errormessage").text(errormsg);
                    setTimeout(function () {
                        $("#errormessage").text(errormsg).fadeOut('slow');
                    }, 2000);


                    $('#interviewModal').modal('show');
                    //  return false;
                }

                //clearFormJob();

            },
            error: function () {

            }
        });
        interviewlisting();
    }
    else {
        alert("Please fill all the mandatory fields");
    }

}


function createnxtlvlinterview() {
    var interviewID = $('[name="edit_int_hidId"]').text();

    var interviewprofileID = $('[name="edit_intpro_hidId"]').text();
    var interviewjobId = $('[name="edit_intjob_hidId"]').text();
    var interviewjobcode = $('[name="edit_interview_reqid"]').val();
    var interviewjobtitle = $('[name="edit_lttsjob_title"]').val();
    var interviewername = $('[name="edit_lttsint_name"]').val();
    var candidatename = $('[name="edit_lttscand_name"]').val();
    var interviewtypeId = $('[name="edit_lttsint_type"]').val();
    var interviewmodeId = $('[name="edit_lttsint_mode"]').val();
    var interviewlocationid = $('[name="edit_lttsint_location"]').val();
    var interviewdatetime = ($('[name="edit_intschedule_date"]').val().slice(0, 16));
    var noofrounds = $('[name="intlevel_txt"]').val();
    //var editReasonforrescheduling=$('[name="edit_reason_reschedule"]').val();
    var editintcustomerid = $('[name="edit_int_customer_name"]').val();
    var schedulenxtlvldate = $('[name="sche_nxtlvl_txt"]').val();
    var interviewstatus = '929c43cd-677a-11ea-91b1-c4346b593c25';
    //$('[name="status_scheduleint_txt"]').val();
    var createdby = 'Admin';
    var isactive = 'Y';
    var data = {
        "interviewID": interviewID,
        "interviewprofileID": interviewprofileID,
        "interviewjobId": interviewjobId,
        "interviewjobcode": interviewjobcode,
        "interviewjobtitle": interviewjobtitle,
        "interviewername": interviewername,
        "candidatename": candidatename,
        "interviewtypeId": interviewtypeId,
        "interviewmodeId": interviewmodeId,
        "interviewlocationid": interviewlocationid,
        "interviewdatetime": interviewdatetime,
        "interviewstatus": interviewstatus,
        "noofrounds": noofrounds,
        "createdby": createdby,
        "isactive": isactive,
        "schedulenxtlvldate": schedulenxtlvldate,
        "editintcustomerid": editintcustomerid,


    }

    data = JSON.stringify(data);
    var url = "http://localhost:2000/createinterview";

    if (interviewername != "" && candidatename != "" && interviewtypeId != "" && interviewmodeId != "" && interviewlocationid != "" && editintcustomerid != ""
        && schedulenxtlvldate != "") {
        $.ajax({
            url: url,
            type: "post",
            async: false,
            data: data,
            contentType: "application/json",
            dataType: "json",
            success: function (result) {

                var errormsg = result[0].outputmsg;

                if (errormsg == null) {
                    $('#editinterviewModal').modal('hide');
                    $('#interviewnxtlvlmodal').modal('show');
                }
                else {
                    $("#errormessage").text(errormsg);
                    //$("#").modal()
                }



            },
            error: function () {

            }
        });
        interviewlisting();
    }
    else {
        alert("Please fill all the mandatory fields");
    }
}
function interviewlisting() {


    var tableData = "";
    var url = "http://localhost:2000/interviewlisting";
    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {



            for (var i = 0; i < result[0].length; i++) {






                if (result[0][i].interviewnextleveldate == null || result[0][i].interviewnextleveldate == "0000-00-00 00:00:00") {

                    var nxtlevel = result[0][i].interviewnextleveldate = 'NA'
                } else {

                    var nxtlevel = result[0][i].interviewnextleveldate.slice(0, 16);


                }

                if (result[0][i].interviewrescheduledate == null || result[0][i].interviewrescheduledate == "0000-00-00 00:00:00") {
                    var rescheduledate = result[0][i].interviewrescheduledate = 'NA'
                } else {

                    var rescheduledate = result[0][i].interviewrescheduledate.slice(0, 16);


                }

                if (result[0][i].reschedulereason == "null" || result[0][i].reschedulereason == "undefined") {
                    result[0][i].reschedulereason = 'NA'
                }
                var interviewID = "\"" + result[0][i].lttsinterviewid + "\"";
                var interviewstatus = "\"" + result[0][i].interviewprofilestatus + "\"";
                var interviewtype = "\"" + result[0][i].interviewtype + "\"";
                tableData = tableData + "  <tr style='white-space:nowrap'  ondblclick='interviewdisplay(" + interviewID + "),interviewstatustoggle(" + interviewstatus + "),editinterviewtypechange(" + interviewtype + ")'> " +

                    "<td >" + result[0][i].interviewjobcode + "</td>" +
                    "<td >" + result[0][i].interviewjobtitle + "</td>" +
                    "<td >" + result[0][i].ltts_interviewername + "</td>" +
                    "<td >" + result[0][i].candidatename + "</td>" +
                    "<td >" + result[0][i].interviewtype + "</td>" +
                    "<td >" + result[0][i].interviewmode + "</td>" +
                    "<td >" + result[0][i].location + "</td>" +
                    "<td >" + result[0][i].interviewlevel + "</td>" +
                    "<td >" + result[0][i].lttsinterviewdateandtime.slice(0, 16) + "</td>" +
                    "<td >" + result[0][i].interviewprofilestatus + "</td>" +
                    "<td >" + rescheduledate + "</td>" +
                    "<td >" + result[0][i].reschedulereason + "</td>" +
                    "<td >" + nxtlevel + "</td>" +
                    "</tr>";
                $.fn.dataTable.ext.errMode = 'none';
            }
            //  $("#vendorlistingbody").html(tableData);
            $("#interviewtable tbody").html(tableData);
            $("#interviewtable").DataTable({
                // "destroy": "true",
                "lengthMenu": [[10, 25, 100, -1], [10, 25, 100, "All"]],
            });
            jQuery('.dataTable').wrap('<div class="dataTables_scroll" />');
        }
    });
}

function interviewtypechange() {
    var interviewtype = $('[name="lttsint_type"]').val();

    if (interviewtype == "eb64c2de-516e-11ea-ab2a-c4346b593c25") {
        $("#customerintlbl").show();
        $("#customerintname ").show();
        $("#editintcustomername").show();
        $("#editintcustomerlbl").show();

    }
    else {
        $("#customerintlbl").hide();
        $("#customerintname ").hide();
        $("#editintcustomername").hide();
        $("#editintcustomerlbl").hide();
    }

}
function editinterviewtypechange(i) {


    if (i == "Customer") {
        $("#customerintlbl").show();
        $("#customerintname ").show();
        $("#editintcustomername").show();
        $("#editintcustomerlbl").show();

    }
    else {
        $("#customerintlbl").hide();
        $("#customerintname ").hide();
        $("#editintcustomername").hide();
        $("#editintcustomerlbl").hide();
    }

}

function interviewmodechange() {

    var interviewmode = $('[name="lttsint_mode"]').val();

    //     if(interviewmode=="c3108df2-4d89-11ea-9408-c4346b593c25"){
    //         console.log("skype");
    //         $("#skypeidintlbl").show();
    //         $("#intskypeidtxt").show();
    //         $("#phonenumintlbl").hide();
    //         $("#intcontactnumtxt").hide(); 

    //     }
    //     else if(interviewmode=="c30e0b5d-4d89-11ea-9408-c4346b593c25"){
    //         console.log("F2F");

    //         $("#skypeidintlbl").hide();
    //         $("#intskypeidtxt").hide();
    //         $("#phonenumintlbl").hide();
    //         $("#intcontactnumtxt").hide();
    //     }

    // else 
    if (interviewmode == "c3108ee5-4d89-11ea-9408-c4346b593c25") {
        console.log("phone");
        $("#skypeidintlbl").hide();
        $("#intskypeidtxt").hide();
        $("#phonenumintlbl").show();
        $("#intcontactnumtxt").show();

    }
    else {
        $("#skypeidintlbl").hide();
        $("#intskypeidtxt").hide();
        $("#phonenumintlbl").hide();
        $("#intcontactnumtxt").hide();
    }

}

function interviewdisplay(i) {
    $("#editinterviewModal").modal({

        backdrop: 'static',
        keyboard: true,
        show: true
    });
    var url = "http://localhost:2000/interviewdisplaybyid/" + i;

    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {



            $("#intleveltxt").val(result[0][0].interviewlevel + 1);
            $("#editintidId").text(result[0][0].lttsinterviewid);
            $("#editprointhidId").text(result[0][0].interviewprofileid);
            $("#editjobinthidId").text(result[0][0].interveiwjobrequrimentid);

            $("#editinterviewreqid").val(result[0][0].interviewjobcode);
            $("#editlttsjobtitle").val(result[0][0].interviewjobtitle);
            $("#editlttscandname").val(result[0][0].candidatename);
            $("#editlttsintname").val(result[0][0].ltts_interviewername);
            $("#editlttsinttype").attr('selected', 'selected').val(result[0][0].lttsinterviewtypeid);
            $("#editlttsintmode").val(result[0][0].lttsinterviewmodeid).attr('selected', 'selected');
            $("#editlttsintlocation").val(result[0][0].lttsinterviewlocationid).attr('selected', 'selected');
            $("#statuscheduleinttxt").val(result[0][0].interviewstatusid).attr('selected', 'selected');
            $("#editintscheduledate").val(result[0][0].lttsinterviewdateandtime);
            $("#editlttsintrounds").val(result[0][0].noofrounds);
            $("#editreasonreschedule").val(result[0][0].reschedulereason);
            $("#editintcustomername").val(result[0][0].interviewcustomerid);


        }

    });

}
function interviewmodedropdown() {

    interviewmode = '';
    var url = "http://localhost:2000/interviewmode";
    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {

            for (var i = 0; i < result[0].length; i++) {
                interviewmode = interviewmode +
                    '<option value="' + result[0][i].interviewmodeid + '">' + result[0][i].interviewmode + '</option>';
            }
            $("#lttsintmode").html(interviewmode);
            $("#editlttsintmode").html(interviewmode);

        }
    });
}

function interviewtypedropdown() {

    interviewtype = '';
    var url = "http://localhost:2000/interviewtype";
    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {

            for (var i = 0; i < result[0].length; i++) {
                interviewtype = interviewtype +
                    '<option value="' + result[0][i].interviewtypeid + '">' + result[0][i].interviewtype + '</option>';
            }
            $("#lttsinttype").html(interviewtype);
            $("#editlttsinttype").html(interviewtype);

        }
    });
}

function interviewstatusdropdown() {

    interviewstatus = '';
    var url = "http://localhost:2000/interviewstatus";
    $.ajax({
        url: url,
        type: "GET",
        success: function (result) {

            // if(Rejected=="29ad107e-6432-11ea-a876-c4346b593c25"){
            //     clearforminterviewstatusdropdown()
            // }
            // console.log("if");

            for (var i = 0; i < result[0].length; i++) {
                interviewstatus = interviewstatus +
                    '<option value="' + result[0][i].interviewprofilestatusid + '">' + result[0][i].interviewprofilestatus + '</option>';


            }
            $("#statuscheduleinttxt").html(interviewstatus);

        }
    });
}
function rescheduletoggleinterview() {
    $("#reschedulelbl").show();
    $("#rescheduletxt").show();
    $("#reasonreschedulelbl").show();
    $("#reasonrescheduletext").show();
    $("#reschedulesavebtn").show();
    $("#reschedulebtn").hide();
    $("#intlevellbl").hide();
    $("#intleveltxt").hide();
    $("#nxtlvlsavebtn").hide();
    $("#nxtlvlbtn").hide();
    $("#intdetailsH").hide();
    $("#nxtlvlintH").hide();
    $("#rescheduleintH").show();
    $("#schenxtlvllbl").hide();
    $("#schenxtlvltxt").hide();
    $("#statusscheduleintlbl").hide();
    $("#statuscheduleinttxt").hide();
}

function schedulenextlevel() {

    $("#reschedulelbl").hide();
    $("#rescheduletxt").hide();
    $("#reasonreschedulelbl").hide();
    $("#reasonrescheduletext").hide();
    $("#reschedulesavebtn").hide();
    $("#nxtlvlsavebtn").show();
    $("#nxtlvlbtn").hide();
    $("#reschedulebtn").hide();
    $("#intlevellbl").show();
    $("#intleveltxt").show();
    $("#intdetailsH").hide();
    $("#nxtlvlintH").show();
    $("#rescheduleintH").hide();

    $("#schenxtlvllbl").show();
    $("#schenxtlvltxt").show();

    $("#statusscheduleintlbl").hide();
    $("#statuscheduleinttxt").hide();
}


function clearinterviewvalues() {
    $("#intleveltxt").val('');
    $("#schenxtlvltxt").val('');
    $("#editlttsintname").val('');
    $("#rescheduletxt").val('');
    $("#reasonrescheduletext").val('');
    $("#lttsintname").val('');
    $("#lttsinttime").val('');

    $("#skypeidintlbl").hide();
    $("#phonenumintlbl").hide();
    $("#intskypeidtxt").hide();
    $("#intcontactnumtxt").hide();

}
function rescheduleinterview() {

    var editinterviewID = $('[name="edit_int_hidId"]').text();
    var editinterviewprofileID = $('[name="edit_intpro_hidId"]').text();
    var editinterviewjobId = $('[name="edit_intjob_hidId"]').text();
    var editinterviewjobcode = $('[name="edit_interview_reqid"]').val();
    var editinterviewjobtitle = $('[name="edit_lttsjob_title"]').val();
    var editinterviewername = $('[name="edit_lttsint_name"]').val();
    var editcandidatename = $('[name="edit_lttscand_name"]').val();
    var editinterviewtypeId = $('[name="edit_lttsint_type"]').val();
    var editinterviewmodeId = $('[name="edit_lttsint_mode"]').val();
    var editinterviewlocationid = $('[name="edit_lttsint_location"]').val();
    var editinterviewdatetime = $('[name="edit_intschedule_date"]').val().slice(0, 16);
    //var editnoofrounds=$('[name="edit_lttsint_rounds"]').val();
    var editReasonforrescheduling = $('[name="edit_reason_reschedule"]').val();
    var editintcustomerid = $('[name="edit_int_customer_name"]').val();
    var rescheduledate = $('[name="reschedule_txt"]').val();
    var reschedulestatus = '929c43cd-677a-11ea-91b1-c4346b593c25';
    var updatedby = 'Admin';

    var isactive = 'Y'



    var data = {
        "editinterviewID": editinterviewID,
        "editinterviewprofileID": editinterviewprofileID,
        "editinterviewjobId": editinterviewjobId,
        "editinterviewjobcode": editinterviewjobcode,
        "editinterviewjobtitle": editinterviewjobtitle,
        "editinterviewername": editinterviewername,
        "editcandidatename": editcandidatename,
        "editinterviewtypeId": editinterviewtypeId,
        "editinterviewmodeId": editinterviewmodeId,
        "editinterviewlocationid": editinterviewlocationid,
        "editinterviewdatetime": editinterviewdatetime,
        //  "editnoofrounds": editnoofrounds,
        "editReasonforrescheduling": editReasonforrescheduling,
        "updatedby": updatedby,
        "isactive": isactive,
        "reschedulestatus": reschedulestatus,
        "editintcustomerid": editintcustomerid,
        "rescheduledate": rescheduledate


    }


    data = JSON.stringify(data);

    var url = "http://localhost:2000/updateinterview/" + editinterviewID;


    if (editinterviewername != "" && editcandidatename != "" && editinterviewtypeId != "" && editinterviewmodeId != "" && editinterviewlocationid != "" &&
        rescheduledate != "" && editintcustomerid != "" && editReasonforrescheduling != "") {
        $.ajax({
            url: url,
            type: "post",
            async: false,
            data: data,
            contentType: "application/json",
            dataType: "json",
            success: function (result) {


                $('#editinterviewModal').modal('hide');
                $('#interviewreschdulemodal').modal('show');
                $.fn.dataTable.ext.errMode = 'none';
                interviewlisting();
                //clearFormJob();

            },
            error: function () {

            }
        });

    } else {
        alert("Please fill all the mandatory fields");
    }

    interviewlisting();
}



function updateinterviewstatus() {
    var interviewhiddenID = $('[name="edit_intpro_hidId"]').text();
    var editinterviewID = $('[name="edit_int_hidId"]').text();
    var editinterviewername = $('[name="edit_lttsint_name"]').val();
    var editcandidatename = $('[name="edit_lttscand_name"]').val();
    var editinterviewtypeId = $('[name="edit_lttsint_type"]').val();
    var editinterviewmodeId = $('[name="edit_lttsint_mode"]').val();
    var editinterviewlocationid = $('[name="edit_lttsint_location"]').val();

    //var editintcustomerid=$('[name="edit_int_customer_name"]').val();
    var rescheduledate = '0000-00-00 00:00:00';
    //  $('[name="reschedule_txt"]').val();
    var reschedulestatus = $('[name="status_scheduleint_txt"]').val();

    var updatedby = 'Admin';
    var isactive = 'Y'



    var data = {
        "interviewhiddenID": interviewhiddenID,
        "editinterviewID": editinterviewID,
        "editinterviewername": editinterviewername,
        "editcandidatename": editcandidatename,
        "editinterviewtypeId": editinterviewtypeId,
        "editinterviewmodeId": editinterviewmodeId,
        "editinterviewlocationid": editinterviewlocationid,
        "rescheduledate": rescheduledate,
        "reschedulestatus": reschedulestatus,
        "updatedby": updatedby,
        "isactive": isactive,
    }


    data = JSON.stringify(data);

    var url = "http://localhost:2000/updateinterview/" + editinterviewID;


    if (editinterviewername != "" && editcandidatename != "" && editinterviewtypeId != "" && editinterviewmodeId != "" && editinterviewlocationid != "" &&
        reschedulestatus != "") {
        $.ajax({
            url: url,
            type: "post",
            async: false,
            data: data,
            contentType: "application/json",
            dataType: "json",
            success: function (result) {


                $('#editinterviewModal').modal('hide');
                $('#interviewstatusmodal').modal('show');
                $.fn.dataTable.ext.errMode = 'none';
                interviewlisting();
                //clearFormJob();

            },
            error: function () {

            }
        });

    } else {
        alert("Please fill all the mandatory fields");
    }
    interviewlisting();

}

function interviewstatustoggle(i) {

    if (i == "Interview Scheduled") {
        statusenable();
        $("#intdetailsH").show();
        $("#rescheduleintH").hide();
        $("#nxtlvlintH").hide();
        $("#intstatusbtn").show();
        $("#nxtlvlbtn").hide();
        $("#reschedulebtn").hide();

        $("#cancelintbtn").hide();
        $("#reschedulesavebtn").hide();
        $("#nxtlvlsavebtn").hide();

        $("#statuscheduleinttxt").show();
        $("#statusscheduleintlbl").show();
        $("#reschedulelbl").hide();
        $("#rescheduletxt").hide();
        $("#schenxtlvllbl").hide();
        $("#schenxtlvltxt").hide();
        $("#reasonreschedulelbl").hide();
        $("#reasonrescheduletext").hide();
        $("#intlevellbl").hide();
        $("#intleveltxt").hide();


    }
    if (i == "Selected") {
        statusenable();
        $("#intdetailsH").show();
        $("#rescheduleintH").hide();
        $("#nxtlvlintH").hide();
        $("#intstatusbtn").hide();
        $("#nxtlvlbtn").show();
        $("#reschedulebtn").show();

        $("#cancelintbtn").hide();
        $("#reschedulesavebtn").hide();
        $("#nxtlvlsavebtn").hide();

        $("#statuscheduleinttxt").hide();
        $("#statusscheduleintlbl").hide();
        $("#reschedulelbl").hide();
        $("#rescheduletxt").hide();
        $("#schenxtlvllbl").hide();
        $("#schenxtlvltxt").hide();
        $("#reasonreschedulelbl").hide();
        $("#reasonrescheduletext").hide();
        $("#intlevellbl").hide();
        $("#intleveltxt").hide();


    }
    else if (i == "Rejected") {

        clearforminterviewstatusdropdown();

        $("#intdetailsH").show();
        $("#rescheduleintH").hide();
        $("#nxtlvlintH").hide();
        $("#intstatusbtn").show();
        $("#nxtlvlbtn").hide();
        $("#reschedulebtn").hide();

        $("#cancelintbtn").hide();
        $("#reschedulesavebtn").hide();
        $("#nxtlvlsavebtn").hide();



        $("#statuscheduleinttxt").hide();
        $("#statusscheduleintlbl").hide();
        $("#reschedulelbl").hide();
        $("#rescheduletxt").hide();
        $("#schenxtlvllbl").hide();
        $("#schenxtlvltxt").hide();
        $("#reasonreschedulelbl").hide();
        $("#reasonrescheduletext").hide();
        $("#intlevellbl").hide();
        $("#intleveltxt").hide();
    }


    else if (i == "Interview Cancelled" || i == "Reschedule Interview") {
        statusenable();
        $("#rescheduleintH").show();
        $("#intdetailsH").hide();
        $("#nxtlvlintH").hide();
        $("#intstatusbtn").hide();
        $("#nxtlvlbtn").hide();
        $("#reschedulebtn").show();

        $("#cancelintbtn").hide();
        $("#reschedulesavebtn").hide();
        $("#nxtlvlsavebtn").hide();

        $("#statuscheduleinttxt").hide();
        $("#statusscheduleintlbl").hide();
        $("#reschedulelbl").hide();
        $("#rescheduletxt").hide();
        $("#schenxtlvllbl").hide();
        $("#schenxtlvltxt").hide();
        $("#reasonreschedulelbl").hide();
        $("#reasonrescheduletext").hide();
        $("#intlevellbl").hide();
        $("#intleveltxt").hide();
    }
    else if (i == "Shortlist For Next Level") {
        statusenable();
        $("#nxtlvlintH").show();
        $("#intdetailsH").hide();
        $("#rescheduleintH").hide();
        $("#intstatusbtn").hide();
        $("#nxtlvlbtn").show();
        $("#reschedulebtn").hide();

        $("#cancelintbtn").hide();
        $("#reschedulesavebtn").hide();
        $("#nxtlvlsavebtn").hide();

        $("#statuscheduleinttxt").hide();
        $("#statusscheduleintlbl").hide();
        $("#reschedulelbl").hide();
        $("#rescheduletxt").hide();
        $("#schenxtlvllbl").hide();
        $("#schenxtlvltxt").hide();
        $("#reasonreschedulelbl").hide();
        $("#reasonrescheduletext").hide();
        $("#intlevellbl").hide();
        $("#intleveltxt").hide();
    }
    else {
        $("#intdetailsH").show();
        $("#rescheduleintH").hide();
        $("#nxtlvlintH").hide();
        $("#intstatusbtn").show();
        $("#nxtlvlbtn").hide();
        $("#reschedulebtn").hide();

        $("#cancelintbtn").hide();
        $("#reschedulesavebtn").hide();
        $("#nxtlvlsavebtn").hide();

        $("#statuscheduleinttxt").show();
        $("#statusscheduleintlbl").show();
        $("#reschedulelbl").hide();
        $("#rescheduletxt").hide();
        $("#schenxtlvllbl").hide();
        $("#schenxtlvltxt").hide();
        $("#reasonreschedulelbl").hide();
        $("#reasonrescheduletext").hide();
        $("#intlevellbl").hide();
        $("#intleveltxt").hide();
    }


}
function interviewstatusupdate() {
    var intstatus = $('[name="status_scheduleint_txt"]').val();

    if (intstatus == "929c43cd-677a-11ea-91b1-c4346b593c25") {
        $("#intdetailsH").show();
        $("#rescheduleintH").hide();
        $("#nxtlvlintH").hide();
        $("#intstatusbtn").show();
        $("#nxtlvlbtn").hide();
        $("#reschedulebtn").hide();

        $("#cancelintbtn").hide();
        $("#reschedulesavebtn").hide();
        $("#nxtlvlsavebtn").hide();



    }
    if (intstatus == "29ad0dad-6432-11ea-a876-c4346b593c25") {

        $("#intstatusbtn").hide();
        $("#nxtlvlbtn").show();
        $("#reschedulebtn").show();

        $("#cancelintbtn").hide();
        $("#reschedulesavebtn").hide();
        $("#nxtlvlsavebtn").hide();



    }
    else if (intstatus == "29ad107e-6432-11ea-a876-c4346b593c25") {

        $("#intdetailsH").show();
        $("#rescheduleintH").hide();
        $("#nxtlvlintH").hide();
        $("#intstatusbtn").show();
        $("#nxtlvlbtn").hide();
        $("#reschedulebtn").hide();

        $("#cancelintbtn").hide();
        $("#reschedulesavebtn").hide();
        $("#nxtlvlsavebtn").hide();




    }


    else if (intstatus == "75bddd15-6749-11ea-91b1-c4346b593c25" || intstatus == "6a839e75-6756-11ea-91b1-c4346b593c25") {
        $("#rescheduleintH").show();
        $("#intdetailsH").hide();
        $("#nxtlvlintH").hide();
        $("#intstatusbtn").show();
        $("#nxtlvlbtn").hide();
        $("#reschedulebtn").show();

        $("#cancelintbtn").hide();
        $("#reschedulesavebtn").hide();
        $("#nxtlvlsavebtn").hide();

    }
    else if (intstatus == "29add6cd-6432-11ea-a876-c4346b593c25") {
        $("#nxtlvlintH").show();
        $("#intdetailsH").hide();
        $("#rescheduleintH").hide();
        $("#intstatusbtn").hide();
        $("#nxtlvlbtn").show();
        $("#reschedulebtn").hide();

        $("#cancelintbtn").hide();
        $("#reschedulesavebtn").hide();
        $("#nxtlvlsavebtn").hide();


    }
    else {
        $("#intdetailsH").show();
        $("#rescheduleintH").hide();
        $("#nxtlvlintH").hide();
        $("#intstatusbtn").show();
        $("#nxtlvlbtn").hide();
        $("#reschedulebtn").hide();

        $("#cancelintbtn").hide();
        $("#reschedulesavebtn").hide();
        $("#nxtlvlsavebtn").hide();


    }


}


function interviewschedulemessage() {
    var editprofileID = $('[name="editprofile_hiddenId"]').text();




    var data = {
        "editprofileID": editprofileID,

    }


    data = JSON.stringify(data);

    var url = "http://localhost:2000/interviewschedulemsg/" + editprofileID;



    $.ajax({
        url: url,
        type: "get",
        async: false,
        data: data,
        contentType: "application/json",
        dataType: "json",
        success: function (result) {
            console.log(result);
            var displaymsg = result[0].outputmsg;
            console.log(displaymsg);
            if (displaymsg == null) {
                $("#interviewModal").modal('show');
                $("#profileEditModal").modal('hide');
            }
            else {
                $("#interviewalreadyscheduledmodal").modal('show');
                $("#profileEditModal").modal('hide');
            }


        },
        error: function () {

        }
    });

}

function adsearchinterview() {
    // var interviewID = '';
    console.log("in adsearch interview");
    var reqidsearchinter = $('[name="search_reqidinterview"]').val();
    var jobtitlesearchinter = $('[name="search_jobtitleinterview"]').val();

    var intviewernamesearchinter = $('[name="search_interviwernameint"]').val();
    var candinamesearchinter = $('[name="search_candinameinterview"]').val();
    var typeofintserachinter = $('[name="search_intertypeofinteview"]').val();
    console.log(typeofintserachinter);
    var modeofintsearchinter = $('[name="search_modeofinterview"]').val();
    var interviewelocasearchinter = $('[name="search_interlocinterviewr"]').val();
    var interlevelsearchinter = $('[name="search_interviewlevelint"]').val();
    var scheduledinteronseint = $('[name="search_schedinterviewon"]').val();
    var statusintersearchinter = $('[name="search_statusofinter"]').val();
    var rescheduledinteronseint = $('[name="search_reschedinterviewon"]').val();
    var rearecheduledinterseint = $('[name="search_reareschedinterview"]').val();
    var schedulenextinteronseint = $('[name="search_schednextlevlinterviewon"]').val();

    var createdby = 'Admin';
    var isactivesearchinter = 'Y';


    var data = {
        "reqidsearchinter": reqidsearchinter,
        "jobtitlesearchinter": jobtitlesearchinter,
        "intviewernamesearchinter": intviewernamesearchinter,
        "candinamesearchinter": candinamesearchinter,
        "typeofintserachinter": typeofintserachinter,
        "modeofintsearchinter": modeofintsearchinter,
        "interviewelocasearchinter": interviewelocasearchinter,
        "interlevelsearchinter": interlevelsearchinter,
        "scheduledinteronseint": scheduledinteronseint,
        "statusintersearchinter": statusintersearchinter,
        "rescheduledinteronseint": rescheduledinteronseint,
        "rearecheduledinterseint": rearecheduledinterseint,
        "schedulenextinteronseint": schedulenextinteronseint,
        "isactivesearchinter": isactivesearchinter
    }

    data = JSON.stringify(data);
    console.log(data);
    var tableData = "";
    var url = "http://localhost:2000/adsearchinterview";

    {
        console.log(url);
        $.ajax({
            url: url,
            type: "post",
            async: false,
            data: data,
            contentType: "application/json",
            dataType: "json",
            success: function (result) {
                console.log(result);

                if (result == '') {
                    tableData = "<td></td><td></td><td></td><td></td><td></td><td></td><td><center>No Records Found</center></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
                    $("#interviewlistingbody").html(tableData);
                }
                else {


                    for (var i = 0; i < result.length; i++) {
                        console.log(result[0].length);
                        if (result[i].interviewnextleveldate == null || result[i].interviewnextleveldate == "0000-00-00 00:00:00") {

                            var nxtlevel = result[i].interviewnextleveldate = 'NA'
                        } else {

                            var nxtlevel = result[i].interviewnextleveldate.slice(0, 16);

                        }

                        if (result[i].interviewrescheduledate == null || result[i].interviewrescheduledate == "0000-00-00 00:00:00") {
                            var rescheduledate = result[i].interviewrescheduledate = 'NA'
                        } else {

                            var rescheduledate = result[i].interviewrescheduledate.slice(0, 16);


                        }

                        if (result[i].reschedulereason == "null" || result[i].reschedulereason == "undefined") {
                            result[i].reschedulereason = 'NA'
                        }
                        var interviewID = "\"" + result[i].lttsinterviewid + "\"";
                        var interviewstatus = "\"" + result[i].interviewprofilestatus + "\"";
                        var interviewtype = "\"" + result[i].interviewtype + "\"";
                        tableData = tableData + "  <tr style='white-space:nowrap'  ondblclick='interviewdisplay(" + interviewID + "),interviewstatustoggle(" + interviewstatus + "),editinterviewtypechange(" + interviewtype + ")'> " +

                            "<td >" + result[i].interviewjobcode + "</td>" +
                            "<td >" + result[i].interviewjobtitle + "</td>" +
                            "<td >" + result[i].ltts_interviewername + "</td>" +
                            "<td >" + result[i].candidatename + "</td>" +
                            "<td >" + result[i].interviewtype + "</td>" +
                            "<td >" + result[i].interviewmode + "</td>" +
                            "<td >" + result[i].location + "</td>" +
                            "<td >" + result[i].interviewlevel + "</td>" +
                            "<td >" + result[i].lttsinterviewdateandtime.slice(0, 16) + "</td>" +
                            "<td >" + result[i].interviewprofilestatus + "</td>" +
                            "<td >" + rescheduledate + "</td>" +
                            "<td >" + result[i].reschedulereason + "</td>" +
                            "<td >" + nxtlevel + "</td>" +
                            "</tr>";
                        // $.fn.dataTable.ext.errMode = 'none';
                    }
                    $("#interviewlistingbody").html(tableData);
                    //  $("#interviewtable tbody").html(tableData);   

                }
            },
            error: function () {

            }
        });
        clearForminterviewsearch();
    }

}

function clearForminterviewsearch() {

    $("#searchreqidinterview").val('');
    $("#searchinterviwernameint").val('');
    $("#searchcandinameinterview").val('');
    $("#searchjobtitleinterview").val('');
    $("#searchintertypeofinteview").val('');
    $("#searchmodeofinterview").val('');
    $("#searchinterlocinterviewr").val('');
    $("#searchinterviewlevelint").val('');
    $("#searchschedinterviewon").val('');
    $("#searchstatusofinter").val('');
    $("#searchreschedinterviewon").val('');
    $("#searchreareschedinterview").val('');
    $("#searchschednextlevlinterviewon").val('');


}

function clearforminterviewstatusdropdown() {
    $("#editlttscandname").prop("disabled", true);
    $("#editlttsintname").prop("disabled", true);
    $("#editlttsintmode").prop("disabled", true);
    $("#editlttsinttype").prop("disabled", true);
    $("#statuscheduleinttxt").prop("disabled", true);
    $("#editlttsintlocation").prop("disabled", true);
    $("#editintcustomername").prop("disabled", true);
}

function statusenable() {
    $("#editlttscandname").prop("disabled", false);
    $("#editlttsintname").prop("disabled", false);
    $("#editlttsintmode").prop("disabled", false);
    $("#editlttsinttype").prop("disabled", false);
    $("#statuscheduleinttxt").prop("disabled", false);
    $("#editlttsintlocation").prop("disabled", false);
    $("#editintcustomername").prop("disabled", false);
}