define(function() {
	var Class = function(parent) {
		var klass = function() {
			this.init.apply(this, arguments);
		};
		
		// Subclass
		if(parent) {
			var subclass = function () {};
			// Note: only instance properties get inherited.
			subclass.prototype = parent.prototype;
			klass.prototype = new subclass;
		}
		
		klass.prototype.init = function() {};
		
		// Shortcut to proto
		klass.fn = klass.prototype;
		
		// Shortcut to class
		klass.fn.parent = klass;
		
		klass._super = klass.__proto__;
		
		// Add class or 'static' properties
		klass.extend = function(obj) {
			for(var prop in obj) {
				if(obj.hasOwnProperty(prop)) {
					klass[prop] = obj[prop];
				}
			}
		};
		
		// Add instance properties
		klass.include = function(obj) {
			for(var prop in obj) {
				if(obj.hasOwnProperty(prop)) {
					klass.fn[prop] = obj[prop];
				}
			}
		};
		
		return klass;
	}
	return Class;
});