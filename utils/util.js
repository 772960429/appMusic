
function formatTime(time) {
  if (typeof time !== 'number' || time < 0) {
    return time
  }

  var hour = parseInt(time / 3600)
  time = time % 3600
  var minute = parseInt(time / 60)
  time = time % 60
  var second = time

  return ([hour, minute, second]).map(function (n) {
    n = n.toString()
    return n[1] ? n : '0' + n
  }).join(':')
}

function playMusic(animationContext) {
  animationContext = wx.createAnimation({
    duration: 100,
    timingFunction: 'linear'
  })
  return animationContext
}

module.exports = {
  formatTime: formatTime,
  playMusic: playMusic
}
