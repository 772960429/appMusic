var util = require('../../utils/util.js')
var items = ['播放列表', '歌曲', '专辑', '演唱者']
var animationContext;
var imageUrl = 'cloud://set-name-kkpsf.7365-set-name-kkpsf/image/icon-play.png'
var _songsList=[{
  dataUrl: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46',
      name: 'Roar',
      mid: "003OUlho2HcRHC",
      singer:'Katy Perry',
      coverImgUrl: 'http://p2.music.126.net/Jp7FdXa7-_DsVV6yP2q7Eg==/3317226581214544.jpg?param=130y130'
    },{
      dataUrl:'http://stream.qqmusic.tc.qq.com/138549169.mp3',
      name: '你还要我怎样',
      mid: "000E62Tc3bMiJB",
      singer:'薛之谦',
      coverImgUrl: 'http://y.gtimg.cn/music/photo_new/T002R90x90M000000aWdOx24i3dG.jpg'
    },{
      dataUrl:'http://stream.qqmusic.tc.qq.com/137903929.mp3',
      name: '微微一笑很倾城',
      mid: "002NbtFA3fuJhD",
      singer:'杨洋',
      coverImgUrl: 'http://y.gtimg.cn/music/photo_new/T002R90x90M000003RxTdZ0sJLwo.jpg'
    },{
      dataUrl:'http://stream.qqmusic.tc.qq.com/132636799.mp3',
      name: '演员',
      mid: "001Qu4I30eVFYb",
      singer:'薛之谦',
      coverImgUrl: 'http://y.gtimg.cn/music/photo_new/T002R90x90M000003y8dsH2wBHlo.jpg'
    }]
var _albumList = [{
      name:'寂寞不痛',
      singer:'A-Lin',
      image:'http://y.gtimg.cn/music/photo_new/T002R300x300M000000Nlo922ahOEE.jpg?max_age=2592000'
    },{
      name:'喜剧之王',
      singer:'李荣浩',
      image:'http://y.gtimg.cn/music/photo_new/T002R300x300M000001FOctH2oGoAx.jpg?max_age=2592000'
    },{
      name:'I Know You Were Trouble.-Single',
      singer:'Taylor Swift',
      image:'http://y.gtimg.cn/music/photo_new/T002R300x300M000000XafSm26FA1L.jpg?max_age=2592000'
    },{
      name:'哎呦，不错哦',
      singer:'周杰伦',
      image:'http://y.gtimg.cn/music/photo_new/T002R300x300M000001uqejs3d6EID.jpg?max_age=2592000'
    }]

