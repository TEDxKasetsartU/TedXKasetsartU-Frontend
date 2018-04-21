import styled from 'styled-components'

export default styled.div`
    overflow-x: scroll;
    overflow-y: hidden;
    max-width: 100%;
    white-space: nowrap;
    ::-webkit-scrollbar {
        width: 0.5em;
    }
    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.color};
    }
`
