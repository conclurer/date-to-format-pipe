import { PipeTransform } from '@angular/core';
export declare class DateToFormat implements PipeTransform {
    transform(value: string, targetFormat: string): string;
}
