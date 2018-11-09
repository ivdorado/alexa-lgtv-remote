/* @flow */
'use strict';

import {
    TurnDeviceOn,
    TurnDeviceOff,
    SwitchDeviceMute,
    SwitchDeviceUnmute,
    LaunchDeviceApp,
    SwitchDeviceInput,
    ControlDeviceMediaPlay,
    ControlDeviceMediaPause,
    ControlDeviceMediaStop,
    AmazonHelp,
    AmazonStop,
    AmazonCancel,
    SetVolume,
    SetVolumeUp,
    SetVolumeDown
} from './dispatcher';

import alexa from 'alexa-app';
const app = new alexa.app('lgtv-remote');
var i18next = require('./i18next');



app.intent('TurnDeviceOn', {
    'slots': {},
    'utterances': i18next.t('TurnDeviceOnUtterances', { returnObjects: true })
}, TurnDeviceOn);

app.intent('TurnDeviceOff', {
    'slots': {},
    'utterances': i18next.t('TurnDeviceOffUtterances', { returnObjects: true })
}, TurnDeviceOff);

app.intent('SwitchDeviceMute', {
    'slots': {},
    'utterances': i18next.t('SwitchDeviceMuteUtterances', { returnObjects: true })
}, SwitchDeviceMute);

app.intent('SwitchDeviceUnmute', {
    'slots': {},
    'utterances': i18next.t('SwitchDeviceUnmuteUtterances', { returnObjects: true })
}, SwitchDeviceUnmute);

app.intent('SetVolumeUp', {
    'slots': {},
    'utterances': i18next.t('SetVolumeUpUtterances', { returnObjects: true })
}, SetVolumeUp);

app.intent('SetVolumeDown', {
    'slots': {},
    'utterances': i18next.t('SetVolumeDownUtterances', { returnObjects: true })
}, SetVolumeDown);

app.intent('SetVolume', {
    'slots': {
        'volume_level': 'AMAZON.NUMBER'
    },
    'utterances': i18next.t('SetVolumeUtterances', { returnObjects: true })
}, SetVolume);

app.intent('LaunchDeviceApp', {
    'slots': {
        'app_id': 'APP_IDS'
    },
    'utterances': i18next.t('LaunchDeviceAppUtterances', { returnObjects: true })
}, LaunchDeviceApp);

app.intent('SwitchDeviceInput', {
    'slots': {
        'input_id': 'INPUT_IDS'
    },
    'utterances': i18next.t('SwitchDeviceInputUtterances', { returnObjects: true })
}, SwitchDeviceInput);

app.intent('ControlDeviceMediaPlay', {
    'slots': {},
    'utterances': i18next.t('ControlDeviceMediaPlayUtterances', { returnObjects: true })
}, ControlDeviceMediaPlay);

app.intent('ControlDeviceMediaPause', {
    'slots': {},
    'utterances': i18next.t('ControlDeviceMediaPauseUtterances', { returnObjects: true })
}, ControlDeviceMediaPause);

app.intent('ControlDeviceMediaStop', {
    'slots': {},
    'utterances': i18next.t('ControlDeviceMediaStopUtterances', { returnObjects: true })
}, ControlDeviceMediaStop);

app.intent('AMAZON.HelpIntent', {
    'slots': {},
    'utterances': []
}, AmazonHelp);

app.intent('AMAZON.StopIntent', {
    'slots': {},
    'utterances': []
}, AmazonStop);

app.intent('AMAZON.CancelIntent', {
    'slots': {},
    'utterances': []
}, AmazonCancel);

export default app;
