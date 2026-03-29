using PortfolioApi.Models;

namespace PortfolioApi.Data;

public static class PortfolioData
{
    public static List<Project> Projects => new()
    {
        new Project
        {
            Id = 1,
            Title = "Humidity Predictor",
            Description = "A full-stack IoT project that collects real-time climate data from an Arduino and predicts the next day's humidity using a PyTorch LSTM model. Deployed to Google Cloud via Docker.",
            Technologies = new[] { "C++", "C#", "Python", "PyTorch", "Blazor", "FirestoreDB", "Docker", "Google Cloud" },
            GithubUrl = "https://github.com/adamjosh11/Humidity-Predictor",
            Category = "IoT / ML",
            Year = "2023"
        },
        new Project
        {
            Id = 2,
            Title = "MyLMS",
            Description = "A Role-Based Access Control (RBAC) learning management system supporting Students, Professors, and Administrators with unique workflows per role. Built with .NET, Entity Framework, and MariaDB.",
            Technologies = new[] { "C#", ".NET", "Entity Framework", "SQL", "MariaDB" },
            Category = "Full Stack",
            Year = "2023"
        },
        new Project
        {
            Id = 3,
            Title = "Lion Support Tool",
            Description = "A WPF desktop application for interacting with Lion Energy embedded devices — supporting firmware updates, functional testing, and live device state monitoring over CAN. Features RBAC for developer and base user roles.",
            Technologies = new[] { "C#", "XAML", "WPF", "CAN", "SQL" },
            Category = "Embedded / Desktop",
            Year = "2024 - 2025"
        },
        new Project
        {
            Id = 4,
            Title = "Drawing Application",
            Description = "An Android drawing app where users can create, save, and share drawings across accounts. Features a persistent drawing list, a full-featured canvas editor, and a backend server with Room DB for local storage.",
            Technologies = new[] { "Kotlin", "Android Studio", "Room DB" },
            Category = "Mobile",
            Year = "2023"
        },
        new Project
        {
            Id = 5,
            Title = "SMART web-application",
            Description = "A web-based application where users can connect with their IoT device, view the internal state of their IoT device, and change the settings. Built with React, Node, and PostgresQL",
            Technologies = new[] { "React", "Node", "PostgresQL" },
            Category = "Full Stack",
            Year = "2026 - Present"
        }
    };

    public static List<Experience> Experiences => new()
    {
        new Experience
        {
            Id = 1,
            Company = "Lion Energy",
            Role = "Software Engineer",
            StartDate = "May 2024",
            EndDate = "Present",
            Location = "American Fork, UT",
            IsCurrent = true,
            Highlights = new[]
            {
                "Built and maintain the Lion Support Tool — a WPF/C# desktop app for firmware updates, device testing, and live CAN data monitoring on embedded energy devices",
                "Improved developer testing efficiency by building a suite of simulation tools: a Python ECU emulator, an AWS IoT simulator, and a BLE device simulator",
                "Automated translation of Excel sheet data into CAN databases using Python, eliminating a previously manual engineering workflow",
                "Developed and maintained full-stack features on a web app using React, Node.js, and PostgreSQL, resolving bugs and improving frontend UX",
                "Executed database migrations and contributed to backend API development with Node.js and PostgreSQL"
            }
        }
    };

    public static List<PersonalInterest> Interests => new()
    {
        new PersonalInterest { Id = 1, Title = "Esports", Description = "Former Team Captain for the University of Utah Esports program. Competed at a collegiate level for three years — leadership, communication, and clutch decision-making under pressure.", Icon = "🎮" },
        new PersonalInterest { Id = 2, Title = "Hiking", Description = "Hiking enthusiast who loves hiking because it gives me a chance to step away from everyday stress and reconnect with nature. Being outside in the fresh air, moving my body, and taking in the views helps me feel both refreshed and accomplished.", Icon = "🥾" },
        new PersonalInterest { Id = 3, Title = "Board Games", Description = "I like playing board games because they give me a fun way to connect with other people and challenge my thinking. I enjoy the mix of strategy, creativity, and a little bit of competition that keeps every game interesting.", Icon = "♟️" },
        new PersonalInterest { Id = 4, Title = "Psychology", Description = "Backed by a B.S. in Psychology — I bring a human-centered lens to software. Understanding people makes me a better engineer and a better teammate.", Icon = "\U0001f9e0" }
    };
}
