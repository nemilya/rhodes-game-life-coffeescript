Игра Жизнь на базе фреймворка Rhodes
====================================

Пример JavaScript производительности.

Алгоритм Игры Жизнь (класс) `public/js/game_life.js` взято из проекта
https://github.com/nemilya/coffeescript-game-life 
(алгоритм реализован на CoffeeScript скомпилирован в JS)

Методы прописаны в `public/js/application.js`:

```html
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
```


Библиотека и `application.js` загружаются в `app/layout.erb`

```html
<script src="/public/js/game_life.js" type="text/javascript"></script>
<script src="/public/js/application.js" type="text/javascript"></script>
```


Контроллер обрабатывает '/app/Game':

```ruby
require 'rho'
require 'rho/rhocontroller'
require 'rho/rhoerror'
require 'helpers/browser_helper'

class GameController < Rho::RhoController
  include BrowserHelper
  
  def index
  end

end
```

Шаблон отображения `index.erb`:

```html
<div data-role="page">

  <div data-role="header" data-position="inline">
    <h1>Game LIFE</h1>
  </div>

  <div data-role="content">


Generation: <span id="generation_num"></span>
<pre id="generation" style="font-family: Courier;">
........................................
........................................
........................................
........................................
........................................
...**..**...***.***..**....**...........
..*...*..*..*...*...*..*..*..*..........
..*...*..*..**..**..***...***...........
..*...*..*..*...*...*.....*.............
...**..**...*...*....**....**......*....
...................................*....
...................................*....
........................................
........................................
........................................
........................................
</pre>

  <button onclick="do_step()" >Step</button>
  <button onclick="do_start()" >Start</button>
  <button onclick="do_stop()" >Stop</button>

  </div>
</div>
```



Сборка Android 4.0:
https://s3.amazonaws.com/rhohub-prod-builds/70a95627e14e410b98b2b2b928d36a87.zip 