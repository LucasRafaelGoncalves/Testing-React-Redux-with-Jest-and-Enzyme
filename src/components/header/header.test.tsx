import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import Header from './index'
import { findByTestAttr } from '../../Utils'

const setUp = (props = {}) => {
    const component = shallow(<Header {...props} />)
    return component
}

describe('Header Component', () => {

    let component: ShallowWrapper

    beforeEach(() => {
        component = setUp()
    })

    it('Should render without errors', () => {
        const wrapper = findByTestAttr(component, 'headerComponent')
        expect(wrapper.length).toBe(1)
    })

    it('Should render a logo', () => {
        const logo = findByTestAttr(component, 'logoIMG')
        expect(logo.length).toBe(1)
    })

})