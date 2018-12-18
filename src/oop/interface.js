/**
 * Created by dy on 2018/12/5.
 * 接口类，用来创建接口
 */

//图层接口
const layerInterface = new InterfaceFactory('layerInterface',[
	{
		name:'getLayers',
		params:['id'],
	},
	{
		name:'addLayer',
		params:['params'],
	},
	// 'deleteLayer'
]);
//场景接口
const viewInterface = new InterfaceFactory('viewInterface',[
	'getView',
	'addView'
]);





