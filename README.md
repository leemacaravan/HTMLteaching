# "HTML Teaching Project"
  description: "This project is designed to teach students how to build a simple website using HTML, CSS, and JavaScript. It includes a login page, a sign-up page, and navigation between multiple pages."

structure:
  - HTMLteaching-main/
  - index.html: "Home Page"
  - about.html: "About Page"
  - login.html: "Login Page"
  - signup.html: "Sign-Up Page"
  - style.css: "Styling for the website"
  - script.js: "JavaScript functionality"
  - images/: "Folder for images"
  - README.yaml: "Project documentation"

setup:
  steps:
    - step: "Open the Project Folder"
      command: "cd ~/Desktop/HTMLteaching-main"
    
    - step: "Open the Website in a Browser"
      macOS: "open index.html"
      Linux: "xdg-open index.html  # If not found, install with: sudo apt install xdg-utils"
      Windows_CMD: "start index.html"
      Windows_GitBash: "explorer.exe index.html"

optional:
  python_script:
    description: "If you have a Python script in your project, you can run it using:"
    macOS_Linux: "python3 interview.py"
    Windows: "python interview.py"

how_it_works:
  navigation_bar:
    description: "Links to index.html, about.html, login.html, and signup.html."

  signup_page:
    description: "Users enter their username and password, data is saved in localStorage, and they are redirected to the Login page."

  login_page:
    description: "Users enter their stored username & password. If credentials match, they are redirected to the About page. If credentials don’t match, an error message appears."

  home_page:
    description: "Displays beauty product recommendations."

customization:
  - step: "Edit style.css to change the design."
  - step: "Modify index.html to add more products."
  - step: "Enhance script.js to improve login security."

troubleshooting:
  - issue: "Command not found"
    solution: "Use the correct command for your OS (see setup section)."
    
  - issue: "Website does not update after editing"
    solution: "Refresh the page (Cmd + R or Ctrl + R) or clear cache (Shift + Reload in Chrome)."

contributors:
  author: "Leema Caravan"
  description: "Created by Leema Caravan and students learning HTML & JavaScript 🚀"
