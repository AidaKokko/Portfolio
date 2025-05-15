const fs = require('fs');
const path = require('path');

// Create the directory if it doesn't exist
const previewDir = path.join(__dirname, '../public/images/project-previews');
if (!fs.existsSync(previewDir)) {
  fs.mkdirSync(previewDir, { recursive: true });
}

// List of placeholder images to create
const placeholders = [
  'wireframe-preview.jpg',
  'returning-buyer-preview.jpg',
  'new-buyer-preview.jpg',
  'operations-preview.jpg'
];

// Create a simple placeholder image for each project
placeholders.forEach(filename => {
  const filePath = path.join(previewDir, filename);
  if (!fs.existsSync(filePath)) {
    // Create a simple text file as a placeholder
    fs.writeFileSync(filePath, 'Placeholder image for ' + filename);
    console.log(`Created placeholder: ${filename}`);
  }
}); 