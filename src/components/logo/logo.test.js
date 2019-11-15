import React from 'react'
import ReactDOM from "react-dom";
import { shallow } from '../../../spec/helpers/enzyme'
import { findTestAtrr } from '../../../spec/utils'
import Logo from './index'

const setUp = (props={})=>{
  const component = shallow(<Logo />)
  return component;
}



describe("Logo", function() {
    let component;

  beforeEach(()=>{
    component = setUp()
  })

    it("should render without errors", function() {
      const wrapper = findTestAtrr(component,'logo-wrapper')
      expect(wrapper.length).toBe(1)
    });
    it('should render a logo image', ()=>{
      const wrapper = findTestAtrr(component,'logo')
      expect(wrapper.length).toBe(1)
    })


  });  