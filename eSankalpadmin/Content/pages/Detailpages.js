$(document).ready(function () {
    DetailReg();
});

var DetailReg = function (Applications_Id) {
    debugger;
    var Applications_Id = $("#hdnId").val();
    var model = { Applications_Id: Applications_Id };
    $.ajax({

        url: "/application/DetailReg",
        method: "post",
        data: JSON.stringify(model),
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        async: false,
        success: function (response) {
            //$("#applicationModel").modal('show');
            //$("#tblapplication").empty();


            var html = "";
            html += "<label> Applications_Id: <span>" + response.model.Applications_Id + "</span></label></br></br>" +
                "<label> Registration_Id: <span>" + response.model.Registration_Id + "</span></label></br></br>" +
                "<label> Name_Of_Trainee: <span>" + response.model.Name_Of_Trainee + "</span></label></br></br>" +
                "<label> Qualification: <span>" + response.model.Qualification + "</span></label></br></br>" +
                "<label> Mobile: <span>" + response.model.Mobile + "</span></label></br></br>" +
                "<label> EmailId: <span>" + response.model.EmailId + "</span></label></br></br>" +
                "<label> Date_Of_Birth: <span>" + response.model.Date_Of_Birth + "</span></label></br></br>" +
                "<label> Address: <span>" + response.model.Address + "</span></label></br></br>" +
                "<label> State: <span>" + response.model.State + "</span></label></br></br>" +
                "<label> City: <span>" + response.model.City + "</span></label></br></br>" +
                "<label> Pincode: <span>" + response.model.Pincode + "</span></label></br></br>" +
                "<label> Select_Training: <span>" + response.model.Select_Training + "</span></label></br></br>" +
                "<label> Totalfees: <span>" + response.model.Totalfees + "</span></label></br></br>" +
                "<label> Discount: <span>" + response.model.Discount + "</span></label></br></br>" +
                "<label> Joining_Date: <span>" + response.model.Joining_Date + "</span></label></br></br>" +
                "<label> Advance_Paid: <span>" + response.model.Advance_Paid + "</span></label></br></br>" +
                "<label> On_Dated: <span>" + response.model.On_Dated + "</span></label></br></br>" +
                "<label> Remaining_Amount: <span>" + response.model.Remaining_Amount + "</span></label></br></br>" +
                "<label> Created_Date: <span>" + response.model.Created_Date + "</span></label></br></br>" +
                "<label> Created_By: <span>" + response.model.Created_By + "</span></label></br></br>" +
                "<label> Updated_By: <span>" + response.model.Updated_By + "</span></label></br></br>" +
                "<label> Update_Date: <span>" + response.model.Update_Date + "</span></label></br></br>" +
                "<label> Active: <span>" + response.model.Active + "</span></label></br></br>";
            "<label>image:<span><img src='../Content/Img/" + response.model.image + " 'style='width:150px;height;180px;'</span></label></br></br>";
            $("#tblapplication").html(html);

        }
    });
}
//function printDiv(Applications_Id) {
//    var printContents = document.getElementById(Applications_Id).innerHTML;
//    var originalContents = document.body.innerHTML;

//    document.body.innerHTML = printContents;
//    window.focus();
//    window.print();
//    document.body.innerHTML = originalContents;
//    window.location.href = "/application/IndexDetail?Applications_Id" + Applications_Id;













