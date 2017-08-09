$(function(){
	$("#url").on("input",function(){
		$.ajax({
			type:"GET",
			url:"http://wrapperapi.solt9029.com/amazon",
			data:{url:$("#url").val()},
			success:function(data){
				data=$.parseJSON(data);
				console.dir(data);

				$.ajax({
     				type:"GET",
     				url:"http://solt9029.sakura.ne.jp/WrapperAPI/meiji/library/book_state",
     				data:{
      					isbn:data.isbn,
      					campus:"nakano"
     				},
     				success:function(data){
      					if(data!=="所蔵無し"){
       						alert("この本は中野図書館に所蔵されています。");
      					}
     				}
    			});

				chrome.tabs.query({active:true},function(tab){
				    chrome.tabs.sendMessage(
				    	tab[0].id,
				    	{
				    		title:data.title,
				    		publisher:data.publisher,
				    		isbn:data.isbn,
				    		date:data.date,
				    		author:data.author,
				    		price:data.price
				    	},
				    	function(response){}
				    );
				});
			}
		});
	});	
});

//所蔵無しかどうか調べる check whether the university library has the book or not
    /*$.ajax({
     type:"GET",
     url:"http://solt9029.sakura.ne.jp/WrapperAPI/meiji/library/book_state",
     data:{
      isbn:data.isbn,
      campus:"nakano"
     },
     success:function(data){
      if(data==="" || data==="貸出中"){
       alert("この本は中野図書館に所蔵されています。");
      }
     }
    });*/