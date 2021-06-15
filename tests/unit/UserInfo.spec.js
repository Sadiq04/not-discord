import { shallowMount } from '@vue/test-utils'
import UserInfo from '@/views/UserInfo.vue'
import store from '@/store/index.ts'

describe('Method Tests', () => {
    const wrapper = shallowMount(UserInfo, {
      stubs: ['router-link'],
      data() {
        return {
            userData: {
                name: store.state.user.name,
                pfp: store.state.user.pfp,
            },
            newData: {
                name: "",
                pfp: "",
            }
        }
    },
      });
      it('Profile info change works', () => {
          wrapper.vm.newData.name = "qwertyuiop"
          wrapper.vm.newData.pfp = "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4560591.jpg"
          wrapper.vm.saveData()
          expect(store.state.user).toStrictEqual({name: "qwertyuiop", pfp: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4560591.jpg"})
          expect(wrapper.vm.userData).toStrictEqual({name: "qwertyuiop", pfp: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4560591.jpg"})
          expect(wrapper.vm.newData).toStrictEqual({name: "", pfp: ""})
          wrapper.vm.newData.name = ""
          wrapper.vm.saveData()
          expect(wrapper.vm.userData.name).toBe("qwertyuiop")
          expect(store.state.user.name).toBe("qwertyuiop")
          wrapper.vm.newData.pfp = ""
          wrapper.vm.saveData()
          expect(wrapper.vm.userData.pfp).toBe("https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4560591.jpg")
          expect(store.state.user.pfp).toBe("https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4560591.jpg")
          wrapper.vm.newData.pfp = "adawaddwad"
          wrapper.vm.saveData()
          expect(wrapper.vm.userData.pfp).toBe("https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4560591.jpg")
          expect(store.state.user.pfp).toBe("https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4560591.jpg")
      })
})