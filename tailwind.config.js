/** @type {import('tailwindcss').Config} */
module.exports = {
  // Habilita el modo oscuro basado en la preferencia del sistema o una clase
  darkMode: 'class', 
  
  content: [
    "./*.{html,js}", // Busca clases de Tailwind en todos los archivos HTML y JS
  ],
  theme: {
    extend: {
      // Aquí extendemos la paleta de colores por defecto
      colors: {
        'unl-blue': '#003366',
        'unl-yellow': '#FFD100',
      },
      // También puedes extender otras propiedades como las fuentes
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
