using System;
using System.Collections.Generic;
using System.Linq;
using System.IO;
using System.Web;
using eSankalpadmin.Data;

namespace eSankalpadmin.Models
{
    public class applicationModel
    {
        public int Applications_Id { get; set; }
        public Nullable<int> Registration_Id { get; set; }
        public string Name_Of_Trainee { get; set; }
        public string Qualification { get; set; }
        public string Mobile { get; set; }
        public string EmailId { get; set; }
        public Nullable<System.DateTime> Date_Of_Birth { get; set; }
        public string Address { get; set; }
        public string State { get; set; }
        public string City { get; set; }
        public string Pincode { get; set; }
        public string Select_Training { get; set; }
        public Nullable<decimal> Totalfees { get; set; }
        public string Discount { get; set; }
        public Nullable<System.DateTime> Joining_Date { get; set; }
        public Nullable<decimal> Advance_Paid { get; set; }
        public Nullable<System.DateTime> On_Dated { get; set; }
        public Nullable<decimal> Remaining_Amount { get; set; }
        public Nullable<System.DateTime> Created_Date { get; set; }
        public Nullable<int> Created_By { get; set; }
        public Nullable<System.DateTime> Update_Date { get; set; }
        public Nullable<int> Updated_By { get; set; }
        public Nullable<bool> Active { get; set; }
        public string image { get; set; }

