import React from 'react'
import styled from 'styled-components'
import Title from 'modules/home/components/Title'
import colors from 'common/mixins/colors'

const PanelContainer = styled.div`
    padding: 5% 0;
    text-align: center;
    background-color: ${colors.red};
`

const Speakers = props => (
    <PanelContainer>
        <Title title="Speakers" color={colors.white} />
    </PanelContainer>
)

export default Speakers