import React from 'react'
import styled from 'styled-components';

const StyledBox = styled.div`
    border: 2px solid lightgray;
    background: ${props => props.bgColor};
    width: ${props => props.width || '100px'};
    height: ${props => props.height || '100px'};
    display: inline-block;
`;
export const Cubo = ({cubos}) => {
    
    const creatBox = (cubo, index) =><StyledBox key = {index} bgColor={cubo.color} width={cubo.dimensions} height={cubo.dimensions}></StyledBox>
    return (
        <>
            {cubos.map((cubo , index) => creatBox(cubo , index))}
        </>
    )
}
