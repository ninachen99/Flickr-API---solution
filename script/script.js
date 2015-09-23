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



//So for the photo class when we make an instance of it we need to pass in the photo object.


//You also want to make the photo class a seperate file


//And then you want your method in the class to have the html String*

//Your class will have a method that returns the html string


//You won't be passing the html string to the class


//Like you are right now

//You will pass the photo object from the photos array


//Then your class constructor will have an argument of photo


//But you will need to assign this.photo to equal the photo argument








