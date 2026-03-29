namespace PortfolioApi.Models;

public class Project
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string[] Technologies { get; set; } = Array.Empty<string>();
    public string? GithubUrl { get; set; }
    public string? LiveUrl { get; set; }
    public string Category { get; set; } = string.Empty;
    public string Year { get; set; } = string.Empty;
}

public class Experience
{
    public int Id { get; set; }
    public string Company { get; set; } = string.Empty;
    public string Role { get; set; } = string.Empty;
    public string StartDate { get; set; } = string.Empty;
    public string EndDate { get; set; } = string.Empty;
    public string Location { get; set; } = string.Empty;
    public string[] Highlights { get; set; } = Array.Empty<string>();
    public bool IsCurrent { get; set; }
}

public class PersonalInterest
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string Icon { get; set; } = string.Empty;
}

public class ContactMessage
{
    public string Name { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string Message { get; set; } = string.Empty;
}
