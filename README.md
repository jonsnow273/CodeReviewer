# 🤖 AI Code Reviewer

A full-stack web application that uses **Groq AI (Llama 3.3 70b)** to automatically review, debug, and fix your code.
Simply paste your code, select a programming language, and receive instant feedback including bug detection, explanations, and a fully corrected version of your code.

---

## ✨ Features

- 🧠 **AI-Powered Review** — Uses Groq's Llama 3.3 70b model to understand and analyze your code like a senior developer
- 💻 **Monaco Editor** — The same code editor that powers VS Code, embedded directly in the browser
- 🐛 **Bug Detection** — Finds syntax errors, logic errors, and bad practices in your code
- 🔧 **Auto Fix** — Provides a fully corrected version of your code with explanations
- 🌐 **Multi-Language Support** — Supports Python, JavaScript, Java, C++, and C
- ⚡ **Instant Results** — Powered by Groq's ultra-fast inference engine

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React, Monaco Editor, Axios, React Syntax Highlighter |
| Backend | FastAPI, Python, Uvicorn |
| AI Model | Groq API — Llama 3.3 70b |
| Styling | Inline CSS with VS Code dark theme |

---

## 📁 Project Structure

```
ai-code-reviewer/
│
├── backend/
│   ├── main.py            # FastAPI server — handles API routes
│   ├── reviewer.py        # Groq AI logic — sends code to AI and returns review
│   ├── requirement.txt    # Python dependencies
│   └── .env               # API key (not uploaded to GitHub)
│
├── frontend/
│   ├── public/
│   │   └── index.html     # Base HTML file
│   ├── src/
│   │   ├── components/
│   │   │   ├── CodeInput.jsx      # Monaco Editor + language selector + button
│   │   │   └── ReviewOutput.jsx   # Displays AI review with syntax highlighting
│   │   ├── App.jsx        # Main layout — connects all components
│   │   ├── api.js         # Axios API call to backend
│   │   └── index.js       # React entry point
│   └── package.json       # JavaScript dependencies
│
├── .gitignore
└── README.md
```

---

## 🚀 How to Run Locally

### Prerequisites
- Python 3.8+
- Node.js 16+
- A free Groq API key from [console.groq.com](https://console.groq.com)

---

### Step 1 — Clone the repository

```bash
git clone https://github.com/jonsnow273/code-reviewer.git
cd code-reviewer
```

---

### Step 2 — Setup Backend

```bash
cd backend
pip install -r requirement.txt
```

Create a `.env` file inside the `backend` folder:

```
GROQ_API_KEY=your-groq-api-key-here
```

Start the backend server:

```bash
uvicorn main:app --reload
```

Backend will run on `http://localhost:8000`

---

### Step 3 — Setup Frontend

Open a new terminal:

```bash
cd frontend
npm install
npm start
```

Frontend will run on `http://localhost:3000` and open automatically in your browser.

---

### Step 4 — Use the App

1. Select your programming language from the dropdown
2. Paste your code into the Monaco Editor
3. Click **"Review Code"**
4. View the AI's analysis on the right panel — bugs found, explanation, and fixed code

---

## 🔑 Environment Variables

| Variable | Description |
|----------|-------------|
| `GROQ_API_KEY` | Your free Groq API key from console.groq.com |

> ⚠️ Never share your API key or push it to GitHub. Always keep it in the `.env` file.

---

## 📸 How It Works

```
User pastes code in Monaco Editor
            ↓
Clicks "Review Code" button
            ↓
React sends code + language to FastAPI backend
            ↓
FastAPI calls Groq AI (Llama 3.3 70b)
            ↓
Groq returns bugs found + fixed code + explanation
            ↓
React displays the review with syntax highlighting
```

---

## 🌱 Future Improvements

- [ ] Deploy online (Vercel + Render)
- [ ] Add file upload support (.py, .js, .java)
- [ ] Save review history
- [ ] Add more languages (TypeScript, Rust, Go)
- [ ] Improve UI with Tailwind CSS
- [ ] Add copy button for fixed code

---

## 👨‍💻 Author

**Pranit** — [@jonsnow273](https://github.com/jonsnow273)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
