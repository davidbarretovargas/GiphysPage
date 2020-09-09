var allGifs = [];
class Gif {
	constructor(image, preview, id, title, username) {
		this.id = id;
		this.image = image;
		this.preview = preview;
		this.title = title;
		this.username = username;
		this.favorite = false;
	}
	addGifs() {
		allGifs.push(this);
	}
	removeFavorite() {
		this.favorite = false;
	}
	addFavorite() {
		this.favorite = true;
	}
}