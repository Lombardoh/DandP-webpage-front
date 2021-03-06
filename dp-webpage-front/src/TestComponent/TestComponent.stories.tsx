import React from 'react';
import TestComponent from '.';

export default {
    title: 'path/to/TestComponent',
    Component: TestComponent,
};

export const TestComponentStorie = (args:{
    text: string;
    onClick: Function;
    disabled?: boolean;
}) => (
    <TestComponent 
        text={args.text}
        disabled={args.disabled}
    />
);

TestComponentStorie.argTypes = {
    text: {control: 'text'},
    disabled: {control: 'boolean'}
}

TestComponentStorie.args ={
    text: 'Test text',
    onClick: () => alert('hello there'),
    disabled: false,
}