/**
 * Created by dy on 2018/12/5.
 *
 */
// import {layerInterface} from './interface'
class View {
	initializer(option) {

		console.log('initializer view')
		viewInterface.ensureImplements(this);
	}

	getView() {
		console.log(this.name)
	}

	addView() {

	}
}