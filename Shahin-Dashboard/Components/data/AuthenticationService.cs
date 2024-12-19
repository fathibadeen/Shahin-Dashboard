using System.ComponentModel.DataAnnotations;
using System.Net.Http;
using System.Net.Http.Json;
using System.Threading.Tasks;

public class AuthenticationService : IAuthenticationService
{
    private readonly HttpClient _httpClient;

    public AuthenticationService(HttpClient httpClient)
    {
        _httpClient = httpClient;
    }

    public async Task<LoginResult> AuthAsync(string username, string password)
    {
        var payload = new { username, password };
        var response = await _httpClient.PostAsJsonAsync("/api/authenticate/authenticate", payload);

        if (response.IsSuccessStatusCode)
        {
            return await response.Content.ReadFromJsonAsync<LoginResult>();
        }
        else
        {
            return new LoginResult { IsSuccess = false, ErrorMessage = "Authentication failed." };
        }
    }

    public async Task<LoginResult> VerifyTwoFactorCodeAsync(string username, string code)
    {
        var payload = new { username, code };
        var response = await _httpClient.PostAsJsonAsync("/api/authenticate/verify-2fa", payload);

        if (response.IsSuccessStatusCode)
        {
            return await response.Content.ReadFromJsonAsync<LoginResult>();
        }
        else
        {
            return new LoginResult { IsSuccess = false, ErrorMessage = "Invalid two-factor code." };
        }
    }
}

public class LoginResult
{
    public bool IsSuccess { get; set; }
    public string ErrorMessage { get; set; }
    public string Token { get; set; }
    public bool RequiresTwoFactor { get; set; } // Add this property
}

public class LoginModel
{
    public string Username { get; set; }

    [Required(ErrorMessage = "Password is required.")]
    public string Password { get; set; }

}