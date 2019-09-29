import React from 'react';
import { action } from '@storybook/addon-actions';

import Background from '../components/Background';
import Btn, { BtnMouseDetect } from '../components/Btn'

export default {
    title: 'Btn',
};

export const Basic = () => (
    <Background center>
        <Btn onClick={action('clicked')} label="Hello Button" />
    </Background>
);

Basic.story = {
    name: 'Basic',
};

export const Disabled = () => (
    <Background center>
        <Btn onClick={action('clicked')} label="Hello Button" disabled={true} />
    </Background>
);

Disabled.story = {
    name: 'Disabled',
};

export const Dense = () => (
    <Background center>
        <Btn onClick={action('clicked')} label="Hello Button" dense />
    </Background>
);

Dense.story = {
    name: 'Dense',
};

export const Color = () => (
    <Background center>
        <Btn onClick={action('clicked')} label="Hello Button" color="#e91e63" />
    </Background>
);

Color.story = {
    name: 'Color',
};

export const Invert = () => (
    <Background center color="#dedede">
        <Btn onClick={action('clicked')} label="Hello Button" invert />
    </Background>
);

Invert.story = {
    name: 'Invert',
};

export const Icon = () => (
    <Background center>
        <Btn onClick={action('clicked')} dense icon>
            <img src="./img/Btn/react-logo.svg" alt="react-logo" width="32" height="32"/>
        </Btn>
    </Background>
);

Icon.story = {
    name: 'Icon Dense',
};

export const Children = () => (
    <Background center>
        <Btn onClick={action('clicked')} label="Hello Button" style={{ flexDirection: 'column', alignItems: 'center' }} >
            <img src="./img/Btn/react-logo.svg" alt="react-logo" width="100" style={{ marginBottom: '15px' }}/>
            Children Text
        </Btn>
    </Background>
);

Children.story = {
    name: 'Children + Label',
};

export const MouseDetect = () => (
    <Background center>
        <BtnMouseDetect onClick={action('clicked')} label="Hello Button" />
    </Background>
);

MouseDetect.story = {
    name: 'Mouse Detect',
};
