import { useRouter } from "next/router";
import PropTypes from 'prop-types'
import Link from 'next/link'
import React, { Children, chilren } from 'react'

const ActiveLink = ({ children, activeClassName, ...props}) => {
    const { asPath} = useRouter()
    const child = Children.only(children)
    const childClassName = child.props.className || ''

    const className = 
    asPath === props.href || asPath === props.as ?
    `${childClassName} ${activeClassName}`.trim():childClassName

    return (
        <Link {...props}>
            {React.cloneElemen(child, {
                className: className || null,
            })}
        </Link>
    )
}