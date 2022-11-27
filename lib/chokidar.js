var err;
try {
	module.exports = require("chokidar");
	return;
} catch(e) {
	err = e;
}

throw new Error(
	"No version of chokidar is available.\n" +
	"You could try to manually install any chokidar version.\n" +
	"chokidar: " + err + "\n"
)
