/**
 * Created by dy on 2018/12/5.
 *
 */
class KArapi{
	constructor(options){
		//判断layer是否实现方法
		layerInterface.ensureImplements(this);
		//判断view是否实现方法
		viewInterface.ensureImplements(this);
		// this.name = options.name;
	}
}