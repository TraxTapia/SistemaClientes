using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using TestWeb.Models;

namespace TestWeb.Controllers
{
    public class NumeroMayorController : Controller
    {
        // GET: NumeroMayor
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult CalcularNumeroMayor(int numero1,int numero2,int numero3)
        {
            NumeroMayorResponse numeroMayor = new NumeroMayorResponse();
            try
            {
                if(numero1 > numero2) {
                    if (numero1 > numero3)
                    {
                        numeroMayor.NumeroMayor = numero1;
                    }
                    else
                    {
                        numeroMayor.NumeroMayor = numero3;
                    }
                } else if (numero2 > numero3)
                {
                    numeroMayor.NumeroMayor = numero2;
                }
                else
                {
                    numeroMayor.NumeroMayor = numero3;
                }


            }
            catch (Exception ex)
            {

                throw new Exception(ex.Message);
            }
            return  Json(numeroMayor);
        }
    }
}