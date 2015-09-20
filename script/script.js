function jsonFlickrApi (data) {

	var photos = data.photos.photo;

	for (var i = 0; i < photos.length; i++) {
		$('.gallery').append(
			'<li class="gallery-item">' +
				'<h2>' + photos[i].title + '</h2>' +
				'<div class="photo">' +
					'<a href="' + photos[i].url_l + '">' +
						'<img src="' + photos[i].url_m + '">' + 
					'</a>' +
				'</div>' +
				'<p>' + 
					photos[i].description._content +
				'</p>' + 
				'<div class="meta">' +
					'<span>' + photos[i].datetaken + '</span>' +
					'<span>' + 
						'<a href="http://flickr.com/' + photos[i].pathalias + '">' +
							photos[i].ownername +
						'</span>' +
				'</div>' +
			'</li>'
		);
	}
}

// HOMEWORK
//
// 01. Style CSS. Add additional classes if needed.
// This needs look like a designer built it.

// 02. Create a "Photo" class with a "getHTML" method which
// will return a giant string (hint: the one above);
// this class will be a seperate js file in js folder named 'photo.js'
//
// var photo = new Photo({ title: '...' });
// $('.gallery').append(photo.getHTML());
//
// a. Photo constructor will take an object of the photo
//    remember this.student in exercise 8?