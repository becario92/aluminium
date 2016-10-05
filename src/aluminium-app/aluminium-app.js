(function() {

  'use strict';

  Polymer({

      is: 'aluminium-app',

      properties: {

        ventanas: {
          type: Array
        },
        
        _hasData: {
          type: Boolean,
          value: false
        }

      },

      listeners: {
        'ventanas-changed': '_ventanasChanged'
      },

      _ventanasChanged: function(data) {
        this._ventanasHasData();
      },

      _ventanasHasData: function(data) {
        this.set('_hasData', this.ventanas && this.ventanas.length > 0);
      }

    });

}());