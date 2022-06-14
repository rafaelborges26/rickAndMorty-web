import  React, { SelectHTMLAttributes, useMemo } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { ISelectProps } from './interface';
import { Container, Triangle } from './styles';

export const Select: React.FC<ISelectProps> = ({ multiselect, name, ...rest }) => {
    return (
        <Container multiselect={multiselect}>
            <label>{name}</label>
            <select 
                {...rest}
            />
            <Triangle />
        </Container>
    )
}