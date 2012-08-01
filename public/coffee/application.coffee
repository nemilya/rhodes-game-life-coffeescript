game = new GameLife({empty_cell:'.', live_cell:'*'})
generation_number = 1
nonstop = false

this.do_step =->
  game.set_generation($('#generation').html())
  game.do_step()

  generation_number += 1
  show_generation_number(generation_number)

  new_generation = game.screen()
  $('#generation').html(new_generation)

  setTimeout(do_step, 100) if nonstop

this.do_start =->
  nonstop = true
  do_step()

this.do_stop =->
  nonstop = false

this.show_generation_number = (number) ->
  $('#generation_num').html(number)
