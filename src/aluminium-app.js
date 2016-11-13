(function() {

  'use strict';

  Polymer({

      is: 'aluminium-app',

      properties: {

        menu: {
          type: Array,
          value: function() {
            return [
              {name: 'home'},
              {name: 'presupuesto'},
              {name: 'gestion'}
            ];
          }
        },

        routeData: {
          type: Object
        },

        page: {
          type: String,
          // reflectToAttribute: true,
          observer: '_pageChanged'
        }

      },

      observers: [
        'goTo(routeData.page)',
        '_routePathChanged(route.path)'
      ],

      goTo: function(page) {
        if (this.page === page) {
          return;
        }

        this.page = page;

        // this.closeDrawer();

        this.async(function() {
          this.set('routeData.page', page);
        }, 50);
      },

      _pageChanged: function(page) {
        if (page) {
          var url = this.resolveUrl('views/aluminum-' + page + '.html');
          // load page import on demand.
          this.importHref(url, null, null, true);
        }
      },

      _routePathChanged: function(path) {
        if (path && path === '/') {
          this.async(function() {
            this.set('routeData.page', 'home');
          }, 50);
        }
        if (path && path.slice(-1) !== '/') {
          this.set('route.path', path + '/');
        }
      }

    });

}());