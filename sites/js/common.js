

function showSuccessDialog(url){
	var content = '<span style="display:inline-block;"></span><iframe src="' + url +'" width="520" height="106" scrolling="no" frameborder="0"></iframe>';
		TINY.box.show(content,0,0,0,0,0);
}

//获取cookie的值
function getCookie(name)
{
    var value = '';
    var search = name + '=';
    if (document.cookie.length > 0)
    {
       offset = document.cookie.indexOf(search);
       if (offset != -1)
       {
            offset += search.length;
            end = document.cookie.indexOf(';',offset);
            if (end == -1) { end = document.cookie.length;}
            value = unescape(document.cookie.substring(offset,end));
       }
    }
    return value;
    //另外一种方法
    //ar cookieArray = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    //return cookieArray != null ? unescape(cookieArray[2]) : null;
};

//设置cookie
function setCookie(c_name, value, expireMinutes,path)
{
 	var exdate = new Date();
	// exdate.setDate(exdate.getDate() + expiredays);
	exdate.setMinutes(exdate.getMinutes() + expireMinutes);
	var p = path || '/';
	document.cookie = c_name + "=" + escape(value) + ((expireMinutes==null) ? "" : ";expires=" + exdate.toGMTString()) + ';path=' + p;
}

// 解析url的参数
String.prototype.parseURL = function()
{
	if(!this){ return null; }
	var o = new Object();
	if(this.indexOf('?') != -1)
	{
		var splits = this.split('?');
		o.href = splits[0];
		var hash = window.location.hash;
		if(hash)
		{
			var ar = splits[1].split(hash)[0].split('&');
		}else{ var ar = splits[1].split('&'); }
		for(var i=0; i<ar.length; i++){	o[ar[i].split("=")[0]] = decodeURIComponent(ar[i].split("=")[1]); }
	}
	return o;
};

	var URL = window.location.href.parseURL();

	// 从URL上抓取cc参数,用户在url上可能输入的参数名["cc",'campaign',"Campaign"]
	var cc_names = ["cc",'campaign',"Campaign"], CCODE_url = '', CCODE = '';
	for(var i=0;i<cc_names.length;i++)
	{
		if(URL[cc_names[i]]){ CCODE_url = URL[cc_names[i]]; break; }
	}
	
	if(CCODE_url) // 先取url中的cc的值
	{
		
		CCODE = CCODE_url;
		setCookie('campaign_Code',CCODE,5,'/');
		
	}
	
	



function zxSlipTab(obj) {
    		var zxtid = "c_zx_cnt";
    		var j=4;
    		for(i = 1; i <= j; i++) {
    			if (obj == i) {
    				document.getElementById(zxtid + i).style.display = "block";
    				document.getElementById("c_zx_tli" + i).className = "c_idxzx_lic";
    			} else {
    				document.getElementById(zxtid + i).style.display = "none";
    				document.getElementById("c_zx_tli" + i).className = "c_idxzx_licz";
    			}
    		}
    	}
    	function wsrmImg (id,obj) {
    		var wsrm = "iwsrm";
    		if (obj == 1){
    			document.getElementById(wsrm + id).style.paddingTop = "0px";
    			document.getElementById(wsrm + id).src=CMCMISCURL+'ex-images/home-icon-' + id + '-1.gif';
	    	} else {
	    		document.getElementById(wsrm + id).style.paddingTop = "0px";
    			document.getElementById(wsrm + id).src=CMCMISCURL+'ex-images/home-icon-' + id + '.gif';
	    	}
    	}
    	$(".grkh .mmenu li").mouseenter(function(){
		    if(!$(this).hasClass("submenuhover")){
		      $(".grkh .mmenu li").removeClass("submenuhover");
		      $(this).addClass("submenuhover");
		      var sn = $(".grkh .mmenu li").index($(this));
		      $(".grkh .subcon").hide().eq(sn).show();
		    }
		})
        $('#searchkey').keydown(function(event){
			if(13 == event.keyCode || 13 == event.which){
				pstSearch('searchkey');
			}
		});
		$('#msearid').keydown(function(event){
			if(13 == event.keyCode || 13 == event.which){
				pstSearch('msearid');
			}
		});
		function pstSearch(obj) {
			var k = $("#" + obj).val();
			if(k==''){
				$("#" + obj).focus();
				return false;
			}
			k = filterStr(k);
			//window.location.href = "/search/?k=" + encodeURIComponent(k);
			window.location.href = "/search/" + encodeURIComponent(k) + '.html';
		}
	
		function filterStr(s) {
	        var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】'；：”“'。，、？]")  			 
			//var pattern = new RegExp("<>/@#%");
	        var rs = "";   
	        for (var i = 0; i < s.length; i++) {   
	        	rs = rs+s.substr(i, 1).replace(pattern, '');   
	        }   
	        return rs;   
	    }
	    
		function focustext(el,text) {
			if (el.value==text) {
				el.value="";
			}
		}
		function blurtext(el,text) {
			if (el.value=="") {
				el.value=text;
			}
		}
		$(".subMenuLayer dl").hover(function(){
	    	$(this).addClass("submenuhover");
	    },function(){
	    	$(this).removeClass("submenuhover");
	    });
	    
		$("#dnavlid2").bind("mouseenter",function(){
			$("#navlid2m").val(1);
		});
	    $("#dnavlid2").bind("mouseleave", function(){
	    	$("#navlid2m").val(3);
	    	setTimeout(function(){
				if ($("#navlid2m").val() != 1) {
					$('#dnavlid2').hide();
				}
			}, 20); 
		});
		
		$("#dnavlid3").bind("mouseenter",function(){
			$("#navlid3m").val(1);
		});
	    $("#dnavlid3").bind("mouseleave", function(){
	    	$("#navlid3m").val(3);
	    	setTimeout(function(){
				if ($("#navlid3m").val() != 1) {
					$('#dnavlid3').hide();
				}
			}, 20); 
		});
		
		$("#dnavlid6").bind("mouseenter",function(){
			$("#navlid6m").val(1);
		});
	    $("#dnavlid6").bind("mouseleave", function(){
	    	$("#navlid6m").val(3);
	    	setTimeout(function(){
				if ($("#navlid6m").val() != 1) {
					$('#dnavlid6').hide();
				}
			}, 20); 
		});
	
	    $("#c_yqlj").bind("mouseleave",function(){
			$("#c_yqlj").hide();
		});

