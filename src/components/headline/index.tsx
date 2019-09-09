import React from 'react'
import PropTypes from 'prop-types'

export default class Headline extends React.Component<Props> {

    static propTypes = {
        header: PropTypes.string,
        desc: PropTypes.string,
        tempArr: PropTypes.arrayOf(PropTypes.shape({
            fName: PropTypes.string,
            lName: PropTypes.string,
            email: PropTypes.string,
            age: PropTypes.number,
            onlineStatus: PropTypes.bool
        }))
    }

    render() {

        const { header, desc } = this.props

        if (!header) {
            return null
        }

        return (
            <div data-test="HeadlineComponent">
                <h1 data-test="header">{header}</h1>
                <p data-test="desc">
                    {desc}
                </p>
            </div>
        )
    }

}

interface Props {
    header: string
    desc: string
    tempArr: {
        fName: string
        lName: string
        email: string
        age: number
        onlineStatus: boolean
    }[]
}