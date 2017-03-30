$(function(){
    chrome.runtime.onMessage.addListener(function(msg,sender,sendResponse){
    	$("input[name=bibtr]").val(msg.title);
    	$("input[name=bibpb]").val(msg.publisher);
    	$("input[name=isbn]").val(msg.isbn);
    	$("input[name=bibyr]").val(msg.date);
    	$("input[name=auth]").val(msg.author);
    	$("input[name=bibpr]").val(msg.price);
        $("select[name=odrar]").val("MN");//中野に設定
        var reasons=["授業で行われた内容に関連があり、もっと深く学び、研究などに生かしたいと感じたからです。","先生にお薦めされ、教養を身につけたいからです。","自分の専門分野と密接に関りがあるからです。"];
    	$("input[name=user2]").val(reasons[Math.floor(Math.random()*reasons.length)]);
	});
});