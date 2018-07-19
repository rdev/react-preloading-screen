<p align="center">
	<img alt="logo" title="react-preloading-screen" src="logo.svg" width="250">
</p>
<p align="center"><b>react-preloading-screen</b></p>
<p align="center">Minimal preloading component for React</p>

## About

This is a React component that implements a preloading screen functionality in React. [Demo can be found here](https://react-preloading-screen.now.sh)

## Installation

```bash
npm install --save react-preloading-screen
```
or
```bash
yarn add react-preloading-screen
```

## Usage

Wrap your app in a `Preloader` component and add a `Placeholder` component inside with the content of your preloading screen:

```jsx
import React from 'react';
import { Preloader, Placeholder } from 'react-preloading-screen';

class MyApp extends React.Component {
	<Preloader>
		<h1>Welcome to my app!</h1>
		<h2>It's being preloaded!</h2>
		<Placeholder>
			<span>Loading...</span>
		</Placeholder>
	</Preloader>
}

```

## Props

`Preloader` component supports the following props:

| Prop          | Explanation |
| ------------- | ------------- |
|`fadeDuration` | Amount of time it takes for preloader to fade out (ms)|
|`className`    | Class name passed to preloader `div`
|`style`        | JSX Style object to override preliader styles. _**Keep in mind:** Opacity attribute is used for fade animation._|

## How it works

This component uses `requestAnimationFrame` to check for `document.readyState` and removes overlay once it's complete.

### `requestAnimationFrame` polyfill

For browsers that don't support `requestAnimationFrame` there's a [polyfill](https://github.com/milosdjakonovic/requestAnimationFrame-polyfill) provided that you can import:

```jsx
import 'react-preloading-screen/raf-polyfill';
```

