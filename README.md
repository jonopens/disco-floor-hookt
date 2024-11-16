# A BRAND NEW, MODERN VERSION OF DISCO-FLOOR 

Just when you thought "Wait, there was a first version?", I bring you a second one!

## Goals

- diff patterns to dispatch changes as diffs -> don't just update the entire floor
  - a pattern is a base 2d array + diffs 
  - a diff is a Map<address, value> e.g. Map{0:5 -> 5}

- an actual mobile design - breakpoints as far as the eye can see!
- hooks all over
- context and zustand and such - no MobX this time around
- niftier color selection - an actual picker with RGBA
- no Webpack! because I hate it! :thumbsup: :wave:

## Stretch Goals

- tile level controls
- a transition mode toggle to ease between tile diffs
- happy path tests with playwright?!
- actual unit tests?!
