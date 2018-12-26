/**
 * Created by dy on 2018/12/5.
 *
 */


class InterfaceFactory{
	constructor(name,methods){
		if(arguments.length!=2){
			return;
		}
		this.name = name;
		this.methods = [];
		methods.forEach(item=> {
			if(typeof item !== 'object'){
				return;
			}
			this.methods.push(item);
		})
	}
	//确认
	ensureImplements(obj){
		if(arguments.length != 1){
			return;
		}
		this.methods.forEach(item=> {
			var methodName =item.name;
			console.log(obj[methodName].length)
			if(!obj[methodName] || typeof obj[methodName] !== 'function'){
				throw new Error('implements interface '+this.name+',obj.method '+methodName+' was not found');
				return
			}
		})

	}
}

const mixin = (base, ...mixins) => {
	let aggregate = class __Aggregate extends base {
		constructor (...args) {
			super(...args)
			mixins.forEach((mixin) => {
				if (typeof mixin.prototype.initializer === "function")
					mixin.prototype.initializer.apply(this, args)
			})
		}
	};
	let copyProps = (target, source) => {
		Object.getOwnPropertyNames(source)
			.concat(Object.getOwnPropertySymbols(source))
			.forEach((prop) => {
				if (prop.match(/^(?:initializer|constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/))
					return
				Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(source, prop))
			})
	}

	mixins.forEach((mixin) => {
		copyProps(aggregate.prototype, mixin.prototype)
		copyProps(aggregate, mixin)
	})

	return aggregate
}

