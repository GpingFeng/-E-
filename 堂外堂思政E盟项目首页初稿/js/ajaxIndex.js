

// $(function(){
//   $.ajax({
//     url: '',
//     type:"get",
//     data:{ 'text':'lesson','date':'lessonDate'},
//     datatype:"json",
//     success:succFunction,
//     error:erryFunction
//   })
// })

//轮播部分
function playFun(result) { 
            var playLi = $("#play ul li#playShow a");
            playLi.html('');  

            var json = {"data":[
                        {"playImg":"../images/ad-pic1.png","playTitle":"sdf1","playImgurl":"https://www.baidu.com/"},
                        {"playImg":"../images/ad-pic2.png","playTitle":"sdf2","playImgurl":"https://www.baidu.com/"},
                        {"playImg":"../images/ad-pic3.png","playTitle":"sdf3","playImgurl":"https://www.baidu.com/"},
                        {"playImg":"../images/ad-pic4.png","playTitle":"sdf4","playImgurl":"https://www.baidu.com/"}]};
             $.each(json.data, function(index,obj){  
                 //循环获取数据   
                 var nText =  $("<img>");
                 var playImg = obj.playImg;  
                 var playTitle = obj.playTitle;
                 var playImgurl = obj.playImgurl;
 
                 nText.attr("src",playImg);
                nText.attr("alt",playTitle);
                playLi.eq(index).append(nText);
                playLi.eq(index).attr("href",playImgurl);
        });  
    }  
    playFun();

// 最新资料
function newsFun() {  
            var newsLi = $(".news-show .news-content ul li a");
            newsLi.html('');  

            var json ={"data":[{"newsTitleText":"123","newsTitleDate":"aaa","newsHref":"https://www.baidu.com/"},
                        {"newsTitleText":"我省在第六届全国高校辅导员职业能力我省在第六届全国高校辅导","newsTitleDate":"daa","newsHref":"https://www.baidu.com/"},
                        {"newsTitleText":"gde3","newsTitleDate":"2017-4-19","newsHref":"https://www.baidu.com/"},
                        {"newsTitleText":"gde3","newsTitleDate":"sdf","newsHref":"https://www.baidu.com/"},
                        {"newsTitleText":"gde3","newsTitleDate":"sdf","newsHref":"https://www.baidu.com/"},
                        {"newsTitleText":"gde3","newsTitleDate":"sdf","newsHref":"https://www.baidu.com/"},
                        {"newsTitleText":"gde3","newsTitleDate":"sdf","newsHref":"https://www.baidu.com/"},
                        {"newsTitleText":"gde3","newsTitleDate":"sdf","newsHref":"https://www.baidu.com/"}]};
             $.each(json.data, function(index,obj){  
                 //循环获取数据   
                 var nText =  $("<span class='text'></span>");
                 var nDate =  $("<span class='date'></span>");
                 var newsTitleText = obj.newsTitleText;  
                 var newsTitleDate = obj.newsTitleDate;
                 var newsHref = obj.newsHref;
                    // alert(newsHref);
                 nText.text(newsTitleText);
                 nDate.text(newsTitleDate);
                 // newsLi.attr("href","url");
                newsLi.eq(index).attr("href",newsHref);
                newsLi.eq(index).append(nText);
                newsLi.eq(index).append(nDate); 
               
        });  
    }  


        newsFun();
// 名师新秀
function teacherFun() {  
            var teaLi = $("#teacher-show .teacher-content ul li a");
            teaLi.html('');  

            var json = {"data":[
                        {"teaImg":"../images/ad-pic1.png","teaTitle":"sdf1","teaImgurl":"https://www.baidu.com/"},
                        {"teaImg":"../images/ad-pic2.png","teaTitle":"sdf2","teaImgurl":"https://www.baidu.com/"},
                        {"teaImg":"../images/ad-pic3.png","teaTitle":"sdf3","teaImgurl":"https://www.baidu.com/"},
                        {"teaImg":"../images/ad-pic4.png","teaTitle":"sdf4","teaImgurl":"https://www.baidu.com/"}]};
             $.each(json.data, function(index,obj){  
                 //循环获取数据   
                var nTea =  $("<img class='img-tea'>");
                var teaSpan = $("<span class='tea-intro'></span>");

                var teaImg = obj.teaImg;  
                var teaTitle = obj.teaTitle;
                var teaImgurl = obj.teaImgurl;

                nTea.attr("src",teaImg);
                teaSpan.html(teaTitle);
                teaLi.attr("href",teaImgurl);
                teaLi.eq(index).append(nTea);
                teaLi.eq(index).append(teaSpan);
        });  
    } 

    teacherFun();

