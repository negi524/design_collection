import { mount } from '@vue/test-utils'
import GlobalHeader from '@/components/GlobalHeader.vue'

describe('GlobalHeader', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(GlobalHeader, {
      // propsをセット
      propsData: {
        crumbs: [
          { text: 'Home', href: '/' },
          { text: 'Buttons', href: '/buttons' }
        ]
      },
      // nuxt-linkタグをスタブ化
      stubs: ['nuxt-link']
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
