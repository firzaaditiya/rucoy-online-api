# 🛡️ Unofficial Rucoy Online API

A simple and lightweight Node.js API that scrapes character and guild data from [rucoyonline.com](https://www.rucoyonline.com) and returns it in structured JSON format. Built with Express and Cheerio, this API is suitable for integrations, bots, or game-related tools.

---

## ⚙️ Features

- 📘 Character scraping:
  - Name, level, title, guild, online status, born date
  - Kill and death logs
- 🏰 Guild scraping:
  - Guild name, description, foundation date
  - List of members (name, role, level, join date)

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) v14+ installed
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### 1. Clone the Repository

```bash
git clone https://github.com/firzaaditiya/rucoy-online-api.git
cd rucoy-online-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Server

```bash
node index.js
```

The server will run by default on:

```
http://localhost:3000
```

---

## 📡 API Endpoints

### 📘 GET `/api/character/:name`

Fetch details of a specific character by name.

#### Example

```
GET /api/character/Bestial%20Warrior
```

#### Response

```json
{
  "name": "Bestial Warrior",
  "level": 955,
  "guild": {
    "name": "Attack On Titan",
    "url": "/guild/Attack%20On%20Titan"
  },
  "title": "Knight",
  "lastOnline": "20 minutes ago",
  "born": "January 30, 2017",
  "kills": [
    {
      "text": "Bestial Warrior killed Shiroe Bow",
      "time": "2 days ago"
    }
  ],
  "deaths": [
    {
      "text": "Silent Horsez killed Bestial Warrior",
      "time": "5 days ago"
    }
  ]
}
```

---

### 🏰 GET `/api/guild/:name`

Fetch details of a specific guild by name.

#### Example

```
GET /api/guild/Aa%20Gods%20Of%20Fearless%20Wd%20Aa
```

#### Response

```json
{
  "guildName": "Aa Gods Of Fearless Wd Aa",
  "description": "...",
  "founded": "May 08, 2022",
  "members": [
    {
      "name": "Aa Leader Aa",
      "role": "Leader",
      "level": "10",
      "joinDate": "Dec 19, 2023"
    }
  ]
}
```

---

## 🧱 Project Structure

```
.
├── index.js                     # Entry point of the server
├── routes/
│   ├── character.route.js       # /api/character route
│   └── guild.route.js           # /api/guild route
├── utils/
│   └── scrapper.js
```

---

## 🛠 Tech Stack

- **Node.js** with ECMAScript modules (ESM)
- **Express.js** - REST API framework
- **Cheerio** - jQuery-like HTML parser for server
- **CORS** - for cross-origin support

---

## 🌐 Deployment

This project can be deployed on any Node.js-compatible environment such as:

- [Render](https://render.com/)
- [Vercel (via serverless functions)](https://vercel.com/)
- [Glitch](https://glitch.com/)
- [Heroku](https://heroku.com/)
- Self-hosted VPS or server

---

## 🧪 Testing the API

You can test the endpoints using:

- [Postman](https://www.postman.com/)
- [Thunder Client](https://www.thunderclient.com/)
- `curl` in terminal:

```bash
curl http://localhost:3000/api/character/Naberal%20Gamma
curl http://localhost:3000/api/guild/Aa%20Gods%20Of%20Fearless%20Wd%20Aa
```

---

## 👤 Author

**Firza Aditiya**

**Rucoy Online: Faxzy**  
🌐 [https://github.com/firzaaditiya](https://github.com/firzaaditiya)

---

## 📄 License

Licensed under the [MIT License](LICENSE).

Feel free to use, modify, or contribute!
