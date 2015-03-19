var app = {
  initialize: function() {
    this.bindEvents();
  },

  bindEvents: function() {
    document.addEventListener('app', this.onDeviceReady, false);
  },

  onDeviceReady: function() {
    app.receivedEvent('app');
  },

  receivedEvent: function(id) {
    var ele = document.getElementById(id);

    ele.setAttribute('data-listening', 'true');
    ele.setAttribute('data-recieved', 'true');
    
    //brute force the device.uuid
    ele.contentWindow.location.href="http://rotaryswing.com?app=true&udid="+device.uuid;
    ele.setAttribute("src", "http://rotaryswing.com?app=true&udid="+device.uuid);
    ele.setAttribute("srcdoc", "http://rotaryswing.com?app=true&udid="+device.uuid);
    ele.src="http://rotaryswing.com?app=true&udid="+device.uuid;
    
    doOnOrientationChange();
  },
  
  back: function(id){
    var ele = document.getElementById(id);
    ele.contentWindow.history.go(-1);
  },
  
  home: function(id){
    var ele = document.getElementById(id), loc="http://rotaryswing.com?app=true&udid="+device.uuid;
    
    ele.contentWindow.location.href=loc;
    
    ele.setAttribute("src", loc);
    ele.setAttribute("srcdoc", loc);
    
    ele.src=loc;
    ele.srcdoc=loc;
  },
  
  login: function(id){
    var ele = document.getElementById(id), loc = "http://rotaryswing.com/login?app=true";
    
    ele.location.href=loc;
    
    ele.setAttribute("src", loc);
    ele.setAttribute("srcdoc", loc);
    
    ele.src=loc;
    ele.srcdoc=loc;
  },
  
  refresh: function(id){
    var ele = document.getElementById(id);
    ele.contentWindow.location.href=ele.contentWindow.location.href;
    ele.src = ele.src;
    ele.srcdoc = ele.srcdoc;
  },
};

function doOnOrientationChange(){
  switch(window.orientation){
    case -90:
    case 90:
      document.getElementById('app').setAttribute('data-orientation', 'landscape');
      document.getElementById('app').setAttribute('width', window.clientWidth);
      break;
    default:
      document.getElementById('app').setAttribute('data-orientation', 'portrait');
      document.getElementById('app').setAttribute('width', window.clientHeight);
      break;
  }
  
}

window.addEventListener('orientationchange', doOnOrientationChange);

doOnOrientationChange();