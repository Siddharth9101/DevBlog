# 📝 DevBlog – React Blog Website (React + Appwrite)

DevBlog is a fullstack blog web application built using **React** for the frontend and **Appwrite** for backend services. It allows users to register, log in, and create, edit, or delete blog posts, making it a perfect platform for sharing thoughts and ideas.

---

## 📱 Features

- 🔐 User Authentication (Sign Up / Sign In / Logout)
- ➕ Create and Publish Blog Posts
- 📝 Edit and Delete Own Posts
- 🌐 View All Published Blogs
- 🖼️ Image Upload via Appwrite Storage
- 🔎 Slug-based Blog URLs
- ⚙️ Rich Text Editor for blog content

---

## 🛠️ Tech Stack

- **Frontend:** React.js, React Router, Redux Toolkit
- **Backend:** Appwrite (Auth, Database, Storage)
- **Styling:** Tailwind CSS
- **Rich Text Editor:** TinyMCE

---

## 📸 Screenshots

<img width="1351" height="607" alt="Image" src="https://github.com/user-attachments/assets/9860032a-a1f8-4526-bb61-9decdb33c9b0" />
<img width="1347" height="601" alt="Image" src="https://github.com/user-attachments/assets/7cbbb371-4cac-4c96-b43e-40e41d7fdd85" />
<img width="1347" height="605" alt="Image" src="https://github.com/user-attachments/assets/a72d58ea-1064-4b26-8d10-8b72b77b5dfa" />
<img width="1351" height="606" alt="Image" src="https://github.com/user-attachments/assets/b57a2af9-3a30-4fdd-9e89-6deee86c66f8" />
<img width="1365" height="609" alt="Image" src="https://github.com/user-attachments/assets/a38d7db2-b499-40f7-bde4-7003ae06e364" />
<img width="1352" height="607" alt="Image" src="https://github.com/user-attachments/assets/8183efc2-712a-4155-88aa-8123f62f4550" />

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/Siddharth9101/devblog.git
cd devblog
```

### 2. Install dependencies

```bash
npm install
```

### 3.Configure Appwrite

- Set up an Appwrite instance or use Appwrite Cloud.
- Create a new project and note down the Project ID and API Endpoint.
- Create the following in your Appwrite project:
  - A Users Auth service
  - A Database collection for blog posts
  - A Storage Bucket for images
- Ensure proper permissions are set for each.

### 4. Create .env file

```bash
cp .env.sample .env
```

### 5. Start the development server

```bash
npm run dev
```

## 📄 License

This project is open-source and available under the MIT License.
