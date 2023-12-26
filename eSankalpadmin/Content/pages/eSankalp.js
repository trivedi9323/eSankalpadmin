$(document).ready(function () {
    getAddList();
    

});
var savereg = function () {
    debugger;
    $formData = new FormData();
    var Image = document.getElementById('file1');
    if (Image.files.length > 0) {
        for (var i = 0; i < Image.files.length; i++) {
            $formData.append('file1-' + i, Image.files[i]);
        }
    }
    var applications_id = $("hdnId").val();
    var registration_id = $("#txtid").val();
    var name_of_trainee = $("#txtname").val();
    var qualification = $("#ddlQualification").val();
    var mobile = $("#txtmobile").val();
    var emailid = $("#txtemailid").val();
    ////var date_of_birth = $("#txtdob").val();
    ////var address = $("#txtaddress").val();
    ////var state = $("#txtstate").val();
    ////var city = $("#txtcity").val();
    ////var pincode = $("#txtpincode").val();
    var select_training = $("#ddlselect_training").val();
    //var totalfees = $("#txttotalfees").val();
    //var discount = $("#txtdiscount").val();
    //var joining_date = $("#txtjoin").val();
    //var advance_paid = $("#txtAdvance").val();
    //var on_dated = $("#txtondate").val();
    var remaining_amount = $("#txtremaining").val();
    var created_date = $("#txtcreateddate").val();
    //var created_by = $("#txtcreatedby").val();
    //var update_date = $("#txtupdate").val();
    //var updated_by = $("#txtupdated").val();
    //var active = $("#txtactive").val();
    if ($("#txtactive").is(":checked")) {
        checkbox = true;
    }
    else {
        checkbox = false;
    }
    var active = checkbox;
    var image = $("#file1").val();

    $formData.append('Applications_Id', applications_id);
    $formData.append('Registration_Id', registration_id);
    $formData.append('Name_Of_Trainee', name_of_trainee);
    $formData.append('Qualification', qualification);
    $formData.append('Mobile', mobile);
    $formData.append('EmailId', emailid);
    //$formData.append('Date_Of_Birth', date_of_birth);
    //$formData.append('Address', address);
    //$formData.append('State', state);
    //$formData.append('City', city);
    //$formData.append('Pincode', pincode);
    $formData.append('Select_Training', select_training);
    //$formData.append('Totalfees', totalfees);
    //$formData.append('Discount', discount);
    //$formData.append('Joining_Date', joining_date);
    //$formData.append('Advance_paid', advance_paid);
    //$formData.append('On_Dated', on_dated);
    $formData.append('Remaining_Amount', remaining_amount);
    $formData.append('Created_Date', created_date);
    //$formData.append('Created_By', created_by);
    //$formData.append('Update_Date', update_date);
    //$formData.append('Updated_By', updated_by);
    $formData.append('Active', active);
    $formData.append('Image', image);







    //var model = {
    //    Applications_Id: applications_id,
    //    Registration_Id: registration_id,
    //    Name_Of_Trainee: name_of_trainee,
    //    Qualification: qualification,
    //    Mobile: mobile,
    //    EmailId: emailid,
    //    Date_Of_Birth: date_of_birth,
    //    Address: address,
    //    State: state,
    //    City: city,
    //    Pincode: pincode,
    //    Select_Training: select_training,
    //    Totalfees: totalfees,
    //    Discount: discount,
    //    Joining_Date: joining_date,
    //    Advance_Paid: advance_paid,
    //    On_Dated: on_dated,
    //    Remaining_Amount: remaining_amount,
    //    Created_Date: created_date,
    //    Created_By: created_by,
    //    Update_Date: update_date,
    //    Updated_By: updated_by,
    //    Active: active,
    //}

    ////if (registration_id == "") {
    ////    alert("enter Id");
    ////}
    ////else if (name_of_trainee == "") {
    ////    alert("enter Name of Trainee");
    ////}
    ////else if (qualification == "") {
    ////    alert("enter Qualification");
    ////}
    ////else if (mobile == "") {
    ////    alert("enter Mobile");
    ////}
    ////else if (emailid == "") {
    ////    alert("enter EmailId");
    ////}
    ////else if (date_of_birth == "") {
    ////    alert("enter Date of Birth");
    ////}
    ////else if (address == "") {
    ////    alert("enter Address");
    ////}
    ////else if (state == "") {
    ////    alert("enter State");
    ////}
    ////else if (city == "") {
    ////    alert("enter City");
    ////}
    ////else if (pincode == "") {
    ////    alert("enter Pincode");
    ////}
    ////else if (select_training == "") {
    ////    alert("enter Select Training");
    ////}
    ////else if (totalfees == "") {
    ////    alert("enter Totalfees");
    ////}
    ////else if (discount == "") {
    ////    alert("enter Discount");
    ////}
    ////else if (joining_date == "") {
    ////    alert("enter Joining Date");
    ////}
    ////else if (advance_paid == "") {
    ////    alert("enter Advance paid");
    ////}
    ////else if (on_dated == "") {
    ////    alert("enter On dated");
    ////}
    ////else if (remaining_amount == "") {
    ////    alert("enter Remaining Amount");
    ////}
    ////else if (created_date == "") {
    ////    alert("enter Created Date");
    ////}
    ////else if (created_by == "") {
    ////    alert("enter Created By");
    ////}
    ////else if (update_date == "") {
    ////    alert("enter Update Date");
    ////}
    ////else if (updated_by == "") {
    ////    alert("enter Updated By");
    ////}
    ////else if (active == "") {
    ////    alert("enter Active");
    ////}
    debugger;

    $.ajax({
        url: "/application/SaveReg",
        method: "post",
        data: $formData,
        contentType: "application/json;charset=utf-8",
        contentType: false,
        processData: false,
        async: false,
        success: function (response) {
            location.reload();
            alert(response.model);
            getAddList()
        }

    });
}
var getAddList = function () {
    $.ajax({
        url: "/application/GetAddList",
        method: "post",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        async: false,




        success: function (response) {
            var html = "";
            $("#tblapplication tbody").empty();
            $.each(response.model, function (index, elementValue) {
                html += "<tr><td>" + elementValue.Applications_Id +
                    "</td><td>" + elementValue.Registration_Id +
                    "</td><td>" + elementValue.Name_Of_Trainee +
                    "</td><td>" + elementValue.Qualification +
                    "</td><td>" + elementValue.Mobile +
                    "</td><td>" + elementValue.EmailId +
                    //"</td><td>" + elementValue.Date_Of_Birth +
                    //"</td><td>" + elementValue.Address +
                    //"</td><td>" + elementValue.State +
                    //"</td><td>" + elementValue.City +
                    //"</td><td>" + elementValue.Pincode +
                    "</td><td>" + elementValue.Select_Training +
                    ////"</td><td>" + elementValue.Totalfees +
                    ////"</td><td>" + elementValue.Discount +
                    ////"</td><td>" + elementValue.Joining_Date +
                    ////"</td><td>" + elementValue.Advance_Paid +
                    ////"</td><td>" + elementValue.On_Dated +
                    "</td><td>" + elementValue.Remaining_Amount +
                    "</td><td>" + elementValue.Created_Date +
                    //"</td><td>" + elementValue.Created_By +
                    //"</td><td>" + elementValue.Update_Date +
                    //"</td><td>" + elementValue.Updated_By +
                    "</td><td>" + elementValue.Active +
                    "</td><td><img src='../Content/Img/" + elementValue.image + "' style='max-width:100px;max-height:80px;' />" +
                    "</td><td><button type='button' value='Delete' class='btn btn-danger'  onclick='DeleteReg(" + elementValue.Applications_Id + ")'><i class='bi bi-trash-fill'></i></button></td><td><button type='button' class='btn btn-success' value='Edit' onclick='EditReg(" + elementValue.Applications_Id + ")'><i class='bi bi-pencil-square'></i></button></td><td><button type='button' value='Details' class='btn btn-warning' onclick='DetailReg(" + elementValue.Applications_Id + ")'><i class='bi bi-eye-fill'></i></button></td></tr>";


            });
            $("#tblapplication tbody").append(html);

        }

    });
};
var DeleteReg = function (Applications_Id) {

    debugger;

    var model = { Applications_Id: Applications_Id };


    $.ajax({

        url: "/application/DeleteReg",
        method: "post",
        data: JSON.stringify(model),
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (response) {
            alert("Record Deleted Successfully");

        }
    });
}
var EditReg = function (Applications_Id) {
    debugger;
    var model = { Applications_Id: Applications_Id };
    $.ajax({
        url: "/application/EditReg",
        method: "post",
        data: JSON.stringify(model),
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        async: false,
        success: function (response) {
            $("#hdnId").val(response.model.Applications_Id);
            $("#txtid").val(response.model.Registration_Id);
            $("#txtname").val(response.model.Name_Of_Trainee);
            $("#ddlQualification").val(response.model.Qualification);
            $("#txtmobile").val(response.model.Mobile);
            $("#txtemailid").val(response.model.EmailId);
            $("#txtdob").val(response.model.Date_of_Birth);
            $("#txtaddress").val(response.model.Address);
            $("#txtstate").val(response.model.State);
            $("#txtcity").val(response.model.City);
            $("#txtpincode").val(response.model.Pincode);
            $("#ddlselect_training").val(response.model.Select_Training);
            $("#txttotalfees").val(response.model.Totalfees);
            $("#txtdiscount").val(response.model.Discount);
            $("#txtjoin").val(response.model.Joining_Date);
            $("#txtAdvance").val(response.model.Advance_Paid);
            $("#txtondate").val(response.model.On_Dated);
            $("#txtremaining").val(response.model.Remaining_Amount);
            $("#txtcreateddate").val(response.model.Created_Date);
            $("#txtcreatedby").val(response.model.Created_By);
            $("#txtupdate").val(response.model.Update_Date);
            $("#txtupdated").val(response.model.Updated_By);
            $("#txtactive").val(response.model.Active);
            $("#txtimage").val(response.model.image);


        }
    });
}

