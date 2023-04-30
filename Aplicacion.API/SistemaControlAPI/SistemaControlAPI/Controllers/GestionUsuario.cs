using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace SistemaControlAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GestionUsuario : ControllerBase
    {

        private readonly ILogger<GestionUsuario> _logger;

        public GestionUsuario(ILogger<GestionUsuario> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "getUser")]

        public async Task<string> Get(string usuario, string password)
        {
            try
            {
                using (var httpClient = new HttpClient())
                {
                    var url = "http://apiservicios.ecuasolmovsa.com:3009/api/Usuarios?usuario=" + usuario + "&password=" + password;
                    HttpResponseMessage response = await httpClient.GetAsync(url);
                    string responseBody = await response.Content.ReadAsStringAsync();
                    Console.WriteLine(responseBody);
                    return responseBody;
                }
       
            }
            catch (Exception error)
            {
                return ("erooor: " + error);
            }
        }

        [HttpGet("Emisores")]

        public async Task<string> Get()
        {
            try
            {
                using (var httpClient = new HttpClient())
                {
                    var url = "http://apiservicios.ecuasolmovsa.com:3009/api/Varios/GetEmisor";
                    HttpResponseMessage response = await httpClient.GetAsync(url);
                    string responseBody = await response.Content.ReadAsStringAsync();
                    Console.WriteLine(responseBody);
                    return responseBody;
                }
              
            }
            catch (Exception error)
            {
                return ("erooor: " + error);
            }
        }

        [HttpGet("Costos")]

        public async Task<string> GetEmisores()
        {
            try
            {
                using (var httpClient = new HttpClient())
                {
                    var url = "http://apiservicios.ecuasolmovsa.com:3009/api/Varios/CentroCostosSelect";
                    HttpResponseMessage response = await httpClient.GetAsync(url);
                    string responseBody = await response.Content.ReadAsStringAsync();
                    Console.WriteLine(responseBody);
                    return responseBody;
                }
            }
            catch (Exception error)
            {
                return ("erooor: " + error);
            }
        }

    }
}
