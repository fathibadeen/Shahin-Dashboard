using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;


public interface IAuthenticationService
{
    Task<LoginResult> AuthAsync(string username, string password);
    Task<LoginResult> VerifyTwoFactorCodeAsync(string username, string code);
}
