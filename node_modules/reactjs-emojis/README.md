# reactjs-emojis

_adds emoji support for reactjs projects_

![node-emoji example](https://i.imgur.com/ihRJPmF.png)

## Installation
To install `reactjs-emojis`, you need [node.js](http://nodejs.org/) and [npm](https://github.com/npm/npm#super-easy-install).

In your project directory, just run
```sh
npm install --save reactjs-emojis
```

## Usage
```javascript
import React from 'react';
import Emoji from 'reactjs-emojis';

function App() {
  return (
    <div >
          <Emoji name="smiley" size="20"/>
          <Emoji name="monkey_face" size="40"/>
          <Emoji name="wink" size="60"/>
          <Emoji name="rolling_on_the_floor_laughing" size="80"/>
          <Emoji name="thinking_face" size="100"/>
    </div>
  );
}

export default App;

```
## Emoji Names
Emoji list come from js-emoji (Thanks guys!!). You can get a JSON file with all emoji here: https://raw.githubusercontent.com/saqy/reactjs-emojis/master/src/components/emoji.json

## License
MIT


