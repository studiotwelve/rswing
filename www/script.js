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
    ele.src='http://demo.rotaryswing.com/?app=true&udid='+window.plugins.uniqueDeviceID.get(success, fail)+'&uuid='+device.uuid;
    ele.location.href='http://demo.rotaryswing.com/?app=true&udid='+window.plugins.uniqueDeviceID.get(success, fail)+'&uuid='+device.uuid;
    ele.contentWindow.document.location.href='http://demo.rotaryswing.com/?app=true&udid='+window.plugins.uniqueDeviceID.get(success, fail)+'&uuid='+device.uuid;
},
};