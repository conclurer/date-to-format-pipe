import 'reflect-metadata';
import test = require('tape');
import Test = test.Test;
import {DateToFormat} from '../';
import * as moment from 'moment';

test('default behavior of pipe', (t: Test) => {
    let i: DateToFormat = new DateToFormat();
    let expected: string = moment('2016-01-09T09:00Z').format('YY-M-D H:m:s');

    t.equals(i.transform('2016-01-09T09:00Z', 'YY-M-D H:m:s'), expected);
    t.end();
});

test('invalid date behavior of pipe', (t: Test) => {
    let i: DateToFormat = new DateToFormat();

    t.equals(i.transform('Invalid Date', '2016-01-09T09:00Z'), '');
    t.end();
});
