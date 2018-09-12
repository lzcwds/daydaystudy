/**
 * Created by dy on 2018/9/11.
 *
 */

// 冒泡排序: 比较两个相邻的项，如果第一个大于第二个则交换他们的位置,元素项向上移动至正确的顺序，就好像气泡往上冒一样
function bubbleSort(arr) {
    for(let i=0;i<arr.length;i++){
        for(let j =0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                //传统写法
                // let temp = arr[j];
                // arr[j] = arr[j+1];
                // arr[j+1] =temp;

                //es6的解构赋值
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
            }
        }
    }
}

// 1) 首先，在数组中选择一个中间项作为主元
// 2) 创建两个指针，左边的指向数组第一个项，右边的指向最后一个项，移动左指针，直到找到一个比主元大的项，
//    接着，移动右边的指针，直到找到一个比主元小的项，然后交换它们。重复这个过程，直到
//    左侧的指针超过了右侧的指针。这个使比主元小的都在左侧，比主元大的都在右侧。这一步叫划分操作
// 3) 接着，算法对划分后的小数组（较主元小的值组成的的小数组， 以及较主元大的值组成的小数组）重复之前的两个步骤，直到排序完成

function quickSort(arr) {
    let val = arr[parseInt(arr.length/2)];
    let left =[];
    let right = [];
    let i = 0;
    if(val<arr[i]){
        arr[i]
    }
}

