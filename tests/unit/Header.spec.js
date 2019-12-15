import { mount } from '@vue/test-utils'
import Header from "../../src/components/Header.vue";

describe('Check date of today', () => {
    const wrapper = mount(Header)
    let today_date = new Date();

    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',	'November', 'December'];
    let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    function uppercase(value){
        return value.toUpperCase()
    }
    function abbreviate(value){
        return value.slice(0,3)
    }

    it('Checks default shown year is todays year', () => {
        const years_text = wrapper.find('.date div h4:last-of-type').text();
        const todays_year = today_date.getFullYear().toString()
        expect(years_text).toEqual(todays_year);
    })

    it('Checks default shown month is todays month', () => {
        const month_text = wrapper.find('.date div h4:first-of-type').text();
        const todays_month = abbreviate(uppercase(months[today_date.getMonth()]))
        expect(month_text).toEqual(todays_month);
    })

    it('Checks default shown weekday is todays weekday', () => {
        // TODO: Ask Tsotne why wrapper.find('.container h4').text() does not work
        const weekday_text = wrapper.findAll('.container h4').at(2).text();
        const todays_weekday = uppercase(weekdays[today_date.getDay()])
        expect(weekday_text).toEqual(todays_weekday);
    })

    it('Checks default shown day is todays day', () => {
        const day_text = wrapper.find('.container .date h1').text();
        let todays_day = today_date.getDate();
        todays_day = todays_day < 10 ?  `0${todays_day}` : todays_day.toString()
        expect(day_text).toEqual(todays_day);
    })
});
