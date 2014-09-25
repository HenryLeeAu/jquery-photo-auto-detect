$(document).ready(function(){
	var pop_up=$("#pop_up");
	var s_pic=$("#pic_list").find("li");
	len=s_pic.length;
	var imgArr=[];
	var index;
	for(var i =0; i<len; i++){
		imgArr[i]=s_pic.find("img").eq(i).attr('src');
	}
	s_pic.hover(function(){
		$(this).css({"border":"3px solid #ff7700"});
		

	},function(){
		$(this).css({"border":"3px solid #ffffff"});
	});
	s_pic.click(function(){
		pop_up.fadeIn();
		index = s_pic.index(this);
		$("#target").find("img").attr("src",imgArr[index]);
	});
	$('#pop_up').click(function(event) {
		if($(event.target).attr('id')=="pop_up"){
		$(this).fadeOut();
		}
	});
	$("#left").click(function(){
		index--;
		if(index<0){
			index=0;
			alert("this is fist photo" +index);
		}

		$("#target").find("img").attr("src",imgArr[index]);
	});
	$("#right").click(function(){
		index++;
		if(index>imgArr.length-1){
			index=imgArr.length-1;
			alert("this is last photo" +index);
		}
		$("#target").find("img").attr("src",imgArr[index]);
	});
})