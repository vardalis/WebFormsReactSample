using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebFormsReactSample.Models;

namespace WebFormsReactSample.Controllers
{
    public class ProductsController : ApiController
    {
        readonly Product[] products = new Product[]
        {
            new Product { Id = 1, Name = "Product 1", Price = 1 },
            new Product { Id = 2, Name = "Product 2", Price = 2 },
            new Product { Id = 3, Name = "Product 3", Price = 3 }
        };

        // GET api/<controller>
        public IEnumerable<Product> Get()
        {
            return products;
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}