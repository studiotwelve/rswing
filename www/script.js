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

  receivedEvent: function(element) {
    var appElement = document.getElementById(element);

    appElement.setAttribute('data-listening', 'true');
    appElement.setAttribute('data-recieved', 'true');
  }
};
