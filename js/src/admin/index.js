import app from 'flarum/admin/app';

app.initializers.add('jinber-jdunion', () => {
  app.extensionData
    .for('jinber-jdunion')
    .registerSetting({
      setting: 'jinber-jdunion.jdunion_appkey',
      label: app.translator.trans('jinber-jdunion.admin.setting.appkey'),
      type: 'string',
      help: app.translator.trans('jinber-jdunion.admin.setting.appkey_help', {
        a: <a href='https://union.jd.com/openplatform/console/appmng'></a>
      })
    })
    .registerSetting({
      setting: 'jinber-jdunion.jdunion_appsecretkey',
      label: app.translator.trans('jinber-jdunion.admin.setting.appsecretkey'),
      type: 'string'
    })
    .registerSetting({
      setting: 'jinber-jdunion.jdunion_pid',
      label: app.translator.trans('jinber-jdunion.admin.setting.pid'),
      type: 'string',
      help: app.translator.trans('jinber-jdunion.admin.setting.pid_help', {
        a: <a href='https://union.jd.com/manager/promotionSite'></a>
      })
    })
    .registerSetting({
      setting: 'jinber-jdunion.jdunion_eid',
      label: app.translator.trans('jinber-jdunion.admin.setting.eid'),
      type: 'string',
      help: app.translator.trans('jinber-jdunion.admin.setting.eid_help', {
        a: <a href='https://union.jd.com/manager/promotionSite'></a>
      })
    })
    .registerSetting({
      setting: 'jinber-jdunion.count_page',
      label: app.translator.trans('jinber-jdunion.admin.setting.count'),
      type: 'number',
      help: app.translator.trans('jinber-jdunion.admin.setting.count_help')
    })
});
//b2551d2485cf5974c675b144725424fb
//b38cb37336884e1eb404768e2672a8c8
//1000169872_1034028693_2010712556
