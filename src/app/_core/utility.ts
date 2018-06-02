import * as _ from 'lodash';
import * as moment from 'moment';

export class Utility {

    public static getTotal(data) {
        return data.length;
    }

    public static getMonthlyTotal(data: any, currentMonth) {
        const returnData = _.map(data, (d) => {
            const month = (new Date(d.date).getMonth()) + 1;
            if (month === currentMonth) {
                return d;
            }
        });
        return _.compact(returnData);
    }
}
