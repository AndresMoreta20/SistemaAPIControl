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

<<<<<<< HEAD
        [HttpGet("MovimientoPlanillaSelect")]
        public async Task<string> GetMovimientoPlanillaSelect()
=======
        [HttpGet("PlandeCuentas")]
        public async Task<string> GetPlandeCuentas()
>>>>>>> 5f1c086a545b8eb16d1715a84d5d3711098dc098
        {
            try
            {
                using (var httpClient = new HttpClient())
                {
<<<<<<< HEAD
                    var url = "http://apiservicios.ecuasolmovsa.com:3009/api/Varios/MovimientoPlanillaSelect";
=======
                    var url = "http://apiservicios.ecuasolmovsa.com:3009/api/Varios/PlandeCuentas";
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


        [HttpGet("GestionContableNomina")]

        public async Task<string> GetGestionContableNomina(int sucursal)
        {
            try
            {
                using (var httpClient = new HttpClient())
                {
                    var url = $"http://apiservicios.ecuasolmovsa.com:3009/api/Varios/Gestion_Cuenta_Contable_Nomina_Select?sucursal={sucursal}";
>>>>>>> 5f1c086a545b8eb16d1715a84d5d3711098dc098
                    HttpResponseMessage response = await httpClient.GetAsync(url);
                    string responseBody = await response.Content.ReadAsStringAsync();
                    Console.WriteLine(responseBody);
                    return responseBody;
                }
            }
            catch (Exception error)
            {
<<<<<<< HEAD
                return ("error: " + error);
            }
        }

        [HttpGet("MovimientoPlanillaUpdate")]
        public async Task<string> UpdateMovimientoPlanilla(int codigoplanilla, int conceptos, int prioridad, int tipooperacion, int cuenta1, int cuenta2, int cuenta3, int cuenta4, int MovimientoExcepcion1, int MovimientoExcepcion2, int MovimientoExcepcion3, int Traba_Aplica_iess, int Traba_Proyecto_imp_renta, int Aplica_Proy_Renta, int Empresa_Afecta_Iess)
=======
                return ("erooor: " + error);
            }
        }




        [HttpGet("GestionContableNomina/Insert")]
        public async Task<string> InsertGestionContableNomina(string codigo, string descripcion)
>>>>>>> 5f1c086a545b8eb16d1715a84d5d3711098dc098
        {
            try
            {
                using (var httpClient = new HttpClient())
                {
<<<<<<< HEAD
                    var url = $"http://apiservicios.ecuasolmovsa.com:3009/api/Varios/MovimientoPlanillaUpdate?codigoplanilla={codigoplanilla}&conceptos={conceptos}&prioridad={prioridad}&tipooperacion={tipooperacion}&cuenta1={cuenta1}&cuenta2={cuenta2}&cuenta3={cuenta3}&cuenta4={cuenta4}&MovimientoExcepcion1={MovimientoExcepcion1}&MovimientoExcepcion2={MovimientoExcepcion2}&MovimientoExcepcion3={MovimientoExcepcion3}&Traba_Aplica_iess={Traba_Aplica_iess}&Traba_Proyecto_imp_renta={Traba_Proyecto_imp_renta}&Aplica_Proy_Renta={Aplica_Proy_Renta}&Empresa_Afecta_Iess={Empresa_Afecta_Iess}";
                    HttpResponseMessage response = await httpClient.GetAsync(url);
                    string responseBody = await response.Content.ReadAsStringAsync();
                    Console.WriteLine(responseBody);
                    return responseBody;
                }
            }
            catch (Exception error)
            {
                return ("error: " + error);
            }
        }

        [HttpPost("MovimientoPlanillaInsert")]
        public async Task<string> InsertMovimientoPlanilla(int conceptos, int prioridad, int tipooperacion, int cuenta1, int cuenta2, int cuenta3, int cuenta4, int MovimientoExcepcion1, int MovimientoExcepcion2, int MovimientoExcepcion3, int Traba_Aplica_iess, int Traba_Proyecto_imp_renta, int Aplica_Proy_Renta, int Empresa_Afecta_Iess)
        {
            try
            {
                using (var httpClient = new HttpClient())
                {
                    var url = "http://apiservicios.ecuasolmovsa.com:3009/api/Varios/MovimientoPlanillaInsert";

                    var parameters = new Dictionary<string, string>
            {
                { "conceptos", conceptos.ToString() },
                { "prioridad", prioridad.ToString() },
                { "tipooperacion", tipooperacion.ToString() },
                { "cuenta1", cuenta1.ToString() },
                { "cuenta2", cuenta2.ToString() },
                { "cuenta3", cuenta3.ToString() },
                { "cuenta4", cuenta4.ToString() },
                { "MovimientoExcepcion1", MovimientoExcepcion1.ToString() },
                { "MovimientoExcepcion2", MovimientoExcepcion2.ToString() },
                { "MovimientoExcepcion3", MovimientoExcepcion3.ToString() },
                { "Traba_Aplica_iess", Traba_Aplica_iess.ToString() },
                { "Traba_Proyecto_imp_renta", Traba_Proyecto_imp_renta.ToString() },
                { "Aplica_Proy_Renta", Aplica_Proy_Renta.ToString() },
                { "Empresa_Afecta_Iess", Empresa_Afecta_Iess.ToString() }
            };

                    var content = new FormUrlEncodedContent(parameters);

                    HttpResponseMessage response = await httpClient.PostAsync(url, content);
                    string responseBody = await response.Content.ReadAsStringAsync();
                    Console.WriteLine(responseBody);
                    return responseBody;
                }
            }
            catch (Exception error)
            {
                return ("error: " + error);
            }
        }


        [HttpGet("MovimeintoPlanillaDelete")]
        public async Task<string> DeleteMovimeintoPlanilla(int codigomovimiento, string descripcionomovimiento)
        {
            try
            {
                using (var httpClient = new HttpClient())
                {
                    var url = $"http://apiservicios.ecuasolmovsa.com:3009/api/Varios/MovimeintoPlanillaDelete?codigomovimiento={codigomovimiento}&descripcionomovimiento={descripcionomovimiento}";

                    HttpResponseMessage response = await httpClient.GetAsync(url);
                    string responseBody = await response.Content.ReadAsStringAsync();
=======
                    var url = $"http://apiservicios.ecuasolmovsa.com:3009/api/Varios/CentroCostosInsert?codigocentrocostos={codigo}&descripcioncentrocostos={descripcion}";

                    HttpResponseMessage response = await httpClient.GetAsync(url);

                    string responseBody = await response.Content.ReadAsStringAsync();

>>>>>>> 5f1c086a545b8eb16d1715a84d5d3711098dc098
                    Console.WriteLine(responseBody);
                    return responseBody;
                }
            }
            catch (Exception error)
            {
<<<<<<< HEAD
                return ("error: " + error);
            }
        }

        [HttpGet("MovimientoPlanillaSearch")]
        public async Task<string> SearchMovimientoPlanilla(int Concepto)
=======
                return ("Error: " + error);
            }
        }

        [HttpGet("GestionContableNomina/Delete")]
        public async Task<string> DeleteGestionContableNomina(string codigo, string descripcion)
