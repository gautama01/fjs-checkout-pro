const fs = require('fs');
const path = require('path');

const projectPath = 'fjs-checkout-pro'; // Cambia esto según la ruta de tu proyecto

// Estructura de carpetas y archivos
const structure = {
  components: [
    'FreeGift.js',
    'Checkout.js',
    'Banners.js',
    'Notes.js',
    'Comments.js',
    'UpsellCrossSell.js',
    'UpgradeToSubscription.js',
    'Insurance.js',
    'ProductLimits.js',
    'HideShippingMethods.js',
    'DiscountsApp.js',
    'ReportsApp.js',
    'Bundles.js',
    'ActivityLogs.js',
    'StockTracking.js',
  ],
  features: [
    'FJSCheckoutPRO.js',
  ],
  readme: 'README.md',
};

// Función para crear carpetas y archivos
function createDirectoriesAndFiles(basePath, structure) {
  // Crear directorio principal si no existe
  if (!fs.existsSync(basePath)) {
    fs.mkdirSync(basePath);
  }

  Object.entries(structure).forEach(([key, value]) => {
    const dirPath = path.join(basePath, key);

    // Crear directorio si no existe
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath);
    }

    // Crear archivos en el directorio
    if (Array.isArray(value)) {
      value.forEach(file => {
        const filePath = path.join(dirPath, file);
        fs.writeFileSync(filePath, '// Contenido del archivo\n');
      });
    } else if (typeof value === 'string') {
      const filePath = path.join(basePath, value);
      fs.writeFileSync(filePath, '# Contenido del archivo\n');
    }
  });
}

// Crear la estructura de carpetas y archivos
createDirectoriesAndFiles(projectPath, structure);

console.log('Estructura creada con éxito.');
