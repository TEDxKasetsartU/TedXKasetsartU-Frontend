import React from 'react'
import styled from 'styled-components'

const Player = styled.iframe`
    
`

const YoutubePlayer = props => (
    <iframe width="560" height="315" src="https://www.youtube.com/embed/Ir9FDjHe92U" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen />
)

export default YoutubePlayer