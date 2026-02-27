# Webevan - Evan Lancry's Portfolio

Welcome to the source code of my personal website!

This website serves as a gallery for my projects.


## 🙊 Quick Note on Languages 
While the front-facing website is available in English (and French) and this README is written in English, **the vast majority of the comments within the source code are written in French**. 


## 🛠️ Featured Projects
Here are some of the projects showcased on the site:

* **Youtube Jukebox:** A web tool to save and sort your favorite YouTube music playlists by tags, length, or channel.
* **Vraille:** A custom phonetic alphabet (a mix between Braille and Trunic) complete with a text editor built in C using SDL3.
* **Schoolfish:** A fish simulation.
* **Art & Minecraft:** Sections dedicated to some of my creations and gaming.


## 💻 What I used for this website
This portfolio is built with :
* **React** (UI Library)
* **Vite** (Build Tool)
* **Bootstrap** (CSS Framework)


## 🚀 Running Locally
If you want to run this project on your own machine, follow these steps:

1. Clone the repository.

2. Install the dependencies:
 ```
   npm install
```
3. Start the development server:
```
    npm run dev
```


## 🐕 Update website (for me mostly)

### Update infos

To change stacks or language in the about section, refer to 
```
src/data/data_stack_logos.jsx
```

Photoshop files to make new backgrounds and icons are available in :
```
public/file/photoshop
```

To transform backgounds.png into .webp files, use :
```
https://squoosh.app
```

### Add a new project to the website

Here are the steps to add a new project to the website:

1. Create three theme colors for the section in:
```
src/App.css
```

2. Create a background image and save it as: 
```
public/backgrounds/bg_PROJECT_ID.webp
```

3. Create an icon and save it as:
```
public/icons/icon_PROJECT_ID.png
```

4. Add the project pictures to:
```
public/pictures/
```

5. If necessary, add related files (like PDFs) to:
```
public/files/
```

6. Add the new links (to files or websites) in:
```
src/data/data_links.jsx
```

7. Update the `navItems` array in:
```
src/components/header_items/NavigationGrid.jsx
```

8. To adapt to the new navigation grid layout, you can change some parameters in :
```
AllSection.css and NavigationGrid.css
```

9. Add the project content in:
```
src/data/data_sections_en.jsx
```

10. Add the translated French content in:
```
src/data/data_sections_fr.jsx
```

11. Change version in package.json before upload !


#

© 2026 Evan Lancry. Source code available on GitHub.
All rights reserved for original assets and creations.