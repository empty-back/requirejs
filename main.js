var date=new Date();
require.config({
		baseUrl:'js',
		paths:{
			'jquery':'http://apps.bdimg.com/libs/jquery/1.11.3/jquery.min',
			'picZoom':'jquery.mlens-1.0.min'
		},
		map:{
			'*':{
				'css':'../bower_components/require-css/css.min'
			}
		},
		shim:{
			deps:['jquery'],
			'main':['css!../css/main'],
			'picZoom':['jquery']
		}
});
require(['jquery']);
require(['picZoom'],function(){
	//获取完成加载当前资源秒数
	console.log(date.getSeconds())
    $(".green_img").mlens({
        imgSrc: $(".green_img").attr("data-big"),   // path of the hi-res version of the image
        lensShape: "circle",                // shape of the lens (circle or square)
        lensSize: 180,                  // size of the lens (in px)
        borderSize: 4,                  // size of the lens border (in px)
        borderColor: "#fff",                // color of the lens border (#hex)
        borderRadius: 0                 // border radius (optional, only if the shape is square)
    });
});
require(['index'],function(shit){
	//获取完成加载当前资源秒数
	console.log(date.getSeconds())
	console.log(shit)
})
define('shit',['css!../css/common','css!../css/test'],function(){})
require(['shit'],function(){
	//获取完成加载当前资源秒数
	console.log(date.getSeconds())
	console.log("css加载完成");
})
require(['main'],function(){
	//获取完成加载当前资源秒数
	console.log(date.getSeconds())
	console.log("main");
})
require(['css!../css/font-awesome.min','jquery'],function(){
	//获取完成加载当前资源秒数
	console.log(date.getSeconds())
	$("body").append('<i class="fa fa-spinner fa-pulse fa-5x pull-left"></i>');
	setTimeout(function(){
		//模拟加载完成消失
		$("i").remove();
	},3000)
})
