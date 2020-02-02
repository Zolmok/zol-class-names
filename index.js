/**
 * Handle the manipulation of a list of classes.
 * Will ensure that the list has no duplicates, and takes care
 * of spacing.
 *
 * Usage:
 *
 * const classOne = classNames();
 * const classTwo = classNames('guz', 'gez', 'goz');
 *
 * classOne.add('foo bar baz');
 * classOne.add(['bez', 'buz', 'boz']);
 * classOne.remove('buz');
 * classOne.replace('foo', 'fuz');
 * classOne.get();
 *
 * @param {String|Number|Array} [names] - list of classes
 * @returns {Object} - list of functions available
 */
export default function ClassNames(names) {
  let list = new Set();

  /**
   * Add class names to the set
   *
   * @param {String|Array} names - list of classes
   */
  function add(names) {
    let nameList = [];

    if (typeof names === 'string') {
      nameList = names.split(' ');
    }

    if (typeof names === 'number') {
      nameList.push(names);
    }

    if (Array.isArray(names)) {
      nameList = names;
    }

    for (let i = 0; i < nameList.length; i++) {
      const newName = nameList[i];

      list.add(newName);
    }
  }

  /**
   * @returns {String} - Returns a space seperated list of class names
   */
  function get() {
    return Array.from(list).join(' ');
  }

  /**
   * Remove given class name from the list
   *
   * @param {String} name - name to remove from the list
   */
  function remove(name) {
    list.delete(name);
  }

  /**
   * Replace given class name in the list
   *
   * @param {String} oldName - the name to replace
   * @param {String} newName - the name to replace with
   */
  function replace(oldName, newName) {
    if (list.has(oldName)) {
      remove(oldName);
      add(newName);
    }
  }

  if (names) {
    add(names);
  }

  return {
    'add': add,
    'get': get,
    'remove': remove,
    'replace': replace
  };
}
