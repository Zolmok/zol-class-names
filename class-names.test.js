/* global describe, expect, it */

import ClassNames from './index';

describe('ClassNames', () => {
  it('should instantiate the list', () => {
    const classTest = ClassNames();

    expect(classTest.get()).toBe('');
  });

  it('should add a class name to the list', () => {
    const testString = 'test-class';
    const classTest = ClassNames(testString);

    expect(classTest.get()).toBe(testString);
  });
  it('should add a class name of type number to the list', () => {
    const testNum = 5;
    const classTest = ClassNames(testNum);

    expect(classTest.get()).toBe(testNum.toString());
  });
  it('should add a class name of type array to the list', () => {
    const testArray = ['test-class', 5];
    const classTest = ClassNames(testArray);

    expect(classTest.get()).toEqual(testArray.join(' '));
  });
  it('should remove a class from the list', () => {
    const testArray = ['class1', 'class2', 'class3'];
    const classTest = ClassNames(testArray);

    classTest.remove('class2');

    expect(classTest.get()).toEqual('class1 class3');
  });
  it('should replace a class in the list', () => {
    const testArray = ['class1', 'class2', 'class3'];
    const classTest = ClassNames(testArray);

    classTest.replace('class2', 'class02');

    expect(classTest.get()).toEqual('class1 class3 class02');
  });
});
