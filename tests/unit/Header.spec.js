import { mount } from '@vue/test-utils'
import Header from "../../src/components/Header.vue";

describe('Check date of today', () => {
    const wrapper = mount(Header)
    let today_date = new Date();

    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',	'November', 'December'];
    function uppercase(value){
        return value.toUpperCase()
    }
    function abbreviate(value){
        return value.slice(0,3)
    }

    it('Checks defualt shown year is todays year', () => {
        const years_text = wrapper.find('.date div h4:last-of-type').text();
        const todays_year = today_date.getFullYear().toString()
        expect(years_text).toEqual(todays_year);
    })

    it('Checks defualt shown year is todays month', () => {
        const month_text = wrapper.find('.date div h4:first-of-type').text();
        const todays_month = abbreviate(uppercase(months[today_date.getMonth()]))
        expect(month_text).toEqual(todays_month);
    })
});
