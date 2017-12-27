$eleBtn2.click(function(){
            var $eleForm = $("<form method='get'></form>");

            $eleForm.attr("action","https://codeload.github.com/douban/douban-client/legacy.zip/master");

            $(document.body).append($eleForm);

            //提交表单，实现下载
            $eleForm.submit();
        });