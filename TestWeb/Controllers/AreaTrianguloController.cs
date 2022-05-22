using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TestWeb.Models;

namespace TestWeb.Controllers
{
    public class AreaTrianguloController : Controller
    {
        // GET: AreaTriangulo
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult CalcularAreaTriangulo(double _base ,double altura )
        {
            AreaResponse _area = new AreaResponse();
         
            try
            {
                _area.Area = _base * altura / 2;

            }
            catch (Exception ex )
            {

                throw new Exception(ex.Message);
            }
            return Json(_area);
        }
    }
}