>>>>>>> 5f1c086a545b8eb16d1715a84d5d3711098dc098
        {
            try
            {
                using (var httpClient = new HttpClient())
                {
<<<<<<< HEAD
                    var url = $"http://apiservicios.ecuasolmovsa.com:3009/api/Varios/MovimientoPlanillaSearch?Concepto={Concepto}";

                    HttpResponseMessage response = await httpClient.GetAsync(url);
                    string responseBody = await response.Content.ReadAsStringAsync();
=======
                    var url = $"http://apiservicios.ecuasolmovsa.com:3009/api/Varios/CentroCostosDelete?codigocentrocostos={codigo}&descripcioncentrocostos={descripcion}";

                    HttpResponseMessage response = await httpClient.GetAsync(url);

                    string responseBody = await response.Content.ReadAsStringAsync();

>>>>>>> 5f1c086a545b8eb16d1715a84d5d3711098dc098
                    Console.WriteLine(responseBody);
                    return responseBody;
                }
            }
            catch (Exception error)
            {
<<<<<<< HEAD
                return ("error: " + error);
=======
                return ("Error: " + error);
            }
        }

        [HttpGet("GestionContableNomina/Search")]
        public async Task<string> SearchGestionContableNomina(string descripcioncentrocostos)
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
>>>>>>> 5f1c086a545b8eb16d1715a84d5d3711098dc098
            }
        }


    }
}
