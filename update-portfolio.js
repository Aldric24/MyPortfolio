const fs = require('fs');
const path = require('path');

const projectsDir = path.join(__dirname, 'assets', 'projects');
const outputFile = path.join(__dirname, 'project-images.js');

const projectImages = {};

// Get all directories in assets/projects
if (fs.existsSync(projectsDir)) {
  const folders = fs.readdirSync(projectsDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  for (const folder of folders) {
    const folderPath = path.join(projectsDir, folder);
    const files = fs.readdirSync(folderPath);
    
    // Filter for image files
    const images = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.png', '.jpg', '.jpeg', '.gif', '.webp'].includes(ext);
    });
    
    projectImages[folder] = images;
  }
}

const jsContent = `// AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
// Run 'node update-portfolio.js' to update this file with new images
window.PROJECT_IMAGES = ${JSON.stringify(projectImages, null, 2)};
`;

fs.writeFileSync(outputFile, jsContent);
console.log('Successfully updated project-images.js!');
