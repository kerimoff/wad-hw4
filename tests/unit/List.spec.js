import { mount } from '@vue/test-utils'
import List from "../../src/components/List.vue";
import Item from "../../src/models/Item"

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

describe('items done property is set correctly', () => {
    let fakeItem = new Item("fakeContent")
    const wrapper = mount(List, {
        propsData: {
            list: [fakeItem]
        }
    })

    it('Check "done" property of item when marked as done', async()=> {
        wrapper.find('.container div span').trigger('click')
        await wrapper.vm.$nextTick()
        expect(wrapper.props('list')[0].done).toBe(true)
    })
});