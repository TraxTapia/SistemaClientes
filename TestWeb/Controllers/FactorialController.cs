using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TestWeb.Models;

namespace TestWeb.Controllers
{
    public class FactorialController : Controller
    {
        // GET: Factorial
        public ActionResult Index()
        {
            //CalcularNumeroFactorial(4);
            return View();
        }

        public JsonResult CalcularNumeroFactorial(int numero)
        {
           
            List<int> listNumber = new List<int>();
            FactorialResponse list = new FactorialResponse();
            int factorial = 1;
            try
            {
                for (int i = 1; i <= numero; i++)
                {

                    factorial = factorial * i;
                    listNumber.Add(i);
                }


                list.ListCombinacion = listNumber;
                list.resultFactorial = factorial;

            }
            catch (Exception ex)
            {

                throw new Exception(ex.Message);
            }
            return Json(list);
        }
    }
}