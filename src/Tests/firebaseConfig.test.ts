/* eslint-disable @typescript-eslint/no-unused-vars */
jest.mock('firebase/app', () => ({
    initializeApp: jest.fn().mockReturnValue({}),
}));

jest.mock('firebase/analytics', () => ({
    getAnalytics: jest.fn(),
}));

import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebaseConfig';

describe('Firebase Initialization', () => {
    it('initializes Firebase app and analytics without error', () => {
        expect(() => {
            const app = initializeApp(firebaseConfig);
            const analytics = getAnalytics(app);
        }).not.toThrow();
    });
});
