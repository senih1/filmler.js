using film.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace film.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
