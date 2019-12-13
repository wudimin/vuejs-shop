import Mock from 'mockjs'


function getRImg () {
  return Mock.Random.image('600x300', Mock.Random.color())
}   
//  "./assets/slideShow/pic1.jpg",
Mock.mock(/getSlides/, [
    {
      src: getRImg (),
      title: '@ctitle(4, 12)',
      ky: 1,
      toKey: 'analysis'
    },
    {
      src: getRImg (),
      title: '@ctitle(4, 12)',
      ky: 2,
      toKey: 'count'
    },
    {
      src: getRImg (),
      title: '@ctitle(4, 12)',
      ky: 3,
      toKey: 'publish'
    },
    {
      src: getRImg (),
      title: '@ctitle(4, 12)',
      ky: 4,
      toKey: 'forecast'
    }
])



Mock.mock(/getBoardList/, [
        {
          title: '平凡的世界',
          description: '这这部小说中，作家高度浓缩了中国西北农村的历史变迁过程，作品达到了思想性与艺术性的高度统一。',
          toKey: 'analysis',
        },
        {
          title: '白夜行',
          description: '《白夜行》被普遍视为日本作家东野圭吾作品的无冕之王，一经推出即成为东野圭吾的长篇小说代表作。',
          toKey: 'count',
        },
        {
          title: '百年孤独',
          description: '《百年孤独》是魔幻现实主义文学的代表作，描写了布恩迪亚家族七代人的传奇故事。',
          toKey: 'forecast',
        },
        {
          title: '失踪的孩子',
          description: '“我的整个生命，只是一场为了提升社会地位的低俗斗争。”，全球畅销近千万册被翻译成40多种语言',
          toKey: 'publish',
        }
])