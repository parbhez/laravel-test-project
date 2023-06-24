import './bootstrap';

import Alpine from 'alpinejs';

import {
    Input,
    Collapse,
    Ripple,
    initTE,
} from "tw-elements";

initTE({ Input, Collapse, Ripple });
window.Alpine = Alpine;

Alpine.start();