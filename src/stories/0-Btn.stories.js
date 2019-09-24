import React from 'react';
import { action } from '@storybook/addon-actions';

import Background from '../components/Background';
import Btn from '../components/Btn'

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
        <Btn onClick={action('clicked')} dense >
            <img src="./img/Btn/react-logo.svg" alt="react-logo" width="42"/>
        </Btn>
    </Background>
);

Icon.story = {
    name: 'Icon',
};

export const Children = () => (
    <Background center>
        <Btn onClick={action('clicked')} label="Hello Button" >
            <img src="./img/Btn/react-logo.svg" alt="react-logo"/>
            Children Text
        </Btn>
    </Background>
);

Children.story = {
    name: 'Children + Label',
};
