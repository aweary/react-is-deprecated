# react-is-deprecated

> Add an `isDeprecated` to your React PropTypes.


## Install

```
$ npm install --save react-is-deprecated
```


## Usage

```js
import React from 'react';
import addIsDeprecated from 'react-is-deprecated';
const PropTypes = addIsDeprecated(React.PropTypes);

export default class SomeComponent extends React.Component {
  static propTypes = {
    deprecated: PropTypes.string.isDeprecated(`'deprecated' is deprecated, please use 'notDeprecated.'`),
    notDeprecated: PropTypes.string
  }
}
```


## API

### `addIsDeprecated(input: React.Proptypes)`

Returns an augmented version of `React.PropTypes` with `isDeprecated` added to all top level properties.

### `React.PropTypes.[type].isDeprecated(message: string)`
Returns the `[type]` it is called on and uses `console.warn` to log out the `message`.

## License

MIT © Brandon Dail
