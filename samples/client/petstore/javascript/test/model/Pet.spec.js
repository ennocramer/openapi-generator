(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.OpenAPIPetstore);
  }
}(this, function(expect, OpenAPIPetstore) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new OpenAPIPetstore.Pet();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Pet', function() {
    it('should create an instance of Pet', function() {
      // uncomment below and update the code to test Pet
      //var instane = new OpenAPIPetstore.Pet();
      //expect(instance).to.be.a(OpenAPIPetstore.Pet);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new OpenAPIPetstore.Pet();
      //expect(instance).to.be();
    });

    it('should have the property category (base name: "category")', function() {
      // uncomment below and update the code to test the property category
      //var instane = new OpenAPIPetstore.Pet();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new OpenAPIPetstore.Pet();
      //expect(instance).to.be();
    });

    it('should have the property photoUrls (base name: "photoUrls")', function() {
      // uncomment below and update the code to test the property photoUrls
      //var instane = new OpenAPIPetstore.Pet();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instane = new OpenAPIPetstore.Pet();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new OpenAPIPetstore.Pet();
      //expect(instance).to.be();
    });

  });

}));