var script = "<!-- Javascript Code --> <script> function copyToClipboard(object) {	object.focus();	object.select(); document.execCommand('copy'); alert('Code has been copied');	} </script>";

var html = "<!-- HTML Code 2 --> <div style='width:100%; text-align:center'><a title='Camgirl Cloud' target='_blank' href='https://camgirl.cloud/'><img width='' src='https://d31rb55u3y3kjs.cloudfront.net/c/u/520476279851687b6dabcc7189410390/2019/10/19064841/mfc_cvr.jpg'></a> <br> <div style='width:100%'> <textarea style='width:100%' name='banner' id='banner' rows='6' cols='20' onclick='copyToClipboard(this)' readonly='readonly'><a title='Camgirl Cloud' target='_blank' href='https://camgirl.cloud/'><img width='' src='https://d31rb55u3y3kjs.cloudfront.net/c/u/520476279851687b6dabcc7189410390/2019/10/19064841/mfc_cvr.jpg'></a></textarea></div><br> Click the above box to copy the code</div>"


var script_code = "<div class='col-md-12 leonard'><p><strong>Info: Tweaks of the generated markup code</strong><br> 1. Change the target='_blank' with target='_self' if necessary.<br> 2. You can add the width of the image expressed in % values. Default will render the actual image size of your current graphic.</p></div>";
var html_code = "<div class='col-md-12 text-center'><p class='lead'>Have fun &amp; b Creative</p></div>"

function generateBanner(){
    var generator_result = document.getElementById("generator-result");
    if (getParameterByName('banner_img')!= null && getParameterByName('width') != null){
        ////////////////////
        //Set input values//
        ////////////////////
        
        // Note: replace method only replace first occurrence (useful to control number of replacements)
        
        // RENDERED HTML
        html = html.replace("Camgirl Cloud", getParameterByName('name'));
        html = html.replace("Camgirl Cloud", getParameterByName('name'));
        html = html.replace("Camgirl Cloud", getParameterByName('name'));
        html = html.replace("Camgirl Cloud", getParameterByName('name'));
        
        html = html.replace("https://d31rb55u3y3kjs.cloudfront.net/c/u/520476279851687b6dabcc7189410390/2019/10/19064841/mfc_cvr.jpg", getParameterByName('banner_img'));
        html = html.replace("https://d31rb55u3y3kjs.cloudfront.net/c/u/520476279851687b6dabcc7189410390/2019/10/19064841/mfc_cvr.jpg", getParameterByName('banner_img'));
        html = html.replace("https://camgirl.cloud/", getParameterByName('website'));
        html = html.replace("https://camgirl.cloud/", getParameterByName('website'));
        html = html.replace("300px", (getParameterByName('width')+"px"));
        
        // SNIPPET HTML
        html_code = html_code.replace("Camgirl Cloud", getParameterByName('name'));
        html_code = html_code.replace("Camgirl Cloud", getParameterByName('name'));
        html_code = html_code.replace("Camgirl Cloud", getParameterByName('name'));
        html_code = html_code.replace("Camgirl Cloud", getParameterByName('name'));
        
        html_code = html_code.replace("https://d31rb55u3y3kjs.cloudfront.net/c/u/520476279851687b6dabcc7189410390/2019/10/19064841/mfc_cvr.jpg", getParameterByName('banner_img'));
        html_code = html_code.replace("https://d31rb55u3y3kjs.cloudfront.net/c/u/520476279851687b6dabcc7189410390/2019/10/19064841/mfc_cvr.jpg", getParameterByName('banner_img'));
        html_code = html_code.replace("https://camgirl.cloud/", getParameterByName('website'));
        html_code = html_code.replace("https://camgirl.cloud/", getParameterByName('website'));
        html_code = html_code.replace("300px", (getParameterByName('width')+"px"));
        //visualize
        generator_result.innerHTML = "<h4>Preview</h4>"
        var snippet = script + html;
        generator_result.innerHTML = generator_result.innerHTML + "<div id='preview'><center>"+ snippet + "</center></div><hr>";
        //generator_result.innerHTML = generator_result.innerHTML + "<h3>Copy this code in your Web:</h3>";
        var snippet_code = script_code + html_code;
        generator_result.innerHTML = generator_result.innerHTML + "<div style='width:100%'>" + snippet_code + "</div>"
		//var snippet_code = script_code;
        //generator_result.innerHTML = generator_result.innerHTML + "<div style='width:100%'>" + snippet_code + "</div>"
        
        //alert (getParameterByName('banner_img')+" "+ getParameterByName('width'));
    }
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    //url = url.toLowerCase(); // This is just to avoid case sensitiveness  
    //name = name.replace(/[\[\]]/g, "\\$&").toLowerCase();// This is just to avoid case sensitiveness for query parameter name
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
// query string: ?foo=lorem&bar=&baz
//var foo = getParameterByName('foo'); // "lorem"
//var bar = getParameterByName('bar'); // "" (present with empty value)
//var baz = getParameterByName('baz'); // "" (present with no value)
//var qux = getParameterByName('qux'); // null (absent)
function copyToClipboard() {
  var copyText = document.getElementById("banner");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
   //alert("Code has been copied: " + copyText.value , + "Now you can paste it on your MyFreeCams profile page");
var newLine = "\r\n"
 var msg = "Code has been copied: ";
 msg += newLine;
 msg += "---------------";
 msg += newLine;
 msg += "" + copyText.value;
 msg += newLine;
 msg += "---------------";
 msg += newLine;
 msg += "Now you can paste it on your MyFreeCams profile page";
 alert(msg);
 //alert("Code has been copied: " + copyText.value);
}