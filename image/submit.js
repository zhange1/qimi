$("#submit").click(function(){
  	 name=$("#name").val();
	 phone=$("#phone").val();
	 title=$("#title").val();
	 content=$("#content").val();
	 if(name && title && content){
               $.ajax({
			        type:"post",
					url:'/Article/adduser',
					data:{"name":name,"phone":phone,"title":title,"content":content},
					success:function(e){
						if(e==1){
							alert('你已经提交过了');
						}else{
							alert('提交成功');
						}  
					}
			   });
	 }else{
		 alert('填写完整数据');
	 }
});