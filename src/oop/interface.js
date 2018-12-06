/**
 * Created by dy on 2018/12/5.
 * 接口类，用来创建接口
 */

//图层接口
const layerInterface = new InterfaceFactory('layerInterface',[
	'getLayers',
	'addLayer'
]);
//场景接口
const viewInterface = new InterfaceFactory('viewInterface',[
	'getView',
	'addView'
]);





