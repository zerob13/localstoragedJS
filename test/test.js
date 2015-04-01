casper.test.begin('ls2js-test', 1, function(test) {

  casper.start('http://127.0.0.1:9000/', function() {
    this.echo(this.getTitle());
  });
  casper.then(
    function() {
      test.assert(this.evaluate(function() {
        return window._lss;
      }) instanceof Object, '是否存在_lss对象');
    }
  );

});


casper.run();
