/* eslint-disable react/prop-types */
import React from 'react';
import { Meta, Story } from '@storybook/react';

import Component from './SelectFile';

export default {
    title: 'Components/Select File',
    component: Component,
    parameters: {
        layout: 'centered',
    },
} as Meta;

export const SelectFile: Story<{ onComplete: () => void }> = ({ onComplete }) => (
    <Component initialState={undefined} onComplete={onComplete} />
);
SelectFile.argTypes = {
    onComplete: { action: 'completed' },
};