// 思政动态
function dynamicFun() {  
            var dynLi = $(".dynamic-show .dynamic-content ul li a");
            dynLi.html('');  

            var json = {"data":[{"dynTitleText":"123","dynTitleDate":"aaa","dynTitleurl":"https://www.baidu.com/"},
                        {"dynTitleText":"我省在第六届全国高校辅导员职业能力我省在第六届全国高校辅导","dynTitleDate":"2017-4-19","dynTitleurl":"https://www.baidu.com/"},
                        {"dynTitleText":"gde3","dynTitleDate":"2017-4-19","dynTitleurl":"https://www.baidu.com/"},
                        {"dynTitleText":"gde3","dynTitleDate":"sdf","dynTitleurl":"https://www.baidu.com/"},
                        {"dynTitleText":"gde3","dynTitleDate":"sdf","dynTitleurl":"https://www.baidu.com/"},
                        {"dynTitleText":"gde3","dynTitleDate":"sdf","dynTitleurl":"https://www.baidu.com/"},
                        {"dynTitleText":"gde3","dynTitleDate":"sdf","dynTitleurl":"https://www.baidu.com/"},
                        {"dynTitleText":"gde3","dynTitleDate":"sdf","dynTitleurl":"https://www.baidu.com/"},
                        {"dynTitleText":"我省在第六届全国高校辅导员职业能力我省在第六届全国高校辅导","dynTitleDate":"2017-4-19","dynTitleurl":"https://www.baidu.com/"},
                        {"dynTitleText":"我省在第六届全国高校辅导员职业能力我省在第六届全国高校辅导","dynTitleDate":"2017-4-19","dynTitleurl":"https://www.baidu.com/"},
                        {"dynTitleText":"我省在第六届全国高校辅导员职业能力我省在第六届全国高校辅导","dynTitleDate":"2017-4-19","dynTitleurl":"https://www.baidu.com/"},
                        {"dynTitleText":"我省在第六届全国高校辅导员职业能力我省在第六届全国高校辅导","dynTitleDate":"2017-4-19","dynTitleurl":"https://www.baidu.com/"}]};
             $.each(json.data, function(index,obj){  
                 //循环获取数据   
                 var nText =  $("<span class='text'></span>");
                 var nDate =  $("<span class='date'></span>");
                 var dynTitleText = obj.dynTitleText;  
                 var dynTitleDate = obj.dynTitleDate;
                 var dynTitleurl = obj.dynTitleurl;

                 nText.text(dynTitleText);
                 nDate.text(dynTitleDate);
                dynLi.eq(index).append(nText);
                dynLi.eq(index).append(nDate);   
                dynLi.eq(index).attr("href",dynTitleurl);   
        });  
    } 

    dynamicFun();

