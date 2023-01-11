/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxa27cadb824cce33f',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'f7f64f4d0b69dd433f6c7c5687ebcadb',

  PROVINCE: '河南',
  CITY: '郑州',

  USERS: [
    {
      // 想要发送的人的名字
      name: '乖宝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oDDJk6oLvp3IAKBTf1O5fE2J41E8',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '{{date.DATA}}  
城市：{{city.DATA}}  
天气：{{weather.DATA}}  
最低气温: {{min_temperature.DATA}}  
最高气温: {{max_temperature.DATA}}  
今天是我们恋爱的第{{love_day.DATA}}天
{{birthday_message.DATA}}

{{note_en.DATA}}  
{{note_ch.DATA}}
',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-29',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1996', date: '09-09',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '小蔡同学', year: '2002', date: '12-29',
        },
        {
          type: '节日', name: '相恋纪念日', year: '2022', date: '10-13',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-10-13' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '服务器信息：{{post_time_zone.DATA}} {{post_time.DATA}}

共推送 {{need_post_num.DATA}} 人
成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
成功用户: {{success_post_ids.DATA}}
失败用户: {{fail_post_ids.DATA}}',

  CALLBACK_USERS: [
    {
      name: '小蔡的男朋友',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'wxa27cadb824cce33f',
    }
  ],

}

module.exports = USER_CONFIG

