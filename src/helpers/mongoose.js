const mongoose = require("mongoose");
const connectionUrl = 'mongodb://mongoDbs:27017/docker?readPreference=primary&appname=MongoDB%20Compass&ssl=false';
// const connectionUrl = 'mongodb://localhost:27017/docker?readPreference=primary&appname=MongoDB%20Compass&ssl=false';

mongoose.connect(connectionUrl, { useUnifiedTopology: true }
);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Connected");
});
module.exports = db
