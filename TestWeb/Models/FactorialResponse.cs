using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TestWeb.Models
{
    public class FactorialResponse
    {
        public FactorialResponse() {}
        public int resultFactorial  { get; set; }
        public List<int> ListCombinacion { get; set; }
    }
}