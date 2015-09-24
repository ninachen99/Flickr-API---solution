function jsonFlickrApi (data) {

		var photos = data.photos.photo;
		
		for (var i = 0; i < photos.length; i++) {
			    var photo = new Photo(photos[i]);
			    $('.gallery').append(photo.getHTML());  
			    
      }

}
       



