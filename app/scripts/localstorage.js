;
var _lss = (
  function() {
    var lss = {};
    var MAX_LENGTH = 1024 * 15;
    var MAX_ITEMS = Math.ceil((1024 * 1024 * 5) / MAX_LENGTH) - 1;
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
    function splitScript(data){
      
    }
    return lss;
  }
)();
window._lss = _lss;
