;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-weibo" viewBox="0 0 1000 1000">'+
      ''+
      '<path d="M407.859 574.347c-15.395 1.61-26.392 14.995-26.392 27.765 0 12.799 12.41 21.669 27.719 19.871 15.221-1.762 27.718-13.596 27.718-26.312C436.905 582.782 425.425 572.633 407.859 574.347zM446.197 478.184c-81.6 3.708-147.581 47.4-147.581 101.98 0 54.469 65.981 95.343 147.581 91.562 81.6-3.712 147.736-54.854 147.736-109.274C593.933 508.018 527.796 474.398 446.197 478.184zM501.715 615.269c-24.915 32.244-74.336 48.024-122.438 22.02-22.807-12.378-22.025-36.741-22.025-36.741s-9.447-76.924 72.618-86.526C512.104 504.454 526.785 582.979 501.715 615.269zM446.742 563.765c-5.315 3.871-6.321 11.09-3.516 15.667 2.735 4.604 9.062 5.187 14.296 1.318 5.073-4.021 7.102-11.019 4.368-15.659C459.16 560.563 452.833 559.276 446.742 563.765zM499.997 51.393c-246.834 0-446.896 200.066-446.896 446.896 0 246.875 200.062 446.905 446.896 446.905 246.841 0 446.902-200.03 446.902-446.905C946.899 251.459 746.838 51.393 499.997 51.393zM666.875 598.561c-33.661 71.478-144.543 106.237-226.844 99.796-78.096-6.125-178.508-32.026-188.978-126.664 0 0-5.464-42.746 35.999-98.185 0 0 59.737-83.487 129.389-107.219 69.662-23.703 77.7 16.399 77.7 40.094-3.666 20.107-10.7 31.855 15.457 23.779 0 0 68.494-31.741 96.597-3.599 22.807 22.766 3.753 54.037 3.753 54.037s-9.453 10.398 9.992 14.168C639.311 498.601 700.53 526.947 666.875 598.561zM599.405 401.071c-7.419 0-13.429-6.001-13.429-13.395 0-7.494 6.01-13.547 13.429-13.547 0 0 83.869-15.493 73.871 74.615 0 0.584-0.081 0.98-0.155 1.402-1.091 6.4-6.556 11.323-13.118 11.323-7.579 0-13.589-6.012-13.589-13.396C646.414 448.075 659.692 387.749 599.405 401.071zM741.212 463.892h-0.075c-2.264 32.577-9.837 21.163-18.898 21.163-10.773 0-19.365-5.382-19.365-16.248 0-9.331 3.821-17.207 3.821-17.207 1.092-3.908 10.309-27.576-6.004-64.157-29.839-50.082-89.96-50.405-97.069-47.513-7.027 2.763-17.727 4.416-17.727 4.416-10.774 0-19.519-8.669-19.519-19.366 0-9.066 5.93-16.482 14.21-18.828 0 0 0.23-0.024 0.545-0.115 0.546-0.109 1.173-0.233 1.873-0.307 8.281-1.563 38.109-13.002 67.162-6.216C702.086 311.584 773.236 366.548 741.212 463.892z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-github" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M64 524C64 719.602 189.356 885.926 364.113 947.017 387.65799 953 384 936.115 384 924.767L384 847.107C248.118 863.007 242.674 773.052 233.5 758.001 215 726.501 171.5 718.501 184.5 703.501 215.5 687.501 247 707.501 283.5 761.501 309.956 800.642 361.366 794.075 387.658 787.497 393.403 763.997 405.637 743.042 422.353 726.638 281.774 701.609 223 615.67 223 513.5 223 464.053 239.322 418.406 271.465 381.627 251.142 320.928 273.421 269.19 276.337 261.415 334.458 256.131 394.888 302.993 399.549 306.685 432.663 297.835 470.341 293 512.5 293 554.924 293 592.81 297.896 626.075 306.853 637.426 298.219 693.46 258.054 747.5 262.966 750.382 270.652 772.185 321.292 753.058 381.083 785.516 417.956 802 463.809 802 513.5 802 615.874 742.99 701.953 601.803 726.786 625.381 750.003 640 782.295 640 818.008L640 930.653C640.752 939.626 640 948.664978 655.086 948.665 832.344 888.962 960 721.389 960 524 960 276.576 759.424 76 512 76 264.577 76 64 276.576 64 524Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
