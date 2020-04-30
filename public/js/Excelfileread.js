        // function Upload() {
        //     //Reference the FileUpload element.
        //     var fileUpload = document.getElementById("fileUpload");

        //     //Validate whether File is valid Excel file.
        //     var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.xls|.xlsx)$/;
        //     if (regex.test(fileUpload.value.toLowerCase())) {
        //         if (typeof (FileReader) != "undefined") {
        //             var reader = new FileReader();

        //             //For Browsers other than IE.
        //             if (reader.readAsBinaryString) {
        //                 reader.onload = function (e) {
        //                     ProcessExcel(e.target.result);
        //                 };
        //                 reader.readAsBinaryString(fileUpload.files[0]);
        //             } else {
        //                 //For IE Browser.
        //                 reader.onload = function (e) {
        //                     var data = "";
        //                     var bytes = new Uint8Array(e.target.result);
        //                     for (var i = 0; i < bytes.byteLength; i++) {
        //                         data += String.fromCharCode(bytes[i]);
        //                     }
        //                     ProcessExcel(data);
        //                 };
        //                 reader.readAsArrayBuffer(fileUpload.files[0]);
        //             }
        //         } else {
        //             alert("This browser does not support HTML5.");
        //         }
        //     } else {
        //         alert("Please upload a valid Excel file.");
        //     }
        // };
		
		
        // function ProcessExcel(data) {
		
        //     //Read the Excel File data.
			
			
        //     var workbook = XLSX.read(data, {
        //         type: 'binary'
        //     });
        //     console.log(workbook);

        //     //Fetch the name of First Sheet.
            
		// 	var firstSheet = workbook.Sheets[workbook.SheetNames[0]];
        //     console.log(firstSheet);
        //     //Read all rows from First Sheet into an JSON array.
        //     var excelRows = XLSX.utils.sheet_to_json(firstSheet,{raw:false, header:1,});
        //     // data = XLSX.utils.sheet_to_row_object_array(ws, {'date_format':'dd/mm/yyyy'});
        //     console.log(excelRows);
		// 	//document.getElementById("inputfield").value=excelRows[0][''];
		// 	var max = excelRows.reduce((x,y) => Math.max(x,y.length), 0)
		// 	var o = new Array(max-1);
		// 	for(var i = 0; i < max-1; ++i) o[i] = {
		// 	};
		// 	excelRows.forEach(row => { row.slice(1).forEach((elt, i) =>
		// 	 { 
		// 	 o[i][row[0]] = elt }); 
		// 	 });
        //     console.log(excelRows[0].Ref);
		// 	document.getElementById("requirement").value = (excelRows[0]['1']);            
        //     if(excelRows[7]['1']=="Tech III – Senior Consultant"){
        //         $("#rolelevel option[value='01322e7a-7958-11ea-93c7-42c102c7e113']").attr('selected', 'selected');
        //     }
        //     else if(excelRows[7]['1']=="Tech II – Consultant"){
        //         $("#rolelevel option[value='01322ce4-7958-11ea-93c7-42c102c7e113']").attr('selected', 'selected');
        //     }
        //     else{
        //         $("#rolelevel option[value='01322963-7958-11ea-93c7-42c102c7e113']").attr('selected', 'selected');
        //     }
        //     document.getElementById("jobtitle").value = excelRows[7]['1'].slice(10);
		// 	document.getElementById("piskills").value = excelRows[11]['1'];            
        //     if(excelRows[2]['1']=="IGD - Telangana - Hyderabad"){
        //         $("#jloc option[value='0b28ddd3-3ddf-11ea-ba76-c4346b593c25']").attr('selected', 'selected');
        //     }
		// 	document.getElementById("jduration").value = excelRows[6]['1'];
		// 	// document.getElementById("experience").value = excelRows[13]['1'];
		// 	document.getElementById("role").value = excelRows[8]['1'];
		// 	document.getElementById("industry").value = excelRows[1]['1'];
		// 	document.getElementById("domain").value = excelRows[9]['1'];
		// 	document.getElementById("site").value = excelRows[3]['1'];			
		// 	document.getElementById("addinf").value = (excelRows[18]['1']+excelRows[19]['1']+excelRows[20]['1']+excelRows[21]['1']+excelRows[22]['1']);    
        //      document.getElementById("reqdate").value = excelRows[5]['1'];
             
        //      console.log(excelRows[5]['1']);
        //      document.getElementById("jdesp").value = (excelRows[27]['1']+excelRows[28]['1']+excelRows[30]['1']+excelRows[31]['1']+excelRows[32]['1']);		
        // };
        // // jdesp

        // //

        // function uploadImage() {
        //     var file = document.getElementById("input").files[0];
        //     if (!file) return;
        //     var FR = new FileReader();
        //     FR.onload = function (e) {
        //       var data = new Uint8Array(e.target.result);
        //       var workbook = XLSX.read(data, { type: "array" });
        //       var firstSheet = workbook.Sheets[workbook.SheetNames[0]];
        //       var result = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });
        //       getActualRenderData(result);
        //     };
        //     FR.readAsArrayBuffer(file);
        //   }
    
        //   const validId = {
        //     Ref: "requirement",
        //     Industry: "industry",
        //     "Delivery Location": "jloc",
        //     "On site/offsite": "site",
        //     "Start Date": "reqdate",
        //     Hours: "jduration",
        //     "Role Level Required": "rolelevel",
        //     "Role Required": "role",
        //     Domain: "domain",
        //     "Dominant Skill": "piskills",
        //     "Scope of Work": "jdesp",
        //     "Experience Required": "experience",
        //     "Additional Information": "addinf",
        //   };
    
        //   function getActualRenderData(result) {
        //     let actualArray = [];
        //     let refIndex = 0;
        //     let refArray = [];
        //     for (let i = 0; i < result.length; i++) {
        //       if (result[i].length > 0 && result[i].length === 2) {
        //         if (result[i][0]) {
        //           refIndex = i;
        //           refArray = [result[i][1]];
        //           actualArray.push(result[i]);
        //         }
        //         if (!result[i][0]) {
        //           if (result[i][1]) {
        //             refArray.push(result[i][1]);
    
        //             actualArray[actualArray.length - 1][1] = refArray;
        //           }
        //         }
        //       }
        //     }
        //     bindElemenetToInput(actualArray);
        //   }
    
        //   function bindElemenetToInput(array) {
        //     for (let i = 0; i < array.length; i++) {
        //         const elmentId = document.getElementById(validId[array[i][0]].trim())

        //         if (Array.isArray(array[i][1])) {
        //           if(elmentId) {
        //             elmentId.value = array[
        //                 i
        //               ][1].toString();
        //           }
               
        //       } else {
        //         if(elmentId) {
        //            elmentId.value = array[i][1];
        //         }
                
        //       }
        //     }
        //   }
    
    
       
        function uploadImage() {
            var file = document.getElementById("input").files[0];
            if (!file) return;
            var FR = new FileReader();
            FR.onload = function (e) {
              var data = new Uint8Array(e.target.result);
              var workbook = XLSX.read(data, { type: "array" });
              var firstSheet = workbook.Sheets[workbook.SheetNames[0]];
              var result = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });
              getActualRenderData(result);
            };
            FR.readAsArrayBuffer(file);
          }
          
          const validId = {
            Ref: "requirement",
            Industry: "industry",
            "Delivery Location": "jloc",
            "On site/offsite": "site",
            "Start Date": "reqdate",
            Hours: "jduration",
            "Role Level Required": "rolelevel",
            "Role Required": "role",
            Domain: "domain",
            "Dominant Skill": "piskills",
            "Scope of Work": "jdesp",
            // "Experience Required": "experience",
            "Additional Information": "addinf",
          };
          
          function getActualRenderData(result) {
            let actualArray = [];
            let refIndex = 0;
            let refArray = [];
            for (let i = 0; i < result.length; i++) {
              if (result[i].length > 0 && result[i].length === 2) {
                if (result[i][0]) {
                  refIndex = i;
                  refArray = [result[i][1]];
                  actualArray.push(result[i]);
                }
                if (!result[i][0]) {
                  if (result[i][1]) {
                    refArray.push(result[i][1]);
                    actualArray[actualArray.length - 1][1] = refArray;
                  }
                }
              }
            }
            bindElementToInput(actualArray);
          }
          
          const teamValidateOptions = {
            "Tech III – Senior Consultant": "01322e7a-7958-11ea-93c7-42c102c7e113",
            "Tech II – Consultant": "01322ce4-7958-11ea-93c7-42c102c7e113",
            "Tech I ": "01322963-7958-11ea-93c7-42c102c7e113",
          };
          
          const deliveryLocation = {
            "IGD - Telangana - Hyderabad": "0b28ddd3-3ddf-11ea-ba76-c4346b593c25",
          };
          
          function teamValidate(element, value) {
            element.value = teamValidateOptions[value];
          }
          
          function deliveryLocationValidate(element, value) {
            element.value = deliveryLocation[value];
          }


          function validateTime(element, value) {
            let newDate = new Date(value);
            // newDate = newDate.toISOString();
             newDate =
              newDate.getFullYear() +
              "-" +
              ("0" + (newDate.getMonth() + 1)).slice(-2) +   "-" +
              newDate.getDate();
            console.log(newDate);
            element.value = newDate;
          }
          
          
          
          function bindElementToInput(array) {
            for (let i = 0; i < array.length; i++) {
              const arrayValueSplit = array[i][0].split(":");
              const elementId = document.getElementById(
                validId[arrayValueSplit[0].trim()]
              );
              if (elementId) {
                console.log(arrayValueSplit[0].trim());
                if (Array.isArray(array[i][1])) {
                  elementId.value = array[i][1].toString();

                } else {
                  if (arrayValueSplit[0].trim() === "Role Level Required") {
                    teamValidate(elementId, array[i][1]);
                  } else if (arrayValueSplit[0].trim() === "Delivery Location") {
                    deliveryLocationValidate(elementId, array[i][1]);
                  }else if (arrayValueSplit[0].trim() === "Start Date") {
                    console.log("time");
                    validateTime(elementId, array[i][1]);
                    
                  }
           
                  else {
                    elementId.value = array[i][1];
                    console.log(array[i][1]);

                  }
                }
              }
            }
          }
          