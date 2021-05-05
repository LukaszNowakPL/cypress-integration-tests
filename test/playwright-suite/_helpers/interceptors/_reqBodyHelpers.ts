import {differenceWith, isEqual} from 'lodash';
import {Request} from "playwright";

export const isBodySame = (expectedData: any, req: Request): boolean => {
    const dataKeys = Object.keys(expectedData);
    return areSameKeys(dataKeys, req) && dataKeys.every(key => areSameValues(expectedData[key], req, key));
};

const areSameKeys = (dataKeys: string[], req: Request): boolean => {
    // @ts-ignore
    const diff = differenceWith(Object.keys(req.postDataJSON()), dataKeys, isEqual);
    if (diff.length === 0) {
        return true;
    } else {
        console.error(
            `Found uncovered req.body element of ${req.method()} request to ${req.url()}\nBody elements didn't set on a handler: ${diff}`,
        );
        return false;
    }
};

const areSameValues = (expectedData: any, req: Request, key: string): boolean => {
    if (Array.isArray(expectedData)) {
        return areSameArrayValues(expectedData, req, key);
    } else {
        return areSameBasicValues(expectedData, req, key);
    }
};

const areSameArrayValues = (expectedData: any, req: Request, key: string): boolean => {
    // @ts-ignore
    const data = req.postDataJSON()[key];

    if (differenceWith(expectedData, data, isEqual).length === 0 && differenceWith(data, expectedData, isEqual).length === 0) {
        return true;
    } else {
        printError(expectedData, req, key);
        return false;
    }
};

const areSameBasicValues = (expectedData: any, req: Request, key: string): boolean => {
    // @ts-ignore
    const data = req.postDataJSON()[key];

    if (expectedData === data) {
        return true;
    } else {
        printError(expectedData, req, key);
        return false;
    }
};

const printError = (expectedData: any, req: Request, key: string): void => {
    // @ts-ignore
    const data = req.postDataJSON()[key];

    console.error(
        `Found unmatched body element of ${req.method()} request to ${
            req.url()
        }\nkey: ${key}\nexpected data: ${expectedData}\nreceived data: ${data}`,
    );
};
