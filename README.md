Игра Жизнь на базе фреймворка Rhodes
====================================

Пример `JavaScript` производительности, на базе `CoffeeScript` кода.

Алгоритм Игры Жизнь (класс) `public/coffee/game_life.coffee` взят из проекта
https://github.com/nemilya/coffeescript-game-life 

Методы прописаны в `public/coffee/application.coffee`:

```coffeescript
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
```




Класс `game_life.coffee` и методы `application.coffee` загружаются в `app/layout.erb`

```html
<script src="/public/coffee/game_life.coffee" type="text/coffeescript"></script>
<script src="/public/coffee/application.coffee" type="text/coffeescript"></script>
```

Обратим внимание на `type="text/coffeescript"`.

Предварительно загружается сохранённый локально компилятор `CoffeeScript` 
(согласно http://coffeescript.org/#scripts):

```html
<script src="/public/js/coffee-script.js" type="text/javascript"></script>
```

После загрузки - он обрабатывает все `type="text/coffeescript"`.

Rhodes контроллер обрабатывает '/app/Game':

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
    <h1>GameLife | CoffeeScript</h1>
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
https://s3.amazonaws.com/rhohub-prod-builds/760c9de6d060464face1990df9da41ba.zip

Проверено на "sony ericsson xperia ray", время запуска приложения около 5 секунд.


Скриншот в эмуляторе:

<img scr="https://github.com/nemilya/rhodes-game-life-coffeescript/raw/master/screenshot.png">