// 马院头条
function headlineFun() {  
            var headLi = $(".headline .headline-content ul li a");
            headLi.html('');  

            var json = {"data":[{"headTitleText":"123","headTitleDate":"aaa","headTitleurl":"https://www.baidu.com/"},
                        {"headTitleText":"我省在第六届全国高校辅导员职业能力我省在第六届全国高校辅导","headTitleDate":"2017-4-19","headTitleurl":"https://www.baidu.com/"},
                        {"headTitleText":"gde3","headTitleDate":"2017-4-19","headTitleurl":"https://www.baidu.com/"},
                        {"headTitleText":"gde3","headTitleDate":"sdf","headTitleurl":"https://www.baidu.com/"},
                        {"headTitleText":"gde3","headTitleDate":"sdf","headTitleurl":"https://www.baidu.com/"},
                        {"headTitleText":"gde3","headTitleDate":"sdf","headTitleurl":"https://www.baidu.com/"},
                        {"headTitleText":"gde3","headTitleDate":"sdf","headTitleurl":"https://www.baidu.com/"},
                        {"headTitleText":"gde3","headTitleDate":"sdf","headTitleurl":"https://www.baidu.com/"},
                        {"headTitleText":"我省在第六届全国高校辅导员职业能力我省在第六届全国高校辅导","headTitleDate":"2017-4-19","headTitleurl":"https://www.baidu.com/"},
                        {"headTitleText":"我省在第六届全国高校辅导员职业能力我省在第六届全国高校辅导","headTitleDate":"2017-4-19","headTitleurl":"https://www.baidu.com/"},
                        {"headTitleText":"我省在第六届全国高校辅导员职业能力我省在第六届全国高校辅导","headTitleDate":"2017-4-19","headTitleurl":"https://www.baidu.com/"},
                        {"headTitleText":"我省在第六届全国高校辅导员职业能力我省在第六届全国高校辅导","headTitleDate":"2017-4-19","headTitleurl":"https://www.baidu.com/"}]};
             $.each(json.data, function(index,obj){  
                 //循环获取数据   
                 var nText =  $("<span class='text'></span>");
                 var nDate =  $("<span class='date'></span>");
                 var headTitleText = obj.headTitleText;  
                 var headTitleDate = obj.headTitleDate;
                 var headTitleurl =obj.headTitleurl;
                 nText.text(headTitleText);
                 nDate.text(headTitleDate);
                headLi.eq(index).append(nText);
                headLi.eq(index).append(nDate); 
                headLi.eq(index).attr("href",headTitleurl);        
        });   
    } 

     headlineFun(); 

//猜你喜欢
function interestFun() {   
            var interLi = $(".inter-container ul li a");
            interLi.html('');  

            var json = {"data":[
                        {"adImg":"../images/ad-pic1.png","adTitle":"sdf1","adImgurl":"https://www.baidu.com/"},
                        {"adImg":"../images/ad-pic2.png","adTitle":"sdf2","adImgurl":"https://www.baidu.com/"},
                        {"adImg":"../images/ad-pic3.png","adTitle":"sdf3","adImgurl":"https://www.baidu.com/"},
                        {"adImg":"../images/ad-pic4.png","adTitle":"sdf4","adImgurl":"https://www.baidu.com/"}]};
             $.each(json.data, function(index,obj){  
                 //循环获取数据   
                var adCon =  $("<img class='ad-img'>");
                var adSpan = $("<div class='ad-text'><span></span></div>");

                var adImg = obj.adImg;  
                var adTitle = obj.adTitle;
                var adImgurl = obj.adImgurl;

                adCon.attr("src",adImg);
                adSpan.html(adTitle);
                interLi.attr("href",adImgurl);
                interLi.eq(index).append(adCon);
                interLi.eq(index).append(adSpan);
        });  
    } 

    interestFun();

