(function() {

  'use strict';

  Polymer({

      is: 'aluminium-app',

      properties: {
        products: {
          type: Array,
          value: function() {
            return [
              { content: "¿Quieres"},
              { content: "ser"},
              { content: "mi"},
              { content: "amigo?"},
              { content: "¿Quieres"},
              { content: "ser"},
              { content: "mi"},
              { content: "amigo?"},
              { content: "¿Quieres"},
              { content: "ser"},
              { content: "mi"},
              { content: "amigo?"},
              { content: "¿Quieres"},
              { content: "ser"},
              { content: "mi"},
              { content: "amigo?"}
            ]
          }
        },
      },

    });

}());