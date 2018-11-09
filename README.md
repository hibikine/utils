# @hibikine/utils

[![Build Status](https://travis-ci.com/HibikineKage/utils.svg?branch=master)](https://travis-ci.com/HibikineKage/utils)
[![codecov](https://codecov.io/gh/HibikineKage/utils/branch/master/graph/badge.svg)](https://codecov.io/gh/HibikineKage/utils)

Utility functions.

## Install

```bash
yarn add @hibikine/utils # or npm i @hibikine/utils --save
```

## Functions

### `wait()`

```ts
wait(ms: number): Promise<void>
```

#### Discussion

```ts
import { wait } from '@hibikine/utils';

(async () => {
  await wait(2000);
  console.log('Hello!'); // Show after 2 secounds
})();
```

## Develop

```bash
yarn watch
```

## Build

```bash
yarn build
```
