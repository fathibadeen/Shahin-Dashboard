
using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;

namespace BlazorProject.Data
{
    public partial class Login
    {

        
            [Required(ErrorMessage = "Username is required.")]
            public string Username { get; set; }

            [Required(ErrorMessage = "Password is required.")]
            public string Password { get; set; }
        }

    }
