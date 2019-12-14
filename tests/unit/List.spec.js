import { mount } from '@vue/test-utils'
import List from "../../src/components/List.vue";

describe('List content is empty', () => {
    const wrapper = mount(List, {
        propsData: {
            list: []
        }
    })

    it('Check text when to do list is empty', () => {
        const h3 = wrapper.find('h3')
        expect(h3.text()).toEqual("Add your first Todo task")
    })
});

describe('List content is NOT empty', () => {
    const wrapper = mount(List, {
        propsData: {
            list: ["fakeContent"]
        }
    })

    it('Check text when to do list is NOT empty', () => {
        const h3 = wrapper.find('h3');
        expect(h3.exists()).toBe(false);
    })
});