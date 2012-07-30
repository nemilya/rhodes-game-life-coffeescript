var game = new GameLife({empty_cell:'.', live_cell:'*'});
var generation = 0;
var start = false;

function do_step(){
  game.set_generation($('#generation').html());
  game.do_step();

  generation += 1;
  show_generation();
  new_generation = game.screen();
  $('#generation').html(new_generation);

  if (start) {
    setTimeout(do_step, 100);
  }
}

function do_start(){
  start = true;
  do_step();
}

function do_stop(){
  start = false;
}

function show_generation(){
  var generation_num = document.getElementById('generation_num');
  generation_num.innerHTML = generation;
}
