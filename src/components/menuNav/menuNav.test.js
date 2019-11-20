import React from 'react';
import {
  shallow
} from '../../../spec/helpers/enzyme'
import {
  findTestAtrr,
  checkProps
} from '../../../spec/utils';
import MenuNav from './index'

const setUp = (props = {}) => {
  const component = shallow( < MenuNav {...props} / > )
  return component;
}


describe("Menu Navigation", () => {
  describe('Checking Proptypes', ()=>{
    it('should not throw an error', ()=>{
      const expectedProps={ 
        links:['test 1', 'test 2']
      }
      expect(checkProps(MenuNav, expectedProps)).toBeUndefined()
    })
  })

  describe('Have Props', () => {
    let component;
    let props = {links:['test 1', 'test 2']}
    beforeEach(() => {
      component = setUp(props)
    })
    it("should render without error", () => {
      let wrapper = findTestAtrr(component, 'navigation')
      expect(wrapper.length).toBe(1)
    })
    it("should render navigation elements", () => {
      let wrapper = findTestAtrr(component, 'navigation-element')

      expect(wrapper.length).toBe(props.links.length)
    })
    it("should handle navigation clicks", () => {
      let wrapper = findTestAtrr(component, 'navigation-element')
      wrapper.map((link, i) => {
        link.simulate('click');
        expect(component.state().selected).toBe(component.state().links[i])
      })
    })
  })
  describe('Have NO Props', () => {
    let component;
    beforeEach(() => {
      component = setUp()
    })
    it("should not render", () => {
      let wrapper = findTestAtrr(component, 'navigation')
      expect(wrapper.length).toBe(0)
    })
  })
})