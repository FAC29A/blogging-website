// const server = require("./server");
// const PORT = process.env.PORT || 3000;

// server.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));

const server = require("./server");

server.listen(3000, () => console.log("Listening at http://localhost:3000"));
