import { shallowMount } from '@vue/test-utils'
import HomePage from '@/components/HomePage.vue'
import store from '@/store/index.ts'

describe('Method Tests', () => {
    const wrapper = shallowMount(HomePage, {
      stubs: ['router-link'],
      data() {
          return {
        get userData(){
            return {
              name: store.state.user.name,
              pfp: store.state.user.pfp,
            }},
            page: 1,
            pageCount: 2,
          }
        }
      });

    it('Page system works', () => {
        expect(wrapper.vm.page).toBe(1)
        wrapper.vm.lastPage()
        expect(wrapper.vm.page).toBe(1)
        wrapper.vm.nextPage()
        expect(wrapper.vm.page).toBe(2)
        wrapper.vm.nextPage()
        expect(wrapper.vm.page).toBe(2)
        wrapper.vm.lastPage()
        expect(wrapper.vm.page).toBe(1)
    }),
    it('Sending messages works', () => {
        wrapper.vm.writtenMessage = "I greet thee."
        wrapper.vm.channelIndex = 0
        wrapper.vm.sendMessage()
        expect(store.state.messages[0][0]).toStrictEqual({name: "Guest", pfp: "https://3.bp.blogspot.com/-UI5bnoLTRAE/VuU18_s6bRI/AAAAAAAADGA/uafLtb4ICCEK8iO3NOh1C_Clh86GajUkw/s1600/guest.png", message: "I greet thee."})
        expect(wrapper.vm.pageCount).toBe(2)
        wrapper.vm.channelIndex = 1
        wrapper.vm.writtenMessage = "I greet thee."
        wrapper.vm.sendMessage()
        expect(store.state.messages[1][0]).toStrictEqual({name: "Guest", pfp: "https://3.bp.blogspot.com/-UI5bnoLTRAE/VuU18_s6bRI/AAAAAAAADGA/uafLtb4ICCEK8iO3NOh1C_Clh86GajUkw/s1600/guest.png", message: "I greet thee."})
        wrapper.vm.channelIndex = 2
        wrapper.vm.sendMessage()
        expect(store.state.messages[2][0]).toStrictEqual({name: "UFHheakif", pfp: "https://thumbs.dreamstime.com/z/cyber-woman-corn-11556261.jpg", message: "Hi. (sorry for bad english)"})
    }),
    it('Changing channels works', () => {
        wrapper.vm.changeChannelIndex(4)
        expect(wrapper.vm.channelIndex).toBe(4)
        expect(wrapper.vm.page).toBe(1)
    })
})