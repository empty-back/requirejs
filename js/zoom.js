define(['zoom'],function(){
	$(document).ready(function () {
        $(".green_img").mlens({
                imgSrc: $(".green_img").attr("data-big"),   // path of the hi-res version of the image
                lensShape: "circle",                // shape of the lens (circle or square)
                lensSize: 180,                  // size of the lens (in px)
                borderSize: 4,                  // size of the lens border (in px)
                borderColor: "#fff",                // color of the lens border (#hex)
                borderRadius: 0                 // border radius (optional, only if the shape is square)
        });
    });
})