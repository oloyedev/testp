import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Header('Content-Type', 'text/html')
  getHello(): string {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Coffee Landing</title>
  <style>
    :root {
      --bg: #081726;
      --card: #11253a;
      --accent: #68d6ff;
      --text: #eef8ff;
      --muted: #9cc9d9;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      background: radial-gradient(circle at top, rgba(104,214,255,0.15), transparent 35%),
        linear-gradient(180deg, #06101e 0%, #0f2440 100%);
      color: var(--text);
    }
    .hero {
      display: grid;
      place-items: center;
      text-align: center;
      padding: 5rem 1.5rem 3rem;
    }
    .hero h1 {
      font-size: clamp(2.8rem, 4vw, 4.8rem);
      margin: 0;
      letter-spacing: 0.02em;
    }
    .hero p {
      margin: 1.5rem auto 2rem;
      max-width: 720px;
      color: var(--muted);
      line-height: 1.8;
      font-size: 1.05rem;
    }
    .button-group {
      display: inline-flex;
      gap: 1rem;
      flex-wrap: wrap;
      justify-content: center;
    }
    .btn {
      border: none;
      border-radius: 999px;
      padding: 0.95rem 1.8rem;
      font-weight: 700;
      cursor: pointer;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .btn-primary {
      background: linear-gradient(135deg, #4bb8ff, #6fdcff);
      color: #081726;
      box-shadow: 0 18px 40px rgba(72,188,255,0.25);
    }
    .btn-secondary {
      background: rgba(104,214,255,0.12);
      color: var(--text);
      border: 1px solid rgba(104,214,255,0.3);
    }
    .btn:hover { transform: translateY(-1px); }
    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 1.25rem;
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 1.5rem 4rem;
    }
    .card {
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 1.5rem;
      padding: 2rem;
      backdrop-filter: blur(12px);
      min-height: 240px;
    }
    .card h2 {
      margin-top: 0;
      margin-bottom: 1rem;
      color: #fff;
    }
    .card p {
      color: var(--muted);
      line-height: 1.8;
    }
    footer {
      text-align: center;
      padding: 2rem 1.5rem 3rem;
      color: var(--muted);
      font-size: 0.95rem;
    }
  </style>
</head>
<body>
  <main>
    <section class="hero">
      <div>
        <p style="letter-spacing:0.4em; text-transform:uppercase; color:var(--accent); font-weight:700; margin-bottom:1rem;">Coffee Land</p>
        <h1>Your daily brew, crafted with warmth.</h1>
        <p>Discover a cozy landing page built with NestJS. Perfect for coffee shops, cafes, and anyone who wants a warm, inviting online presence.</p>
        <div class="button-group">
          <button class="btn btn-primary" onclick="window.location='/explore'">Explore Menu</button>
          <button class="btn btn-secondary" onclick="window.location='/chef'">Our Chefs</button>
        </div>
      </div>
    </section>

    <section class="features">
      <article class="card">
        <h2>Fresh Roasts</h2>
        <p>Bold espresso, smooth latte, and handcrafted cold brews – every cup is roasted to perfection for rich flavor and lasting warmth.</p>
      </article>
      <article class="card">
        <h2>Cozy Vibes</h2>
        <p>Curated atmosphere, soft lighting, and relaxing music make this the perfect place to work, meet friends, or unwind.</p>
      </article>
      <article class="card">
        <h2>Made with Care</h2>
        <p>Our team handcrafts each drink with premium beans, fresh milk, and a welcoming smile. Simple, delicious, memorable.</p>
      </article>
    </section>
  </main>

  <footer>
    Built with NestJS · A simple landing page for a coffee brand.
  </footer>
</body>
</html>`;
  }

  @Get('health')
  getHealth(): object {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      message: 'Coffee Landing page is live',
    };
  }

  @Get('explore')
  @Header('Content-Type', 'text/html')
  getExplore(): string {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Explore Menu | Coffee Land</title>
  <style>
    :root {
      --bg: #081726;
      --surface: rgba(255,255,255,0.08);
      --accent: #68d6ff;
      --text: #eef8ff;
      --muted: #9cc9d9;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      background: radial-gradient(circle at top, rgba(104,214,255,0.12), transparent 35%),
        linear-gradient(180deg, #06101e 0%, #0f2440 100%);
      color: var(--text);
    }
    .page {
      padding: 3rem 1.5rem 4rem;
      max-width: 980px;
      margin: 0 auto;
    }
    .hero {
      display: grid;
      gap: 1rem;
      text-align: center;
      margin-bottom: 2.5rem;
    }
    .hero h1 {
      margin: 0;
      font-size: clamp(2.4rem, 4vw, 4rem);
    }
    .hero p {
      margin: 0 auto;
      max-width: 720px;
      color: var(--muted);
      line-height: 1.75;
    }
    .menu {
      display: grid;
      gap: 1.5rem;
    }
    .item {
      background: var(--surface);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 1.5rem;
      padding: 1.75rem;
      backdrop-filter: blur(12px);
    }
    .item h2 {
      margin-top: 0;
      font-size: 1.35rem;
      color: #fff;
    }
    .item p {
      margin: 0.75rem 0 0;
      color: var(--muted);
      line-height: 1.75;
    }
    .back {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      margin-top: 2rem;
      padding: 0.9rem 1.4rem;
      border-radius: 999px;
      border: 1px solid rgba(104,214,255,0.3);
      background: rgba(104,214,255,0.08);
      color: var(--accent);
      text-decoration: none;
      font-weight: 700;
    }
  </style>
</head>
<body>
  <main class="page">
    <section class="hero">
      <p style="letter-spacing:0.35em; text-transform:uppercase; color:var(--accent); font-weight:700;">Coffee Land</p>
      <h1>Explore our coffee menu</h1>
      <p>Browse signature drinks, cozy favorites, and snack pairings designed to brighten your day and satisfy every craving.</p>
    </section>
    <section class="menu">
      <article class="item">
        <h2>Signature Espresso</h2>
        <p>Pure intensity with velvety crema. Choose from single shot, doppio, or Americano.</p>
      </article>
      <article class="item">
        <h2>Velvet Latte</h2>
        <p>Steamed milk, smooth espresso, and a creamy finish for a warm, comforting sip.</p>
      </article>
      <article class="item">
        <h2>Caramel Cloud</h2>
        <p>A sweet, buttered caramel latte topped with light foam and a sprinkle of sea salt.</p>
      </article>
      <article class="item">
        <h2>Cold Brew Bliss</h2>
        <p>Slow-steeped dark roast served chilled, with bright citrus notes and mellow sweetness.</p>
      </article>
      <article class="item">
        <h2>Pastry Pairings</h2>
        <p>Fresh croissants, cinnamon rolls, and house-made muffins crafted to pair perfectly with your drink.</p>
      </article>
    </section>
    <a class="back" href="/">← Back to Home</a>
  </main>
</body>
</html>`;
  }

  @Get('api/info')
  getInfo(): object {
    return {
      name: 'Coffee Land',
      version: '1.0.0',
      description: 'A cozy coffee landing page powered by NestJS',
      endpoints: ['GET /', 'GET /health', 'GET /explore', 'GET /chef', 'GET /light', 'GET /api/info'],
    };
  }

  @Get('chef')
  @Header('Content-Type', 'text/html')
  getChef(): string {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Our Chefs | Coffee Land</title>
  <style>
    :root {
      --bg: #081726;
      --surface: rgba(255,255,255,0.08);
      --accent: #68d6ff;
      --text: #eef8ff;
      --muted: #9cc9d9;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      background: radial-gradient(circle at top, rgba(104,214,255,0.12), transparent 35%),
        linear-gradient(180deg, #06101e 0%, #0f2440 100%);
      color: var(--text);
    }
    .page {
      padding: 3rem 1.5rem 4rem;
      max-width: 980px;
      margin: 0 auto;
    }
    .hero {
      display: grid;
      gap: 1rem;
      text-align: center;
      margin-bottom: 2.5rem;
    }
    .hero h1 {
      margin: 0;
      font-size: clamp(2.4rem, 4vw, 4rem);
    }
    .hero p {
      margin: 0 auto;
      max-width: 720px;
      color: var(--muted);
      line-height: 1.75;
    }
    .chefs {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
    }
    .chef-card {
      background: var(--surface);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 1.5rem;
      padding: 2rem;
      backdrop-filter: blur(12px);
      text-align: center;
    }
    .chef-card h2 {
      margin-top: 0;
      font-size: 1.35rem;
      color: #fff;
    }
    .chef-title {
      color: var(--accent);
      font-size: 0.95rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }
    .chef-bio {
      margin: 0;
      color: var(--muted);
      line-height: 1.75;
      font-size: 0.95rem;
    }
    .back {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      margin-top: 2rem;
      padding: 0.9rem 1.4rem;
      border-radius: 999px;
      border: 1px solid rgba(104,214,255,0.3);
      background: rgba(104,214,255,0.08);
      color: var(--accent);
      text-decoration: none;
      font-weight: 700;
    }
  </style>
</head>
<body>
  <main class="page">
    <section class="hero">
      <p style="letter-spacing:0.35em; text-transform:uppercase; color:var(--accent); font-weight:700;">Coffee Land</p>
      <h1>Meet Our Chefs</h1>
      <p>Talented culinary artists dedicated to crafting unforgettable coffee experiences and delicious pastries.</p>
    </section>
    <section class="chefs">
      <article class="chef-card">
        <h2>Marco Rossi</h2>
        <p class="chef-title">Head Chef & Pastry Specialist</p>
        <p class="chef-bio">With 15 years of experience in Italian cuisine, Marco brings artistry to every pastry and espresso pull.</p>
      </article>
      <article class="chef-card">
        <h2>Sofia Chen</h2>
        <p class="chef-title">Barista Master</p>
        <p class="chef-bio">Certified latte art champion. Sofia crafts perfectly balanced espresso drinks with precision and passion.</p>
      </article>
      <article class="chef-card">
        <h2>James Mitchell</h2>
        <p class="chef-title">Pastry Chef</p>
        <p class="chef-bio">Award-winning pastry chef specializing in French techniques and artisanal bread baking.</p>
      </article>
      <article class="chef-card">
        <h2>Lucia Santos</h2>
        <p class="chef-title">Beverage Director</p>
        <p class="chef-bio">Expert in sourcing premium coffee beans from sustainable farms across the globe.</p>
      </article>
      <article class="chef-card">
        <h2>David Kumar</h2>
        <p class="chef-title">Seasonal Menu Creator</p>
        <p class="chef-bio">Innovates signature drinks and food pairings that celebrate seasonal flavors and local ingredients.</p>
      </article>
      <article class="chef-card">
        <h2>Emma Thompson</h2>
        <p class="chef-title">Dessert & Cake Designer</p>
        <p class="chef-bio">Creates stunning custom cakes and desserts that taste as amazing as they look.</p>
      </article>
    </section>
    <a class="back" href="/">← Back to Home</a>
  </main>
</body>
</html>`;
  }
