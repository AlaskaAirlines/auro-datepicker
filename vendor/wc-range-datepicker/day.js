import { format } from 'date-fns';
export class Day {
    constructor(date) {
        this.date = parseInt(format(date, 't'), 10);
        this.title = parseInt(format(date, 'd'), 10);
    }
}
//# sourceMappingURL=day.js.map