var pageObject = {
  data: {
    playing:false,
    playingSongsNum:0,
    musicGroupName:items[0],
    listTemplateName:'music-play-list',
    actionSheetHidden: true,
    actionSheetItems: items,
    playBar:{
      dataUrl:'https://music.163.com/#/song?id=27566922',
      name: 'Roar',
      singer:'katy Perry',
      coverImgUrl: 'http://p2.music.126.net/Jp7FdXa7-_DsVV6yP2q7Eg==/3317226581214544.jpg?param=130y130'
    },
    songsList:_songsList,
    albumList :_albumList
  },
  playButtonTap:function(){
    var that = this

  },
  actionSheetTap: function(e) {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  actionSheetChange: function(e) {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  onLoad: function () {
    var that = this
    wx.onBackgroundAudioStop(function () {
      that.setData({
        playing: false
      })
    })
  },
  onMusicTap: function () {
    const backgroundAudioManager = wx.getBackgroundAudioManager()
    backgroundAudioManager.title = '此时此刻';
    backgroundAudioManager.epname = '此时此刻';
    backgroundAudioManager.singer = '许巍';
    backgroundAudioManager.coverImgUrl = 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000';
    // 设置了 src 之后会自动播放
    backgroundAudioManager.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46';
    backgroundAudioManager.play();
    backgroundAudioManager.onPlay(() => {
      console.log("音乐播放开始");
    })
    backgroundAudioManager.onEnded(() => {
      console.log("音乐播放结束");
    })
  },
  play: function (event) {
    var that = this
    console.log('print event')
    console.log(event)
    var res=that.data.songsList[event.currentTarget.dataset.num]
    getApp().globalData.playing = res
    that.setData({
          playBar:res,
          playingSongsNum:event.currentTarget.dataset.num
    })
    
    const backgroundAudioManager = wx.getBackgroundAudioManager()
    backgroundAudioManager.title = res.name
    backgroundAudioManager.epname = res.name
    backgroundAudioManager.singer = res.singer
    backgroundAudioManager.coverImgUrl = res.coverImgUrl
    backgroundAudioManager.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46'
    backgroundAudioManager.play()
    backgroundAudioManager.onPlay(() => {
      console.log("音乐播放开始");
      that.setData({
        playing: true
      })
    })
    backgroundAudioManager.onEnded(() => {
      console.log("音乐播放结束");
      that.setData({
        playing: false
      })
    })
    
    if(backgroundAudioManager.paused){
      imageUrl = 'cloud://set-name-kkpsf.7365-set-name-kkpsf/image/icon-pause.png'
    } else {
      imageUrl = 'cloud://set-name-kkpsf.7365-set-name-kkpsf/image/icon-play.png'
    }
    // wx.backgroundAudioManager({
    //   dataUrl: res.dataUrl,
    //   name: res.name,
    //   singer:res.singer,
    //   coverImgUrl: res.coverImgUrl,
    //   complete: function (res) {
    //     that.setData({
    //       playing: true
    //     })
    //   }
    // })
  },
  pause: function () {
    var that = this
    wx.pauseBackgroundAudio({
      success: function () {
        that.setData({
          playing: false
        })
      }
    })
  },
  onUnload: function () {
    clearInterval(this.updateInterval)
  },
  // onShow:function(){
  //   var that = this
    
  //     wx.request({
  //       url: 'http://120.27.93.97/weappserver/get_music.php',
  //       data: {
  //         mid: getApp().globalData.playing.mid
  //       },
  //       header: {
  //           'Content-Type': 'text/html;charset=utf-8'
  //       },
  //       success: function(res) {
  //         console.log(res.data)
  //         var obj=that.data.playBar
  //         obj['coverImgUrl']='http:'+res.data
  //         that.setData({
  //           playBar:obj
  //         })
  //       }
  //     })
  //     that.setData({
  //       playing: true,
  //       playBar: getApp().globalData.playing
  //     })
  // }
}

 for (var i = 0; i < items.length; ++i) {
   (function(itemName) {
     switch(itemName){
       case '播放列表':
          pageObject['bind' + itemName] = function(e) {
          console.log('click' + itemName, e)
          this.setData({
            musicGroupName:itemName,
            listTemplateName:'music-play-list',
            templateData:null,
            actionSheetHidden: !this.data.actionSheetHidden
          })
        }
       break;

       case '歌曲':
          pageObject['bind' + itemName] = function(e) {
          console.log('click' + itemName, e)
          this.setData({
            musicGroupName:itemName,
            listTemplateName:'songs-list',
            templateData:_songsList,
            actionSheetHidden: !this.data.actionSheetHidden
          })
        }
       break;

       case '专辑':
          pageObject['bind' + itemName] = function(e) {
          console.log('click' + itemName, e)
          this.setData({
            musicGroupName:itemName,
            listTemplateName:'album-list',
            templateData:_albumList,
            actionSheetHidden: !this.data.actionSheetHidden
          })
        }
       break;

       case '演唱者':
          pageObject['bind' + itemName] = function(e) {
          console.log('click' + itemName, e)
          this.setData({
            musicGroupName:itemName,
            listTemplateName:'singer-list',
            templateData:null,
            actionSheetHidden: !this.data.actionSheetHidden
          })
        }
       break;
     }

   })(items[i])
 }



Page(pageObject)