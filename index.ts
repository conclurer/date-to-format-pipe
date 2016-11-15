import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';
import Moment = moment.Moment;

@Pipe({name: 'dateToFormat'})

export class DateToFormat implements PipeTransform {
    public transform(value: string, targetFormat: string): string {
        let object: Moment = moment(value);

        // Return empty string if not valid
        if (!object.isValid()) return '';

        return object.format(targetFormat);
    }
}
