$(window).on("load",function(){
	drop();
});
function drop(){
	$('body').on("click",".drop--btn",function(e){
		$(`.drop--list[data-drop-id="${$(this).data("drop-id")}"]`).toggle();
	});
}