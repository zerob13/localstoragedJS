;
var _lss = (
  function() {
    var lss = {};
    var MAX_LENGTH = 1024 * 15;
    var MAX_ITEMS = Math.ceil((1024 * 1024 * 5) / MAX_LENGTH) - 1;
    var KEY_PREFIX = 'ls2js_';
    console.log('max_l:' + MAX_LENGTH + ' max_items:' + MAX_ITEMS);
    lss.addScript = function(url) {
      $.ajax({
        url: url,
        dataType: 'text',
        success: function(data) {
          console.log(data);
        },
        error: function(xhr, type) {}
      });
    }
   
    function saveToLS(scriptArray,name){

      
    }

    function splitScript(data) {
      var l = data.length;
      var res = [];
      if (l < MAX_LENGTH) {
        res.push(data);
      } else {
        var num = Math.ceil(l / MAX_LENGTH);
        for (i = 0; i < num; i++) {
          if (i == num - 1) {
            res.push(data.substring(i * MAX_LENGTH, l));
          } else {
            res.push(data.substring(i * MAX_LENGTH, (i + 1) * MAX_LENGTH));
          }
        }

      }
      return res;
    }

    return lss;
  }
)();
window._lss = _lss;
