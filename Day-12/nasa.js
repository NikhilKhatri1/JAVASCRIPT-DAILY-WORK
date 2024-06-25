function bodyLoad() {
    fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY&quot;")
        .then(function (response) {
            return response.json();

        })
        .then(function (marsObj) {
            marsObj.photos.map(function (photo) {
                var div = document.createElement("div");
                div.className = "card m-2 p-2";
                div.style.width = "200px";
                div.innerHTML = `<a href=${photo.img_src} target="_blank"> <img class="card-img-top" height="140" src=${photo.img_src}></a>
                    <div class = "card-header">
                        <h3>${photo.id}</h3>
                    </div>
                    <div class="card-body>
                        <dl>
                            <dt>Camera</dt>
                            <dd>${photo.camera.full_name}</dd>
                            <dt>Rover</dt>
                            <dd>${photo.rover.name}</dd>
                        </dl>             
                `;
                document.querySelector("main").appendChild(div  );

            })
        })

}