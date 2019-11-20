import checkPropTypes from 'check-prop-types'
export const findTestAtrr = (component,attr)=>{
  // if(component==null){
  //   return []
  // }
    const wrapper = component.find(`[data-test='${attr}']`)

    return wrapper;
  }

export const checkProps = (component, expectedProps)=>{
  const propsError = checkPropTypes(component.propTypes, expectedProps, 'prop', component.name)
  return propsError
}