var DetailReg = function (Applications_Id) {
    debugger;
    var model = { Applications_Id: Applications_Id }
    $.ajax({
        url: "/application/DetailReg",
        method: "post",
        data: JSON.stringify(model),
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        async: false,
        success: function (response) {
            $("#applicationModal").modal('show');

            $("#DetailReg").empty();

            var html = "";
            html += "<div class='row'>";
            html += "<div class='col-sm-6'>";
            html += "<b>Id:</b>&nbsp&nbsp&nbsp<span>" + response.model.Applications_Id + "</span>";
            html += "</br>";
            html += "<b>CategoryName:</b>&nbsp&nbsp&nbsp<span>" + response.model.Registration_Id + "</span>";
            html += "</br>";
            html += "<b>CategoryDetails:</b>&nbsp&nbsp&nbsp<span>" + response.model.Name_Of_Trainee + "</span>";
            html += "</br>";
            html += "<b>IsAvailable:</b>&nbsp&nbsp&nbsp<span>" + response.model.Qualification + "</span>";
            html += "</br>";
            html += "<b>CreatedBy:</b>&nbsp&nbsp&nbsp<span>" + response.model.Mobile + "</span>";
            html += "</br>";
            html += "<b>CreatedDate:</b>&nbsp&nbsp&nbsp<span>" + response.model.EmailId + "</span>";
            html += "</br>";
            html += "<b>CreatedDate:</b>&nbsp&nbsp&nbsp<span>" + response.model.Date_of_Birth + "</span>";
            html += "</br>";
            html += "<b>CreatedDate:</b>&nbsp&nbsp&nbsp<span>" + response.model.Address + "</span>";
            html += "</br>";
            html += "<b>CreatedDate:</b>&nbsp&nbsp&nbsp<span>" + response.model.State + "</span>";
            html += "</br>";
            html += "<b>CreatedDate:</b>&nbsp&nbsp&nbsp<span>" + response.model.City + "</span>";
            html += "</br>";
            html += "<b>CreatedDate:</b>&nbsp&nbsp&nbsp<span>" + response.model.Pincode + "</span>";
            html += "</br>";
            html += "<b>CreatedDate:</b>&nbsp&nbsp&nbsp<span>" + response.model.Select_Training + "</span>";
            html += "</br>";
            html += "<b>CreatedDate:</b>&nbsp&nbsp&nbsp<span>" + response.model.Totalfees + "</span>";
            html += "</br>";
            html += "<b>CreatedDate:</b>&nbsp&nbsp&nbsp<span>" + response.model.Discount + "</span>";
            html += "</br>";
            html += "<b>CreatedDate:</b>&nbsp&nbsp&nbsp<span>" + response.model.Joining_Date + "</span>";
            html += "</br>";
            html += "<b>CreatedDate:</b>&nbsp&nbsp&nbsp<span>" + response.model.Advance_Paid + "</span>";
            html += "</br>";
            html += "<b>CreatedDate:</b>&nbsp&nbsp&nbsp<span>" + response.model.On_Dated + "</span>";
            html += "</br>";
            html += "<b>CreatedDate:</b>&nbsp&nbsp&nbsp<span>" + response.model.Remaining_Amount + "</span>";
            html += "</br>";
            html += "<b>CreatedDate:</b>&nbsp&nbsp&nbsp<span>" + response.model.Created_Date + "</span>";
            html += "</br>";
            html += "<b>CreatedDate:</b>&nbsp&nbsp&nbsp<span>" + response.model.Created_By + "</span>";
            html += "</br>";
            html += "<b>CreatedDate:</b>&nbsp&nbsp&nbsp<span>" + response.model.Update_Date + "</span>";
            html += "</br>";
            html += "<b>CreatedDate:</b>&nbsp&nbsp&nbsp<span>" + response.model.Update_By + "</span>";
            html += "</br>";
            html += "</div>";
            html += "<div class='col-sm-6'>";
            html += "<b>UpdatedBy:</b>&nbsp&nbsp&nbsp<span>" + response.model.Active + "</span>";
            html += "</br>";
            html += "<b>Image:</b>&nbsp&nbsp&nbsp<span><img src='../Content/Img/" + response.model.image + " 'style='width:150px;height:180px;'/></span> ";
            html += "</br>";
            html += "</div>";
            html += "</div>";

            $("#DetailReg").append(html);
        }
    });
};

