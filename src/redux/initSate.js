import { Map, fromJS, List, Seq } from 'immutable';
import home from './homeState';
import user from './userState';
import hintState from './publicState';

const list = [{
  uri: 'https://m.360buyimg.com/mobilecms/s220x220_jfs/t2734/303/1629213587/280241/b28eb195/574519f3Nbc149af8.jpg!q70.jpg',
  text: 'haha',
  id: '1'
}, {
  uri: 'https://m.360buyimg.com/mobilecms/s220x220_jfs/t2734/303/1629213587/280241/b28eb195/574519f3Nbc149af8.jpg!q70.jpg',
  text: 'haha',
  id: '1'
}, {
  uri: 'https://m.360buyimg.com/mobilecms/s220x220_jfs/t2734/303/1629213587/280241/b28eb195/574519f3Nbc149af8.jpg!q70.jpg',
  text: 'haha',
  id: '1'
}, {
  uri: 'https://m.360buyimg.com/mobilecms/s220x220_jfs/t2734/303/1629213587/280241/b28eb195/574519f3Nbc149af8.jpg!q70.jpg',
  text: 'haha',
  id: '1'
}];

const goodsDetailDefaultData = fromJS({
  goodsName: '七匹狼 纯色休闲T恤',
  price: '139.8',
  discount: '8.5', //折扣
  sales: '23023', // 销量
  storeInfo: {
    allGoods: '123312',//全部商品
    fansNum: '23123',// 关注人数
    storeLogo: 'https://m.360buyimg.com/mobilecms/s220x220_jfs/t2734/303/1629213587/280241/b28eb195/574519f3Nbc149af8.jpg!q70.jpg', //商家blogo
    type: 12, // 钻石类型
  },
  goodsDetailImage: ['https://m.360buyimg.com/mobilecms/s220x220_jfs/t2734/303/1629213587/280241/b28eb195/574519f3Nbc149af8.jpg!q70.jpg', 'https://m.360buyimg.com/mobilecms/s220x220_jfs/t2734/303/1629213587/280241/b28eb195/574519f3Nbc149af8.jpg!q70.jpg'], //商品详情图片
  isColliction: null,
})

const goodsDetail = goodsDetailDefaultData.toJS();

const testList = fromJS({list: list});

const initState = user.mergeDeep( testList,
                                  { goodsDetail : goodsDetail },
                                  {home: home},
                                  {hintState: hintState}
                                );

export const testData = testList.toJS().list;

export default initState.toJS();
