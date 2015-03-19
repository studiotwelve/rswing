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
  },
};