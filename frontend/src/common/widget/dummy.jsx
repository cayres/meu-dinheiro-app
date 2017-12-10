import React from 'react'

export default(props) => {
    if (props.match.params.name == 'tabList')
        return ''
    return (
        <div>
            <h3>{`Dummy ${props.match.params.name} `}</h3>
        </div>
    )
}