//我有话说
//热帖榜
function expressFun() {  
            var expressLi = $(".express .common-content .content-one .content-one ol a li");
            expressLi.html('');  

            var json = {"data":[{"expressTitletext":"123","expressTitlename":"Gping","expressTitleDate":"aaa","expressTitleurl":"https://www.baidu.com/"},
                        {"expressTitletext":"我省在第六届全国高校辅导员职业能力我省在第六届全国高校辅导","expressTitlename":"Gping","expressTitleDate":"2017-4-19","expressTitleurl":"https://www.baidu.com/"},
                        {"expressTitletext":"gde3","expressTitlename":"Gping","expressTitleDate":"2017-4-19","expressTitleurl":"https://www.baidu.com/"},
                        {"expressTitletext":"gde3","expressTitlename":"Gping","expressTitleDate":"sdf","expressTitleurl":"https://www.baidu.com/"},
                        {"expressTitletext":"gde3","expressTitlename":"Gping","expressTitleDate":"sdf","expressTitleurl":"https://www.baidu.com/"},
                        {"expressTitletext":"gde3","expressTitlename":"Gping","expressTitleDate":"sdf","expressTitleurl":"https://www.baidu.com/"},
                        {"expressTitletext":"gde3","expressTitlename":"Gping","expressTitleDate":"sdf","expressTitleurl":"https://www.baidu.com/"},
                        {"expressTitletext":"gde3","expressTitlename":"Gping","expressTitleDate":"sdf","expressTitleurl":"https://www.baidu.com/"},
                        {"expressTitletext":"我省在第六届全国高校辅导员职业能力我省在第六届全国高校辅导","expressTitlename":"Gping","expressTitleDate":"2017-4-19","expressTitleurl":"https://www.baidu.com/"},
                        {"expressTitletext":"我省在第六届全国高校辅导员职业能力我省在第六届全国高校辅导","expressTitlename":"Gping","expressTitleDate":"2017-4-19","expressTitleurl":"https://www.baidu.com/"},
                        {"expressTitletext":"我省在第六届全国高校辅导员职业能力我省在第六届全国高校辅导","expressTitlename":"Gping","expressTitleDate":"2017-4-19","expressTitleurl":"https://www.baidu.com/"},
                        {"expressTitletext":"我省在第六届全国高校辅导员职业能力我省在第六届全国高校辅导","expressTitlename":"Gping","expressTitleDate":"2017-4-19","expressTitleurl":"https://www.baidu.com/"}]};
             $.each(json.data, function(index,obj){  
                 //循环获取数据   
                 var nText =  $("<span class='text'></span>");
                 var nDate =  $("<span class='date'></span>");
                 var nName =  $("<span class='name'></span>");
                 var userLogo = $("<span class='glyphicon glyphicon-user'></span>");

                 var expressTitletext = obj.expressTitletext;  
                 var expressTitleDate = obj.expressTitleDate;
                 var expressTitlename = obj.expressTitlename;
                 var expressTitleurl =obj.expressTitleurl;

                 nText.text(expressTitletext);
                 nDate.text(expressTitleDate);
                 nName.text(expressTitlename);
                expressLi.eq(index).append(nText);
                expressLi.eq(index).append(nDate); 
                expressLi.eq(index).append(nName); 
                expressLi.eq(index).append(userLogo ); 
                expressLi.parent().eq(index).attr("href",expressTitleurl);        
        });   
    } 
     expressFun(); 
//实时更新
function expressFun1() {  
            var expressLi = $(".express .common-content .content-two  ol a li");
            expressLi.html('');  

            var json = {"data":[
                        {"expressImg":"../images/ad-pic1.png","expresstext":"sfdggsdfsfgss","expressTitle":"123","expressTitlename1":"Gping","expressTitleDate1":"aaa","expressTitleurl1":"https://www.baidu.com/"},
                        {"expressImg":"../images/ad-pic1.png","expresstext":"sfdggsdfsfgss","expressTitle":"我省在第六届全国高校辅导员职业能力我省在第六届全国高校辅导","expressTitlename1":"Gping","expressTitleDate1":"2017-4-19","expressTitleurl1":"https://www.baidu.com/"}
                       ]};
             $.each(json.data, function(index,obj){  
                 //循环获取数据  
                 var nTitle = $("<span class='title'>&nbsp;</span><br>") 
                 var nText =  $("<span class='text'></span>");
                 var nDate =  $("<span class='date'></span>");
                 var nName =  $("<span class='name'></span>");
                 var userLogo = $("<span class='glyphicon glyphicon-user'></span><br>");
                 var expreImg = $("<img>")

                 var expressTitle = obj.expressTitle;
                 var expresstext = obj.expresstext;  
                 var expressTitleDate1 = obj.expressTitleDate1;
                 var expressTitlename1 = obj.expressTitlename1;
                 var expressTitleurl1 =obj.expressTitleurl1;
                 var expressImg = obj.expressImg;
                 expreImg.attr("src",expressImg);

                 nTitle.text(expressTitle);
                 nText.text(expresstext);
                 nDate.text(expressTitleDate1);
                 nName.text(expressTitlename1);

                expressLi.eq(index).append(nTitle);
                expressLi.eq(index).append(nDate); 
                expressLi.eq(index).append(nName); 
                expressLi.eq(index).append(nText);
                expressLi.eq(index).append(userLogo); 
                expressLi.eq(index).append(expreImg); 
                expressLi.parent().eq(index).attr("href",expressTitleurl1);        
        });   
    } 
     expressFun1(); 
