using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;
using dotenv.net;
using Microsoft.AspNetCore.Mvc;
using PortfolioApi.Data;
using PortfolioApi.Models;


namespace PortfolioApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProjectsController : ControllerBase
{
    [HttpGet]
    public IActionResult GetAll() => Ok(PortfolioData.Projects);

    [HttpGet("{id}")]
    public IActionResult GetById(int id)
    {
        var project = PortfolioData.Projects.FirstOrDefault(p => p.Id == id);
        return project is null ? NotFound() : Ok(project);
    }
}

[ApiController]
[Route("api/[controller]")]
public class ExperienceController : ControllerBase
{
    [HttpGet]
    public IActionResult GetAll() => Ok(PortfolioData.Experiences);
}

[ApiController]
[Route("api/[controller]")]
public class PersonalController : ControllerBase
{
    [HttpGet]
    public IActionResult GetInterests() => Ok(PortfolioData.Interests);
}

[ApiController]
[Route("api/[controller]")]
public class ContactController : ControllerBase
{
    private const string receiversEmail = "adamsjos02@gmail.com";
    private const string receiversName = "Josh Adams";
    private const string fromEmail = "adamjoshportfolio@gmail.com";
    private const string subjectLine = "New Inquiry From Someone";
    private const string fromName = "Portfolio Inquiry";
    [HttpPost]
    public async Task<IActionResult> Send([FromBody] ContactMessage message)
    {
        if (string.IsNullOrWhiteSpace(message.Name) ||
            string.IsNullOrWhiteSpace(message.Email) ||
            string.IsNullOrWhiteSpace(message.Message))
        {
            return BadRequest(new { error = "All fields are required." });
        }
        var fromAddress = new MailAddress(fromEmail, fromName);
        var fromPassword = Environment.GetEnvironmentVariable("INQUIRY_SENDER_PASSWORD");
        var toAddress = new MailAddress(receiversEmail, receiversName);
        var smtp = new SmtpClient
        {
            Host = "smtp.gmail.com",
            Port = 587,
            EnableSsl = true,
            DeliveryMethod = SmtpDeliveryMethod.Network,
            UseDefaultCredentials = false,
            Credentials = new NetworkCredential(fromAddress.Address, fromPassword)
        };
        using (var mailMessage = new MailMessage(fromAddress, toAddress)
        {
            Subject = subjectLine,
            Body = $"New message from {message.Name} at {message.Email}! \n {message.Message}"
        })
        {
            smtp.Send(mailMessage);
            return Ok(new { success = true, message = "Message received! I'll be in touch soon." });
        }
    }
}
