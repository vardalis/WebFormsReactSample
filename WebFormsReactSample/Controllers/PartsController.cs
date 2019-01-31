using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebFormsReactSample.Models;

namespace WebFormsReactSample.Controllers
{
    public class PartsController : ApiController
    {
        readonly Part[] parts = new Part[]
        {
            new Part { Id = 1, Name = "Part 1", Price = 1 },
            new Part { Id = 2, Name = "Part 2", Price = 2 },
            new Part { Id = 3, Name = "Part 3", Price = 3 }
        };

        // GET api/<controller>
        public IEnumerable<Part> Get()
        {
            return parts;
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