// 会议论坛
function conferFun() {  
            var conferLi = $(".conference .saying-content ul li a");
            conferLi.html('');  

            var json = {"data":[{"conTitleText":"123"},
                        {"conTitleText":"我省在第六届全国高校辅导员职业能力我省在第六届全国高校辅导","conTitleurl":"https://www.baidu.com/"},
            
                        {"conTitleText":"我省在第六届全国高校辅导员职业能力我省在第六届全国高校辅导","conTitleurl":"https://www.baidu.com/"},
                        {"conTitleText":"我省在第六届全国高校辅导员职业能力我省在第六届全国高校辅导","conTitleurl":"https://www.baidu.com/"},
                        {"conTitleText":"我省在第六届全国高校辅导员职业能力我省在第六届全国高校辅导","conTitleurl":"https://www.baidu.com/"},
                        {"conTitleText":"我省在第六届全国高校辅导员职业能力我省在第六届全国高校辅导","conTitleurl":"https://www.baidu.com/"}]};
             $.each(json.data, function(index,obj){  
                 //循环获取数据   
                 var nText =  $("<span class='text'></span>");
                 var nDate =  $("<span class='date'></span>");
                 var conTitleText = obj.conTitleText;  
                 var conTitleDate = obj.conTitleDate;
                 var conTitleurl = obj.conTitleurl;
                 nText.text(conTitleText);
                 nDate.text(conTitleDate);
                conferLi.eq(index).append(nText);
                conferLi.eq(index).append(nDate);   
                conferLi.eq(index).attr("href",conTitleurl);   
        });   
    } 
    conferFun();

// 盟员广场
function schoolFun() {   
            var schoolLi = $(".friend .school-content ul li a");
            schoolLi.html('');  

            var json = {"data":[
                        {"schImg":"../images/ad-pic1.png","schTitle":"sdf1","schImgurl":"https://www.baidu.com/"},
                        {"schImg":"../images/ad-pic1.png","schTitle":"sdf1","schImgurl":"https://www.baidu.com/"},
                        {"schImg":"../images/ad-pic1.png","schTitle":"sdf1","schImgurl":"https://www.baidu.com/"},
                        {"schImg":"../images/ad-pic1.png","schTitle":"sdf1","schImgurl":"https://www.baidu.com/"},
                        {"schImg":"../images/ad-pic1.png","schTitle":"sdf1","schImgurl":"https://www.baidu.com/"},
                        {"schImg":"../images/ad-pic1.png","schTitle":"sdf1","schImgurl":"https://www.baidu.com/"},
                        {"schImg":"../images/ad-pic1.png","schTitle":"sdf1","schImgurl":"https://www.baidu.com/"},
                        {"schImg":"../images/ad-pic1.png","schTitle":"sdf1","schImgurl":"https://www.baidu.com/"},
                        {"schImg":"../images/ad-pic2.png","schTitle":"sdf2","schImgurl":"https://www.baidu.com/"},
                        {"schImg":"../images/ad-pic3.png","schTitle":"sdf3","schImgurl":"https://www.baidu.com/"},
                        {"schImg":"../images/ad-pic4.png","schTitle":"sdf4","schImgurl":"https://www.baidu.com/"}]};
             $.each(json.data, function(index,obj){  
                 //循环获取数据   
                var schCon =  $("<span class='school-img'></span><br>");
                var schSpan = $("<span class='school-name'></span>");
                var img1 = $("<img>")

                var schImg = obj.schImg;  
                var schTitle = obj.schTitle;
                var schImgurl = obj.schImgurl;

                img1.attr("src",schImg);
                
                schSpan.html(schTitle);
                schoolLi.attr("href",schImgurl);
                schCon.append(img1);
                schoolLi.eq(index).append(schCon);
                schoolLi.eq(index).append(schSpan);
        });  
    } 

    schoolFun();