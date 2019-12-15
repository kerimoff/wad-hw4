
import { mount } from '@vue/test-utils'
import Footer from "../../src/components/Footer.vue";

describe('value of open property in default state', () => {
    const wrapper = mount(Footer)
    
    it('check that input tag exists after click event', async()=> {
        wrapper.find('.container div span').trigger('click')
       
        await wrapper.vm.$nextTick()
        
        let inputTag= wrapper.find('.container input')
        
        expect(inputTag.exists()).toBe(true)
    })
});
