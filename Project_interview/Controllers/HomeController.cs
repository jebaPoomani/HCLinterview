using ComponentManager.ExceptionManagement;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Net.Security;
using System.Security.Claims;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;
using System.Web;

using System.Web.Mvc;
using System.Xml;

namespace Toto._0.Controllers
{
    public class HomeController : Controller
    {

        public async Task<ActionResult> Index()
        {

            UserInfo userInfo = Session["userInfo"] == null ? new UserInfo() : (UserInfo)Session["userInfo"];
            ViewData["Name"] = userInfo.family_name;
            ViewData["serviceStartGUID"] = Session["serviceStartGUID"].ToString();

            return View();
        }
      



        /// <summary>
        /// Logs user out of system.
        /// </summary>
        /// <returns></returns>
      
    }
}