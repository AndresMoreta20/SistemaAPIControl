using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http;

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

        [HttpGet("Costos/Insert")]
        public async Task<string> InsertCosto(string codigo, string descripcion)
        {
            try
            {
                using (var httpClient = new HttpClient())
                {
                    var url = $"http://apiservicios.ecuasolmovsa.com:3009/api/Varios/CentroCostosInsert?codigocentrocostos={codigo}&descripcioncentrocostos={descripcion}";

                    HttpResponseMessage response = await httpClient.GetAsync(url);

                    string responseBody = await response.Content.ReadAsStringAsync();

                    Console.WriteLine(responseBody);
                    return responseBody;
                }
            }
            catch (Exception error)
            {
                return ("Error: " + error);
            }
        }

        [HttpGet("Costos/Delete")]
        public async Task<string> DeleteCostos(string codigo, string descripcion)
        {
            try
            {
                using (var httpClient = new HttpClient())
                {
                    var url = $"http://apiservicios.ecuasolmovsa.com:3009/api/Varios/CentroCostosDelete?codigocentrocostos={codigo}&descripcioncentrocostos={descripcion}";

                    HttpResponseMessage response = await httpClient.GetAsync(url);

                    string responseBody = await response.Content.ReadAsStringAsync();

                    Console.WriteLine(responseBody);
                    return responseBody;
                }
            }
            catch (Exception error)
            {
                return ("Error: " + error);
            }
        }
        [HttpGet("Costos/Update")]
        public async Task<string> UpdateCostos(string codigo, string nuevaDescripcion)
        {
            try
            {
                using (var httpClient = new HttpClient())
                {
                    var url = $"http://apiservicios.ecuasolmovsa.com:3009/api/Varios/CentroCostosUpdate?codigocentrocostos={codigo}&descripcioncentrocostos={nuevaDescripcion}";

                    HttpResponseMessage response = await httpClient.GetAsync(url);

                    string responseBody = await response.Content.ReadAsStringAsync();

                    Console.WriteLine(responseBody);
                    return responseBody;
                }
            }
            catch (Exception error)
            {
                return ("Error: " + error);
            }
        }

        [HttpGet("Costos/Search")]
        public async Task<string> SearchCostos(string descripcioncentrocostos)
        {
            try
            {
                using (var httpClient = new HttpClient())
                {
                    var url = $"http://apiservicios.ecuasolmovsa.com:3009/api/Varios/CentroCostosSearch?descripcioncentrocostos={descripcioncentrocostos}";

                    HttpResponseMessage response = await httpClient.GetAsync(url);

                    string responseBody = await response.Content.ReadAsStringAsync();

                    Console.WriteLine(responseBody);
                    return responseBody;
                }
            }
            catch (Exception error)
            {
                return ("Error: " + error);
            }
        }

        [HttpGet("Trabajador/Search")]
        public async Task<string> SearchTrabajador(int sucursal)
        {
            try
            {
                using (var httpClient = new HttpClient())
                {
                    var url = $"http://apiservicios.ecuasolmovsa.com:3009/api/Varios/TrabajadorSelect?sucursal={sucursal}";

                    HttpResponseMessage response = await httpClient.GetAsync(url);

                    string responseBody = await response.Content.ReadAsStringAsync();

                    Console.WriteLine(responseBody);
                    return responseBody;
                }
            }
            catch (Exception error)
            {
                return ("Error: " + error);
            }
        }


        [HttpPost("Trabajador/Insert")]
        public async Task<string> InsertTrabjador(
            string COMP_Codigo,
            int Id_Trabajador,
            string Tipo_trabajador,
            string Apellido_Paterno,
            string Apellido_Materno,
            string Nombres,
            string Identificacion,
            string Entidad_Bancaria,
            string CarnetIESS,
            string Direccion,
            string Telefono_Fijo,
            string Telefono_Movil,
            string Genero,
            string Nro_Cuenta_Bancaria,
            string Codigo_Categoria_Ocupacion,
            string Ocupacion,
            string Centro_Costos,
            string Nivel_Salarial,
            string EstadoTrabajador,
            string Tipo_Contrato,
            string Tipo_Cese,
            string EstadoCivil,
            string TipodeComision,
            string FechaNacimiento,
            string FechaIngreso,
            string FechaCese,
            int PeriododeVacaciones,
            string FechaReingreso,
            string Fecha_Ult_Actualizacion,
            string EsReingreso,
            string Tipo_Cuenta,
            int FormaCalculo13ro,
            int FormaCalculo14ro,
            int BoniComplementaria,
            int BoniEspecial,
            int Remuneracion_Minima,
            string Fondo_Reserva,
            string Mensaje)
        {
            try
            {
                using (var httpClient = new HttpClient())
                {
                    var url = $"http://apiservicios.ecuasolmovsa.com:3009/api/Varios/TrabajadorInsert?COMP_Codigo={COMP_Codigo}" +
                        $"&Id_Trabajador={Id_Trabajador} " +
                        $"&Tipo_trabajador={Tipo_trabajador} " +
                        $"&Apellido_Paterno={Apellido_Paterno} " +
                        $"&Apellido_Materno={Apellido_Materno} " +
                        $"&Nombres={Nombres} " +
                        $"&Identificacion={Identificacion} " +
                        $"&Entidad_Bancaria={Entidad_Bancaria} " +
                        $"&CarnetIESS={CarnetIESS} " +
                        $"&Direccion={Direccion} " +
                        $"&Telefono_Fijo={Telefono_Fijo} " +
                        $"&Telefono_Movil={Telefono_Movil} " +
                        $"&Genero={Genero} " +
                        $"&Nro_Cuenta_Bancaria={Nro_Cuenta_Bancaria} " +
                        $"&Codigo_Categoria_Ocupacion={Codigo_Categoria_Ocupacion} " +
                        $"&Ocupacion={Ocupacion} " +
                        $"&Centro_Costos={Centro_Costos} " +
                        $"&Nivel_Salarial={Nivel_Salarial} " +
                        $"&EstadoTrabajador={EstadoTrabajador} " +
                        $"&Tipo_Contrato={Tipo_Contrato} " +
                        $"&Tipo_Cese={Tipo_Cese} " +
                        $"&EstadoCivil={EstadoCivil} " +
                        $"&TipodeComision={TipodeComision} " +
                        $"&FechaNacimiento={FechaNacimiento} " +
                        $"&FechaIngreso={FechaIngreso} " +
                        $"&FechaCese={FechaCese} " +
                        $"&PeriododeVacaciones={PeriododeVacaciones} " +
                        $"&FechaReingreso={FechaReingreso} " +
                        $"&Fecha_Ult_Actualizacion={Fecha_Ult_Actualizacion} " +
                        $"&EsReingreso={EsReingreso} " +
                        $"&Tipo_Cuenta={Tipo_Cuenta}" +
                        $"&FormaCalculo13ro={FormaCalculo13ro} " +
                        $"&FormaCalculo14ro={FormaCalculo14ro} " +
                        $"&BoniComplementaria={BoniComplementaria} " +
                        $"&BoniEspecial={BoniEspecial} " +
                        $"&Remuneracion_Minima={Remuneracion_Minima} " +
                        $"&Fondo_Reserva={Fondo_Reserva} " +
                        $"&Mensaje={Mensaje}";

                    HttpResponseMessage response = await httpClient.GetAsync(url);

                    string responseBody = await response.Content.ReadAsStringAsync();

                    Console.WriteLine(responseBody);
                    return responseBody;
                }
            }
            catch (Exception error)
            {
                return ("Error: " + error);
            }
        }

        [HttpGet("Trabajador/Delete")]
        public async Task<string> DeleteTrabajador(int sucursal, int codigo)
        {
            try
            {
                using (var httpClient = new HttpClient())
                {
                    var url = $"http://apiservicios.ecuasolmovsa.com:3009/api/Varios/TrabajadorDelete?sucursal={sucursal}&codigoempleado={codigo}";

                    HttpResponseMessage response = await httpClient.GetAsync(url);

                    string responseBody = await response.Content.ReadAsStringAsync();

                    Console.WriteLine(responseBody);
                    return responseBody;
                }
            }
            catch (Exception error)
            {
                return ("Error: " + error);
            }
        }


        [HttpPost("Trabajador/Update")]
        public async Task<string> UpdateTrabajador(
            string COMP_Codigo, 
            int Id_Trabajador, 
            string Tipo_trabajador,
            string Apellido_Paterno,
            string Apellido_Materno,
            string Nombres, 
            string Identificacion, 
            string Entidad_Bancaria, 
            string CarnetIESS, 
            string Direccion,
            string Telefono_Fijo, 
            string Telefono_Movil, 
            string Genero, 
            string Nro_Cuenta_Bancaria, 
            string Codigo_Categoria_Ocupacion, 
            string Ocupacion, 
            string Centro_Costos,
            string Nivel_Salarial, 
            string EstadoTrabajador, 
            string Tipo_Contrato, 
            string Tipo_Cese, 
            string EstadoCivil, 
            string TipodeComision, 
            string FechaNacimiento, 
            string FechaIngreso, 
            string FechaCese, 
            int PeriododeVacaciones, 
            string FechaReingreso, 
            string Fecha_Ult_Actualizacion, 
            string EsReingreso, 
            string Tipo_Cuenta, 
            int FormaCalculo13ro, 
            int FormaCalculo14ro, 
            int BoniComplementaria, 
            int BoniEspecial,
            int Remuneracion_Minima, 
            string Fondo_Reserva, 
            string Mensaje)
        {
            try
            {
                using (var httpClient = new HttpClient())
                {
                    var url = $"http://apiservicios.ecuasolmovsa.com:3009/api/Varios/TrabajadorUpdate?COMP_Codigo={COMP_Codigo}" +
                        $"&Id_Trabajador={Id_Trabajador} " +
                        $"&Tipo_trabajador={Tipo_trabajador} " +
                        $"&Apellido_Paterno={Apellido_Paterno} " +
                        $"&Apellido_Materno={Apellido_Materno} " +
                        $"&Nombres={Nombres} " +
                        $"&Identificacion={Identificacion} " +
                        $"&Entidad_Bancaria={Entidad_Bancaria} " +
                        $"&CarnetIESS={CarnetIESS} " +
                        $"&Direccion={Direccion} " +
                        $"&Telefono_Fijo={Telefono_Fijo} " +
                        $"&Telefono_Movil={Telefono_Movil} " +
                        $"&Genero={Genero} " +
                        $"&Nro_Cuenta_Bancaria={Nro_Cuenta_Bancaria} " +
                        $"&Codigo_Categoria_Ocupacion={Codigo_Categoria_Ocupacion} " +
                        $"&Ocupacion={Ocupacion} " +
                        $"&Centro_Costos={Centro_Costos} " +
                        $"&Nivel_Salarial={Nivel_Salarial} " +
                        $"&EstadoTrabajador={EstadoTrabajador} " +
                        $"&Tipo_Contrato={Tipo_Contrato} " +
                        $"&Tipo_Cese={Tipo_Cese} " +
                        $"&EstadoCivil={EstadoCivil} " +
                        $"&TipodeComision={TipodeComision} " +
                        $"&FechaNacimiento={FechaNacimiento} " +
                        $"&FechaIngreso={FechaIngreso} " +
                        $"&FechaCese={FechaCese} " + 
                        $"&PeriododeVacaciones={PeriododeVacaciones} " +
                        $"&FechaReingreso={FechaReingreso} " +
                        $"&Fecha_Ult_Actualizacion={Fecha_Ult_Actualizacion} " +
                        $"&EsReingreso={EsReingreso} " +
                        $"&Tipo_Cuenta={Tipo_Cuenta}" +
                        $"&FormaCalculo13ro={FormaCalculo13ro} " +
                        $"&FormaCalculo14ro={FormaCalculo14ro} " +
                        $"&BoniComplementaria={BoniComplementaria} " +
                        $"&BoniEspecial={BoniEspecial} " +
                        $"&Remuneracion_Minima={Remuneracion_Minima} " +
                        $"&Fondo_Reserva={Fondo_Reserva} " +
                        $"&Mensaje={Mensaje}";

                    HttpResponseMessage response = await httpClient.GetAsync(url);

                    string responseBody = await response.Content.ReadAsStringAsync();

                    Console.WriteLine(responseBody);
                    return responseBody;
                }
            }
            catch (Exception error)
            {
                return ("Error: " + error);
            }
        }

        [HttpGet("TipoTrabajador")]

        public async Task<string> GetTipoTrabajador()
        {
            try
            {
                using (var httpClient = new HttpClient())
                {
                    var url = "http://apiservicios.ecuasolmovsa.com:3009/api/Varios/TipoTrabajador";
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


        [HttpGet("Genero")]

        public async Task<string> GetGenero()
        {
            try
            {
                using (var httpClient = new HttpClient())
                {
                    var url = "http://apiservicios.ecuasolmovsa.com:3009/api/Varios/Genero";
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

        [HttpGet("EstadoTrabajador")]

        public async Task<string> GetEstadoTrabajador()
        {
            try
            {
                using (var httpClient = new HttpClient())
                {
                    var url = "http://apiservicios.ecuasolmovsa.com:3009/api/Varios/EstadoTrabajador";
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

        [HttpGet("PeriodoVacaciones")]
        public async Task<string> GetPeriodoVacaciones()
        {
            try
            {
                using (var httpClient = new HttpClient())
                {
                    var url = "http://apiservicios.ecuasolmovsa.com:3009/api/Varios/PeriodoVacaciones";
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

        [HttpGet("TipoComision")]
        public async Task<string> GetTipoComision()
        {
            try
            {
                using (var httpClient = new HttpClient())
                {
                    var url = "http://apiservicios.ecuasolmovsa.com:3009/api/Varios/TipoComision";
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

        [HttpGet("DecimoTerceroDecimoCuarto")]
        public async Task<string> GetDecimoTerceroDecimoCuarto()
        {
            try
            {
                using (var httpClient = new HttpClient())
                {
                    var url = "http://apiservicios.ecuasolmovsa.com:3009/api/Varios/DecimoTerceroDecimoCuarto";
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

        [HttpGet("FondoReserva")]
        public async Task<string> GetFondoReserva()
        {
            try
            {
                using (var httpClient = new HttpClient())
                {
                    var url = "http://apiservicios.ecuasolmovsa.com:3009/api/Varios/FondoReserva";
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





        [HttpGet("TipoContrato")]
        public async Task<string> GetTipoContrato()
        {
            try
            {
                using (var httpClient = new HttpClient())
                {
                    var url = "http://apiservicios.ecuasolmovsa.com:3009/api/Varios/TipoContrato";
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

        [HttpGet("TipoCese")]
        public async Task<string> GetTipoCese()
        {
            try
            {
                using (var httpClient = new HttpClient())
                {
                    var url = "http://apiservicios.ecuasolmovsa.com:3009/api/Varios/TipoCese";
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

        [HttpGet("EstadoCivil")]
        public async Task<string> GetEstadoCivil()
        {
            try
            {
                using (var httpClient = new HttpClient())
                {
                    var url = "http://apiservicios.ecuasolmovsa.com:3009/api/Varios/EstadoCivil";
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

        [HttpGet("EsReingreso")]
        public async Task<string> GetEsReingreso()
        {
            try
            {
                using (var httpClient = new HttpClient())
                {
                    var url = "http://apiservicios.ecuasolmovsa.com:3009/api/Varios/EsReingreso";
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

        [HttpGet("TipoCuenta")]
        public async Task<string> GetTipoCuenta()
        {
            try
            {
                using (var httpClient = new HttpClient())
                {
                    var url = "http://apiservicios.ecuasolmovsa.com:3009/api/Varios/TipoCuenta";
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

        [HttpGet("CategoriaOcupacional")]
        public async Task<string> GetCategoriaOcupacional()
        {
            try
            {
                using (var httpClient = new HttpClient())
                {
                    var url = "http://apiservicios.ecuasolmovsa.com:3009/api/Varios/CategoriaOcupacional";
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

        [HttpGet("NivelSalarial")]
        public async Task<string> GetNivelSalarial()
        {
            try
            {
                using (var httpClient = new HttpClient())
                {
                    var url = "http://apiservicios.ecuasolmovsa.com:3009/api/Varios/NivelSalarial";
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
