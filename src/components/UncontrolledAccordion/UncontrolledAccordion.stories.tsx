import React, {useState} from 'react';
import UncontrolledAccordion from './UncontrolledAccordion';
import {action} from "@storybook/addon-actions";

export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,
}

const callback = action('Accordion mode change event fired');

// export const MenuCollapsedMode = () => <UncontrolledAccordion titleValue={'Menu'} />;

export const ModeChanging = () => {
    return <UncontrolledAccordion titleValue={'Users'} />
};