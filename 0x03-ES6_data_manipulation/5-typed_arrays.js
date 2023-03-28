export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw Error('Position outside range');
  }

  //   create a buffer for the array
  const buffer = new ArrayBuffer(length);

  // create the typed array of type int8
  const int8 = new Int8Array(buffer, 0, length);

  // set the given value at the given position
  int8.set([value], position);

  // create a dataview for assessing the data from the typed array
  return new DataView(buffer);
}
