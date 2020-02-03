
# ClassNames: a utility for managing CSS classes.

## Features
* Add new classes by string or array without having to worry about duplication
* Remove class by name
* Modify an existing class
* Remove class by name

## Get started
npm install zol-class-names

```javascript
import classNames from 'zol-class-names';

// instantiate with no classes, add them later
const classOne = classNames();
// or instantiate with some class names
const classTwo = classNames('guz', 'gez', 'goz');
// add more later as a string
classOne.add('foo bar baz');
// add more later as an array
classOne.add(['bez', 'buz', 'boz']);
// remove a class by name
classOne.remove('buz');
// replace a class by name
classOne.replace('foo', 'fuz');
// get the complete list of class names
classOne.get();
```