function webtrendsHrefTrands(obj){
	var _href = $(obj).attr('href');
	var isadd = $(obj).attr('pramadd');
	var t = _href.toString();
		t = t.toLowerCase();
	if(t.indexOf('javascript')!='0'&&_href!=''&&_href!=undefined){
		if(isadd!='false'){
			var otype = $(obj).attr('otype');
			var temp = $(obj).attr('o_t');
			if(temp==undefined||temp==''){
				if(otype!=undefined&&otype!=""){
					//var oarea = $(obj).attr('oarea');
					var otitle = $(obj).attr('otitle');
					var parm = 'rh_otp='+encodeURI(otype);
					var rc = /^[PMpm][WSws][BNbn]\d{6}$/;
					if(rc.test(otitle)){
						parm +='&rh_oid='+encodeURI(otitle);
					}
					_href += (_href.indexOf('?')!='-1')?('&'+parm):('?'+parm);
					$(obj).attr('href', _href);
					$(obj).attr('o_t', 'yes');
				}
			}
		}
	}
}
/*
$("ul#c_unav a,div#dnavlid2 a,div#dnavlid6 a,div#dnavlid3 a").bind('click',function(){
	webtrendsHrefTrands(this);
});
*/



function getUrlParam(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var r = window.location.search.substr(1).match(reg);
		if (r != null)
			return unescape(r[2]);
		return null;
}
function setCook(name,mc_id,d,v) {
        var date = new Date();
		var m=v?v:30;
		if(d){
			 date.setMinutes(date.getMinutes() + m);
		}else{			
			 date.setDate(date.getDate() + m);
		}		
        document.cookie = name + "=" + escape(mc_id) + "; expires=" + date.toGMTString() + "; path=/";
}


function getCook(name) {
        var cookval = '';
        var arrCookie=document.cookie.split("; ");
        for(var i=0;i<arrCookie.length;i++){
               var arr=arrCookie[i].split("=");
               if(arr[0] == name) cookval = unescape(arr[1]);
        }
        return cookval;
}
function setInput(kval,mc_id) {
        setCook(kval,mc_id);
		var wtmcId=$('#myform').find('input[name="wtmcId"]');		
		if(wtmcId.length>0){			
			wtmcId.val(mc_id);
		}else{			
			$('#myform').prepend('<input type="hidden" name="wtmcId" value="'+mc_id+'" />');
		}
}
function setFromIqid(def_iqid){
	var cval='iq_id';
	var iq_id = getUrlParam("iq_id");
	var ciq_id = getCook(cval);	
	var diq_id = $('#iqId').val();		
	if(iq_id){
		return iq_id;
	}else if(def_iqid){
		return def_iqid;
	}else if(diq_id){
		return diq_id;
	}else if(ciq_id){
		return ciq_id;
	}else{
		var sUrl = document.referrer;
		if (sUrl == '') {
			siq_id="13970373";
		} else {
			if (sUrl.indexOf("baidu.com") != -1){
				siq_id = "13970364";
			}else if (sUrl.indexOf("google.com") != -1){
				siq_id = "13970365";
			}else if (sUrl.indexOf("yahoo.com") != -1){
				siq_id = "13970366";
			}else if (sUrl.indexOf("soso.com") != -1){
				siq_id = "13970367";
			}else if (sUrl.indexOf("cn.bing.com") != -1) {
				siq_id = "13970368";
			}else if (sUrl.indexOf("sogou.com") != -1){
				siq_id = "13970369";
			}else if (sUrl.indexOf("iask.com") != -1){
				siq_id = "13970370";
			}else if (sUrl.indexOf("yodao.com") != -1){
				siq_id = "13970371";
			}else if (sUrl.indexOf("ins.cmbchina.com") != -1){
				siq_id = "14355531";
			}else if (sUrl.indexOf("bank.ecitic.com") != -1){
				siq_id = "14355532";
			}else if (sUrl.indexOf("haosou.com") != -1){
				siq_id = "13970375";
			}else if (sUrl.indexOf("cignacmb.com") != -1){
				siq_id = "13970373";
			}else{
				siq_id = "13970372";
			}
			
			 setCook(cval,siq_id,true);
		}
		return siq_id;
	}
}
setFromIqid();
$(function(){
	var kval = "WT.mc_id";
	var mc_id = getUrlParam(kval);
	if(mc_id == null){
		 var newcook = getCook(kval);
		 if(newcook == ""){
			setInput(kval,"DWDMR");
		 }else {
			setInput(kval,newcook);
		 }
	}else{
		if (mc_id.replace(/(^\s*)|(\s*$)/g, "")) {
				setInput(kval,mc_id);
		} else {
				mc_id = 'DWDMR';
				var mc_id = getCook(kval) ? getCook(kval) : mc_id;
				setInput(kval,mc_id);
		}
	}
	$(".cc-nav li#"+$("input[name='menu_link']").val()).addClass("current");
		
});