        public string SaveReg(HttpPostedFileBase fb, applicationModel model)
        {
            EsankalpadminEntities Db = new EsankalpadminEntities();
            string msg = "submit";
            string filepath = "";
            string fileName = "";
            string sysFileName = "";
            if (fb != null && fb.ContentLength > 0)
            {
                filepath = HttpContext.Current.Server.MapPath("../Content/Img/");
                DirectoryInfo di = new DirectoryInfo(filepath);
                if (!di.Exists)
                {
                    di.Create();

                }
                fileName = fb.FileName;
                sysFileName = DateTime.Now.ToFileTime().ToString() + Path.GetExtension(fb.FileName);
                fb.SaveAs(filepath + "//" + sysFileName);
                if (!string.IsNullOrWhiteSpace(fb.FileName))
                {
                    string afileName = HttpContext.Current.Server.MapPath("../Content/Img") + "/" + sysFileName;
                }
            }
            if (model.Applications_Id == 0)
            {
                var savereg = new tblapplication()


                {


                    Applications_Id = model.Applications_Id,
                    Registration_Id = model.Registration_Id,
                    Name_Of_Trainee = model.Name_Of_Trainee,
                    Qualification = model.Qualification,
                    Mobile = model.Mobile,
                    EmailId = model.EmailId,
                    //Date_Of_Birth = model.Date_Of_Birth,
                    //Address = model.Address,
                    //State = model.State,
                    //City = model.City,
                    //Pincode = model.Pincode,
                    Select_Training = model.Select_Training,
                    //Totalfees = model.Totalfees,
                    //Discount = model.Discount,
                    //Joining_Date = model.Joining_Date,
                    //Advance_Paid = model.Advance_Paid,
                    //On_Dated = model.On_Dated,
                    Remaining_Amount = model.Remaining_Amount,
                    Created_Date = model.Created_Date,
                    //Created_By = model.Created_By,
                    //Update_Date = model.Update_Date,
                    //Updated_By = model.Updated_By,
                    Active = model.Active,
                    image = sysFileName




                };



                Db.tblapplications.Add(savereg);
                Db.SaveChanges();
                return msg;
            }
            else
            {
                var GetapplicationData = Db.tblapplications.Where(p => p.Applications_Id == model.Applications_Id).FirstOrDefault();
                if (GetapplicationData != null)
                {
                    GetapplicationData.Applications_Id = model.Applications_Id;
                    GetapplicationData.Registration_Id = model.Registration_Id;
                    GetapplicationData.Name_Of_Trainee = model.Name_Of_Trainee;
                    GetapplicationData.Qualification = model.Qualification;
                    GetapplicationData.Mobile = model.Mobile;
                    GetapplicationData.EmailId = model.EmailId;
                    //GetapplicationData.Date_Of_Birth = model.Date_Of_Birth;
                    //GetapplicationData.Address = model.Address;
                    //GetapplicationData.State = model.State;
                    //GetapplicationData.City = model.City;
                    //GetapplicationData.Pincode = model.Pincode;
                    GetapplicationData.Select_Training = model.Select_Training;
                    //GetapplicationData.Totalfees = model.Totalfees;
                    //GetapplicationData.Discount = model.Discount;
                    //GetapplicationData.Joining_Date = model.Joining_Date;
                    //GetapplicationData.Advance_Paid = model.Advance_Paid;
                    //GetapplicationData.On_Dated = model.On_Dated;
                    GetapplicationData.Remaining_Amount = model.Remaining_Amount;
                    GetapplicationData.Created_Date = model.Created_Date;
                    //GetapplicationData.Created_By = model.Created_By;
                    //GetapplicationData.Update_Date = model.Update_Date;
                    //GetapplicationData.Updated_By = model.Updated_By;
                    GetapplicationData.Active = model.Active;
                    GetapplicationData.image = sysFileName;

                };
                Db.SaveChanges();
                msg = "Update Data Successfully";

            }
            return msg;


        }
        public List<applicationModel> GetAddList()
        {
            EsankalpadminEntities Db = new EsankalpadminEntities();
            List<applicationModel> lstRegistration = new List<applicationModel>();
            var AddRegistrationList = Db.tblapplications.ToList();
            if (AddRegistrationList != null)
            {
                foreach (var registration in AddRegistrationList)
                {
                    lstRegistration.Add(new applicationModel()
                    {
                        Applications_Id = registration.Applications_Id,
                        Registration_Id = registration.Registration_Id,
                        Name_Of_Trainee = registration.Name_Of_Trainee,
                        Qualification = registration.Qualification,
                        Mobile = registration.Mobile,
                        EmailId = registration.EmailId,
                        Date_Of_Birth = registration.Date_Of_Birth,
                        Address = registration.Address,
                        State = registration.State,
                        City = registration.City,
                        Pincode = registration.Pincode,
                        Select_Training = registration.Select_Training,
                        Totalfees = registration.Totalfees,
                        Discount = registration.Discount,
                        Joining_Date = registration.Joining_Date,
                        Advance_Paid = registration.Advance_Paid,
                        On_Dated = registration.On_Dated,
                        Remaining_Amount = registration.Remaining_Amount,
                        Created_Date = registration.Created_Date,
                        Created_By = registration.Created_By,
                        Update_Date = registration.Update_Date,
                        Updated_By = registration.Updated_By,
                        Active = registration.Active,
                        image = registration.image





                    });

                }

            }
            return lstRegistration;
        }
        public string DeleteReg(int Applications_Id)
        {
            string msg = "";
            EsankalpadminEntities Db = new EsankalpadminEntities();
            var applicationData = Db.tblapplications.Where(p => p.Applications_Id == Applications_Id).FirstOrDefault();
            if (applicationData != null)
            {
                Db.tblapplications.Remove(applicationData);
                Db.SaveChanges();

            }
            return msg;
        }
        public applicationModel EditReg(int Applications_Id)
        {
            applicationModel model = new applicationModel();
            EsankalpadminEntities Db = new EsankalpadminEntities();

            var editData = Db.tblapplications.Where(p => p.Applications_Id == Applications_Id).FirstOrDefault();
            if (editData != null)
            {
                model.Applications_Id = editData.Applications_Id;
                model.Registration_Id = editData.Registration_Id;
                model.Name_Of_Trainee = editData.Name_Of_Trainee;
                model.Qualification = editData.Qualification;
                model.Mobile = editData.Mobile;
                model.EmailId = editData.EmailId;
                model.Date_Of_Birth = editData.Date_Of_Birth;
                model.Address = editData.Address;
                model.State = editData.State;
                model.City = editData.City;
                model.Pincode = editData.Pincode;
                model.Select_Training = editData.Select_Training;
                model.Totalfees = editData.Totalfees;
                model.Discount = editData.Discount;
                model.Joining_Date = editData.Joining_Date;
                model.Advance_Paid = editData.Advance_Paid;
                model.On_Dated = editData.On_Dated;
                model.Remaining_Amount = editData.Remaining_Amount;
                model.Created_Date = editData.Created_Date;
                model.Created_By = editData.Created_By;
                model.Update_Date = editData.Update_Date;
                model.Updated_By = editData.Updated_By;
                model.Active = editData.Active;
                model.image = editData.image;




            }
            return model;
        }

    }
}

