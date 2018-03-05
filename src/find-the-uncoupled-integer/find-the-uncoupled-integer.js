function processData(input) {
    var a = input.split(', '),
      i = 0,
      trackIntegers = {},
      key;
    // track appearance of each integer
    for (i = 0; i < a.length; i++) {
      if (trackIntegers['' + a[i] + '']) {
        trackIntegers['' + a[i] + ''] = trackIntegers['' + a[i] + ''] + 1;
      } else {
        trackIntegers['' + a[i] + ''] = 1;
      }
    }
    // return uncoupled integer
    for (key in trackIntegers) {
      if (trackIntegers.hasOwnProperty(key)) {
        if (trackIntegers[key] !== 2) {
          return key;
        }
      }
    }
}

exports.processData = processData;
