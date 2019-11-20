import React from 'react';
import { shallow } from '../../../spec/helpers/enzyme'
import { findTestAtrr } from '../../../spec/utils'
import MenuBar from './index'

const setUp = (props={})=>{
    const component = shallow(<MenuBar />)
    return component;
  }
  describe("Menu Bar", ()=>{
    let component;
    beforeEach(()=>{
        component = setUp()
    })
    it("should render without errors", ()=>{
        let wrapper = findTestAtrr(component, 'menuBar')
        expect(wrapper.length).toBe(1)
    })
    it("should render a logo", ()=>{
        let wrapper = findTestAtrr(component, 'menuLogo')
        expect(wrapper.length).toBe(1)
    })
    it("should render navigation", ()=>{
        let wrapper = findTestAtrr(component, 'menuNav')
        expect(wrapper.length).toBe(1)
    })
  })
  

