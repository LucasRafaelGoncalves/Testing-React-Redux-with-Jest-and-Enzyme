import { ShallowWrapper } from "enzyme"
import checkPropTypes from 'check-prop-types'

export const findByTestAttr = (component: ShallowWrapper, attr: string) => {
    const wrapper = component.find(`[data-test='${attr}']`)
    return wrapper
}

export const checkProps = (component: ShallowWrapper, expectedProps: any) => {
    const propsErr = checkPropTypes({ ...component, propTypes: {} }.propTypes, expectedProps, 'props', component.name)
    return propsErr
}