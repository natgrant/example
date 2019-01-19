const server = require("./server");
var port = process.env.PORT || 3000;

server.listen(port, function() {
  console.log("Server is listening on port", port);
});
