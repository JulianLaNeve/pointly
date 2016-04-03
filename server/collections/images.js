Images = new FS.Collection("images", {
  stores: [new FS.Store.FileSystem("images", {path: "../../public/pics"})]
});

Images.allow({
	'insert': function() {
		if (this.userId) {
			return true;
		} else {
			return false;
		}
	}
})