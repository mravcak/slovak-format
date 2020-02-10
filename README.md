## About

Library for formatting values and text in Slovak language.

## Summary

| Function     | Example Input | Example Output     |
| :----------- | :------------ | :----------------- |
| number       | `12345.67`    | 12 345,67          |
| currency     | `123.456`     | 123,45`&nbsp;`€    |
| percent      | `0.5`         | 50`&nbsp;`%        |
| numberText   | `12`          | dvanásť            |
| currencyText | `3.02`        | tri eurá dva centy |
| percentText  | `0.3`         | tridsať percent    |
| boolText     | `true`        | áno                |
| timeText     | `Date()`      | pol dvanástej      |
| plural       | `3`           | 3 duby             |
| pluralPieces | `2`           | 2 kusy             |
| nbsp         | `"tŕň v oku"` | tŕň v`&nbsp;`oku   |
| quotes       | `"\"ahoj\""`  | „ahoj“             |
| wordbreak    | `"človek"`    | člo`&shy;`vek      |

## Functions

### `number(value)`

Formats a numerical value in Slovak number format. Displays maximum of 2 decimal digits.

| Name  | Type    | Description
| :---- | :------ | :--------
| value | Number  | Numerical value to be formatted

### `currency(value, showCents)`

Formats a numerical value in Slovak currency format.

| Name      | Type    | Default | Description
| :-------- | :------ | :------ | :------
| value     | Number  |         | Numerical value to be formatted
| showCents | Boolean | `true`  | Whether to show cents

### `percent(value, showDecimals)`

Formats a numerical value in Slovak percent format.

| Name         | Type    | Default | Description
| :----------- | :------ | :------ | :------
| value        | Number  |         | Numerical value to be formatted
| showDecimals | Number  | `true`  | Whether to show decimals

### `numberText(value)`

Formats a numerical value in words. Supports up to 10^23.

* `123` becomes `"stodvadsaťtri"`
* `456789` becomes `"štyristopäťdesiatšesťtisícsedemstoosemdesiatdeväť"`

| Name    | Type    | Default | Description
| :------ | :------ | :------ | :---------
| value   | Number  |         | Value to be formatted

### `currencyText(value)`

Formats a numerical value in words as currency.

* `12` becomes `"dvanásť eur"`
* `12.3` becomes `"dvanásť eur tridsať centov"`

| Name    | Type    | Default | Description
| :------ | :------ | :------ | :---------
| value   | Number  |         | Value to be formatted


### `boolText(value, yes, no)`

Represents a value as human readable Boolean.

| Name    | Type    | Default | Description
| :------ | :------ | :------ | :---------
| value   | Any     |         | Value to be represented
| yes     | Boolean | `"áno"` | Label for truthy values
| no      | Boolean | `"nie"` | Label for falsey values

### `timeText(value)`

Outputs approximately formatted time (with five minute granularity). For example:

* `new Date("0 14:24:00")` becomes `"za päť pol tretej"`
* `new Date("0 10:47:00") ` becomes `"tri štvrte na jedenásť"`

| Name    | Type    | Default | Description
| :------ | :------ | :------ | :---------
| value   | Date    |         | Value to be formatted

### `plural(value, forms, options = {})`

| Name    | Type    | Default | Description
| :------ | :------ | :------ | :---------
| value   | Number  |         | Numerical value to be represented
| forms   | Array   |         | Array with up to four plural forms: [0] Singular form, [1] Plural form for 2-3, [2] Plural form for 0 and 4+, [3] Plural form for fractions (e.g. `1.5`). When less then four forms are provided, the last one is used for all the remaining cases. **Example usage:** `["Pes", "Psy", "Psov", "Psa"]`
| options | Object  | { }      | Object with following props: **inclusive:** if the output should contain the provided `value` (default `true`). **separator:** separator put between the `value` and selected plural word (default `" "`). **numberTransformer:** formatting function used on the provided `value` (default `slovakFormat.number()`)

### `pluralPieces(value, options)`

Shortcut for `plural()` function with `["kus", "kusy", "kusov", "kusu"]` provided as forms parameter.

### `nbsp(value)`

Replace spaces with non-breakable spaces (`&nbsp;`) in places where they should be:

* after shord prepositions and conjunctions (a, i, k, o, s, u, v, z)
* inside long grouped numbers (e.g. 150 000)
* after ordinal numbers (e.g. 5. ročník)

| Name    | Type    | Default | Description
| :------ | :------ | :------ | :---------
| value   | String  |         | Text to be processed

### `wordbreak(value)`

Insert soft hyphens (`&shy;`) into words at syllable divisions, to allow breaking of longer words. Particularly useful with `text-align: justify;` or in narrow columns.

| Name    | Type    | Default | Description
| :------ | :------ | :------ | :---------
| value   | String  |         | Text to be processed

### `quotes(value)`

Replace single and double quotes with approprieate typographic quotes.

* "Ahoj" => „Ahoj“
* 'Ahoj' => ‚Ahoj‘

| Name    | Type    | Default | Description
| :------ | :------ | :------ | :---------
| value   | String  |         | Text to be processed

## Usage

### As module

```js
// import only what you need
import { currency } from 'path/to/slovak-format'
const result = currency(123.45) // '123,45 €'
```

### In Vue.js as a global method (Vue 2, Vue 3)

main.js:

```js
import { currency } from 'path/to/slovak-format'
Vue.prototype.$formatCurrency = currency
```

Your component template:

```html
<template>
  <div>{{ $formatCurrency(value) }}</div>
</template>
```

Or anywhere else:

```js
computed: {
  formattedValue() {
    return this.$formatCurrency(this.value)
  }
}
```

### In Vue.js component


```js
import { currency } from 'path/to/slovak-format'

export default {
  computed: {
    formattedValue() {
      return currency(this.value)
    }
  }
}
```

### In React component

```js
import { currency } from 'path/to/slovak-format'

class Example extends React.Component {
  render() {
    return <div>{currency(this.props.name)}</div>
  }
}
```
