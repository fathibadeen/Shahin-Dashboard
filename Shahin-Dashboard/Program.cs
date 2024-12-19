using BlazorProject.Data;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.Extensions.DependencyInjection;
using Shahin_Dashboard.Components;
using System.Net.Http;



    
    var builder = WebApplication.CreateBuilder(args);
builder.Services.AddScoped<CompanyService>();

// Register services
builder.Services.AddScoped<IAuthenticationService, AuthenticationService>();
builder.Services.AddRazorComponents()
    .AddInteractiveServerComponents();

builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri("https://test.Ammn.com.sa:1000") });
builder.Services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
    .AddCookie(options =>
    {
        options.LoginPath = "/auth"; // Path to login page
        options.AccessDeniedPath = "/access-denied"; // Access denied path
    });
builder.Services.AddAuthorizationCore();

var app = builder.Build();

// Middleware setup
app.UseAuthentication();
app.UseAuthorization();
app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseAntiforgery();

app.MapRazorComponents<App>()
    .AddInteractiveServerRenderMode();

app.Run();
