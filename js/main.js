//Menu bar creation
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
//Scrolling functionality
var marginY = 0;
var destination=0;
var speed=5;
var scroller=null;

function initScroll(elementId){
  destination = document.getElementById(elementId).offsetTop;
  scroller=setTimeout(function(){
    initScroll(elementId);
  }, 1);

marginY=marginY+speed;

if(marginY>=destination){
  clearTimeout(scroller);
}
  window.scroll(0,marginY);
}
function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make an HTTP GET Request
easyHTTP.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);

  let self = this;
  this.http.onload = function() {
    if(self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback('Error: ' + self.http.status);
    }
  }

  this.http.send();
}




const http = new easyHTTP;
// Get Posts
http.get('/json/first.json', function(err, posts) {
  if(err) {
    console.log(err);
  } else {
    var obj = JSON.parse(posts);
    console.log(obj);
    if(obj!=null){
      
      var result = "";
      var loaders = {"1":"/assets/application-onboarding.png","2":"/assets/app-sec-scanning.png","3":"/assets/asset-50-6-x.png","4":"/assets/hawk-eye-dashboard.png","5":"/assets/hawk-eye-api.png","6":"/assets/security-assist-plugin.png"};


      var template = ' <li class="box" id="boxes">\
                                <div class="image-div">\
                                    <img src="{class}">\
                                </div>\
                                <div class="text-div">\
                                    <p class="heading" id="headings">{heading}</p>\
                                    <p class="details">{details}</p>\
                                </div>\
                            </li>';
            for(var i = 0;i < obj.length;i++){
               result += template.replace("{class}",loaders[obj[i].tag_id]).replace("{heading}",obj[i].title).replace("{details}",obj[i].details);
            }
            console.log(result);
            document.getElementById('first').innerHTML = result;
    }
  }
});
