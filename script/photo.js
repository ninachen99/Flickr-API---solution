	// create an photo object

    var photos = new Photo({
        title: "photos[i].title";
        url: "photos[i].url_m";
        description: "photos[i].description";
        datetaken: "photos[i].datetaken";
        ownername: "photos[i].ownername";
    });

// Photo class

    function Photo (photo) {
        this.photo = photo;
    }

     Photo.prototype.getHTML() = function () {
        return this.photo.getHTML();
     }

     for (var i = 0; i < photos.length; i++) {
         var photos = new Photo(photos[i]);
     }

     $('.gallery').append(photo.getHTML());	
}






 