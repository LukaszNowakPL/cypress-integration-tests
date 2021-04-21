export const getSelectedTab = (pathname: string): number => {
    if (pathname.includes('/countries')) {
        return 1;
    }
    if (pathname.includes('/airports/add')) {
        return 2;
    }

    return 0;
};
