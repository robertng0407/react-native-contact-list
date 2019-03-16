import React, {Component} from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

import ContactThumbnail from '../components/ContactThumbnail';
import DetailListItem from '../components/DetailListItem';

import {fetchRandomContact} from '../utils/api';

import colors from '../utils/colors';