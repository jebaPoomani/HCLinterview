using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ToDo_0.Controllers
{
    public class MyDealsController : Controller
    {
        // GET: MyDeals
        public ActionResult MyDeals()
        {
            ViewData["serviceStartGUID"] = Session["serviceStartGUID"].ToString();
            return View();
        }

       
    }
}