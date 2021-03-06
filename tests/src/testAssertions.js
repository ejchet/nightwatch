var CommandQueue = require('../../lib/queue.js');

module.exports = {
  setUp: function (callback) {
    try {
      this.server = require('mockserver').init();  
    } catch(ex) {
      console.log(ex.stack)
    }
    
    this.client = require('../nightwatch.js').init();
    
    callback();
  },
  
  "Testing assertions loaded" : function(test) {
    var assertModule = require('assert');
    for (var prop in assertModule) {
      test.ok(prop in this.client.assert);
    }
    test.ok('elementPresent' in this.client.assert);
    test.ok('elementPresent' in this.client.verify);
    
    test.ok('elementNotPresent' in this.client.assert);
    test.ok('elementNotPresent' in this.client.verify);
    
    test.ok('containsText' in this.client.assert);
    test.ok('containsText' in this.client.verify);
    
    test.ok('attributeEquals' in this.client.assert);
    test.ok('attributeEquals' in this.client.verify);
    
    test.ok('cssClassPresent' in this.client.assert);
    test.ok('cssClassPresent' in this.client.verify);
    
    test.ok('cssClassNotPresent' in this.client.assert);
    test.ok('cssClassNotPresent' in this.client.verify);

    test.ok('cssProperty' in this.client.assert);
    test.ok('cssProperty' in this.client.verify);
    
    test.ok('valueContains' in this.client.assert);
    test.ok('valueContains' in this.client.verify);
    
    test.ok('visible' in this.client.assert);
    test.ok('visible' in this.client.verify);
    
    test.ok('hidden' in this.client.assert);
    test.ok('hidden' in this.client.verify);
    
    test.ok('title' in this.client.assert);
    test.ok('title' in this.client.verify);
    
    test.done();
  },
  
  tearDown : function(callback) {
    // clean up
    this.client = null;
    this.server.close();
    this.server = null;
    
    callback();
  }
}
      
