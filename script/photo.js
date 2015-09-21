function jsonFlickrApi (data) {
	// create an photo object
        var photo = new Photo({
        	title: "'<h2>' + photo.title + '</h2>'"; 
        	description: "'<p>' + 
                        photo.description._content +
                    '</p>'";
        	link: "'<div class="photo">' +
                        '<a href="' + photo.url_l + '">' +
                            '<img src="' + photos[i].url_m + '">' + 
                        '</a>' +
                    '</div>'";
        	datetaken: "'<span>' + photo.datetaken + '</span>'";
        	ownername: "'<span>' + 
                        '<a href="http://flickr.com/' + photo.pathalias + '">' +
                            photos[i].ownername +
                        '</span>'";

        });

    // create a photo class


    	function Photo (photo) {
        		this.photo = photo;
        	}
            
            Photo.prototype.getHTML = function () {
            	return this.photo.HTML;
            }

            for (var i=0; i < Photo.length; i++) {
            	var photo = new Photo(photos[i]);
            	$('.gallery').append('<li>' + photo.getHTML() + '</li>');
        }

}






 