var DetailReg = function (Applications_Id) {
    debugger;
    window.location.href = "/application/IndexDetail?Applications_Id=" + Applications_Id;

}
//function printDiv(Applications_Id) {
//    var printContents = document.getElementById(Id).innerHTML;
//    var originalContents = document.body.innerHTML;

//    document.body.innerHTML = printContents;
//    window.focus();
//    window.print();
//    document.body.innerHTML = originalContents;
//    window.location.href = "/Invoice/InvoiceListIndex";
//}


////var DetailReg = function (Applications_Id) {
////    debugger;
////    var model = { Applications_Id: Applications_Id }
////    $.ajax({
////        url: "/application/DetailReg",
////        method: "post",
////        data: JSON.stringify(model),
////        contentType: "application/json;charset=utf-8",
////        dataType: "json",
////        async: false,
////        success: function (response) {
////            $("#applicationModal").modal('show');

////            $("#DetailReg").empty();

////            var html = "";
////            html += "<div class='row'>";
////            html += "<div class='col-sm-6'>";
////            html += "<b>Applications_Id:</b>&nbsp&nbsp&nbsp<span>" + response.model.Applications_Id + "</span>";
////            html += "</br>";
////            html += "<b>Registration_Id:</b>&nbsp&nbsp&nbsp<span>" + response.model.Registration_Id + "</span>";
////            html += "</br>";
////            html += "<b>Name_Of_Trainee:</b>&nbsp&nbsp&nbsp<span>" + response.model.Name_Of_Trainee + "</span>";
////            html += "</br>";
////            html += "<b>Qualification:</b>&nbsp&nbsp&nbsp<span>" + response.model.Qualification + "</span>";
////            html += "</br>";
////            html += "<b>Mobile :</b>&nbsp&nbsp&nbsp<span>" + response.model.Mobile + "</span>";
////            html += "</br>";
////            html += "<b>EmailId :</b>&nbsp&nbsp&nbsp<span>" + response.model.EmailId + "</span>";
////            html += "</br>";
////            html += "<b>Date_of_Birth:</b>&nbsp&nbsp&nbsp<span>" + response.model.Date_of_Birth + "</span>";
////            html += "</br>";
////            html += "<b>Address:</b>&nbsp&nbsp&nbsp<span>" + response.model.Address + "</span>";
////            html += "</br>";
////            html += "<b>State:</b>&nbsp&nbsp&nbsp<span>" + response.model.State + "</span>";
////            html += "</br>";
////            html += "<b>City:</b>&nbsp&nbsp&nbsp<span>" + response.model.City + "</span>";
////            html += "</br>";
////            html += "<b>Pincode:</b>&nbsp&nbsp&nbsp<span>" + response.model.Pincode + "</span>";
////            html += "</br>";
////            html += "<b>Select_Training:</b>&nbsp&nbsp&nbsp<span>" + response.model.Select_Training + "</span>";
////            html += "</br>";
////            html += "<b>Totalfees:</b>&nbsp&nbsp&nbsp<span>" + response.model.Totalfees + "</span>";
////            html += "</br>";
////            html += "<b>Discount:</b>&nbsp&nbsp&nbsp<span>" + response.model.Discount + "</span>";
////            html += "</br>";
////            html += "<b>Joining_Date:</b>&nbsp&nbsp&nbsp<span>" + response.model.Joining_Date + "</span>";
////            html += "</br>";
////            html += "<b>Advance_Paid :</b>&nbsp&nbsp&nbsp<span>" + response.model.Advance_Paid + "</span>";
////            html += "</br>";
////            html += "<b>On_Dated:</b>&nbsp&nbsp&nbsp<span>" + response.model.On_Dated + "</span>";
////            html += "</br>";
////            html += "<b>Remaining_Amount:</b>&nbsp&nbsp&nbsp<span>" + response.model.Remaining_Amount + "</span>";
////            html += "</br>";
////            html += "<b>Created_By:</b>&nbsp&nbsp&nbsp<span>" + response.model.Created_By + "</span>";
////            html += "</br>";
////            html += "<b>Update_Date:</b>&nbsp&nbsp&nbsp<span>" + response.model.Update_Date + "</span>";
////            html += "</br>";
////            html += "<b>Update_By :</b>&nbsp&nbsp&nbsp<span>" + response.model.Update_By + "</span>";
////            html += "</br>";
////            html += "</div>";
////            html += "<div class='col-sm-6'>";
////            html += "<b>Active:</b>&nbsp&nbsp&nbsp<span>" + response.model.Active + "</span>";
////            html += "</br>";
////            html += "<b>image:</b>&nbsp&nbsp&nbsp<span><img src='../Content/Img/" + response.model.image + "'style='width:150px;height:180px;'/> </span > ";
////            html += "</br>";
////            html += "</div>";
////            html += "</div>";

////            $("#DetailReg").append(html);
////        }
////    });
