import React from 'react'
import '../styles/Gallery.css'
function Gallery() {
 return (
    <section class = "Gal">
        <h2>Gallery</h2>
            <ul>
                <li><img width={200} src="assets\environmental.jpg"></img></li>
                <li><img width={200} src="assets\environmental.jpg"></img></li>
                <li><img width={200} src="assets\environmental.jpg"></img></li>
            </ul>
        
    </section>
  )
}

export default Gallery