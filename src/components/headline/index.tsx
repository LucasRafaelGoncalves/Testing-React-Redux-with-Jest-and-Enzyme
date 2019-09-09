import React from 'react'

export default class Headline extends React.Component<Props> {

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

export interface Props {
    header: string
    desc: string
}