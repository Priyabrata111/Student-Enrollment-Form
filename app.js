 var connToken = "90933101|-31949318403483461|90951180";
        var stuDBName = "SchoolDB";
        var stuRelationName = "STUDENT-TABLE";
        var jpdbBaseURL = "http://api.login2explore.com:5577";
        var jpdbIML = "/api/iml";
        var jpdbIRL = "/api/irl";
  //----------------------------------Collect all the data from Form----------------------//              
      function validateAndGetFormData() {
        var stuIdVar = $("#stuId").val();
        if (stuIdVar === "") {
          alert("Student Roll-No Requires some Value");
          $("#stuId").focus();
          return "";
        }
        var stuNameVar = $("#stuName").val();
        if (stuNameVar === "") {
          alert("Student Name Requires some Value");
          $("#stuName").focus();
          return "";
        }
        var stuClassVar = $("#stuClass").val();
        if (stuClassVar === "") {
          alert("Student Class is Required Value");
          $("#stuClass").focus();
          return "";
        }

        var stuDOBVar = $("#stuDOB").val();
        if (stuDOBVar === "") {
          alert("Student Birth-Date Requires some Value");
          $("stuDOB").focus();
          return "";
        }

        var stuAddressVar = $("#stuAddress").val();
        if (stuAddressVar === "") {
          alert("Student Address is Required Value");
          $("#stuAddress").focus();
          return "";
        }

        var stuEnrollDateVar = $("#stuEnrollDate").val();
        if (stuEnrollDateVar === "") {
          alert("Student Enrollment-Date is Required Value");
          $("#stuEnrollDate").focus();
          return "";
        }

        var jsonStrObj = {
          stuId: stuIdVar,
          stuName: stuNameVar,
          stuClass: stuClassVar,
          stuDOB: stuDOBVar,
          stuAddress: stuAddressVar,
          stuEnrollDate: stuEnrollDateVar
        };
        return JSON.stringify(jsonStrObj);
      }
  //--------------------------------------------------------------------------------------///
  
  
  //-----------------------For local storage data--------------------------------------------//
      function saveRecNo2LS(jsonObj)
      {
          var lvData = JSON.parse(jsonObj.data);
          localStorage.setItem('recno',lvData.rec_no);
      }
      
  //---------------------------Function for getting existing Data-------------------------------//
      function getstuIdASJsonObj() {
        var stuid = $("#stuId").val();
        var jsonStr = {
          stuId: stuid
        };
        return JSON.stringify(jsonStr);
      }
      function getStu() {
        var stuIdJsonObj = getstuIdASJsonObj();
        var getRequest = createGET_BY_KEYRequest(connToken,stuDBName,stuRelationName,stuIdJsonObj);
        jQuery.ajaxSetup({ async: false });
        var resJsonObj = executeCommandAtGivenBaseUrl(getRequest,jpdbBaseURL,jpdbIRL);
        jQuery.ajaxSetup({ async: true });
        if (resJsonObj.status === 400) {
          $("#save").prop("disabled", false);
          $("#reset").prop("disabled", false);
          $("#stuName").focus();
        } else if (resJsonObj.status === 200) {
          $("#stuId").prop("disabled", true);
          fillData(resJsonObj);
          $("#change").prop("disabled", false);
          $("#reset").prop("disabled", false);
          $("#stuName").focus();
        }
      }
 //----------------------------------------Fill the data automatically------------------------------//
      function fillData(jsonObj)
      {
          saveRecNo2LS(jsonObj);
          var record = JSON.parse(jsonObj.data).record;
          $("#stuName").val(record.stuName);
          $("#stuClass").val(record.stuClass);
          $("#stuDOB").val(record.stuDOB);
          $("#stuAddress").val(record.stuAddress);
          $("#stuEnrollDate").val(record.stuEnrollDate);
          $("#save").prop("disabled", true);
          
      }
      
//------------------------------------Reset the form -----------------------------------------//
      function resetForm() {
        $("#stuId").val("");
        $("#stuName").val("");
        $("#stuClass").val("");
        $("#stuDOB").val("");
        $("#stuAddress").val("");
        $("#stuEnrollDate").val("");
         $("#stuId").prop("disabled", false);
         $("#save").prop("disabled", false);
        $("#stuId").focus();
       
      }
//-----------------------------------Change Data------------------------------------------//
      function changeData() {
        $("#empChange").prop("disabled", true);
        jsonChg = validateAndGetFormData();
        var updateRequest = createUPDATERecordRequest(connToken,jsonChg,stuDBName,stuRelationName,localStorage.getItem("recno"));
        jQuery.ajaxSetup({ async: false });
        var resJsonObj = executeCommandAtGivenBaseUrl(updateRequest,jpdbBaseURL,jpdbIML);
        jQuery.ajaxSetup({ async: true });
        alert(JSON.stringify(resJsonObj));
         $("#stuId").prop("disabled", false);
         $("#change").prop("disabled", false);
        resetForm();
        $("#stuID").focus();
      }
//---------------------------------------save Data-------------------------------------//
      function saveData() {
          
        var jsonStr = validateAndGetFormData();
        if (jsonStr === "") {
          return;
        }
        var putReqStr = createPUTRequest(connToken,jsonStr,stuDBName,stuRelationName);

        alert(putReqStr);

        jQuery.ajaxSetup({ async: false });
        var resultObj = executeCommandAtGivenBaseUrl(putReqStr,jpdbBaseURL,jpdbIML);
        jQuery.ajaxSetup({ async: true });

        alert(JSON.stringify(resultObj));
        resetForm();
      }
