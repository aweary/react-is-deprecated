# react-is-deprecated

> Add an `isDeprecated` to your React PropTypes.


## Install

```
$ npm install --save react-is-deprecated
```


## Usage

`react-is-deprecated` provides two options for wrapping `React.PropTypes`. You can use the `deprecate` function (recommended) to wrap a specific type and output a warning
whenever the prop is defined:

```js

static propTypes = {
  deprecated: deprecate(PropTypes.string, `Your message here`)
}

```

If you'd like to have an `isDeprecated` function attached to all `React.PropTypes` options you can use `addIsDeprecated`.

```js

const PropTypes = addIsDeprecated(React.PropTypes);
...
static propTypes = {
  deprecated: PropTypes.object.isDeprecated('Your message here.')
}

```

**Note: `addIsDeprecated` returns a copy of the passed `PropTypes` instance
and does not mutate the `React.PropTypes`. `isDeprecated` will only work on the PropType object returned.**


## API

### `deprecate(propType: React.PropTypes.[type], message: string)`
Returns a function wrapping the `propType` argument with a check to determine if the prop is defined and, if so, log out a warning via `console.warn` once.

### `addIsDeprecated(input: React.PropTypes)`

Returns an augmented version of `React.PropTypes` with `isDeprecated` added to all top level properties.

### `[type].isDeprecated(message: string)`
If you use the `addIsDeprecated` function to return a new copy of `React.PropTypes` then each type will have an `isDeprecated` message.
It is identical to `deprecate` with the exception that it is already
bound to the `[type]` and just accepts the message.

## License

MIT © Brandon Dail
