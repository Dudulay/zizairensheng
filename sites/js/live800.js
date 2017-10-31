// Cookie操作

    /**
     * Function 浏览器 cookie操作
     * @param key       键名
     * @param value     键值
     * @param options   附件选项
     * @returns {*}
     * @constructor
     */
	 // document.writeln("<script language=\'javascript\' src=\'http://chat8.live800.com/live800/chatClient/monitor.js?jid=5571514401&companyID=791046&configID=150867&codeType=custom\'></script>");
    function Cookie(key, value, options) {
        if(arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(value)) || value === null || value === undefined)) {
            options = options || {};

            if(value === null || value === undefined) {
                options.expires = -1;
            }

            if( typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setDate(t.getDate() + days);
            }

            value = String(value);
            return (document.cookie = [encodeURIComponent(key), '=', options.raw ? value : encodeURIComponent(value), options.expires ? '; expires=' + options.expires.toUTCString() : '', options.path ? '; path=' + options.path : '', options.domain ? '; domain=' + options.domain : '', options.secure ? '; secure' : ''].join(''));
        }
        options = value || {};
        var decode = options.raw ? function(s) {
            return s;
        } : decodeURIComponent;
        var pairs = document.cookie.split('; ');
        for(var i = 0, pair; pair = pairs[i] && pairs[i].split('='); i++) {
            if(decode(pair[0]) === key)
                return decode(pair[1] || '');
        }
        return null;
    }
	
		 	/*
         * live800浮动图标
         * @joshua
         */
		var live_url = window.location.pathname;
		var live_name =  live_url.split('/')[1];
        var live800_name = Cookie('UN');
	 
	    if(!live800_name || live800_name=="null"){
		   live800_name='访客';  
	    }else if(/^1[34578]\d{9}$/g.test(live800_name)){
		  live800_name = '网站登陆会员';   
	    }
	
	   //alert(name);
	   
	   var timestamp = Date.parse(new Date());
	   var key ='111';
	   
	   var userId = Cookie('live800_userid');
	   if(!userId || userId=="null"){
	   userId=timestamp.toString().substr(3);
	   Cookie('live800_userid', userId,{path: '/', expires: 7 });
	   }else{
		Cookie('live800_userid', userId,{ path: '/', expires: 7 });
	   }

	   var memo='';
	   var str1=userId + live800_name + memo + timestamp + key;
       var str2=encodeURIComponent(str1); 
	   var hashCode=hex_md5(str2);
	   
	   infovalue=encodeURIComponent("userId="+userId+"&name="+live800_name+"&memo="+memo+"&hashCode="+hashCode+"&timestamp="+timestamp+"");	
		
	$(function() {
		var liveHTML = '';
		if(live_name =='shop' || live_name =='insurance'  ){
			liveHTML+= '<link href="http://www.cignacmb.com/shop/common/css/ycpf_modify.css" rel="stylesheet"><div id="tbox"><a style="cursor:pointer" onclick="message_win()" title="在线咨询" href="javascript:void(0);" class="zxkf02" id="" ></a></div>';
		   
		   $('body').append(liveHTML);
	
			}else{
				liveHTML+="<div class='scroll-nav'>";
                liveHTML+="<a class='message-bar' id='message_dtc' href='javascript:void(0);' onclick='message_win()'  title='产品咨询'>";
				liveHTML+="产品咨询";
				liveHTML+="</a>";
			    liveHTML+="<a class='service-bar' id='jianyi_dtc' href='javascript:void(0);'  title='售后服务'>";
				liveHTML+="售后服务";
				liveHTML+="</a>";
			    liveHTML+="</div>";
				
			    $('body').append(liveHTML);
			}
		
	   	
		 
       });
	   
	   	 if(live_name =='shop' || live_name =='insurance'  ){
		 
		 document.write("<script src='http://chat8.live800.com/live800/chatClient/monitor.js?jid=5571514401&companyID=791046&configID=150867&codeType=custom&info="+infovalue+"' type='text/javascript'></script>");

	 }

	  
	   	function message_win(){
	 	
          window.open('http://chat8.live800.com/live800/chatClient/chatbox.jsp?companyID=791046&configID=150868&jid=5571514401&skillId=8604&info='+infovalue,'','width=900,height=600');
        } 
		
		

		
       /*
         * live800Æô¶¯·½·¨ 
         * @returns {undefined}
         */

		$(document).ready(function(){

         function openLive800(){
                   var url="https://member.cignacmb.com/pc-service/openLive800.xhtml";
                   url = url + "?enterurl=" + encodeURIComponent(document.URL);
                   url = url + "&pagetitle=" + encodeURIComponent($("title").html());
                   window.open(url,'','width=900,height=600')           
         }
		
		
			$("#jianyi_dtc").bind("click",function(){
				openLive800()
			});
			
			$("#jianyi_cs").bind("click",function(){
				openLive800()
			});
		});
		
	