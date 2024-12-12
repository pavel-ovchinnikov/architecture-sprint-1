module.exports = {
    name: "photo",
    filename: "Main.js",
    exposes: {
        './photo': './components',
    },
    shared: ["react", "react-dom"]
}; 
