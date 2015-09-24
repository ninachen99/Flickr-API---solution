	// create an photo object


    function Photo (photo) {
        this.photo = photo;
    }

     Photo.prototype.getHTML = function () {
        return '<li class="gallery-item">' +
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

        }







 