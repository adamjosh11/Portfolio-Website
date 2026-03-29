# Joshua Adams — Portfolio (Angular + .NET)

Personal portfolio website with an Angular 17 frontend and .NET 8 Web API backend.

---

## Prerequisites

| Tool | Version |
|------|---------|
| [.NET SDK](https://dotnet.microsoft.com/download) | 8.0+ |
| [Node.js](https://nodejs.org) | 18+ |
| [Angular CLI](https://angular.io/cli) | 17+ |

Install Angular CLI globally if you haven't:
```bash
npm install -g @angular/cli
```

---

## Running Locally

You need **two terminals** — one for the API and one for the frontend.

### Terminal 1 — .NET API

```bash
cd api
dotnet run
```

API starts at **http://localhost:5000**. Swagger UI at **http://localhost:5000/swagger**

### Terminal 2 — Angular Frontend

```bash
cd frontend
npm install
ng serve
```

App opens at **http://localhost:4200**

---

## Adding Your Photos

Drop your photos into `frontend/src/assets/images/`:

| File | Used in | Tips |
|------|---------|------|
| `profile.jpg` | About section | Portrait orientation, 4:5 ratio, professional |
| `personal.jpg` | Personal section | Square or landscape, casual/candid |

Until photos are added, the sections show a styled placeholder with instructions.

---

## Project Structure

```
portfolio/
├── api/                        # .NET 8 Web API
│   ├── Controllers/Controllers.cs
│   ├── Models/Models.cs
│   ├── Data/PortfolioData.cs   # ← Edit your content here
│   ├── Program.cs
│   └── PortfolioApi.csproj
│
└── frontend/                   # Angular 17
    └── src/
        ├── assets/
        │   └── images/         # ← Drop profile.jpg + personal.jpg here
        └── app/
            ├── components/
            │   ├── navbar/
            │   ├── hero/
            │   ├── about/
            │   ├── experience/
            │   ├── projects/
            │   ├── personal/
            │   └── contact/
            ├── models/portfolio.models.ts
            ├── services/portfolio.service.ts
            └── app.component.ts
```

---

## Updating Content

All data lives in **`api/Data/PortfolioData.cs`** — edit the lists to update projects, experience, and personal interests.

For the Hero and About text, edit the templates in:
- `frontend/src/app/components/hero/hero.component.ts`
- `frontend/src/app/components/about/about.component.ts`

---

## Deployment

### API
```bash
cd api && dotnet publish -c Release -o ./publish
```
Deploy to Azure App Service, Railway, Render, or any .NET host.

### Frontend
```bash
cd frontend && ng build --configuration production
```
Deploy `dist/portfolio-app/browser/` to Netlify, Vercel, or Azure Static Web Apps.

> Update `baseUrl` in `frontend/src/app/services/portfolio.service.ts` to your deployed API URL before building for production.

---

## Adding Real Email to Contact Form

The contact form currently logs to console. To send real emails, add SendGrid:

```bash
cd api && dotnet add package SendGrid
```

Then replace the `Console.WriteLine` in `Controllers/Controllers.cs` with your SendGrid call.
