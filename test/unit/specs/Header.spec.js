import { mount, RouterLinkStub } from '@vue/test-utils'
import Header from '@/components/common/Header'

describe('Header.vue', () => {
  it('should render correct contents', () => {
    const wrapper = mount(Header, {
        stubs: {
            RouterLink: RouterLinkStub
        }
    })

    expect(wrapper.findAllComponents(RouterLinkStub).at(0).props().to).toBe('/')
    expect(wrapper.findAllComponents(RouterLinkStub).at(0).text()).toBe('top')
    expect(wrapper.findAllComponents(RouterLinkStub).at(1).props().to).toBe('/sample')
    expect(wrapper.findAllComponents(RouterLinkStub).at(1).text()).toBe('sample')
  })
})
