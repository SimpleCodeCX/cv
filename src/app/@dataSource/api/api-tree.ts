import { HOST_URL } from './url';
import { APITREECONFIG } from './api-tree.config';
const APITREE = APITREECONFIG;

/**
 * 为api node chain添加host前缀
 * @param apiNodeChain
 */
const addHost = (apiNodeChain: string) => {
  return apiNodeChain ? `${HOST_URL}/${apiNodeChain.replace(/^\//, '')}` : HOST_URL;
};

/**
 * 根据api tree config 生成 api tree：
 *     为每个api apiNode(api节点)添加host以及所有parentApiNode(父节点)的前缀
 * 举个例子：
 *     以下api tree config中，api节点有restful和accident，其中restful是accident的父节点
 *     const apiTreeConfig = {
 *       restful: {
 *         accident: 'accident'
 *       }
 *     }
 *     ==>
 *     (假设HOST_URL=http://xxx.xxx.xxx.xxx)
 *     const apiTree = {
 *       _this: 'http://xxx.xxx.xxx.xxx',
 *       restful: {
 *         _this: 'http://xxx.xxx.xxx.xxx/restful',
 *         accident: 'http://xxx.xxx.xxx.xxx/restful/accident'
 *       }
 *     }
 * @param apiTreeConfig api tree config
 * @param parentApiNodeChain parentApiNode1/parentApiNode2/parentApiNode3
 */
const generateApiTree = (apiTreeConfig: string | object, parentApiNodeChain?: string) => {
  for (const key of Object.keys(apiTreeConfig)) {
    const apiNode = key;
    const prefixChain = parentApiNodeChain ? `${parentApiNodeChain}/` : '';
    if (Object.prototype.toString.call(apiTreeConfig[key]) === '[object Object]') {
      generateApiTree(apiTreeConfig[key], prefixChain + apiNode);
    } else {
      apiTreeConfig[key] = parentApiNodeChain
        ? addHost(prefixChain + key)
        : addHost(key);
    }
  }
  // 创建_this节点 (这里需要放在上面的for之后)
  apiTreeConfig['_this'] = parentApiNodeChain
    ? addHost(`${parentApiNodeChain}`)
    : addHost('');
};

generateApiTree(APITREECONFIG);
// console.info(APITREE);
export { APITREE };
