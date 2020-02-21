$("ul").on("click", "li", function(){
	$(this).toggleClass("strikeThrough")
});
$("ul").on("click", ".delete", function(event){
	$(this).parent().fadeOut(300, function(){
		$(this).remove();
	})
	event.stopPropagation();
})
$("input[type='text']").keypress(function(key){
	if(key.which===13)
	{
		var text = $(this).val();
		$(this).val("");
		$("ul").append("<li><span class = 'delete'><i class = 'fa fa-trash'></i></span> "+text+"</li>");
	}
})
$("#display").on("click", function(){
	$("input").fadeToggle();
})