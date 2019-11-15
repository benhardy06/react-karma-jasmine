import React from 'react';
import { shallow } from '../../../spec/helpers/enzyme'
import { findTestAtrr } from '../../../spec/utils'
import MenuNav from './index'

const setUp = (props={})=>{
    const component = shallow(<MenuNav />)
    return component;
  }


  describe("Menu Navigation", ()=>{
      let component;
      beforeEach(()=>{
        component = setUp()
      })

      it("should render without error", ()=>{
          let wrapper = findTestAtrr(component, 'navigation')
          expect(wrapper.length).toBe(1)
      })
  })