function jsonFlickrApi (data) {

	var photos = data.photos.photo;
	
	for (var i = 0; i < photos.length; i++) {
	      var photo = new photo;
	      $('.gallery').append(photo.getHTML();
  }
       



		/*$('.gallery').append(
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
}  */   

