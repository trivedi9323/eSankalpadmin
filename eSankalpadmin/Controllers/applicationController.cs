using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using eSankalpadmin.Models;

namespace eSankalpadmin.Controllers
{
    public class applicationController : Controller
    {
        // GET: application
        public ActionResult Index()
        {
            return View();
        }
      
        public ActionResult Internlist()
        {
            return View();
        }
        public ActionResult IndexDetail(int Applications_Id)
        {
            ViewBag.Applications_Id = Applications_Id;
            return View();

        }
        public ActionResult SaveReg(applicationModel model)
        {
            try
            {
                HttpPostedFileBase fb = null;
                for (int i = 0; i < Request.Files.Count; i++)
                {
                    fb = Request.Files[i];
                }
                return Json(new { message = new applicationModel().SaveReg(fb, model) }, JsonRequestBehavior.AllowGet);

            }
            catch (Exception ex)
            {
                return Json(new { ex.Message }, JsonRequestBehavior.AllowGet);
            }


        }
        public ActionResult GetAddList()
        {
            try
            {
                return Json(new { model = (new applicationModel().GetAddList()) },
                    JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { ex.Message }, JsonRequestBehavior.AllowGet);
            }
        }
        public ActionResult DeleteReg(int Applications_Id)
        {
            try
            {
                return Json(new { model = (new applicationModel().DeleteReg(Applications_Id)) },
                    JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { ex.Message }, JsonRequestBehavior.AllowGet);
            }
        }
        public ActionResult EditReg(int Applications_Id)
        {
            try
            {
                return Json(new { model = new applicationModel().EditReg(Applications_Id) }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { ex.Message }, JsonRequestBehavior.AllowGet);
            }
        }
        public ActionResult DetailReg(int Applications_Id)
        {
            try
            {
                return Json(new { model = new applicationModel().EditReg(Applications_Id) }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { ex.Message }, JsonRequestBehavior.AllowGet);
            }
        }
    }

}
    

   
