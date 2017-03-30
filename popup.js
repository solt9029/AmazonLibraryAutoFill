$(function(){
	$("#url").on("input",function(){
		$.ajax({
			type:"GET",
			url:"http://solt9029.sakura.ne.jp/WrapperAPI/amazon",
			data:{url:$("#url").val()},
			success:function(data){
				data=$.parseJSON(data);
				console.dir(data);
				var title=data.title;
				var publisher=data.publisher;
				var date=data.date;
				var isbn=data.isbn;
				var author=data.author;
				var price=data.price;
				chrome.tabs.query({active:true},function(tab){
				    chrome.tabs.sendMessage(
				    	tab[0].id,
				    	{
				    		title:title,
				    		publisher:publisher,
				    		isbn:isbn,
				    		date:date,
				    		author:author,
				    		price:price
				    	},
				    	function(response){}
				    );
				});
			}
		});
	});	
});