using System.Net.Http;
using System.Net.Http.Json;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BlazorProject.Data
{
    public class CompanyService
    {
        private readonly HttpClient _httpClient;

        public CompanyService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<List<Company>> GetSysCompaniesAsync()
        {
            // Send GET request to the SysCompany endpoint
            var response = await _httpClient.GetFromJsonAsync<List<Company>>("api/Company/Companyinfo");
            return response ?? new List<Company>();
        }
    }
}
